import React, { useState, useEffect, useRef, useCallback } from 'react';
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
  ArrowLeft,
  Maximize2,
  Minimize2,
  PlayCircle,
  ExternalLink,
  Wrench,
} from 'lucide-react';

interface LearningWorkspacePageProps {
  initialCourseId?: string;
  initialLessonId?: string;
  onBackToCourses: () => void;
}

// Helper to separate legacy embedded practical steps if a custom/Firestore lesson lacks `practicalSteps`
function extractTheoryAndPractice(lesson: Lesson): { theoryText: string; practicalText: string } {
  const rawExplanation = (lesson.explanation || '').trim();
  const explicitPractice = (lesson.practicalSteps || '').trim();

  if (explicitPractice) {
    return {
      theoryText: rawExplanation,
      practicalText: explicitPractice,
    };
  }

  const marker = '• التمرين التطبيقي العملي:';
  const markerIdx = rawExplanation.indexOf(marker);
  if (markerIdx !== -1) {
    return {
      theoryText: rawExplanation.slice(0, markerIdx).trim(),
      practicalText: rawExplanation.slice(markerIdx + marker.length).trim(),
    };
  }

  return {
    theoryText: rawExplanation,
    practicalText: '',
  };
}

// Renders inline backticks (`code`) cleanly as LTR styled code badges
function renderInlineWithCode(text: string, isFullscreen: boolean): React.ReactNode {
  const parts = text.split(/(`[^`]+`)/g);
  return parts.map((part, idx) => {
    if (part.startsWith('`') && part.endsWith('`') && part.length > 2) {
      const inner = part.slice(1, -1);
      return (
        <code
          key={idx}
          dir="ltr"
          className={`inline-block font-mono rounded border border-[#176B45]/15 bg-[#E8F2EC] text-[#176B45] font-semibold align-baseline ${
            isFullscreen ? 'px-2 py-0.5 text-[0.9em] mx-1' : 'px-1.5 py-0.5 text-[11px] mx-0.5'
          }`}
        >
          {inner}
        </code>
      );
    }
    return <React.Fragment key={idx}>{part}</React.Fragment>;
  });
}

// Structured educational formatter for headings, bullets, numbered steps, and paragraphs
const TheoreticalContentView: React.FC<{ content: string; isFullscreen?: boolean }> = ({
  content,
  isFullscreen = false,
}) => {
  const lines = content.split('\n');
  const blocks: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const trimmed = lines[i].trim();

    if (!trimmed) {
      i++;
      continue;
    }

    // Section heading: ### ... or • ...
    if (trimmed.startsWith('### ')) {
      const title = trimmed.replace(/^###\s+/, '');
      blocks.push(
        <h4
          key={`h-${i}`}
          className={`font-bold text-[#176B45] flex items-center gap-2 border-b border-[#E8F2EC] ${
            isFullscreen
              ? 'text-xl sm:text-2xl pt-5 pb-2.5 mt-4 first:mt-0'
              : 'text-[13px] sm:text-sm pt-2.5 pb-1.5 mt-2 first:mt-0'
          }`}
        >
          <span className="w-1.5 h-5 rounded-full bg-[#C6A34A] shrink-0" />
          <span>{title}</span>
        </h4>
      );
      i++;
      continue;
    }

    if (trimmed.startsWith('• ')) {
      const title = trimmed.replace(/^•\s+/, '');
      blocks.push(
        <h4
          key={`bh-${i}`}
          className={`font-bold text-[#176B45] flex items-center gap-2 ${
            isFullscreen ? 'text-lg sm:text-xl pt-4 pb-1' : 'text-xs sm:text-[13px] pt-2 pb-0.5'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-[#C6A34A] shrink-0" />
          <span>{title}</span>
        </h4>
      );
      i++;
      continue;
    }

    // Group consecutive unordered bullets (- ...)
    if (trimmed.startsWith('- ')) {
      const items: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith('- ')) {
        items.push(lines[i].trim().replace(/^-\s+/, ''));
        i++;
      }
      blocks.push(
        <ul
          key={`ul-${i}`}
          className={`${isFullscreen ? 'space-y-3 pr-2' : 'space-y-1.5 pr-1'}`}
        >
          {items.map((item, idx) => {
            const colonIdx = item.indexOf(':');
            const hasLabel = colonIdx > 0 && colonIdx < 65;
            return (
              <li
                key={idx}
                className={`flex items-start gap-2.5 text-[#252B27] ${
                  isFullscreen ? 'text-base sm:text-lg leading-8 sm:leading-9' : 'text-xs sm:text-[13px] leading-relaxed'
                }`}
              >
                <span
                  className={`rounded-full bg-[#176B45] shrink-0 ${
                    isFullscreen ? 'w-2 h-2 mt-3.5' : 'w-1.5 h-1.5 mt-2'
                  }`}
                />
                <span className="flex-1">
                  {hasLabel ? (
                    <>
                      <strong className="text-[#176B45] font-bold">
                        {renderInlineWithCode(item.slice(0, colonIdx + 1), isFullscreen)}
                      </strong>
                      <span>{renderInlineWithCode(item.slice(colonIdx + 1), isFullscreen)}</span>
                    </>
                  ) : (
                    renderInlineWithCode(item, isFullscreen)
                  )}
                </span>
              </li>
            );
          })}
        </ul>
      );
      continue;
    }

    // Group consecutive numbered items (1. ... / 2. ...)
    if (/^\d+\.\s+/.test(trimmed)) {
      const items: { num: string; text: string }[] = [];
      while (i < lines.length && /^\d+\.\s+/.test(lines[i].trim())) {
        const lineText = lines[i].trim();
        const match = lineText.match(/^(\d+)\.\s+(.*)$/);
        if (match) {
          items.push({ num: match[1], text: match[2] });
        }
        i++;
      }
      blocks.push(
        <ol
          key={`ol-${i}`}
          className={`${isFullscreen ? 'space-y-3 pr-1' : 'space-y-2'}`}
        >
          {items.map((item, idx) => {
            const colonIdx = item.text.indexOf(':');
            const hasLabel = colonIdx > 0 && colonIdx < 65;
            return (
              <li
                key={idx}
                className={`flex items-start gap-2.5 text-[#252B27] ${
                  isFullscreen ? 'text-base sm:text-lg leading-8 sm:leading-9' : 'text-xs sm:text-[13px] leading-relaxed'
                }`}
              >
                <span
                  className={`rounded-md bg-[#E8F2EC] border border-[#176B45]/20 text-[#176B45] font-bold flex items-center justify-center shrink-0 ${
                    isFullscreen ? 'w-7 h-7 text-sm mt-1' : 'w-5 h-5 text-[11px] mt-0.5'
                  }`}
                >
                  {item.num}
                </span>
                <span className="flex-1">
                  {hasLabel ? (
                    <>
                      <strong className="text-[#176B45] font-bold">
                        {renderInlineWithCode(item.text.slice(0, colonIdx + 1), isFullscreen)}
                      </strong>
                      <span>{renderInlineWithCode(item.text.slice(colonIdx + 1), isFullscreen)}</span>
                    </>
                  ) : (
                    renderInlineWithCode(item.text, isFullscreen)
                  )}
                </span>
              </li>
            );
          })}
        </ol>
      );
      continue;
    }

    // Regular paragraph
    blocks.push(
      <p
        key={`p-${i}`}
        className={`text-[#252B27] ${
          isFullscreen ? 'text-base sm:text-lg leading-8 sm:leading-9' : 'text-xs sm:text-[13px] leading-relaxed'
        }`}
      >
        {renderInlineWithCode(trimmed, isFullscreen)}
      </p>
    );
    i++;
  }

  return <div className={isFullscreen ? 'space-y-4 select-text' : 'space-y-2.5 select-text'}>{blocks}</div>;
};

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
  const [isTheoryFullscreen, setIsTheoryFullscreen] = useState(false);

  // Refs for scroll position preservation between sidebar and fullscreen theory reader
  const sidebarRef = useRef<HTMLElement>(null);
  const theorySectionRef = useRef<HTMLDivElement>(null);
  const practicalSectionRef = useRef<HTMLDivElement>(null);
  const fullscreenScrollRef = useRef<HTMLDivElement>(null);
  const readingStateRef = useRef<{
    sidebarScrollTop: number;
    theoryRatio: number;
    scrolledInFullscreen: boolean;
  }>({
    sidebarScrollTop: 0,
    theoryRatio: 0,
    scrolledInFullscreen: false,
  });

  // Active courses from context (including newly created ones by admin) or fallback
  const allAvailableCourses: Course[] = courses && courses.length > 0 ? courses : initialCourses;
  const currentCourse =
    allAvailableCourses.find((c) => c.id === selectedCourseId) || allAvailableCourses[0];

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
      expectedOutputHint: 'جرب تعديل النص وتشغيل الكود.',
    };
  }

  // Current code state
  const [code, setCode] = useState({
    html: currentLesson.starterHtml,
    css: currentLesson.starterCss,
    js: currentLesson.starterJs,
  });

  // When lesson changes, reset code and scroll state
  useEffect(() => {
    if (currentLesson) {
      setCode({
        html: currentLesson.starterHtml,
        css: currentLesson.starterCss,
        js: currentLesson.starterJs,
      });
    }
    setIsTheoryFullscreen(false);
    readingStateRef.current = {
      sidebarScrollTop: 0,
      theoryRatio: 0,
      scrolledInFullscreen: false,
    };
    if (sidebarRef.current) {
      sidebarRef.current.scrollTop = 0;
    }
  }, [selectedLessonId]);

  const openTheoryFullscreen = useCallback(() => {
    const asideEl = sidebarRef.current;
    const theoryEl = theorySectionRef.current;

    let savedTop = 0;
    let ratio = 0;

    if (asideEl) {
      savedTop = asideEl.scrollTop;
      if (theoryEl) {
        const theoryTop = theoryEl.offsetTop;
        const offsetIntoTheory = Math.max(0, savedTop - theoryTop);
        const scrollableSpan = Math.max(1, theoryEl.scrollHeight - asideEl.clientHeight * 0.4);
        ratio = Math.min(1, Math.max(0, offsetIntoTheory / scrollableSpan));
      }
    }

    readingStateRef.current = {
      sidebarScrollTop: savedTop,
      theoryRatio: ratio,
      scrolledInFullscreen: false,
    };
    setIsTheoryFullscreen(true);
  }, []);

  const closeTheoryFullscreen = useCallback(() => {
    const fsEl = fullscreenScrollRef.current;
    if (fsEl) {
      const maxFsScroll = Math.max(1, fsEl.scrollHeight - fsEl.clientHeight);
      if (fsEl.scrollTop > 0 || readingStateRef.current.scrolledInFullscreen) {
        readingStateRef.current.theoryRatio = Math.min(1, Math.max(0, fsEl.scrollTop / maxFsScroll));
      }
    }

    setIsTheoryFullscreen(false);

    requestAnimationFrame(() => {
      const asideEl = sidebarRef.current;
      const theoryEl = theorySectionRef.current;
      if (!asideEl) return;

      if (readingStateRef.current.scrolledInFullscreen && theoryEl) {
        const theoryTop = theoryEl.offsetTop;
        const scrollableSpan = Math.max(1, theoryEl.scrollHeight - asideEl.clientHeight * 0.4);
        const targetTop = theoryTop + readingStateRef.current.theoryRatio * scrollableSpan;
        const maxSidebarScroll = Math.max(0, asideEl.scrollHeight - asideEl.clientHeight);
        asideEl.scrollTop = Math.min(maxSidebarScroll, Math.max(0, targetTop));
      } else {
        asideEl.scrollTop = readingStateRef.current.sidebarScrollTop;
      }
    });
  }, []);

  const jumpToPracticalExercise = useCallback(() => {
    setIsTheoryFullscreen(false);
    requestAnimationFrame(() => {
      practicalSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }, []);

  // Restore scroll position inside fullscreen right when it mounts
  useEffect(() => {
    if (!isTheoryFullscreen) return;

    const rafId = requestAnimationFrame(() => {
      const fsEl = fullscreenScrollRef.current;
      if (fsEl && readingStateRef.current.theoryRatio > 0) {
        const maxScroll = Math.max(0, fsEl.scrollHeight - fsEl.clientHeight);
        fsEl.scrollTop = readingStateRef.current.theoryRatio * maxScroll;
      }
    });

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeTheoryFullscreen();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isTheoryFullscreen, closeTheoryFullscreen]);

  const handleFullscreenScroll = () => {
    const fsEl = fullscreenScrollRef.current;
    if (!fsEl) return;
    const maxScroll = Math.max(1, fsEl.scrollHeight - fsEl.clientHeight);
    readingStateRef.current.theoryRatio = Math.min(1, Math.max(0, fsEl.scrollTop / maxScroll));
    readingStateRef.current.scrolledInFullscreen = true;
  };

  // List of all lessons in this course for next/prev navigation
  const allLessons: Lesson[] = [];
  if (currentCourse?.modules) {
    currentCourse.modules.forEach((m) => {
      m.lessons.forEach((l) => allLessons.push(l));
    });
  }

  const currentLessonIndex = allLessons.findIndex((l) => l.id === currentLesson?.id);
  const prevLesson = currentLessonIndex > 0 ? allLessons[currentLessonIndex - 1] : null;
  const nextLesson =
    currentLessonIndex < allLessons.length - 1 ? allLessons[currentLessonIndex + 1] : null;

  const isCompleted = userProfile?.completedLessonIds.includes(currentLesson.id);

  const handleCompleteLesson = () => {
    if (currentLesson) {
      markLessonComplete(currentCourse.id, currentLesson.id);
    }
  };

  const handleAskAiWithCode = () => {
    setIsAiOpen(true);
  };

  const courseTitleDisplay =
    language === 'en' && currentCourse.titleEn ? currentCourse.titleEn : currentCourse.title;
  const lessonTitleDisplay =
    language === 'en' && currentLesson.titleEn ? currentLesson.titleEn : currentLesson.title;
  const moduleTitleDisplay =
    language === 'en' && currentLesson.moduleTitleEn
      ? currentLesson.moduleTitleEn
      : currentLesson.moduleTitle;

  const { theoryText, practicalText } = extractTheoryAndPractice(currentLesson);

  // Dynamic lesson-specific YouTube search URL
  const videoQuery =
    currentLesson.videoSearchQuery?.trim() ||
    (language === 'en'
      ? `${currentLesson.titleEn || currentLesson.title} web development tutorial`
      : `${currentLesson.title} شرح تطوير الويب`);
  const youtubeSearchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(
    videoQuery
  )}`;

  const renderVideoResourcesCard = (fullscreenMode = false) => (
    <div
      className={`rounded-xl border border-[#C6A34A]/40 bg-gradient-to-br from-[#FAF8F2] to-[#f4efe1] ${
        fullscreenMode ? 'p-6 sm:p-7 space-y-4 mt-8' : 'p-4 space-y-3'
      }`}
    >
      <div className="flex items-start gap-2.5">
        <div
          className={`rounded-lg bg-[#C6A34A]/15 text-[#9c7b26] flex items-center justify-center shrink-0 ${
            fullscreenMode ? 'w-10 h-10' : 'w-8 h-8'
          }`}
        >
          <PlayCircle className={fullscreenMode ? 'w-5 h-5' : 'w-4 h-4'} />
        </div>
        <div className="space-y-1">
          <h4
            className={`font-bold text-[#176B45] ${
              fullscreenMode ? 'text-lg sm:text-xl' : 'text-xs sm:text-sm'
            }`}
          >
            {t('videoSectionHeading')}
          </h4>
          <p
            className={`text-[#252B27]/85 leading-relaxed ${
              fullscreenMode ? 'text-sm sm:text-base' : 'text-[11px] sm:text-xs'
            }`}
          >
            {t('videoSectionDesc')}
          </p>
        </div>
      </div>

      <a
        href={youtubeSearchUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center gap-2 rounded-xl bg-[#176B45] hover:bg-[#0f482e] text-white font-bold shadow-2xs transition-all cursor-pointer ${
          fullscreenMode ? 'px-5 py-3 text-sm sm:text-base' : 'w-full py-2.5 px-3 text-xs'
        }`}
      >
        <span>{t('watchVideoBtn')}</span>
        <ExternalLink className={fullscreenMode ? 'w-4 h-4 opacity-85' : 'w-3.5 h-3.5 opacity-85'} />
      </a>
    </div>
  );

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
            {isSidebarOpen ? (
              <PanelLeftClose className="w-4 h-4" />
            ) : (
              <PanelLeftOpen className="w-4 h-4" />
            )}
            <span className="hidden md:inline">
              {isSidebarOpen ? t('hideGuideBtn') : t('showGuideBtn')}
            </span>
          </button>

          {/* Course & Lesson Selection */}
          <div className="flex items-center gap-2">
            <select
              value={selectedCourseId}
              onChange={(e) => {
                const newCourseId = e.target.value;
                setSelectedCourseId(newCourseId);
                const targetCourse = allAvailableCourses.find((c) => c.id === newCourseId);
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
              {language === 'ar' ? (
                <ChevronRight className="w-4 h-4" />
              ) : (
                <ChevronLeft className="w-4 h-4" />
              )}
            </button>
            <button
              onClick={() => nextLesson && setSelectedLessonId(nextLesson.id)}
              disabled={!nextLesson}
              className="p-1.5 hover:bg-[#E8F2EC] disabled:opacity-30 transition-colors"
              title={t('nextLessonTooltip')}
            >
              {language === 'ar' ? (
                <ChevronLeft className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Main Classroom Body */}
      <div className="flex-1 flex overflow-hidden relative">
        {/* Left: Collapsible Lesson Explanation & Instructions Sidebar */}
        {isSidebarOpen && (
          <aside
            ref={sidebarRef}
            className="w-full sm:w-80 md:w-96 bg-white border-l rtl:border-l ltr:border-r border-[#dbe6df] flex flex-col shrink-0 overflow-y-auto p-5 space-y-5 text-start z-10 shadow-xs"
          >
            {/* Lesson Title & Module */}
            <div className="space-y-1 pb-3 border-b border-gray-100 select-text">
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
            <div className="bg-[#FAF8F2] p-4 rounded-xl border border-[#C6A34A]/30 space-y-2 select-text">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#176B45]">
                <Lightbulb className="w-4 h-4 text-[#C6A34A]" />
                <span>{t('academicObjectiveHeading')}</span>
              </div>
              <p className="text-xs text-[#252B27] leading-relaxed">{currentLesson.objective}</p>
            </div>

            {/* Theoretical Content Section with Fullscreen Expand Trigger */}
            <div ref={theorySectionRef} className="space-y-2.5">
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-bold text-sm text-[#176B45] flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-[#176B45] shrink-0" />
                  <span>{t('codingConceptHeading')}</span>
                </h3>
                <button
                  type="button"
                  onClick={openTheoryFullscreen}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#E8F2EC] hover:bg-[#176B45] text-[#176B45] hover:text-white border border-[#176B45]/25 text-[11px] font-bold transition-colors cursor-pointer shrink-0"
                  title={t('expandTheoryTooltip')}
                  aria-label={t('expandTheoryTooltip')}
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>{language === 'ar' ? 'تكبير' : 'Expand'}</span>
                </button>
              </div>

              <div className="bg-gray-50/75 p-4 rounded-xl border border-gray-200/80">
                <TheoreticalContentView content={theoryText} isFullscreen={false} />
              </div>
            </div>

            {/* Video Learning Resources Section (Always at end of theoretical content, before exercise) */}
            {renderVideoResourcesCard(false)}

            {/* Hands-On Practical Exercise Section (Always preserved at end of lesson) */}
            <div
              ref={practicalSectionRef}
              className="p-4 rounded-xl bg-[#E8F2EC] border border-[#176B45]/25 space-y-3 select-text"
            >
              <h4 className="text-xs sm:text-sm font-bold text-[#176B45] flex items-center gap-1.5">
                <Wrench className="w-4 h-4 text-[#176B45] shrink-0" />
                <span>{t('practicalExerciseHeading')}</span>
              </h4>

              {practicalText && (
                <div className="bg-white/80 rounded-lg p-3 border border-[#176B45]/15">
                  <TheoreticalContentView content={practicalText} isFullscreen={false} />
                </div>
              )}

              <div className="pt-1 border-t border-[#176B45]/15 space-y-1">
                <div className="text-[11px] font-bold text-[#176B45] flex items-center gap-1">
                  <HelpCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{t('implementationHintHeading')}</span>
                </div>
                <p className="text-xs text-[#252B27] leading-relaxed">
                  {currentLesson.expectedOutputHint}
                </p>
              </div>
            </div>

            {/* Fast AI Helper call button */}
            <button
              onClick={handleAskAiWithCode}
              className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#176B45] to-[#0f482e] hover:brightness-110 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm cursor-pointer transition-all shrink-0"
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
            lessonId={currentLesson.id}
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

      {/* Fullscreen Theoretical Reader Overlay (Responsive on Desktop & Mobile) */}
      {isTheoryFullscreen && (
        <div
          className="fixed inset-0 z-50 bg-[#FAF8F2] flex flex-col overflow-hidden"
          role="dialog"
          aria-modal="true"
          aria-label={lessonTitleDisplay}
        >
          {/* Fullscreen Reader Header */}
          <header className="bg-white border-b border-[#dbe6df] px-4 sm:px-8 py-3.5 flex flex-wrap items-center justify-between gap-3 shrink-0 shadow-2xs">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-9 h-9 rounded-xl bg-[#E8F2EC] border border-[#176B45]/20 flex items-center justify-center text-[#176B45] shrink-0">
                <BookOpen className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[11px] font-bold text-[#C6A34A] truncate">
                    {moduleTitleDisplay}
                  </span>
                  <span className="text-[11px] text-gray-400">•</span>
                  <span className="text-[11px] font-semibold text-gray-500">
                    {currentLesson.duration}
                  </span>
                </div>
                <h2 className="text-sm sm:text-lg font-bold text-[#176B45] truncate">
                  {lessonTitleDisplay}
                </h2>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={jumpToPracticalExercise}
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#FAF8F2] hover:bg-[#E8F2EC] text-[#176B45] border border-[#176B45]/25 text-xs font-bold transition-colors cursor-pointer"
              >
                <Wrench className="w-3.5 h-3.5" />
                <span>{language === 'ar' ? 'الانتقال للتمرين العملي' : 'Go to Practice'}</span>
              </button>

              <button
                type="button"
                onClick={closeTheoryFullscreen}
                className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl bg-[#176B45] hover:bg-[#0f482e] text-white text-xs sm:text-sm font-bold shadow-xs transition-colors cursor-pointer"
                title={t('closeFullscreenBtn')}
              >
                <Minimize2 className="w-4 h-4" />
                <span>{t('closeFullscreenBtn')}</span>
              </button>
            </div>
          </header>

          {/* Fullscreen Scrollable Reading Body */}
          <div
            ref={fullscreenScrollRef}
            onScroll={handleFullscreenScroll}
            className="flex-1 overflow-y-auto px-3 sm:px-8 py-6 sm:py-10 select-text"
          >
            <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-[#dbe6df] p-5 sm:p-8 md:p-10 shadow-sm space-y-6">
              {/* Lesson Objective Banner in Reader */}
              <div className="bg-[#FAF8F2] p-4 sm:p-5 rounded-xl border border-[#C6A34A]/35 space-y-1.5">
                <div className="flex items-center gap-2 text-sm font-bold text-[#176B45]">
                  <Lightbulb className="w-4 h-4 text-[#C6A34A]" />
                  <span>{t('academicObjectiveHeading')}</span>
                </div>
                <p className="text-sm sm:text-base text-[#252B27] leading-relaxed">
                  {currentLesson.objective}
                </p>
              </div>

              {/* Expanded Readable Theoretical Content */}
              <TheoreticalContentView content={theoryText} isFullscreen={true} />

              {/* Video Learning Resources Section at End of Theory */}
              {renderVideoResourcesCard(true)}

              {/* Bottom Reader Navigation Bar */}
              <div className="pt-6 border-t border-[#E8F2EC] flex flex-wrap items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={closeTheoryFullscreen}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#dbe6df] hover:border-[#176B45] hover:bg-[#E8F2EC] text-[#176B45] text-sm font-bold transition-colors cursor-pointer"
                >
                  <Minimize2 className="w-4 h-4" />
                  <span>{t('closeFullscreenBtn')}</span>
                </button>

                <button
                  type="button"
                  onClick={jumpToPracticalExercise}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#C6A34A] hover:bg-[#b2903b] text-white text-sm font-bold shadow-xs transition-colors cursor-pointer"
                >
                  <Wrench className="w-4 h-4" />
                  <span>
                    {language === 'ar' ? 'تطبيق التمرين العملي الآن' : 'Practice in Code Editor'}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
