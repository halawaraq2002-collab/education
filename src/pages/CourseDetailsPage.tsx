import React, { useState } from 'react';
import { Course } from '../types';
import { useAuth } from '../context/AuthContext';
import { QuizModal } from '../components/QuizModal';
import { 
  BookOpen, 
  Clock, 
  GraduationCap, 
  CheckCircle2, 
  Play, 
  Award, 
  ChevronRight, 
  ChevronLeft,
  ShieldCheck,
  Code2,
  FileQuestion,
  Sparkles
} from 'lucide-react';

interface CourseDetailsPageProps {
  course: Course;
  onBack: () => void;
  onStartLesson: (courseId: string, lessonId: string) => void;
}

export const CourseDetailsPage: React.FC<CourseDetailsPageProps> = ({
  course,
  onBack,
  onStartLesson,
}) => {
  const { userProfile, enrollCourse, language, t } = useAuth();
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  const isAr = language === 'ar';
  const quizScore = userProfile?.quizScores[course.id];

  // Calculate overall progress
  let totalLessons = 0;
  let completedCount = 0;
  course.modules?.forEach((mod) => {
    mod.lessons?.forEach((les) => {
      totalLessons++;
      if (userProfile?.completedLessonIds.includes(les.id)) {
        completedCount++;
      }
    });
  });
  const progressPercent = totalLessons ? Math.round((completedCount / totalLessons) * 100) : 0;
  const firstLessonId = course.modules?.[0]?.lessons?.[0]?.id || 'html-1';

  return (
    <div className="bg-[#FAF8F2] min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Breadcrumb / Back button */}
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#176B45] hover:text-[#0f482e] bg-white px-3.5 py-2 rounded-xl border border-[#dbe6df] shadow-2xs transition-colors cursor-pointer"
        >
          {isAr ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          <span>{t('backToCoursesList')}</span>
        </button>

        {/* Hero Course Header with Image */}
        <div className="bg-white rounded-3xl border border-[#dbe6df] shadow-xs overflow-hidden">
          <div className="relative">
            {/* Background Image with Gradient Overlay */}
            {course.imageUrl && (
              <div className="absolute inset-0 h-full w-full">
                <img src={course.imageUrl} alt={course.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#176B45]/95 via-[#145b3a]/90 to-[#0f482e]/85"></div>
              </div>
            )}

            <div className={`relative p-8 sm:p-12 text-white ${!course.imageUrl ? 'bg-gradient-to-r from-[#176B45] via-[#145b3a] to-[#0f482e]' : ''}`}>
              <div className="max-w-3xl space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#C6A34A] text-white">
                    {isAr ? course.level : course.levelEn}
                  </span>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/20 text-[#FAF8F2] backdrop-blur-xs">
                    {course.category}
                  </span>
                  <span className="text-xs text-white/80 font-mono" dir="ltr">
                    {t('courseIdLabel')} {course.id}
                  </span>
                </div>

                <h1 className="text-2xl sm:text-4xl font-extrabold font-['Cairo']">
                  {isAr ? course.title : course.titleEn}
                </h1>

                <div className="text-sm text-white/80 font-mono tracking-wide" dir="ltr">
                  {isAr ? course.titleEn : course.title}
                </div>

                <p className="text-sm sm:text-base text-gray-200 leading-relaxed pt-2">
                  {isAr ? course.shortDescription : course.shortDescriptionEn}
                </p>

                {/* Action Buttons */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => {
                      enrollCourse(course.id);
                      onStartLesson(course.id, firstLessonId);
                    }}
                    className="px-7 py-3 rounded-xl bg-[#C6A34A] hover:bg-[#b8953d] text-white font-bold text-sm shadow-lg shadow-black/20 flex items-center gap-2 transition-all cursor-pointer active:scale-95"
                  >
                    <Play className="w-4 h-4 fill-white" />
                    <span>{progressPercent > 0 ? t('resumeCurrentLessonBtn') : t('startFirstLessonBtn')}</span>
                  </button>

                  {course.quiz && (
                    <button
                      onClick={() => setIsQuizOpen(true)}
                      className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/30 backdrop-blur-xs flex items-center gap-2 transition-all cursor-pointer"
                    >
                      <FileQuestion className="w-4 h-4 text-[#C6A34A]" />
                      <span>
                        {t('academicQuizBtn')} {quizScore !== undefined ? `(${quizScore}%)` : ''}
                      </span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="bg-[#FAF8F2] px-8 py-4 border-t border-[#dbe6df] flex flex-wrap items-center justify-between gap-6 text-xs text-[#252B27]">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 font-semibold">
                <BookOpen className="w-4 h-4 text-[#176B45]" />
                <span>{course.totalLessons} {t('lessonsCountSuffix')}</span>
              </div>
              <div className="flex items-center gap-2 font-semibold">
                <Clock className="w-4 h-4 text-[#C6A34A]" />
                <span>{course.duration} {t('trainingHoursSuffix')}</span>
              </div>
              <div className="flex items-center gap-2 font-semibold">
                <Award className="w-4 h-4 text-[#176B45]" />
                <span>{t('accreditedCertificate')}</span>
              </div>
            </div>

            {/* Progress Percentage */}
            <div className="flex items-center gap-3">
              <span className="font-bold text-[#747C76]">{t('yourProgressRate')}</span>
              <div className="w-32 h-2.5 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#176B45] rounded-full"
                  style={{ width: `${progressPercent}%` }}
                ></div>
              </div>
              <span className="font-mono font-bold text-[#176B45]">{progressPercent}%</span>
            </div>
          </div>
        </div>

        {/* Content Layout (Overview + Curriculum) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left/Curriculum Column */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Overview Card */}
            <div className={`bg-white p-8 rounded-3xl border border-[#dbe6df] shadow-xs space-y-4 ${isAr ? 'text-right' : 'text-left'}`}>
              <h2 className="text-xl font-bold text-[#176B45] flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#C6A34A]" />
                <span>{t('overviewHeading')}</span>
              </h2>
              <p className="text-sm text-[#252B27] leading-relaxed">
                {course.overview}
              </p>

              {course.learningObjectives?.length > 0 && (
                <div className="pt-4">
                  <h3 className="text-sm font-bold text-[#252B27] mb-3">
                    {t('learningOutcomesHeading')}
                  </h3>
                  <ul className="space-y-2">
                    {course.learningObjectives.map((obj, i) => (
                      <li key={i} className="text-xs sm:text-sm text-[#747C76] flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#176B45] shrink-0 mt-0.5" />
                        <span>{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Curriculum Modules & Lessons */}
            <div className={`bg-white p-8 rounded-3xl border border-[#dbe6df] shadow-xs space-y-6 ${isAr ? 'text-right' : 'text-left'}`}>
              <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                <h2 className="text-xl font-bold text-[#176B45]">
                  {t('curriculumHeading')}
                </h2>
                <span className="text-xs text-[#747C76] font-semibold">
                  {course.modules?.length || 1} {t('unitsCountSuffix')}
                </span>
              </div>

              <div className="space-y-6">
                {course.modules?.map((mod, modIdx) => (
                  <div key={modIdx} className="space-y-3">
                    <div className="bg-[#FAF8F2] p-3.5 rounded-xl border border-[#C6A34A]/30 flex justify-between items-center">
                      <div>
                        <h4 className="text-sm font-bold text-[#176B45]">{isAr ? mod.title : mod.titleEn}</h4>
                        <div className="text-[11px] text-[#747C76] font-mono" dir="ltr">
                          {isAr ? mod.titleEn : mod.title}
                        </div>
                      </div>
                      <span className="text-xs font-bold text-[#C6A34A]">{mod.lessons.length} {t('lessonsCountSuffix')}</span>
                    </div>

                    <div className={`space-y-2 ${isAr ? 'pr-4 border-r-2' : 'pl-4 border-l-2'} border-[#176B45]/20`}>
                      {mod.lessons.map((lesson) => {
                        const isDone = userProfile?.completedLessonIds.includes(lesson.id);

                        return (
                          <div
                            key={lesson.id}
                            className={`p-4 rounded-xl border transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 ${
                              isDone
                                ? 'bg-[#E8F2EC]/40 border-[#176B45]/30'
                                : 'bg-white border-gray-200 hover:border-[#176B45]/50'
                            }`}
                          >
                            <div className="flex items-start gap-3">
                              <div
                                className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                                  isDone
                                    ? 'bg-[#176B45] text-white'
                                    : 'bg-gray-100 text-gray-500'
                                }`}
                              >
                                {isDone ? (
                                  <CheckCircle2 className="w-4 h-4" />
                                ) : (
                                  <Code2 className="w-4 h-4" />
                                )}
                              </div>
                              <div>
                                <h5 className="text-xs sm:text-sm font-bold text-[#252B27]">
                                  {isAr ? lesson.title : lesson.titleEn}
                                </h5>
                                <p className="text-[11px] text-[#747C76] line-clamp-1 mt-0.5">
                                  {lesson.objective}
                                </p>
                              </div>
                            </div>

                            <button
                              onClick={() => {
                                enrollCourse(course.id);
                                onStartLesson(course.id, lesson.id);
                              }}
                              className={`px-4 py-1.5 rounded-lg text-xs font-bold shrink-0 transition-all cursor-pointer ${
                                isDone
                                  ? 'bg-white border border-[#176B45] text-[#176B45] hover:bg-[#E8F2EC]'
                                  : 'bg-[#176B45] text-white hover:bg-[#0f482e] shadow-2xs'
                              }`}
                            >
                              {isDone ? t('repeatExerciseBtn') : t('startLessonBtn')}
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right/Sidebar Info Column */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Academic Accreditation Box */}
            <div className="bg-white p-6 rounded-3xl border border-[#dbe6df] shadow-xs space-y-4 text-center">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-[#E8F2EC] flex items-center justify-center text-[#176B45]">
                <ShieldCheck className="w-8 h-8 text-[#176B45]" />
              </div>
              <h3 className="font-bold text-base text-[#176B45]">
                {t('accreditationTitle')}
              </h3>
              <p className="text-xs text-[#747C76] leading-relaxed">
                {t('accreditationDesc')}
              </p>
              <div className="pt-2 border-t border-gray-100 flex justify-between text-xs text-[#252B27]">
                <span className="text-[#747C76]">{t('academicCredits')}</span>
                <span className="font-bold">{t('threeCreditHours')}</span>
              </div>
              <div className="flex justify-between text-xs text-[#252B27]">
                <span className="text-[#747C76]">{t('evaluationSystem')}</span>
                <span className="font-bold">{t('evalSysDesc')}</span>
              </div>
            </div>

            {/* Quiz Banner */}
            {course.quiz && (
              <div className="bg-gradient-to-br from-[#FAF8F2] to-white p-6 rounded-3xl border-2 border-[#C6A34A]/50 shadow-xs space-y-3">
                <div className="flex items-center gap-2 text-[#C6A34A] text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-4 h-4" />
                  <span>{isAr ? 'تقييم الكفاءة' : 'Competency Test'}</span>
                </div>
                <h4 className="font-bold text-base text-[#176B45]">
                  {t('proficiencyQuizTitle')}
                </h4>
                <p className="text-xs text-[#747C76] leading-relaxed">
                  {t('proficiencyQuizDesc')}
                </p>
                {quizScore !== undefined && (
                  <div className="p-2.5 bg-[#E8F2EC] rounded-xl text-center text-xs font-bold text-[#176B45]">
                    {t('previousScorePrefix')} {quizScore}%
                  </div>
                )}
                <button
                  onClick={() => setIsQuizOpen(true)}
                  className="w-full py-2.5 rounded-xl bg-[#C6A34A] hover:bg-[#b8953d] text-white font-bold text-xs shadow-xs transition-colors cursor-pointer"
                >
                  {quizScore !== undefined ? t('retakeQuizBtn') : t('startQuizNowBtn')}
                </button>
              </div>
            )}

          </div>

        </div>

      </div>

      {/* Quiz Modal */}
      {isQuizOpen && course.quiz && (
        <QuizModal
          quiz={course.quiz}
          courseTitle={isAr ? course.title : course.titleEn}
          onClose={() => setIsQuizOpen(false)}
        />
      )}
    </div>
  );
};
