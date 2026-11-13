import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { 
  Search, 
  BookOpen, 
  Clock, 
  GraduationCap, 
  Play, 
  Layers, 
  Sparkles,
  Code2,
  Server,
  Rocket
} from 'lucide-react';

interface CoursesPageProps {
  onSelectCourse: (courseId: string) => void;
  onStartLesson: (courseId: string, lessonId: string) => void;
}

export const CoursesPage: React.FC<CoursesPageProps> = ({
  onSelectCourse,
  onStartLesson,
}) => {
  const { courses, userProfile, enrollCourse, language, t } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [selectedTrack, setSelectedTrack] = useState<string>('all');

  const isAr = language === 'ar';

  const filteredCourses = courses.filter((c) => {
    const title = isAr ? c.title : c.titleEn;
    const desc = isAr ? c.shortDescription : c.shortDescriptionEn;

    const matchesSearch =
      title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.category.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesLevel =
      selectedLevel === 'all' ||
      (selectedLevel === 'beginner' && (c.level === 'مبتدئ' || c.levelEn === 'Beginner')) ||
      (selectedLevel === 'intermediate' && (c.level === 'متوسط' || c.levelEn === 'Intermediate')) ||
      (selectedLevel === 'advanced' && (c.level === 'متقدم' || c.levelEn === 'Advanced'));

    const matchesTrack =
      selectedTrack === 'all' ||
      (selectedTrack === 'frontend' && (c.track === 'frontend' || (!c.track && c.category.includes('الويب')))) ||
      (selectedTrack === 'backend' && (c.track === 'backend' || c.category.includes('الواجهة الخلفية') || c.category.includes('قواعد'))) ||
      (selectedTrack === 'fullstack' && (c.track === 'fullstack' || c.category.includes('مشروع')));

    return matchesSearch && matchesLevel && matchesTrack;
  });

  const getCourseProgress = (courseId: string) => {
    if (!userProfile) return 0;
    const course = courses.find((c) => c.id === courseId);
    if (!course) return 0;

    let totalLessonsCount = 0;
    let completedCount = 0;

    course.modules.forEach((mod) => {
      mod.lessons.forEach((les) => {
        totalLessonsCount++;
        if (userProfile.completedLessonIds.includes(les.id)) {
          completedCount++;
        }
      });
    });

    if (totalLessonsCount === 0) return 0;
    return Math.round((completedCount / totalLessonsCount) * 100);
  };

  return (
    <div className="bg-[#FAF8F2] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Page Header */}
        <div className={`bg-white p-8 rounded-3xl border border-[#dbe6df] shadow-xs text-center ${isAr ? 'md:text-right' : 'md:text-left'} flex flex-col md:flex-row justify-between items-center gap-6`}>
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F2EC] text-[#176B45] text-xs font-bold mb-3">
              <GraduationCap className="w-4 h-4 text-[#C6A34A]" />
              <span>{isAr ? 'المنهج الشامل: من الصفر حتى بناء موقع متكامل ونشره' : 'Complete 11-Level Curriculum: Zero to Deployed Production Website'}</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-[#252B27]">
              {t('coursesPageTitle')}
            </h1>
            <p className="text-sm text-[#747C76] mt-2 max-w-2xl leading-relaxed">
              {isAr
                ? 'خطة دراسية متكاملة مقسمة إلى 3 مسارات رئيسية و 11 مستوى تعليمي مع مشاريع عملية وتطبيقات برمجية في كل مرحلة.'
                : 'A structured curriculum divided into 3 specialized tracks and 11 progressive levels, with hands-on coding labs and real-world projects in every level.'}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-center bg-[#E8F2EC] px-4 py-3 rounded-2xl border border-[#176B45]/20">
              <div className="text-xl font-black text-[#176B45]">{courses.length}</div>
              <div className="text-[11px] font-semibold text-[#252B27]">{isAr ? 'مستويات دراسية' : 'Learning Levels'}</div>
            </div>
            <div className="text-center bg-[#FAF8F2] px-4 py-3 rounded-2xl border border-[#C6A34A]/30">
              <div className="text-xl font-black text-[#C6A34A]">3</div>
              <div className="text-[11px] font-semibold text-[#252B27]">{isAr ? 'مسارات تخصصية' : 'Core Tracks'}</div>
            </div>
          </div>
        </div>

        {/* 3 Main Tracks Selector */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 bg-white p-2.5 rounded-2xl border border-[#dbe6df] shadow-2xs text-xs font-bold">
          <button
            onClick={() => setSelectedTrack('all')}
            className={`py-3 px-4 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
              selectedTrack === 'all'
                ? 'bg-[#176B45] text-white shadow-sm'
                : 'text-[#252B27] hover:bg-[#FAF8F2]'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>{isAr ? 'كافة المقررات والمستويات' : 'All Levels & Tracks'} ({courses.length})</span>
          </button>

          <button
            onClick={() => setSelectedTrack('frontend')}
            className={`py-3 px-4 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
              selectedTrack === 'frontend'
                ? 'bg-[#176B45] text-white shadow-sm'
                : 'text-[#252B27] hover:bg-[#FAF8F2]'
            }`}
          >
            <Code2 className="w-4 h-4 text-[#C6A34A]" />
            <span>{isAr ? 'مسار الواجهات (Frontend)' : 'Frontend Track'}</span>
          </button>

          <button
            onClick={() => setSelectedTrack('backend')}
            className={`py-3 px-4 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
              selectedTrack === 'backend'
                ? 'bg-[#176B45] text-white shadow-sm'
                : 'text-[#252B27] hover:bg-[#FAF8F2]'
            }`}
          >
            <Server className="w-4 h-4 text-[#C6A34A]" />
            <span>{isAr ? 'مسار الخادم والبيانات (Backend)' : 'Backend & DB Track'}</span>
          </button>

          <button
            onClick={() => setSelectedTrack('fullstack')}
            className={`py-3 px-4 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 ${
              selectedTrack === 'fullstack'
                ? 'bg-[#176B45] text-white shadow-sm'
                : 'text-[#252B27] hover:bg-[#FAF8F2]'
            }`}
          >
            <Rocket className="w-4 h-4 text-[#C6A34A]" />
            <span>{isAr ? 'مسار النشر والمشروع الشامل' : 'Full-Stack & Cloud'}</span>
          </button>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-white p-4 rounded-2xl border border-[#dbe6df] shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:w-80">
            <Search className={`w-4 h-4 text-gray-400 absolute ${isAr ? 'right-3.5' : 'left-3.5'} top-3`} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('searchCoursesPlaceholder')}
              className={`w-full ${isAr ? 'pr-10 pl-4' : 'pl-10 pr-4'} py-2 border border-gray-200 rounded-xl text-xs sm:text-sm focus:border-[#176B45] focus:outline-hidden`}
            />
          </div>

          <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0 text-xs font-bold">
            <span className="text-[#747C76] text-[11px] shrink-0">{t('levelFilterLabel')}</span>
            <button
              onClick={() => setSelectedLevel('all')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                selectedLevel === 'all'
                  ? 'bg-[#176B45] text-white shadow-2xs'
                  : 'bg-[#FAF8F2] text-[#252B27] hover:bg-[#E8F2EC]'
              }`}
            >
              {t('filterAll')}
            </button>
            <button
              onClick={() => setSelectedLevel('beginner')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                selectedLevel === 'beginner'
                  ? 'bg-[#176B45] text-white shadow-2xs'
                  : 'bg-[#FAF8F2] text-[#252B27] hover:bg-[#E8F2EC]'
              }`}
            >
              {t('filterBeginner')}
            </button>
            <button
              onClick={() => setSelectedLevel('intermediate')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                selectedLevel === 'intermediate'
                  ? 'bg-[#176B45] text-white shadow-2xs'
                  : 'bg-[#FAF8F2] text-[#252B27] hover:bg-[#E8F2EC]'
              }`}
            >
              {t('filterIntermediate')}
            </button>
            <button
              onClick={() => setSelectedLevel('advanced')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                selectedLevel === 'advanced'
                  ? 'bg-[#176B45] text-white shadow-2xs'
                  : 'bg-[#FAF8F2] text-[#252B27] hover:bg-[#E8F2EC]'
              }`}
            >
              {t('filterAdvanced')}
            </button>
          </div>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => {
            const progress = getCourseProgress(course.id);
            const firstLessonId = course.modules[0]?.lessons[0]?.id || 'html-1';

            return (
              <div
                key={course.id}
                className="bg-white rounded-3xl border border-[#dbe6df] overflow-hidden shadow-xs hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Visual Header with Image */}
                  <div className="relative h-48 w-full bg-[#176B45] overflow-hidden">
                    {course.imageUrl ? (
                      <img
                        src={course.imageUrl}
                        alt={isAr ? course.title : course.titleEn}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-[#176B45] to-[#0f482e] flex items-center justify-center text-white">
                        <BookOpen className="w-12 h-12 text-[#C6A34A]" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"></div>

                    <div className="absolute top-3 inset-x-3 flex justify-between items-start">
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-[#FAF8F2] border border-white/30">
                        {course.category}
                      </span>
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#C6A34A] text-white shadow-xs">
                        {isAr ? course.level : course.levelEn}
                      </span>
                    </div>

                    <div className="absolute bottom-3 inset-x-3 text-start">
                      <h3 className="text-base sm:text-lg font-bold text-white drop-shadow-sm leading-snug">
                        {isAr ? course.title : course.titleEn}
                      </h3>
                      <div className="text-[11px] text-white/70 font-mono tracking-wide" dir="ltr">
                        {isAr ? course.titleEn : course.title}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 space-y-4 text-start">
                    <p className="text-xs sm:text-sm text-[#747C76] line-clamp-2 leading-relaxed">
                      {isAr ? course.shortDescription : course.shortDescriptionEn}
                    </p>

                    {/* Practical Hands-on Project Callout */}
                    {course.practicalProject && (
                      <div className="p-3 bg-[#FAF8F2] rounded-xl border border-[#C6A34A]/30 space-y-1">
                        <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#176B45]">
                          <Sparkles className="w-3.5 h-3.5 text-[#C6A34A]" />
                          <span>{isAr ? 'المشروع العملي التطبيقي:' : 'Hands-on Project:'}</span>
                        </div>
                        <p className="text-xs text-[#252B27] font-semibold leading-relaxed line-clamp-1">
                          {isAr ? course.practicalProject.title : course.practicalProject.titleEn}
                        </p>
                      </div>
                    )}

                    <div className="grid grid-cols-2 gap-3 py-3 border-y border-[#f1f4f2] text-xs text-[#252B27]">
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-[#176B45]" />
                        <span>{course.modules?.reduce((acc, m) => acc + (m.lessons?.length || 0), 0) || course.totalLessons} {t('lessonsCountSuffix')}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#C6A34A]" />
                        <span>{course.duration}</span>
                      </div>
                    </div>

                    <div className="space-y-1.5 pt-1">
                      <div className="flex justify-between text-xs font-semibold">
                        <span className="text-[#747C76]">{t('courseProgressLabel')}</span>
                        <span className="text-[#176B45] font-bold">{progress}%</span>
                      </div>
                      <div className="h-2 w-full bg-[#E8F2EC] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#176B45] to-[#C6A34A] transition-all duration-500 rounded-full"
                          style={{ width: `${progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center gap-2.5">
                  <button
                    onClick={() => {
                      enrollCourse(course.id);
                      onStartLesson(course.id, firstLessonId);
                    }}
                    className="flex-1 py-3 px-4 rounded-xl bg-[#176B45] hover:bg-[#0f482e] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#176B45]/20 hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                  >
                    <Play className="w-4 h-4 fill-white" />
                    <span>{progress > 0 ? t('continueCourse') : t('startCourseNow')}</span>
                  </button>

                  <button
                    onClick={() => onSelectCourse(course.id)}
                    className="py-3 px-3.5 rounded-xl border border-gray-200 hover:border-[#176B45] hover:bg-[#E8F2EC] text-[#252B27] text-xs font-bold transition-all cursor-pointer"
                    title={t('viewCurriculumBtn')}
                  >
                    {t('viewCurriculumBtn')}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
