import React from 'react';
import { badgesList } from '../data/coursesData';
import { Badge } from '../types';
import { useAuth } from '../context/AuthContext';
import { 
  Award, 
  BookOpen, 
  CheckCircle2, 
  Play, 
  TrendingUp, 
  Calendar, 
  Code2, 
  FileQuestion 
} from 'lucide-react';

interface StudentDashboardPageProps {
  onSelectCourse: (courseId: string) => void;
  onStartLesson: (courseId: string, lessonId: string) => void;
  setCurrentView: (view: string) => void;
}

export const StudentDashboardPage: React.FC<StudentDashboardPageProps> = ({
  onSelectCourse,
  onStartLesson,
  setCurrentView,
}) => {
  const { userProfile, courses, language, t } = useAuth();
  const isAr = language === 'ar';

  const profile = userProfile || {
    uid: 'guest',
    displayName: isAr ? 'أحمد بن عبد الرحمن' : 'Ahmed Al-Mansour',
    email: 'student@university.edu.sa',
    academicId: 'CS-2026-8841',
    university: 'الجامعة الوطنية الخاصة',
    role: 'student' as const,
    enrolledCourseIds: ['html-fundamentals', 'css-responsive', 'javascript-programming'],
    completedLessonIds: ['html-1'],
    quizScores: { 'html-fundamentals': 85 },
    points: 340,
    badges: ['first-step', 'html-master'],
  };

  // Calculate stats
  const enrolledCourses = courses.filter((c) =>
    profile.enrolledCourseIds.includes(c.id)
  );

  let totalAvailableLessons = 0;
  courses.forEach((c) => {
    c.modules?.forEach((m) => {
      totalAvailableLessons += m.lessons?.length || 0;
    });
  });

  const completedCount = profile.completedLessonIds.length;
  const overallProgress = totalAvailableLessons
    ? Math.round((completedCount / totalAvailableLessons) * 100)
    : 0;

  // Mock weekly activity data
  const weeklyActivity = isAr ? [
    { day: 'السبت', hours: 2.5 },
    { day: 'الأحد', hours: 4.0 },
    { day: 'الإثنين', hours: 3.2 },
    { day: 'الثلاثاء', hours: 5.5 },
    { day: 'الأربعاء', hours: 2.0 },
    { day: 'الخميس', hours: 4.8 },
    { day: 'الجمعة', hours: 1.5 },
  ] : [
    { day: 'Sat', hours: 2.5 },
    { day: 'Sun', hours: 4.0 },
    { day: 'Mon', hours: 3.2 },
    { day: 'Tue', hours: 5.5 },
    { day: 'Wed', hours: 2.0 },
    { day: 'Thu', hours: 4.8 },
    { day: 'Fri', hours: 1.5 },
  ];

  const maxHours = Math.max(...weeklyActivity.map((d) => d.hours));

  return (
    <div className="bg-[#FAF8F2] min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Welcome Banner */}
        <div className={`bg-white rounded-3xl border border-[#dbe6df] shadow-xs p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 ${isAr ? 'text-right' : 'text-left'}`}>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#176B45] to-[#0f482e] text-white flex items-center justify-center text-2xl font-black shadow-md shadow-[#176B45]/20 shrink-0">
              {profile.displayName ? profile.displayName.charAt(0) : 'S'}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-extrabold text-[#252B27]">
                  {t('welcomeStudentPrefix')} {profile.displayName}
                </h1>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#E8F2EC] text-[#176B45] border border-[#176B45]/30">
                  {t('regularStudentBadge')}
                </span>
              </div>
              <p className="text-xs text-[#747C76] mt-1 flex flex-wrap items-center gap-3">
                <span>{t('academicIdPrefix')} <strong className="font-mono text-[#176B45]">{profile.academicId || 'CS-2026-8841'}</strong></span>
                <span>•</span>
                <span>{profile.university || (isAr ? 'الجامعة الوطنية الخاصة' : 'National Private University')}</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setCurrentView('workspace')}
              className="px-5 py-2.5 rounded-xl bg-[#176B45] hover:bg-[#0f482e] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#176B45]/20 flex items-center gap-2 cursor-pointer transition-all"
            >
              <Code2 className="w-4 h-4" />
              <span>{t('continueInIdeBtn')}</span>
            </button>
          </div>
        </div>

        {/* 4 Overview Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-white p-5 rounded-2xl border border-[#dbe6df] shadow-xs">
            <div className="flex justify-between items-start mb-2">
              <span className="text-xs font-semibold text-[#747C76]">{t('overallProgressCard')}</span>
              <div className="p-2 rounded-lg bg-[#E8F2EC] text-[#176B45]">
                <TrendingUp className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl font-black text-[#176B45]">{overallProgress}%</div>
            <div className="w-full bg-[#E8F2EC] h-1.5 rounded-full mt-3 overflow-hidden">
              <div className="bg-[#176B45] h-full rounded-full" style={{ width: `${overallProgress}%` }}></div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#dbe6df] shadow-xs">
            <div className="flex justify-between items-start mb-2">
              <span className="text-xs font-semibold text-[#747C76]">{t('enrolledCoursesCard')}</span>
              <div className="p-2 rounded-lg bg-[#FAF8F2] text-[#C6A34A]">
                <BookOpen className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl font-black text-[#252B27]">
              {enrolledCourses.length} <span className="text-xs font-normal text-gray-500">/ {courses.length}</span>
            </div>
            <p className="text-[11px] text-[#747C76] mt-2">{t('activeSpecializedTracks')}</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#dbe6df] shadow-xs">
            <div className="flex justify-between items-start mb-2">
              <span className="text-xs font-semibold text-[#747C76]">{t('completedLessonsCard')}</span>
              <div className="p-2 rounded-lg bg-[#E8F2EC] text-[#176B45]">
                <CheckCircle2 className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl font-black text-[#176B45]">
              {completedCount} <span className="text-xs font-normal text-gray-500">{t('lessonsCountSuffix')}</span>
            </div>
            <p className="text-[11px] text-[#747C76] mt-2">{t('successfullyApplied')}</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#dbe6df] shadow-xs">
            <div className="flex justify-between items-start mb-2">
              <span className="text-xs font-semibold text-[#747C76]">{t('pointsAndBadgesCard')}</span>
              <div className="p-2 rounded-lg bg-[#FAF8F2] text-[#C6A34A]">
                <Award className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl font-black text-[#C6A34A]">
              {profile.points} <span className="text-xs font-normal text-gray-500">{t('pointsCount')}</span>
            </div>
            <p className="text-[11px] text-[#747C76] mt-2">{profile.badges.length} {t('honoraryBadgesCount')}</p>
          </div>
        </div>

        {/* Middle Section: Enrolled Courses & Learning Activity Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Enrolled Courses List */}
          <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-3xl border border-[#dbe6df] shadow-xs space-y-6">
            <div className="flex justify-between items-center pb-2 border-b border-gray-100">
              <h2 className="text-lg font-bold text-[#176B45] flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#C6A34A]" />
                <span>{t('currentCoursesHeading')}</span>
              </h2>
              <button
                onClick={() => setCurrentView('courses')}
                className="text-xs font-bold text-[#176B45] hover:underline cursor-pointer"
              >
                {t('browseAllCoursesLink')}
              </button>
            </div>

            <div className="space-y-4">
              {enrolledCourses.length === 0 ? (
                <div className="text-center py-8 text-gray-500 text-xs">
                  {t('noEnrolledCoursesYet')}
                </div>
              ) : (
                enrolledCourses.map((course) => {
                  let courseLessonsCount = 0;
                  let courseCompletedCount = 0;
                  course.modules?.forEach((m) => {
                    m.lessons?.forEach((l) => {
                      courseLessonsCount++;
                      if (profile.completedLessonIds.includes(l.id)) courseCompletedCount++;
                    });
                  });
                  const progress = courseLessonsCount
                    ? Math.round((courseCompletedCount / courseLessonsCount) * 100)
                    : 0;

                  return (
                    <div
                      key={course.id}
                      className="p-5 rounded-2xl border border-gray-200 hover:border-[#176B45] transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-[#FAF8F2]/30"
                    >
                      <div className="space-y-1.5 flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#E8F2EC] text-[#176B45]">
                            {isAr ? course.level : course.levelEn}
                          </span>
                          <h4 className="text-sm sm:text-base font-bold text-[#252B27]">
                            {isAr ? course.title : course.titleEn}
                          </h4>
                        </div>
                        <div className="w-full max-w-md bg-gray-200 h-2 rounded-full overflow-hidden">
                          <div
                            className="bg-[#176B45] h-full rounded-full"
                            style={{ width: `${progress}%` }}
                          ></div>
                        </div>
                        <div className="text-[11px] text-[#747C76] flex items-center gap-3">
                          <span>{isAr ? `${courseCompletedCount} من ${courseLessonsCount} دروس مكتملة` : `${courseCompletedCount} of ${courseLessonsCount} lessons completed`}</span>
                          <span>•</span>
                          <span>{t('progressRatePrefix')} {progress}%</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => {
                            const firstIncomplete = course.modules?.[0]?.lessons?.[0]?.id || 'html-1';
                            onStartLesson(course.id, firstIncomplete);
                          }}
                          className="px-4 py-2 rounded-xl bg-[#176B45] hover:bg-[#0f482e] text-white text-xs font-bold flex items-center gap-1.5 shadow-2xs transition-colors cursor-pointer"
                        >
                          <Play className="w-3.5 h-3.5 fill-white" />
                          <span>{t('continueBtn')}</span>
                        </button>
                        <button
                          onClick={() => onSelectCourse(course.id)}
                          className="px-3 py-2 rounded-xl border border-gray-200 hover:bg-white text-xs font-bold text-[#252B27] cursor-pointer"
                        >
                          {t('detailsBtn')}
                        </button>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>

          {/* Activity & Quiz Performance */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Weekly Activity Bar Chart */}
            <div className="bg-white p-6 rounded-3xl border border-[#dbe6df] shadow-xs space-y-4">
              <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                <h3 className="text-sm font-bold text-[#176B45] flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-[#C6A34A]" />
                  <span>{t('weeklyActivityHeading')}</span>
                </h3>
                <span className="text-[11px] text-[#747C76]">{t('weeklyHoursCount')}</span>
              </div>

              <div className="h-44 flex items-end justify-between gap-2 pt-6 pb-2">
                {weeklyActivity.map((d, i) => {
                  const heightPercent = Math.round((d.hours / maxHours) * 100);
                  return (
                    <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
                      <div className="text-[10px] text-gray-500 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                        {d.hours}h
                      </div>
                      <div className="w-full bg-[#E8F2EC] rounded-t-lg h-32 relative overflow-hidden flex items-end">
                        <div
                          className="w-full bg-[#176B45] group-hover:bg-[#C6A34A] transition-all rounded-t-lg"
                          style={{ height: `${heightPercent}%` }}
                        ></div>
                      </div>
                      <span className="text-[10px] font-semibold text-gray-600 truncate">
                        {d.day}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quiz Scores Overview */}
            <div className="bg-white p-6 rounded-3xl border border-[#dbe6df] shadow-xs space-y-3">
              <h3 className="text-sm font-bold text-[#176B45] flex items-center gap-1.5 pb-2 border-b border-gray-100">
                <FileQuestion className="w-4 h-4 text-[#C6A34A]" />
                <span>{t('quizResultsHeading')}</span>
              </h3>
              <div className="space-y-2.5">
                {Object.keys(profile.quizScores).length === 0 ? (
                  <p className="text-xs text-gray-500 italic">{t('noQuizzesTakenYet')}</p>
                ) : (
                  Object.entries(profile.quizScores).map(([cId, score]) => {
                    const c = courses.find((item) => item.id === cId);
                    return (
                      <div key={cId} className="flex justify-between items-center text-xs p-2.5 rounded-xl bg-[#FAF8F2] border border-gray-100">
                        <span className="font-bold text-[#252B27] truncate">
                          {c ? (isAr ? c.title : c.titleEn) : cId}
                        </span>
                        <span className="font-mono font-bold text-[#176B45] bg-[#E8F2EC] px-2 py-0.5 rounded">
                          {score}%
                        </span>
                      </div>
                    );
                  })
                )}
              </div>
            </div>

          </div>

        </div>

        {/* Badges Section */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#dbe6df] shadow-xs space-y-6">
          <div className="flex justify-between items-center pb-2 border-b border-gray-100">
            <div>
              <h2 className="text-lg font-bold text-[#176B45] flex items-center gap-2">
                <Award className="w-5 h-5 text-[#C6A34A]" />
                <span>{t('badgesHeading')}</span>
              </h2>
              <p className="text-xs text-[#747C76] mt-0.5">
                {t('badgesSub')}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {badgesList.map((badge: Badge) => {
              const isUnlocked = profile.badges.includes(badge.id);

              return (
                <div
                  key={badge.id}
                  className={`p-4 rounded-2xl border text-center transition-all flex flex-col items-center justify-between ${
                    isUnlocked
                      ? 'bg-gradient-to-b from-[#FAF8F2] to-white border-[#C6A34A]/50 shadow-xs'
                      : 'bg-gray-50 border-gray-200 opacity-40 grayscale'
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-3 text-white shadow-xs ${
                      isUnlocked ? 'bg-[#176B45]' : 'bg-gray-400'
                    }`}
                  >
                    <Award className="w-6 h-6 text-[#C6A34A]" />
                  </div>
                  <h4 className="text-xs font-bold text-[#252B27] mb-1">
                    {isAr ? badge.title : badge.titleEn}
                  </h4>
                  <p className="text-[10px] text-[#747C76] leading-tight line-clamp-2">
                    {badge.description}
                  </p>
                  <span
                    className={`text-[9px] font-bold mt-2 px-2 py-0.5 rounded-full ${
                      isUnlocked ? 'bg-[#E8F2EC] text-[#176B45]' : 'bg-gray-200 text-gray-500'
                    }`}
                  >
                    {isUnlocked ? t('badgeUnlockedBadge') : t('badgeInProgressBadge')}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};
