import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Course } from '../types';
import { 
  Users, 
  BookOpen, 
  ShieldCheck, 
  Search, 
  Plus, 
  Trash2, 
  CheckCircle2, 
  BarChart3, 
  FileQuestion, 
  X, 
  Image as ImageIcon 
} from 'lucide-react';

interface MockStudent {
  id: string;
  name: string;
  academicId: string;
  email: string;
  enrolledCourse: string;
  progress: number;
  gpa: string;
  status: 'نشط' | 'متخرج' | 'تحت المراجعة';
}

const mockStudentsList: MockStudent[] = [
  { id: '1', name: 'أحمد بن عبد الرحمن الأكاديمي', academicId: 'CS-2026-8841', email: 'student@university.edu.sa', enrolledCourse: 'أساسيات HTML5 وبنية الويب', progress: 85, gpa: '3.92', status: 'نشط' },
  { id: '2', name: 'سارة بنت محمد القحطاني', academicId: 'CS-2026-9012', email: 'sara.q@university.edu.sa', enrolledCourse: 'مشروع التخرج: تطوير الواجهات', progress: 100, gpa: '3.98', status: 'متخرج' },
  { id: '3', name: 'خالد بن فيصل الدوسري', academicId: 'CS-2026-7731', email: 'khalid.d@university.edu.sa', enrolledCourse: 'برمجة جافاسكريبت المتقدمة', progress: 60, gpa: '3.45', status: 'نشط' },
  { id: '4', name: 'ريم بنت عبد العزيز الشمري', academicId: 'CS-2026-8190', email: 'reem.sh@university.edu.sa', enrolledCourse: 'تنسيق الصفحات والتصميم المتجاوب', progress: 92, gpa: '3.88', status: 'نشط' },
  { id: '5', name: 'فيصل بن طلال العتيبي', academicId: 'CS-2026-6640', email: 'faisal.o@university.edu.sa', enrolledCourse: 'أساسيات React.js وبناء المكونات', progress: 45, gpa: '3.10', status: 'تحت المراجعة' },
];

export const AdminDashboardPage: React.FC = () => {
  const { language, t, courses, addCourse, deleteCourse, userProfile } = useAuth();
  const [activeTab, setActiveTab] = useState<'students' | 'courses' | 'quizzes' | 'analytics'>('courses');
  const [studentSearch, setStudentSearch] = useState('');
  const [students, setStudents] = useState<MockStudent[]>(mockStudentsList);
  
  // Modal State for adding new course
  const [isAddCourseOpen, setIsAddCourseOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [newCourseForm, setNewCourseForm] = useState<{
    titleAr: string;
    titleEn: string;
    category: string;
    level: 'مبتدئ' | 'متوسط' | 'متقدم';
    levelEn: 'Beginner' | 'Intermediate' | 'Advanced';
    duration: string;
    imageUrl: string;
    descriptionAr: string;
    descriptionEn: string;
    firstLessonTitle: string;
    firstLessonObjective: string;
  }>({
    titleAr: '',
    titleEn: '',
    category: 'Frontend',
    level: 'متوسط',
    levelEn: 'Intermediate',
    duration: '18 ساعة',
    imageUrl: '/src/assets/images/capstone_course_art_1793989838051.jpg',
    descriptionAr: '',
    descriptionEn: '',
    firstLessonTitle: 'مقدمة ونظرة عامة',
    firstLessonObjective: 'التعرف على المفاهيم الأساسية للمادة والتطبيق العملي الأول.',
  });

  const filteredStudents = students.filter(
    (s) =>
      s.name.includes(studentSearch) ||
      s.academicId.includes(studentSearch) ||
      s.email.includes(studentSearch)
  );

  const toggleStudentStatus = (studentId: string) => {
    setStudents((prev) =>
      prev.map((s) => {
        if (s.id !== studentId) return s;
        const nextStatus: MockStudent['status'] =
          s.status === 'نشط' ? 'متخرج' : s.status === 'متخرج' ? 'تحت المراجعة' : 'نشط';
        return { ...s, status: nextStatus };
      })
    );
  };

  const handleCreateCourse = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCourseForm.titleAr.trim()) return;

    setIsSubmitting(true);
    const newId = `course-${Date.now()}`;
    const newCourse: Course = {
      id: newId,
      title: newCourseForm.titleAr,
      titleEn: newCourseForm.titleEn || newCourseForm.titleAr,
      shortDescription: newCourseForm.descriptionAr || 'مقرر دراسي جديد تم اعتماده من العمادة الأكاديمية.',
      shortDescriptionEn: newCourseForm.descriptionEn || 'New academic course accredited by deanship.',
      level: newCourseForm.level,
      levelEn: newCourseForm.levelEn,
      duration: newCourseForm.duration,
      totalLessons: 1,
      category: newCourseForm.category,
      iconName: 'Code',
      color: 'bg-emerald-600',
      imageUrl: newCourseForm.imageUrl,
      overview: newCourseForm.descriptionAr || 'نظرة عامة على المقرر التخصصي الجديد.',
      learningObjectives: [
        newCourseForm.firstLessonObjective,
        'إتقان المهارات العملية والأكاديمية للمقرر',
        'تطبيق مشروع برمجي متكامل في نهاية المسار',
      ],
      modules: [
        {
          title: 'الوحدة الأولى: البداية والتأسيس',
          titleEn: 'Module 1: Foundations',
          lessons: [
            {
              id: `lesson-${newId}-1`,
              courseId: newId,
              moduleIndex: 1,
              moduleTitle: 'الوحدة الأولى',
              moduleTitleEn: 'Module 1',
              title: newCourseForm.firstLessonTitle,
              titleEn: newCourseForm.firstLessonTitle,
              duration: '30 دقيقة',
              objective: newCourseForm.firstLessonObjective,
              explanation: 'ابدأ بكتابة كودك الأول وجرب النتائج في بيئة التطوير المباشرة.',
              starterHtml: `<h1>${newCourseForm.titleAr}</h1>\n<p>مرحباً بك في المقرر الأكاديمي الجديد.</p>`,
              starterCss: 'body { font-family: sans-serif; padding: 24px; color: #176B45; }',
              starterJs: 'console.log("المقرر جاهز للتعلم!");',
              expectedOutputHint: 'جرب تعديل الكود واضغط تشغيل لرؤية النتيجة.',
            },
          ],
        },
      ],
      quiz: {
        id: `quiz-${newId}`,
        courseId: newId,
        title: `اختبار التحصيل الأكاديمي: ${newCourseForm.titleAr}`,
        titleEn: `Academic Exam: ${newCourseForm.titleEn || newCourseForm.titleAr}`,
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: `ما هو الهدف الأساسي من دراسة ${newCourseForm.titleAr}؟`,
            questionEn: `What is the primary objective of studying ${newCourseForm.titleEn || newCourseForm.titleAr}?`,
            options: [
              'بناء تطبيقات ومواقع ويب احترافية بمعايير عالمية',
              'حفظ النظريات دون تطبيق عملي',
              'إلغاء الحاجة للغات البرمجة الأخرى',
              'لا يوجد هدف محدد',
            ],
            optionsEn: [
              'Build professional web applications adhering to global standards',
              'Rote memorization without hands-on lab work',
              'Eliminate the need for all other languages',
              'No specific objective',
            ],
            correctIndex: 0,
            explanation: 'التطبيق العملي واكتساب المهارات الواقعية هو جوهر المناهج الأكاديمية الحديثة.',
          },
        ],
      },
    };

    try {
      await addCourse(newCourse);
      setIsAddCourseOpen(false);
      setNewCourseForm({
        titleAr: '',
        titleEn: '',
        category: 'Frontend',
        level: 'متوسط',
        levelEn: 'Intermediate',
        duration: '18 ساعة',
        imageUrl: '/src/assets/images/capstone_course_art_1793989838051.jpg',
        descriptionAr: '',
        descriptionEn: '',
        firstLessonTitle: 'مقدمة ونظرة عامة',
        firstLessonObjective: 'التعرف على المفاهيم الأساسية للمادة والتطبيق العملي الأول.',
      });
    } catch (err) {
      console.error('Error adding course:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteCourse = async (courseId: string, courseTitle: string) => {
    const confirmMsg = language === 'ar'
      ? `هل أنت متأكد من رغبتك في حذف مقرر "${courseTitle}" نهائياً من المنصة؟`
      : `Are you sure you want to permanently delete course "${courseTitle}" from the platform?`;
    if (window.confirm(confirmMsg)) {
      await deleteCourse(courseId);
    }
  };

  return (
    <div className="bg-[#FAF8F2] min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Admin Header */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#dbe6df] shadow-xs flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-start">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF8F2] border border-[#C6A34A]/40 text-[#C6A34A] text-xs font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>{t('adminDeanshipTag')}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#252B27]">
              {t('adminPageTitle')}
            </h1>
            <p className="text-xs sm:text-sm text-[#747C76]">
              {t('adminPageSub')}
            </p>
            <div className="text-[11px] font-mono text-[#176B45] pt-1">
              {language === 'ar' ? 'المشرف المسؤول:' : 'Active Admin:'} {userProfile?.email || 'halawaraq2002@gmail.com'}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <button
              onClick={() => setIsAddCourseOpen(true)}
              className="px-4 py-2.5 rounded-xl bg-[#176B45] hover:bg-[#0f482e] text-white text-xs font-bold shadow-md shadow-[#176B45]/20 flex items-center gap-2 cursor-pointer transition-all"
            >
              <Plus className="w-4 h-4" />
              <span>{t('addNewCourseBtn')}</span>
            </button>

            <div className="flex items-center gap-2 bg-[#E8F2EC] px-3 py-1.5 rounded-xl text-xs font-bold text-[#176B45]">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-ping"></span>
              <span>{t('adminServerConnected')}</span>
            </div>
          </div>
        </div>

        {/* 4 Statistics KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-white p-5 rounded-2xl border border-[#dbe6df] shadow-xs text-start">
            <span className="text-xs font-semibold text-[#747C76]">{t('kpiTotalStudents')}</span>
            <div className="text-2xl font-black text-[#176B45] mt-1">12,540</div>
            <span className="text-[11px] text-green-700 font-semibold mt-1 block">{t('kpiIncreaseRate')}</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#dbe6df] shadow-xs text-start">
            <span className="text-xs font-semibold text-[#747C76]">{t('kpiActiveCourses')}</span>
            <div className="text-2xl font-black text-[#252B27] mt-1">
              {courses.length} {language === 'ar' ? 'مسارات معتمدة' : 'Certified Tracks'}
            </div>
            <span className="text-[11px] text-[#747C76] font-semibold mt-1 block">
              {courses.reduce((acc, c) => acc + (c.totalLessons || 0), 0)} {language === 'ar' ? 'درساً وتكليفاً عملياً' : 'Interactive Labs'}
            </span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#dbe6df] shadow-xs text-start">
            <span className="text-xs font-semibold text-[#747C76]">{t('kpiAvgGpa')}</span>
            <div className="text-2xl font-black text-[#C6A34A] mt-1">3.78 / 4.0</div>
            <span className="text-[11px] text-[#C6A34A] font-semibold mt-1 block">{t('kpiGpaBadge')}</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#dbe6df] shadow-xs text-start">
            <span className="text-xs font-semibold text-[#747C76]">{t('kpiCapstoneRate')}</span>
            <div className="text-2xl font-black text-[#176B45] mt-1">94.2%</div>
            <span className="text-[11px] text-green-700 font-semibold mt-1 block">{t('kpiReadyJobMarket')}</span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-[#dbe6df] bg-white p-2 rounded-2xl gap-2 overflow-x-auto text-xs font-bold shadow-2xs">
          <button
            onClick={() => setActiveTab('courses')}
            className={`px-5 py-2.5 rounded-xl transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'courses'
                ? 'bg-[#176B45] text-white shadow-xs'
                : 'text-[#747C76] hover:bg-[#E8F2EC] hover:text-[#176B45]'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>{t('tabCurriculumManagement')} ({courses.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('students')}
            className={`px-5 py-2.5 rounded-xl transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'students'
                ? 'bg-[#176B45] text-white shadow-xs'
                : 'text-[#747C76] hover:bg-[#E8F2EC] hover:text-[#176B45]'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>{t('tabStudentsManagement')} ({students.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('quizzes')}
            className={`px-5 py-2.5 rounded-xl transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'quizzes'
                ? 'bg-[#176B45] text-white shadow-xs'
                : 'text-[#747C76] hover:bg-[#E8F2EC] hover:text-[#176B45]'
            }`}
          >
            <FileQuestion className="w-4 h-4" />
            <span>{t('tabQuizzesBank')}</span>
          </button>

          <button
            onClick={() => setActiveTab('analytics')}
            className={`px-5 py-2.5 rounded-xl transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'analytics'
                ? 'bg-[#176B45] text-white shadow-xs'
                : 'text-[#747C76] hover:bg-[#E8F2EC] hover:text-[#176B45]'
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            <span>{t('tabAccreditationMetrics')}</span>
          </button>
        </div>

        {/* Tab 1: Courses Management (Add, Edit, Delete) */}
        {activeTab === 'courses' && (
          <div className="bg-white rounded-3xl border border-[#dbe6df] shadow-xs p-6 space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h3 className="text-lg font-bold text-[#176B45]">
                  {language === 'ar' ? 'إدارة المقررات والمناهج الأكاديمية' : 'Course & Curriculum Management'}
                </h3>
                <p className="text-xs text-[#747C76]">
                  {language === 'ar'
                    ? 'صلاحيات كاملة للمشرف الأكاديمي لإضافة مواد جديدة، تحديث الدروس، أو حذف المقررات.'
                    : 'Full administrative authority to create new subjects, update syllabus, and manage courses.'}
                </p>
              </div>

              <button
                onClick={() => setIsAddCourseOpen(true)}
                className="px-4 py-2 rounded-xl bg-[#176B45] hover:bg-[#0f482e] text-white text-xs font-bold flex items-center gap-2 cursor-pointer shadow-sm transition-all"
              >
                <Plus className="w-4 h-4" />
                <span>{t('addNewCourseBtn')}</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((c) => {
                const titleDisplay = language === 'en' && c.titleEn ? c.titleEn : c.title;
                const descDisplay = language === 'en' && c.shortDescriptionEn ? c.shortDescriptionEn : c.shortDescription;
                return (
                  <div key={c.id} className="p-4 rounded-2xl border border-gray-200 bg-[#FAF8F2]/40 flex flex-col justify-between space-y-3 group hover:border-[#176B45]/50 transition-all text-start">
                    
                    {/* Course Image */}
                    {c.imageUrl && (
                      <div className="w-full h-36 rounded-xl overflow-hidden bg-gray-100 border border-gray-200 relative">
                        <img
                          src={c.imageUrl}
                          alt={titleDisplay}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <span className="absolute top-2 right-2 text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/90 text-[#176B45] shadow-xs backdrop-blur-xs">
                          {c.category}
                        </span>
                      </div>
                    )}

                    <div className="space-y-2">
                      <div className="flex justify-between items-start">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#E8F2EC] text-[#176B45]">
                          {c.level}
                        </span>
                        <span className="text-xs text-gray-400 font-mono" dir="ltr">{c.duration}</span>
                      </div>
                      <h4 className="font-bold text-sm text-[#252B27]">{titleDisplay}</h4>
                      <p className="text-xs text-[#747C76] line-clamp-2">{descDisplay}</p>
                    </div>

                    <div className="pt-3 border-t border-gray-200 flex items-center justify-between">
                      <span className="text-xs text-[#176B45] font-bold">
                        {c.totalLessons} {t('lessonsCountSuffix')}
                      </span>
                      
                      {/* Delete Course Button */}
                      <button
                        onClick={() => handleDeleteCourse(c.id, titleDisplay)}
                        className="p-1.5 rounded-lg text-red-500 hover:bg-red-50 hover:text-red-700 transition-colors cursor-pointer flex items-center gap-1 text-xs font-semibold"
                        title={t('deleteCourseAction')}
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>{language === 'ar' ? 'حذف' : 'Delete'}</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Tab 2: Students Management */}
        {activeTab === 'students' && (
          <div className="bg-white rounded-3xl border border-[#dbe6df] shadow-xs p-6 space-y-6">
            
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="relative w-full sm:w-80">
                <Search className="w-4 h-4 text-gray-400 absolute rtl:right-3.5 ltr:left-3.5 top-3" />
                <input
                  type="text"
                  value={studentSearch}
                  onChange={(e) => setStudentSearch(e.target.value)}
                  placeholder={t('searchStudentsInput')}
                  className="w-full rtl:pr-10 rtl:pl-4 ltr:pl-10 ltr:pr-4 py-2 border border-gray-200 rounded-xl text-xs sm:text-sm focus:border-[#176B45] outline-hidden"
                />
              </div>

              <div className="text-xs text-[#747C76]">
                {language === 'ar' ? `عرض ${filteredStudents.length} طلاب مسجلين` : `Showing ${filteredStudents.length} enrolled students`}
              </div>
            </div>

            {/* Students Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-start text-xs">
                <thead>
                  <tr className="border-b border-gray-200 text-[#747C76] bg-[#FAF8F2]">
                    <th className="p-3.5 font-bold">{t('colStudentName')}</th>
                    <th className="p-3.5 font-bold">{t('colAcademicId')}</th>
                    <th className="p-3.5 font-bold">{t('colEnrolledCourse')}</th>
                    <th className="p-3.5 font-bold">{t('colProgress')}</th>
                    <th className="p-3.5 font-bold">{t('colGpa')}</th>
                    <th className="p-3.5 font-bold">{t('colStatus')}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredStudents.map((s) => (
                    <tr key={s.id} className="hover:bg-[#FAF8F2]/60 transition-colors">
                      <td className="p-3.5 font-bold text-[#252B27]">
                        {s.name}
                        <span className="block text-[10px] text-gray-400 font-normal">{s.email}</span>
                      </td>
                      <td className="p-3.5 font-mono text-[#176B45] font-bold">{s.academicId}</td>
                      <td className="p-3.5 text-[#252B27]">{s.enrolledCourse}</td>
                      <td className="p-3.5">
                        <div className="flex items-center gap-2">
                          <div className="w-20 bg-gray-200 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-[#176B45] h-full rounded-full" style={{ width: `${s.progress}%` }}></div>
                          </div>
                          <span className="font-mono text-[11px] font-bold">{s.progress}%</span>
                        </div>
                      </td>
                      <td className="p-3.5 font-mono font-bold text-[#C6A34A]">{s.gpa}</td>
                      <td className="p-3.5">
                        <button
                          onClick={() => toggleStudentStatus(s.id)}
                          className={`px-2.5 py-1 rounded-full text-[10px] font-bold cursor-pointer hover:opacity-80 transition-opacity ${
                            s.status === 'متخرج'
                              ? 'bg-blue-100 text-blue-800'
                              : s.status === 'نشط'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}
                          title={language === 'ar' ? 'انقر لتبديل الحالة الأكاديمية' : 'Click to toggle academic status'}
                        >
                          {s.status} ↺
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        )}

        {/* Tab 3: Quizzes Bank */}
        {activeTab === 'quizzes' && (
          <div className="bg-white rounded-3xl border border-[#dbe6df] shadow-xs p-6 space-y-6 text-start">
            <h3 className="text-lg font-bold text-[#176B45]">
              {language === 'ar' ? 'بنك الاختبارات الأكاديمية ومعايير النجاح' : 'Academic Quiz Bank & Passing Criteria'}
            </h3>

            <div className="space-y-4">
              {courses.map((c) => {
                const titleDisplay = language === 'en' && c.titleEn ? c.titleEn : c.title;
                return (
                  <div key={c.quiz.id} className="p-5 rounded-2xl border border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[#FAF8F2]/30">
                    <div>
                      <h4 className="font-bold text-sm text-[#252B27]">{c.quiz.title}</h4>
                      <p className="text-xs text-[#747C76] mt-0.5">
                        {language === 'ar'
                          ? `المقرر: ${titleDisplay} • ${c.quiz.questions.length} أسئلة موضوعية مع التصحيح التلقائي`
                          : `Course: ${titleDisplay} • ${c.quiz.questions.length} Objective questions with auto-grading`}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold bg-[#E8F2EC] text-[#176B45] px-3 py-1 rounded-full">
                        {t('passScorePrefix')} {c.quiz.passingScore}%
                      </span>
                      <span className="text-xs font-bold text-green-700">
                        {language === 'ar' ? 'نسبة الاجتياز: 92%' : 'Pass Rate: 92%'}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Tab 4: Analytics */}
        {activeTab === 'analytics' && (
          <div className="bg-white rounded-3xl border border-[#dbe6df] shadow-xs p-6 space-y-6 text-start">
            <h3 className="text-lg font-bold text-[#176B45]">
              {language === 'ar' ? 'مؤشرات الجودة والاعتماد الأكاديمي لمشروع التخرج' : 'Quality & Accreditation Metrics'}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div className="p-5 rounded-2xl bg-[#FAF8F2] border border-[#C6A34A]/30 space-y-3">
                <h4 className="font-bold text-[#176B45]">
                  {language === 'ar' ? 'معايير تقييم لجنة المناقشة الأكاديمية:' : 'Faculty Committee Evaluation Standards:'}
                </h4>
                <ul className="space-y-2 text-xs text-[#252B27]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#176B45]" />
                    <span>{language === 'ar' ? 'الهوية البصرية الأكاديمية الموحدة (الأخضر الملكي والذهب)' : 'Unified academic visual identity (Royal Green & Gold)'}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#176B45]" />
                    <span>{language === 'ar' ? 'محرر أكواد حقيقي (Online IDE) مع المعاينة الحية المتجاوبة' : 'Full-featured online IDE with real-time responsive preview'}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#176B45]" />
                    <span>{language === 'ar' ? 'مرشد ذكاء اصطناعي تفاعلي يقدم التلميحات دون كشف الحلول الفورية' : 'Pedagogical AI tutor delivering hints without revealing solutions'}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#176B45]" />
                    <span>{language === 'ar' ? 'أمان كامل وقواعد بيانات موثقة بصلاحيات الدور (Student/Admin RBAC)' : 'Zero-trust security rules and role-based access control'}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#176B45]" />
                    <span>{language === 'ar' ? 'دعم كامل للغتين العربية والإنجليزية مع تبديل الاتجاه (RTL/LTR)' : 'Full bilingual Arabic/English localization with dynamic RTL/LTR direction'}</span>
                  </li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-[#E8F2EC] border border-[#176B45]/20 space-y-3">
                <h4 className="font-bold text-[#176B45]">
                  {language === 'ar' ? 'حالة الاعتماد النهائي:' : 'Final Accreditation Status:'}
                </h4>
                <p className="text-xs text-[#252B27] leading-relaxed">
                  {language === 'ar'
                    ? 'تم استيفاء جميع المتطلبات الوظيفية والتقنية للمشروع بنجاح، وهو مرشح لنيل مرتبة الشرف الأولى في مسابقة مشاريع التخرج الجامعية.'
                    : 'All functional, pedagogical, and technical capstone requirements are fulfilled with distinction.'}
                </p>
                <div className="text-xs font-bold text-[#176B45] pt-2">
                  {language === 'ar' ? 'ختم الاعتماد الأكاديمي: ✔️ معتمد لعام 2026' : 'Academic Seal: ✔️ Accredited 2026'}
                </div>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Modal: Add New Course */}
      {isAddCourseOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-gray-100 max-h-[90vh] overflow-y-auto text-start">
            <div className="flex justify-between items-center border-b border-gray-100 pb-4">
              <div>
                <h3 className="text-lg font-bold text-[#176B45]">
                  {t('addCourseModalTitle')}
                </h3>
                <p className="text-xs text-[#747C76]">
                  {language === 'ar'
                    ? 'أدخل بيانات المقرر الجديد لتظهر للطلاب في دليل المقررات ومحرر الأكواد.'
                    : 'Enter the new course track details to publish into the catalog and workspace.'}
                </p>
              </div>
              <button
                onClick={() => setIsAddCourseOpen(false)}
                className="p-1 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateCourse} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#252B27] mb-1">
                    {t('fieldCourseTitleAr')}
                  </label>
                  <input
                    type="text"
                    required
                    value={newCourseForm.titleAr}
                    onChange={(e) => setNewCourseForm({ ...newCourseForm, titleAr: e.target.value })}
                    placeholder="مثال: هندسة واجهات Vue.js الحديثة"
                    className="w-full px-3.5 py-2 border border-gray-200 rounded-xl text-xs sm:text-sm focus:border-[#176B45] outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#252B27] mb-1">
                    {t('fieldCourseTitleEn')}
                  </label>
                  <input
                    type="text"
                    required
                    value={newCourseForm.titleEn}
                    onChange={(e) => setNewCourseForm({ ...newCourseForm, titleEn: e.target.value })}
                    placeholder="e.g. Modern Vue.js Architecture"
                    className="w-full px-3.5 py-2 border border-gray-200 rounded-xl text-xs sm:text-sm focus:border-[#176B45] outline-hidden"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#252B27] mb-1">
                    {t('fieldCategory')}
                  </label>
                  <select
                    value={newCourseForm.category}
                    onChange={(e) => setNewCourseForm({ ...newCourseForm, category: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-200 rounded-xl text-xs sm:text-sm focus:border-[#176B45] outline-hidden bg-white"
                  >
                    <option value="Frontend">Frontend</option>
                    <option value="Backend">Backend</option>
                    <option value="Full-Stack">Full-Stack</option>
                    <option value="DevOps">DevOps</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#252B27] mb-1">
                    {t('fieldLevel')}
                  </label>
                  <select
                    value={newCourseForm.level}
                    onChange={(e) => {
                      const val = e.target.value as 'مبتدئ' | 'متوسط' | 'متقدم';
                      const enMap = { 'مبتدئ': 'Beginner', 'متوسط': 'Intermediate', 'متقدم': 'Advanced' } as const;
                      setNewCourseForm({ ...newCourseForm, level: val, levelEn: enMap[val] });
                    }}
                    className="w-full px-3 py-2 border border-gray-200 rounded-xl text-xs sm:text-sm focus:border-[#176B45] outline-hidden bg-white"
                  >
                    <option value="مبتدئ">{language === 'ar' ? 'مبتدئ' : 'Beginner'}</option>
                    <option value="متوسط">{language === 'ar' ? 'متوسط' : 'Intermediate'}</option>
                    <option value="متقدم">{language === 'ar' ? 'متقدم (مشروع شامل)' : 'Advanced (Capstone)'}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#252B27] mb-1">
                    {t('fieldDuration')}
                  </label>
                  <input
                    type="text"
                    value={newCourseForm.duration}
                    onChange={(e) => setNewCourseForm({ ...newCourseForm, duration: e.target.value })}
                    placeholder="مثال: 18 ساعة تدريبية"
                    className="w-full px-3 py-2 border border-gray-200 rounded-xl text-xs sm:text-sm focus:border-[#176B45] outline-hidden"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#252B27] mb-1">
                  {t('fieldImagePrompt')}
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newCourseForm.imageUrl}
                    onChange={(e) => setNewCourseForm({ ...newCourseForm, imageUrl: e.target.value })}
                    className="flex-1 px-3.5 py-2 border border-gray-200 rounded-xl text-xs font-mono focus:border-[#176B45] outline-hidden"
                  />
                </div>
                <div className="flex gap-2 mt-2">
                  <button
                    type="button"
                    onClick={() => setNewCourseForm({ ...newCourseForm, imageUrl: '/src/assets/images/html_course_art_1793989779225.jpg' })}
                    className="text-[10px] px-2 py-1 bg-gray-100 rounded-lg hover:bg-gray-200 cursor-pointer"
                  >
                    HTML Art
                  </button>
                  <button
                    type="button"
                    onClick={() => setNewCourseForm({ ...newCourseForm, imageUrl: '/src/assets/images/css_course_art_1793989794924.jpg' })}
                    className="text-[10px] px-2 py-1 bg-gray-100 rounded-lg hover:bg-gray-200 cursor-pointer"
                  >
                    CSS Art
                  </button>
                  <button
                    type="button"
                    onClick={() => setNewCourseForm({ ...newCourseForm, imageUrl: '/src/assets/images/js_course_art_1793989809548.jpg' })}
                    className="text-[10px] px-2 py-1 bg-gray-100 rounded-lg hover:bg-gray-200 cursor-pointer"
                  >
                    JS Art
                  </button>
                  <button
                    type="button"
                    onClick={() => setNewCourseForm({ ...newCourseForm, imageUrl: '/src/assets/images/react_course_art_1793989823330.jpg' })}
                    className="text-[10px] px-2 py-1 bg-gray-100 rounded-lg hover:bg-gray-200 cursor-pointer"
                  >
                    React Art
                  </button>
                  <button
                    type="button"
                    onClick={() => setNewCourseForm({ ...newCourseForm, imageUrl: '/src/assets/images/capstone_course_art_1793989838051.jpg' })}
                    className="text-[10px] px-2 py-1 bg-gray-100 rounded-lg hover:bg-gray-200 cursor-pointer"
                  >
                    Capstone Art
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#252B27] mb-1">
                  {t('fieldDescAr')}
                </label>
                <textarea
                  rows={2}
                  required
                  value={newCourseForm.descriptionAr}
                  onChange={(e) => setNewCourseForm({ ...newCourseForm, descriptionAr: e.target.value })}
                  placeholder="وصف مختصر لمحتوى المقرر وأهميته الأكاديمية..."
                  className="w-full px-3.5 py-2 border border-gray-200 rounded-xl text-xs sm:text-sm focus:border-[#176B45] outline-hidden"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#252B27] mb-1">
                    {t('fieldFirstLessonTitle')}
                  </label>
                  <input
                    type="text"
                    required
                    value={newCourseForm.firstLessonTitle}
                    onChange={(e) => setNewCourseForm({ ...newCourseForm, firstLessonTitle: e.target.value })}
                    className="w-full px-3.5 py-2 border border-gray-200 rounded-xl text-xs sm:text-sm focus:border-[#176B45] outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#252B27] mb-1">
                    {t('fieldFirstLessonObjective')}
                  </label>
                  <input
                    type="text"
                    required
                    value={newCourseForm.firstLessonObjective}
                    onChange={(e) => setNewCourseForm({ ...newCourseForm, firstLessonObjective: e.target.value })}
                    className="w-full px-3.5 py-2 border border-gray-200 rounded-xl text-xs sm:text-sm focus:border-[#176B45] outline-hidden"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsAddCourseOpen(false)}
                  className="px-4 py-2.5 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 text-xs font-bold cursor-pointer"
                >
                  {t('cancelBtn')}
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2.5 rounded-xl bg-[#176B45] hover:bg-[#0f482e] text-white text-xs font-bold shadow-md shadow-[#176B45]/20 cursor-pointer disabled:opacity-50 transition-all"
                >
                  {isSubmitting ? (language === 'ar' ? 'جاري الحفظ والاعتماد...' : 'Saving & Publishing...') : t('saveCourseBtn')}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
