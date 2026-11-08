import React, { useState, useEffect } from 'react';
import { initialCourses } from '../data/coursesData';
import { Lesson, Course } from '../types';
import { CodeEditor } from '../components/CodeEditor';
import { AiAssistant } from '../components/AiAssistant';
import { useAuth } from '../context/AuthContext';
import { 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle2, 
  Sparkles, 
  BookOpen, 
  Lightbulb, 
  HelpCircle, 
  PanelLeftClose, 
  PanelLeftOpen,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';

interface LearningWorkspacePageProps {
  initialCourseId?: string;
  initialLessonId?: string;
  onBackToCourses: () => void;
}

export const LearningWorkspacePage: React.FC<LearningWorkspacePageProps> = ({
  initialCourseId = 'html-fundamentals',
  initialLessonId = 'html-1',
  onBackToCourses,
}) => {
  const { userProfile, markLessonComplete, language, t, courses } = useAuth();
  
  const [selectedCourseId, setSelectedCourseId] = useState(initialCourseId);
  const [selectedLessonId, setSelectedLessonId] = useState(initialLessonId);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isAiOpen, setIsAiOpen] = useState(false);

  // Active courses from context (including newly created ones by admin) or fallback
  const allAvailableCourses: Course[] = (courses && courses.length > 0) ? courses : initialCourses;
  const currentCourse = allAvailableCourses.find((c) => c.id === selectedCourseId) || allAvailableCourses[0];
  
  let currentLesson: Lesson | undefined;
  if (currentCourse?.modules) {
    currentCourse.modules.forEach((mod) => {
      const found = mod.lessons.find((l) => l.id === selectedLessonId);
      if (found) currentLesson = found;
    });
  }

  if (!currentLesson) {
    currentLesson = currentCourse?.modules?.[0]?.lessons?.[0] || {
      id: 'html-1',
      courseId: currentCourse?.id || 'html-fundamentals',
      moduleIndex: 1,
      moduleTitle: 'الوحدة الأولى',
      moduleTitleEn: 'Module 1',
      title: 'الدرس الافتراضي',
      titleEn: 'Default Lesson',
      duration: '30 دقيقة',
      objective: 'تطبيق برمجي تفاعلي',
      explanation: 'اكتب الكود وجرب تنفيذه مباشرة.',
      starterHtml: '<h1>مرحباً بكم في المنصة التعليمية</h1>\n<p>بيئة تطوير الويب التفاعلية.</p>',
      starterCss: 'body { font-family: sans-serif; padding: 20px; color: #176B45; }',
      starterJs: 'console.log("جاهز للتعلم!");',
      expectedOutputHint: 'جرب تعديل النص وتشغيل الكود.'
    };
  }

  // Current code state
  const [code, setCode] = useState({
    html: currentLesson.starterHtml,
    css: currentLesson.starterCss,
    js: currentLesson.starterJs,
  });

  // When lesson changes, reset code
  useEffect(() => {
    if (currentLesson) {
      setCode({
        html: currentLesson.starterHtml,
        css: currentLesson.starterCss,
        js: currentLesson.starterJs,
      });
    }
  }, [selectedLessonId]);

  // List of all lessons in this course for next/prev navigation
  const allLessons: Lesson[] = [];
  if (currentCourse?.modules) {
    currentCourse.modules.forEach((m) => {
      m.lessons.forEach((l) => allLessons.push(l));
    });
  }

  const currentLessonIndex = allLessons.findIndex((l) => l.id === currentLesson?.id);
  const prevLesson = currentLessonIndex > 0 ? allLessons[currentLessonIndex - 1] : null;
  const nextLesson = currentLessonIndex < allLessons.length - 1 ? allLessons[currentLessonIndex + 1] : null;

  const isCompleted = userProfile?.completedLessonIds.includes(currentLesson.id);

  const handleCompleteLesson = () => {
    if (currentLesson) {
      markLessonComplete(currentCourse.id, currentLesson.id);
    }
  };

  const handleAskAiWithCode = () => {
    setIsAiOpen(true);
  };

  const courseTitleDisplay = language === 'en' && currentCourse.titleEn ? currentCourse.titleEn : currentCourse.title;
  const lessonTitleDisplay = language === 'en' && currentLesson.titleEn ? currentLesson.titleEn : currentLesson.title;
  const moduleTitleDisplay = language === 'en' && currentLesson.moduleTitleEn ? currentLesson.moduleTitleEn : currentLesson.moduleTitle;

  return (
    <div className="flex flex-col h-[calc(100vh-80px)] bg-[#FAF8F2] overflow-hidden select-none">
      
      {/* Workspace Top Toolbar */}
      <div className="bg-white border-b border-[#dbe6df] px-4 py-2.5 flex flex-wrap items-center justify-between gap-3 shrink-0 z-10">
        
        {/* Left: Navigation & Lesson title */}
        <div className="flex items-center gap-3">
          <button
            onClick={onBackToCourses}
            className="px-3 py-1.5 rounded-lg border border-gray-300 hover:border-[#176B45] hover:bg-[#E8F2EC] text-[#176B45] text-xs font-bold flex items-center gap-1.5 cursor-pointer transition-all shadow-2xs group"
            title={language === 'ar' ? 'الرجوع إلى الصفحة السابقة' : 'Go back to previous page'}
          >
            {language === 'ar' ? (
              <ArrowRight className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform text-[#176B45]" />
            ) : (
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform text-[#176B45]" />
            )}
            <span>{language === 'ar' ? 'رجوع للصفحة السابقة' : 'Back'}</span>
          </button>

          {/* Toggle instructions sidebar */}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-1.5 rounded-lg border border-gray-200 hover:bg-[#E8F2EC] hover:text-[#176B45] text-xs font-semibold flex items-center gap-1.5 cursor-pointer transition-colors"
            title={isSidebarOpen ? t('hideGuideBtn') : t('showGuideBtn')}
          >
            {isSidebarOpen ? <PanelLeftClose className="w-4 h-4" /> : <PanelLeftOpen className="w-4 h-4" />}
            <span className="hidden md:inline">{isSidebarOpen ? t('hideGuideBtn') : t('showGuideBtn')}</span>
          </button>

          {/* Course & Lesson Selection */}
          <div className="flex items-center gap-2">
            <select
              value={selectedCourseId}
              onChange={(e) => {
                const newCourseId = e.target.value;
                setSelectedCourseId(newCourseId);
                const targetCourse = allAvailableCourses.find(c => c.id === newCourseId);
                const firstLes = targetCourse?.modules?.[0]?.lessons?.[0]?.id;
                if (firstLes) setSelectedLessonId(firstLes);
              }}
              className="bg-[#E8F2EC] border border-[#176B45]/30 text-[#176B45] rounded-lg px-2.5 py-1 text-xs font-bold max-w-[140px] sm:max-w-[200px] truncate focus:border-[#176B45] outline-hidden cursor-pointer"
            >
              {allAvailableCourses.map((c) => (
                <option key={c.id} value={c.id}>
                  {language === 'en' && c.titleEn ? c.titleEn : c.title}
                </option>
              ))}
            </select>

            <select
              value={selectedLessonId}
              onChange={(e) => setSelectedLessonId(e.target.value)}
              className="bg-[#FAF8F2] border border-[#dbe6df] rounded-lg px-2.5 py-1 text-xs font-bold text-[#252B27] max-w-[150px] sm:max-w-[240px] truncate focus:border-[#176B45] outline-hidden cursor-pointer"
            >
              {allLessons.map((l, idx) => (
                <option key={l.id} value={l.id}>
                  {idx + 1}. {language === 'en' && l.titleEn ? l.titleEn : l.title}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Right: Actions (Mark Completed, AI Assistant Toggle, Navigation) */}
        <div className="flex items-center gap-2">
          
          {/* Mark Complete Button */}
          <button
            onClick={handleCompleteLesson}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              isCompleted
                ? 'bg-[#E8F2EC] text-[#176B45] border border-[#176B45]/30'
                : 'bg-[#176B45] text-white hover:bg-[#0f482e] shadow-2xs'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>{isCompleted ? t('lessonCompletedBtn') : t('markLessonCompleteBtn')}</span>
          </button>

          {/* AI Tutor Drawer Toggle */}
          <button
            onClick={() => setIsAiOpen(!isAiOpen)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              isAiOpen
                ? 'bg-[#C6A34A] text-white shadow-sm'
                : 'bg-[#FAF8F2] text-[#C6A34A] border border-[#C6A34A]/40 hover:bg-[#C6A34A] hover:text-white'
            }`}
            title={t('smartTutorBtn')}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{t('smartTutorBtn')}</span>
          </button>

          {/* Next / Previous Lesson navigation */}
          <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden bg-white">
            <button
              onClick={() => prevLesson && setSelectedLessonId(prevLesson.id)}
              disabled={!prevLesson}
              className="p-1.5 hover:bg-[#E8F2EC] disabled:opacity-30 transition-colors"
              title={t('prevLessonTooltip')}
            >
              {language === 'ar' ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
            </button>
            <button
              onClick={() => nextLesson && setSelectedLessonId(nextLesson.id)}
              disabled={!nextLesson}
              className="p-1.5 hover:bg-[#E8F2EC] disabled:opacity-30 transition-colors"
              title={t('nextLessonTooltip')}
            >
              {language === 'ar' ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </button>
          </div>
        </div>

      </div>

      {/* Main Classroom Body */}
      <div className="flex-1 flex overflow-hidden relative">
        
        {/* Left: Collapsible Lesson Explanation & Instructions Sidebar */}
        {isSidebarOpen && (
          <aside className="w-full sm:w-80 md:w-96 bg-white border-l rtl:border-l ltr:border-r border-[#dbe6df] flex flex-col shrink-0 overflow-y-auto p-5 space-y-5 text-start z-10 shadow-xs">
            
            {/* Lesson Title & Module */}
            <div className="space-y-1 pb-3 border-b border-gray-100">
              <span className="text-[11px] font-bold text-[#C6A34A] uppercase tracking-wider block">
                {moduleTitleDisplay}
              </span>
              <h2 className="text-lg font-bold text-[#176B45] leading-snug">
                {lessonTitleDisplay}
              </h2>
              {language === 'ar' && currentLesson.titleEn && (
                <div className="text-xs text-gray-400 font-mono" dir="ltr">
                  {currentLesson.titleEn}
                </div>
              )}
            </div>

            {/* Objective Box */}
            <div className="bg-[#FAF8F2] p-4 rounded-xl border border-[#C6A34A]/30 space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#176B45]">
                <Lightbulb className="w-4 h-4 text-[#C6A34A]" />
                <span>{t('academicObjectiveHeading')}</span>
              </div>
              <p className="text-xs text-[#252B27] leading-relaxed">
                {currentLesson.objective}
              </p>
            </div>

            {/* Detailed Explanation */}
            <div className="space-y-2 text-xs sm:text-sm text-[#252B27] leading-relaxed whitespace-pre-line">
              <h3 className="font-bold text-sm text-[#176B45] flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-[#176B45]" />
                <span>{t('codingConceptHeading')}</span>
              </h3>
              <div className="text-gray-700 bg-gray-50/70 p-3.5 rounded-xl border border-gray-100">
                {currentLesson.explanation}
              </div>
            </div>

            {/* Expected Hint */}
            <div className="p-3.5 rounded-xl bg-[#E8F2EC] border border-[#176B45]/20 space-y-1.5">
              <h4 className="text-xs font-bold text-[#176B45] flex items-center gap-1">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>{t('implementationHintHeading')}</span>
              </h4>
              <p className="text-xs text-[#252B27]">
                {currentLesson.expectedOutputHint}
              </p>
            </div>

            {/* Fast AI Helper call button */}
            <button
              onClick={handleAskAiWithCode}
              className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#176B45] to-[#0f482e] hover:brightness-110 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm cursor-pointer transition-all"
            >
              <Sparkles className="w-4 h-4 text-[#C6A34A]" />
              <span>{t('scanCodeAiBtn')}</span>
            </button>
          </aside>
        )}

        {/* Center: The Code Editor + Sandbox Preview */}
        <div className="flex-1 h-full p-2.5 overflow-hidden flex flex-col">
          <CodeEditor
            initialCode={code}
            onCodeChange={(newCode) => setCode(newCode)}
            onAskAiWithCode={handleAskAiWithCode}
            lessonObjective={currentLesson.objective}
          />
        </div>

        {/* Right: Floating AI Assistant Side Panel */}
        {isAiOpen && (
          <div className="w-full sm:w-96 md:w-[420px] h-full p-2.5 absolute sm:relative right-0 rtl:right-0 ltr:right-0 top-0 z-30 transition-all">
            <AiAssistant
              currentCode={code}
              lessonContext={{
                courseTitle: courseTitleDisplay,
                lessonTitle: lessonTitleDisplay,
                objective: currentLesson.objective,
              }}
              onClose={() => setIsAiOpen(false)}
            />
          </div>
        )}

      </div>
    </div>
  );
};
