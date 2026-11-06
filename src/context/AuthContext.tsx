import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { doc, getDoc, setDoc, deleteDoc, collection, getDocs } from 'firebase/firestore';
import { auth, googleAuthProvider, db, handleFirestoreError, OperationType } from '../lib/firebase';
import { UserProfile, Course } from '../types';
import { initialCourses } from '../data/coursesData';
import { translations, Language } from '../lib/translations';

interface AuthContextType {
  user: User | null;
  userProfile: UserProfile | null;
  loading: boolean;
  isAdmin: boolean;
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof typeof translations.ar) => string;
  courses: Course[];
  addCourse: (course: Course) => Promise<void>;
  deleteCourse: (courseId: string) => Promise<void>;
  updateCourse: (course: Course) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signOutUser: () => Promise<void>;
  loginAsDemoStudent: () => void;
  loginAsDemoAdmin: () => void;
  enrollCourse: (courseId: string) => Promise<void>;
  markLessonComplete: (courseId: string, lessonId: string) => Promise<void>;
  saveQuizScore: (courseId: string, score: number) => Promise<void>;
}

const defaultDemoStudent: UserProfile = {
  uid: 'demo-student-id',
  email: 'student@university.edu.sa',
  displayName: 'أحمد بن عبد الرحمن الأكاديمي',
  role: 'student',
  academicId: 'CS-2026-8841',
  university: 'جامعة المستقبل الأهلية',
  avatarUrl: '',
  enrolledCourseIds: ['html-fundamentals', 'css-responsive', 'javascript-programming'],
  completedLessonIds: ['html-1'],
  quizScores: { 'html-fundamentals': 85 },
  points: 340,
  badges: ['first-step', 'html-master'],
};

const defaultDemoAdmin: UserProfile = {
  uid: 'demo-admin-id',
  email: 'halawaraq2002@gmail.com',
  displayName: 'د. عبد الله المنصور (مشرف أكاديمي)',
  role: 'admin',
  academicId: 'FACULTY-001',
  university: 'جامعة المستقبل الأهلية - عمادة تقنية المعلومات',
  avatarUrl: '',
  enrolledCourseIds: ['html-fundamentals', 'css-responsive', 'javascript-programming', 'react-fundamentals', 'frontend-fullstack'],
  completedLessonIds: ['html-1', 'html-2', 'css-1'],
  quizScores: { 'html-fundamentals': 100, 'css-responsive': 95 },
  points: 1250,
  badges: ['first-step', 'html-master', 'css-designer', 'js-ninja', 'capstone-graduate'],
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(defaultDemoStudent);
  const [loading, setLoading] = useState<boolean>(true);
  const [language, setLanguageState] = useState<Language>('ar');
  const [courses, setCourses] = useState<Course[]>(initialCourses);

  // Sync document direction and language on language change
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  };

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  // Load custom courses from Firestore if available
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'courses'));
        if (!querySnapshot.empty) {
          const firestoreCourses: Course[] = [];
          querySnapshot.forEach((docSnap) => {
            firestoreCourses.push(docSnap.data() as Course);
          });
          // Merge with initialCourses (avoid duplicates)
          const merged = [...initialCourses];
          firestoreCourses.forEach((fc) => {
            const idx = merged.findIndex((m) => m.id === fc.id);
            if (idx >= 0) {
              merged[idx] = fc;
            } else {
              merged.push(fc);
            }
          });
          setCourses(merged);
        }
      } catch (e) {
        console.warn('Note: using local initial courses', e);
      }
    };
    fetchCourses();
  }, []);

  // Sync auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        try {
          const userDocRef = doc(db, 'users', currentUser.uid);
          const docSnap = await getDoc(userDocRef);

          if (docSnap.exists()) {
            setUserProfile(docSnap.data() as UserProfile);
          } else {
            const isAdminEmail = currentUser.email === 'halawaraq2002@gmail.com';
            const newProfile: UserProfile = {
              uid: currentUser.uid,
              email: currentUser.email || '',
              displayName: currentUser.displayName || (language === 'ar' ? 'طالب أكاديمي' : 'Academic Scholar'),
              role: isAdminEmail ? 'admin' : 'student',
              academicId: `STU-${Math.floor(100000 + Math.random() * 900000)}`,
              university: 'جامعة المستقبل الأهلية',
              avatarUrl: currentUser.photoURL || '',
              enrolledCourseIds: ['html-fundamentals'],
              completedLessonIds: [],
              quizScores: {},
              points: 100,
              badges: ['first-step'],
            };

            await setDoc(userDocRef, newProfile);
            setUserProfile(newProfile);
          }
        } catch (error) {
          console.warn('Firestore profile load note:', error);
          setUserProfile({
            uid: currentUser.uid,
            email: currentUser.email || '',
            displayName: currentUser.displayName || 'طالب أكاديمي',
            role: currentUser.email === 'halawaraq2002@gmail.com' ? 'admin' : 'student',
            academicId: `STU-2026`,
            university: 'جامعة المستقبل الأهلية',
            enrolledCourseIds: ['html-fundamentals'],
            completedLessonIds: [],
            quizScores: {},
            points: 100,
            badges: ['first-step'],
          });
        }
      } else {
        setUserProfile(prev => prev ?? defaultDemoStudent);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [language]);

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleAuthProvider);
    } catch (err) {
      console.error('Google Sign In error:', err);
    }
  };

  const signOutUser = async () => {
    await signOut(auth);
    setUser(null);
    setUserProfile(null);
  };

  const loginAsDemoStudent = () => {
    setUser(null);
    setUserProfile(defaultDemoStudent);
  };

  const loginAsDemoAdmin = () => {
    setUser(null);
    setUserProfile(defaultDemoAdmin);
  };

  const addCourse = async (course: Course) => {
    setCourses((prev) => [course, ...prev.filter((c) => c.id !== course.id)]);
    try {
      await setDoc(doc(db, 'courses', course.id), course);
    } catch (e) {
      console.warn('Course saved to local state:', e);
    }
  };

  const deleteCourse = async (courseId: string) => {
    setCourses((prev) => prev.filter((c) => c.id !== courseId));
    try {
      await deleteDoc(doc(db, 'courses', courseId));
    } catch (e) {
      console.warn('Course deleted from local state:', e);
    }
  };

  const updateCourse = async (course: Course) => {
    setCourses((prev) => prev.map((c) => (c.id === course.id ? course : c)));
    try {
      await setDoc(doc(db, 'courses', course.id), course, { merge: true });
    } catch (e) {
      console.warn('Course updated in local state:', e);
    }
  };

  const enrollCourse = async (courseId: string) => {
    if (!userProfile) return;
    if (userProfile.enrolledCourseIds.includes(courseId)) return;

    const updatedCourses = [...userProfile.enrolledCourseIds, courseId];
    const updated = {
      ...userProfile,
      enrolledCourseIds: updatedCourses,
    };
    setUserProfile(updated);

    if (user) {
      try {
        await setDoc(doc(db, 'users', user.uid), { enrolledCourseIds: updatedCourses }, { merge: true });
      } catch (err) {
        handleFirestoreError(err, OperationType.UPDATE, `users/${user.uid}`);
      }
    }
  };

  const markLessonComplete = async (courseId: string, lessonId: string) => {
    if (!userProfile) return;
    if (userProfile.completedLessonIds.includes(lessonId)) return;

    const updatedLessons = [...userProfile.completedLessonIds, lessonId];
    const newPoints = userProfile.points + 50;
    const updated = {
      ...userProfile,
      completedLessonIds: updatedLessons,
      points: newPoints,
    };
    setUserProfile(updated);

    if (user) {
      try {
        await setDoc(doc(db, 'users', user.uid), {
          completedLessonIds: updatedLessons,
          points: newPoints,
        }, { merge: true });
      } catch (err) {
        handleFirestoreError(err, OperationType.UPDATE, `users/${user.uid}`);
      }
    }
  };

  const saveQuizScore = async (courseId: string, score: number) => {
    if (!userProfile) return;
    const updatedScores = { ...userProfile.quizScores, [courseId]: score };
    const newPoints = userProfile.points + (score >= 75 ? 100 : 30);
    const updated = {
      ...userProfile,
      quizScores: updatedScores,
      points: newPoints,
    };
    setUserProfile(updated);

    if (user) {
      try {
        await setDoc(doc(db, 'users', user.uid), {
          quizScores: updatedScores,
          points: newPoints,
        }, { merge: true });
      } catch (err) {
        handleFirestoreError(err, OperationType.UPDATE, `users/${user.uid}`);
      }
    }
  };

  const isAdmin = userProfile?.role === 'admin';

  const t = (key: keyof typeof translations.ar): string => {
    const val = translations[language][key];
    if (typeof val === 'string') return val;
    return String(val || key);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        userProfile,
        loading,
        isAdmin,
        language,
        setLanguage,
        t,
        courses,
        addCourse,
        deleteCourse,
        updateCourse,
        signInWithGoogle,
        signOutUser,
        loginAsDemoStudent,
        loginAsDemoAdmin,
        enrollCourse,
        markLessonComplete,
        saveQuizScore,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
