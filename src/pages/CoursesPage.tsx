import React, { useState } from 'react';
import { initialCourses } from '../data/coursesData';
import { useAuth } from '../context/AuthContext';
import { 
  Search, 
  Filter, 
  BookOpen, 
  Clock, 
  GraduationCap, 
  CheckCircle2, 
  ArrowLeft,
  Sparkles,
  BarChart,
  Play
} from 'lucide-react';

interface CoursesPageProps {
  onSelectCourse: (courseId: string) => void;
  onStartLesson: (courseId: string, lessonId: string) => void;
}

export const CoursesPage: React.FC<CoursesPageProps> = ({
  onSelectCourse,
  onStartLesson,
}) => {
  const { userProfile, enrollCourse } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');

  const filteredCourses = initialCourses.filter((c) => {
    const matchesSearch =
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.titleEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesLevel =
      selectedLevel === 'all' ||
      (selectedLevel === 'beginner' && c.level === 'مبتدئ') ||
      (selectedLevel === 'intermediate' && c.level === 'متوسط') ||
      (selectedLevel === 'advanced' && c.level === 'متقدم');

    return matchesSearch && matchesLevel;
  });

  const getCourseProgress = (courseId: string) => {
    if (!userProfile) return 0;
    const course = initialCourses.find((c) => c.id === courseId);
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
        <div className="bg-white p-8 rounded-3xl border border-[#dbe6df] shadow-xs text-center md:text-right flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F2EC] text-[#176B45] text-xs font-bold mb-3">
              <GraduationCap className="w-4 h-4 text-[#C6A34A]" />
              <span>المقررات الأكاديمية المعتمدة لعام 2026</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-[#252B27]">
              دليل المقررات الأكاديمية الشاملة
            </h1>
            <p className="text-sm text-[#747C76] mt-2 max-w-2xl">
              مسارات دراسية جامعية تغطي كافة ركائز تطوير واجهات الويب المعاصرة مع تطبيقات ومشاريع تطبيقية في كل وحدة.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-center bg-[#E8F2EC] px-4 py-3 rounded-2xl border border-[#176B45]/20">
              <div className="text-xl font-black text-[#176B45]">5</div>
              <div className="text-[11px] font-semibold text-[#252B27]">مقررات أساسية</div>
            </div>
            <div className="text-center bg-[#FAF8F2] px-4 py-3 rounded-2xl border border-[#C6A34A]/30">
              <div className="text-xl font-black text-[#C6A34A]">100%</div>
              <div className="text-[11px] font-semibold text-[#252B27]">تطبيق تفاعلي</div>
            </div>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-white p-4 rounded-2xl border border-[#dbe6df] shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Search */}
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-gray-400 absolute right-3.5 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ابحث عن مقرر، تقنية أو لغة..."
              className="w-full pr-10 pl-4 py-2 border border-gray-200 rounded-xl text-xs sm:text-sm focus:border-[#176B45] focus:outline-hidden"
            />
          </div>

          {/* Level Filter Tabs */}
          <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0 text-xs font-bold">
            <span className="text-[#747C76] ml-2 text-[11px] shrink-0">المستوى:</span>
            <button
              onClick={() => setSelectedLevel('all')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                selectedLevel === 'all'
                  ? 'bg-[#176B45] text-white shadow-2xs'
                  : 'bg-[#FAF8F2] text-[#252B27] hover:bg-[#E8F2EC]'
              }`}
            >
              الكل (5)
            </button>
            <button
              onClick={() => setSelectedLevel('beginner')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                selectedLevel === 'beginner'
                  ? 'bg-[#176B45] text-white shadow-2xs'
                  : 'bg-[#FAF8F2] text-[#252B27] hover:bg-[#E8F2EC]'
              }`}
            >
              مبتدئ
            </button>
            <button
              onClick={() => setSelectedLevel('intermediate')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                selectedLevel === 'intermediate'
                  ? 'bg-[#176B45] text-white shadow-2xs'
                  : 'bg-[#FAF8F2] text-[#252B27] hover:bg-[#E8F2EC]'
              }`}
            >
              متوسط
            </button>
            <button
              onClick={() => setSelectedLevel('advanced')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                selectedLevel === 'advanced'
                  ? 'bg-[#176B45] text-white shadow-2xs'
                  : 'bg-[#FAF8F2] text-[#252B27] hover:bg-[#E8F2EC]'
              }`}
            >
              متقدم (مشروع تخرج)
            </button>
          </div>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => {
            const progress = getCourseProgress(course.id);
            const isEnrolled = userProfile?.enrolledCourseIds.includes(course.id);
            const firstLessonId = course.modules[0]?.lessons[0]?.id || 'html-1';

            return (
              <div
                key={course.id}
                className="bg-white rounded-3xl border border-[#dbe6df] overflow-hidden shadow-xs hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Visual Header */}
                  <div className="p-6 bg-gradient-to-br from-[#176B45] to-[#125034] text-white relative">
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-white/20 text-[#FAF8F2]">
                        {course.category}
                      </span>
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#C6A34A] text-white shadow-xs">
                        {course.level}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#FAF8F2] transition-colors leading-snug">
                      {course.title}
                    </h3>
                    <div className="text-xs text-white/70 font-mono tracking-wide" dir="ltr">
                      {course.titleEn}
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="p-6 space-y-4">
                    <p className="text-xs sm:text-sm text-[#747C76] line-clamp-3 leading-relaxed">
                      {course.shortDescription}
                    </p>

                    {/* Metadata Specs */}
                    <div className="grid grid-cols-2 gap-3 py-3 border-y border-[#f1f4f2] text-xs text-[#252B27]">
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-[#176B45]" />
                        <span>{course.totalLessons} درساً تفاعلياً</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#C6A34A]" />
                        <span>{course.duration}</span>
                      </div>
                    </div>

                    {/* Progress Indicator */}
                    <div className="space-y-1.5 pt-1">
                      <div className="flex justify-between text-xs font-semibold">
                        <span className="text-[#747C76]">مستوى الإنجاز في المقرر:</span>
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

                {/* Footer Buttons */}
                <div className="p-6 pt-0 flex items-center gap-2.5">
                  <button
                    onClick={() => {
                      enrollCourse(course.id);
                      onStartLesson(course.id, firstLessonId);
                    }}
                    className="flex-1 py-3 px-4 rounded-xl bg-[#176B45] hover:bg-[#0f482e] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#176B45]/20 hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                  >
                    <Play className="w-4 h-4 fill-white" />
                    <span>{progress > 0 ? 'متابعة التعلم' : 'ابدأ التعلم الآن'}</span>
                  </button>

                  <button
                    onClick={() => onSelectCourse(course.id)}
                    className="py-3 px-3.5 rounded-xl border border-gray-200 hover:border-[#176B45] hover:bg-[#E8F2EC] text-[#252B27] text-xs font-bold transition-all cursor-pointer"
                    title="الاطلاع على الخطة الدراسية"
                  >
                    المنهج
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
