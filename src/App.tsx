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
  const [selectedCourseId, setSelectedCourseId] = useState<string>('html-fundamentals');
  const [selectedLessonId, setSelectedLessonId] = useState<string>('html-1');
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);

  // Test Firestore connection on app mount as required by firebase-integration skill
  useEffect(() => {
    testFirestoreConnection();
  }, []);

  const handleSelectCourse = (courseId: string) => {
    setSelectedCourseId(courseId);
    setCurrentView('course-details');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartLesson = (courseId: string, lessonId: string) => {
    setSelectedCourseId(courseId);
    setSelectedLessonId(lessonId);
    setCurrentView('workspace');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const selectedCourse = initialCourses.find((c) => c.id === selectedCourseId) || initialCourses[0];

  return (
    <AuthProvider>
      <div className="min-h-screen flex flex-col bg-white text-[#252B27] selection:bg-[#E8F2EC] selection:text-[#176B45]">
        {/* Navigation Bar */}
        <Navbar
          currentView={currentView}
          setCurrentView={(v) => {
            setCurrentView(v);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          openAuthModal={() => setIsAuthModalOpen(true)}
        />

        {/* Dynamic Page View */}
        <main className="flex-1">
          {currentView === 'home' && (
            <HomePage
              setCurrentView={setCurrentView}
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
              onBack={() => setCurrentView('courses')}
              onStartLesson={handleStartLesson}
            />
          )}

          {currentView === 'workspace' && (
            <LearningWorkspacePage
              initialCourseId={selectedCourseId}
              initialLessonId={selectedLessonId}
              onBackToCourses={() => setCurrentView('courses')}
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
