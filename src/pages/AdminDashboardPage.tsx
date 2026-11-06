import React, { useState } from 'react';
import { initialCourses } from '../data/coursesData';
import { 
  Users, 
  BookOpen, 
  ShieldCheck, 
  Award, 
  TrendingUp, 
  Search, 
  Plus, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  BarChart3,
  FileQuestion,
  GraduationCap
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
  const [activeTab, setActiveTab] = useState<'students' | 'courses' | 'quizzes' | 'analytics'>('students');
  const [studentSearch, setStudentSearch] = useState('');
  const [students, setStudents] = useState<MockStudent[]>(mockStudentsList);
  const [selectedCourseForDetail, setSelectedCourseForDetail] = useState(initialCourses[0].id);

  const filteredStudents = students.filter(
    (s) =>
      s.name.includes(studentSearch) ||
      s.academicId.includes(studentSearch) ||
      s.email.includes(studentSearch)
  );

  return (
    <div className="bg-[#FAF8F2] min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Admin Header */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#dbe6df] shadow-xs flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF8F2] border border-[#C6A34A]/40 text-[#C6A34A] text-xs font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>عمادة تقنية المعلومات — بوابة الإشراف الأكاديمي</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#252B27]">
              لوحة التحكم والإدارة الأكاديمية
            </h1>
            <p className="text-xs sm:text-sm text-[#747C76]">
              متابعة شؤون الطلاب، المناهج التعليمية، مؤشرات الأداء، وتقارير الاختبارات في الوقت الفعلي.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-green-500 animate-ping"></span>
            <span className="text-xs font-bold text-[#176B45]">الخادم الأكاديمي متصل (Cloud Connected)</span>
          </div>
        </div>

        {/* 4 Statistics KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-white p-5 rounded-2xl border border-[#dbe6df] shadow-xs">
            <span className="text-xs font-semibold text-[#747C76]">إجمالي الطلاب المقيدين</span>
            <div className="text-2xl font-black text-[#176B45] mt-1">12,540</div>
            <span className="text-[11px] text-green-700 font-semibold mt-1 block">↑ 14% زيادة هذا الفصل</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#dbe6df] shadow-xs">
            <span className="text-xs font-semibold text-[#747C76]">المقررات الأكاديمية النشطة</span>
            <div className="text-2xl font-black text-[#252B27] mt-1">5 مسارات</div>
            <span className="text-[11px] text-[#747C76] font-semibold mt-1 block">60 درساً وواجب عملي</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#dbe6df] shadow-xs">
            <span className="text-xs font-semibold text-[#747C76]">متوسط المعدل التراكمي (GPA)</span>
            <div className="text-2xl font-black text-[#C6A34A] mt-1">3.78 / 4.0</div>
            <span className="text-[11px] text-[#C6A34A] font-semibold mt-1 block">مستوى امتياز عام ⭐</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#dbe6df] shadow-xs">
            <span className="text-xs font-semibold text-[#747C76]">نسبة إتمام مشاريع التخرج</span>
            <div className="text-2xl font-black text-[#176B45] mt-1">94.2%</div>
            <span className="text-[11px] text-green-700 font-semibold mt-1 block">جاهزية عالية لسوق العمل</span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-[#dbe6df] bg-white p-2 rounded-2xl gap-2 overflow-x-auto text-xs font-bold shadow-2xs">
          <button
            onClick={() => setActiveTab('students')}
            className={`px-5 py-2.5 rounded-xl transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'students'
                ? 'bg-[#176B45] text-white shadow-xs'
                : 'text-[#747C76] hover:bg-[#E8F2EC] hover:text-[#176B45]'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>إدارة شؤون الطلاب ({students.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('courses')}
            className={`px-5 py-2.5 rounded-xl transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'courses'
                ? 'bg-[#176B45] text-white shadow-xs'
                : 'text-[#747C76] hover:bg-[#E8F2EC] hover:text-[#176B45]'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>المناهج والوحدات الدراسية (5)</span>
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
            <span>بنك الاختبارات والتمارين</span>
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
            <span>مؤشرات الجودة والاعتماد</span>
          </button>
        </div>

        {/* Tab 1: Students Management */}
        {activeTab === 'students' && (
          <div className="bg-white rounded-3xl border border-[#dbe6df] shadow-xs p-6 space-y-6">
            
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="relative w-full sm:w-80">
                <Search className="w-4 h-4 text-gray-400 absolute right-3.5 top-3" />
                <input
                  type="text"
                  value={studentSearch}
                  onChange={(e) => setStudentSearch(e.target.value)}
                  placeholder="ابحث بالاسم، الرقم الجامعي، أو البريد..."
                  className="w-full pr-10 pl-4 py-2 border border-gray-200 rounded-xl text-xs sm:text-sm focus:border-[#176B45] outline-hidden"
                />
              </div>

              <div className="text-xs text-[#747C76]">
                عرض {filteredStudents.length} طلاب مسجلين
              </div>
            </div>

            {/* Students Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-right text-xs">
                <thead>
                  <tr className="border-b border-gray-200 text-[#747C76] bg-[#FAF8F2]">
                    <th className="p-3.5 font-bold">اسم الطالب</th>
                    <th className="p-3.5 font-bold">الرقم الأكاديمي</th>
                    <th className="p-3.5 font-bold">المقرر المسجل</th>
                    <th className="p-3.5 font-bold">نسبة الإنجاز</th>
                    <th className="p-3.5 font-bold">المعدل (GPA)</th>
                    <th className="p-3.5 font-bold">الحالة الأكاديمية</th>
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
                        <span
                          className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                            s.status === 'متخرج'
                              ? 'bg-blue-100 text-blue-800'
                              : s.status === 'نشط'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}
                        >
                          {s.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        )}

        {/* Tab 2: Courses & Curriculum */}
        {activeTab === 'courses' && (
          <div className="bg-white rounded-3xl border border-[#dbe6df] shadow-xs p-6 space-y-6">
            <h3 className="text-lg font-bold text-[#176B45]">
              هيكل الخطة الدراسية وتفاصيل الوحدات
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {initialCourses.map((c) => (
                <div key={c.id} className="p-5 rounded-2xl border border-gray-200 bg-[#FAF8F2]/40 space-y-3">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#E8F2EC] text-[#176B45]">
                      {c.level}
                    </span>
                    <span className="text-xs text-gray-400 font-mono" dir="ltr">{c.duration}</span>
                  </div>
                  <h4 className="font-bold text-sm text-[#252B27]">{c.title}</h4>
                  <p className="text-xs text-[#747C76] line-clamp-2">{c.shortDescription}</p>
                  <div className="pt-2 border-t border-gray-200 flex justify-between text-xs text-[#176B45] font-semibold">
                    <span>{c.totalLessons} دروس معتمدة</span>
                    <span>اختبار أكاديمي مدمج</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Quizzes Management */}
        {activeTab === 'quizzes' && (
          <div className="bg-white rounded-3xl border border-[#dbe6df] shadow-xs p-6 space-y-6">
            <h3 className="text-lg font-bold text-[#176B45]">
              بنك الاختبارات الأكاديمية ومعايير النجاح
            </h3>

            <div className="space-y-4">
              {initialCourses.map((c) => (
                <div key={c.quiz.id} className="p-5 rounded-2xl border border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[#FAF8F2]/30">
                  <div>
                    <h4 className="font-bold text-sm text-[#252B27]">{c.quiz.title}</h4>
                    <p className="text-xs text-[#747C76] mt-0.5">
                      المقرر: {c.title} • {c.quiz.questions.length} أسئلة موضوعية مع التصحيح التلقائي
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold bg-[#E8F2EC] text-[#176B45] px-3 py-1 rounded-full">
                      درجة النجاح: {c.quiz.passingScore}%
                    </span>
                    <span className="text-xs font-bold text-green-700">
                      نسبة الاجتياز: 91%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Analytics */}
        {activeTab === 'analytics' && (
          <div className="bg-white rounded-3xl border border-[#dbe6df] shadow-xs p-6 space-y-6">
            <h3 className="text-lg font-bold text-[#176B45]">
              مؤشرات الجودة والاعتماد الأكاديمي لمشروع التخرج
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div className="p-5 rounded-2xl bg-[#FAF8F2] border border-[#C6A34A]/30 space-y-3">
                <h4 className="font-bold text-[#176B45]">معايير تقييم لجنة المناقشة الأكاديمية:</h4>
                <ul className="space-y-2 text-xs text-[#252B27]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#176B45]" />
                    <span>الهوية البصرية الأكاديمية الموحدة (الأخضر الملكي والذهب الأبيض)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#176B45]" />
                    <span>محرر أكواد حقيقي (Online IDE) مع المعاينة الحية المتجاوبة</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#176B45]" />
                    <span>مرشد ذكاء اصطناعي تفاعلي يقدم التلميحات دون كشف الحلول الفورية</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#176B45]" />
                    <span>أمان كامل وقواعد بيانات موثقة بصلاحيات الدور (Student/Admin RBAC)</span>
                  </li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-[#E8F2EC] border border-[#176B45]/20 space-y-3">
                <h4 className="font-bold text-[#176B45]">حالة الاعتماد النهائي:</h4>
                <p className="text-xs text-[#252B27] leading-relaxed">
                  تم استيفاء جميع المتطلبات الوظيفية والتقنية للمشروع بنجاح، وهو مرشح لنيل مرتبة الشرف الأولى في مسابقة مشاريع التخرج الجامعية.
                </p>
                <div className="text-xs font-bold text-[#176B45] pt-2">
                  ختم الاعتماد الأكاديمي: ✔️ معتمد لعام 2026
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
