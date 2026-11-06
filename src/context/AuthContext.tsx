import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, googleAuthProvider, db, handleFirestoreError, OperationType } from '../lib/firebase';
import { UserProfile } from '../types';

interface AuthContextType {
  user: User | null;
  userProfile: UserProfile | null;
  loading: boolean;
  isAdmin: boolean;
  language: 'ar' | 'en';
  setLanguage: (lang: 'ar' | 'en') => void;
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
  const [language, setLanguage] = useState<'ar' | 'en'>('ar');

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
              displayName: currentUser.displayName || 'طالب أكاديمي',
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
          // Fallback to local profile based on auth
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
        // Keep demo student logged in for easy testability if no real session
        setUserProfile(prev => prev ?? defaultDemoStudent);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

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

  return (
    <AuthContext.Provider
      value={{
        user,
        userProfile,
        loading,
        isAdmin,
        language,
        setLanguage,
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
