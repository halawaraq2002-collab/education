import React, { useState, useEffect } from 'react';
import { AuthProvider } from './context/AuthContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AuthModal } from './components/AuthModal';
import { HomePage } from './pages/HomePage';
import { CoursesPage } from './pages/CoursesPage';
import { CourseDetailsPage } from './pages/CourseDetailsPage';
import { LearningWorkspacePage } from './pages/LearningWorkspacePage';
import { StudentDashboardPage } from './pages/StudentDashboardPage';
import { AdminDashboardPage } from './pages/AdminDashboardPage';
import { LearningPathsPage } from './pages/LearningPathsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { initialCourses } from './data/coursesData';
import { testFirestoreConnection } from './lib/firebase';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [viewHistory, setViewHistory] = useState<string[]>(['home']);
  const [selectedCourseId, setSelectedCourseId] = useState<string>('web-fundamentals');
  const [selectedLessonId, setSelectedLessonId] = useState<string>('wf-1');
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);

  // Test Firestore connection on app mount as required by firebase-integration skill
  useEffect(() => {
    testFirestoreConnection();
  }, []);

  const navigateToView = (v: string) => {
    setViewHistory((prev) => (prev[prev.length - 1] === v ? prev : [...prev, v]));
    setCurrentView(v);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoBack = () => {
    if (viewHistory.length > 1) {
      const updated = [...viewHistory];
      updated.pop(); // remove active view
      const previous = updated[updated.length - 1] || 'home';
      setViewHistory(updated);
      setCurrentView(previous);
    } else {
      // Intelligent fallback based on current view
      if (currentView === 'workspace') {
        setCurrentView('course-details');
      } else if (currentView === 'course-details') {
        setCurrentView('courses');
      } else {
        setCurrentView('home');
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCourse = (courseId: string) => {
    setSelectedCourseId(courseId);
    navigateToView('course-details');
  };

  const handleStartLesson = (courseId: string, lessonId: string) => {
    setSelectedCourseId(courseId);
    setSelectedLessonId(lessonId);
    navigateToView('workspace');
  };

  const selectedCourse = initialCourses.find((c) => c.id === selectedCourseId) || initialCourses[0];

  return (
    <AuthProvider>
      <div className="min-h-screen flex flex-col bg-white text-[#252B27] selection:bg-[#E8F2EC] selection:text-[#176B45]">
        {/* Navigation Bar */}
        <Navbar
          currentView={currentView}
          setCurrentView={navigateToView}
          openAuthModal={() => setIsAuthModalOpen(true)}
          onGoBack={handleGoBack}
          canGoBack={currentView !== 'home'}
        />

        {/* Dynamic Page View */}
        <main className="flex-1">
          {currentView === 'home' && (
            <HomePage
              setCurrentView={navigateToView}
              onSelectCourse={handleSelectCourse}
              openAuthModal={() => setIsAuthModalOpen(true)}
            />
          )}

          {currentView === 'courses' && (
            <CoursesPage
              onSelectCourse={handleSelectCourse}
              onStartLesson={handleStartLesson}
            />
          )}

          {currentView === 'course-details' && (
            <CourseDetailsPage
              course={selectedCourse}
              onBack={handleGoBack}
              onStartLesson={handleStartLesson}
            />
          )}

          {currentView === 'workspace' && (
            <LearningWorkspacePage
              initialCourseId={selectedCourseId}
              initialLessonId={selectedLessonId}
              onBackToCourses={handleGoBack}
            />
          )}

          {currentView === 'dashboard' && (
            <StudentDashboardPage
              onSelectCourse={handleSelectCourse}
              onStartLesson={handleStartLesson}
              setCurrentView={setCurrentView}
            />
          )}

          {currentView === 'admin' && (
            <AdminDashboardPage />
          )}

          {currentView === 'paths' && (
            <LearningPathsPage
              onSelectCourse={handleSelectCourse}
              setCurrentView={setCurrentView}
            />
          )}

          {currentView === 'about' && (
            <AboutPage setCurrentView={setCurrentView} />
          )}

          {currentView === 'contact' && (
            <ContactPage />
          )}
        </main>

        {/* Footer (hidden in Workspace to maximize coding view) */}
        {currentView !== 'workspace' && (
          <Footer setCurrentView={setCurrentView} />
        )}

        {/* Authentication Modal */}
        <AuthModal
          isOpen={isAuthModalOpen}
          onClose={() => setIsAuthModalOpen(false)}
        />
      </div>
    </AuthProvider>
  );
}
