export interface Lesson {
  id: string;
  courseId: string;
  moduleIndex: number;
  moduleTitle: string;
  moduleTitleEn: string;
  title: string;
  titleEn: string;
  duration: string;
  objective: string;
  explanation: string;
  starterHtml: string;
  starterCss: string;
  starterJs: string;
  expectedOutputHint: string;
  solutionHtml?: string;
  solutionCss?: string;
  solutionJs?: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  questionEn: string;
  options: string[];
  optionsEn: string[];
  correctIndex: number;
  explanation: string;
}

export interface Quiz {
  id: string;
  courseId: string;
  title: string;
  titleEn: string;
  passingScore: number;
  questions: QuizQuestion[];
}

export interface Course {
  id: string;
  title: string;
  titleEn: string;
  shortDescription: string;
  shortDescriptionEn: string;
  level: 'مبتدئ' | 'متوسط' | 'متقدم';
  levelEn: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  totalLessons: number;
  category: string;
  iconName: string;
  color: string;
  overview: string;
  learningObjectives: string[];
  modules: {
    title: string;
    titleEn: string;
    lessons: Lesson[];
  }[];
  quiz: Quiz;
}

export interface Badge {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  icon: string;
  unlockedAt?: string;
  color: string;
}

export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  role: 'student' | 'admin';
  academicId?: string;
  university?: string;
  avatarUrl?: string;
  enrolledCourseIds: string[];
  completedLessonIds: string[];
  quizScores: Record<string, number>;
  points: number;
  badges: string[];
}
