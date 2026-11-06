import React from 'react';
import { initialCourses } from '../data/coursesData';
import { 
  Milestone, 
  CheckCircle2, 
  ArrowLeft, 
  ArrowRight, 
  Sparkles, 
  GraduationCap, 
  Code2, 
  BookOpen, 
  Award,
  Layers
} from 'lucide-react';

interface LearningPathsPageProps {
  onSelectCourse: (courseId: string) => void;
  setCurrentView: (view: string) => void;
}

export const LearningPathsPage: React.FC<LearningPathsPageProps> = ({
  onSelectCourse,
  setCurrentView,
}) => {
  const steps = [
    {
      step: 1,
      courseId: 'html-fundamentals',
      title: 'المرحلة 1: بناء الهيكل والوسوم الدلالية',
      description: 'تعلم هيكلة صفحات الويب المتوافقة مع معايير W3C الدلالية وقواعد الوصول (Accessibility).',
      duration: 'أسبوعان',
      level: 'مبتدئ',
    },
    {
      step: 2,
      courseId: 'css-responsive',
      title: 'المرحلة 2: إتقان التنسيق والتصميم المتجاوب',
      description: 'تحويل الهيكل إلى تصاميم جذابة بنظامي Flexbox و Grid مع التوافق التام مع كل الشاشات.',
      duration: '3 أسابيع',
      level: 'مبتدئ إلى متوسط',
    },
    {
      step: 3,
      courseId: 'javascript-programming',
      title: 'المرحلة 3: البرمجة التفاعلية وإدارة DOM',
      description: 'كتابة شيفرات ES6+ الحديثة، التحكم في الأحداث، التعامل مع الذاكرة والـ Async/Await.',
      duration: '4 أسابيع',
      level: 'متوسط',
    },
    {
      step: 4,
      courseId: 'react-fundamentals',
      title: 'المرحلة 4: هندسة المكونات بأطر العمل (React.js)',
      description: 'بناء تطبيقات أحادية الصفحة (SPA)، إدارة الحالة بالـ Hooks، وتصميم واجهات عالية الأداء.',
      duration: '4 أسابيع',
      level: 'متوسط إلى متقدم',
    },
    {
      step: 5,
      courseId: 'frontend-fullstack',
      title: 'المرحلة 5: مشروع التخرج الشامل والاعتماد النهائي',
      description: 'تطوير مشروع تخرج واقعي متكامل يربط الـ APIs ويجتاز مناقشة اللجنة الأكاديمية.',
      duration: '5 أسابيع',
      level: 'مشروع التخرج الأكاديمي',
    },
  ];

  return (
    <div className="bg-[#FAF8F2] min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="bg-white p-8 rounded-3xl border border-[#dbe6df] shadow-xs text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F2EC] text-[#176B45] text-xs font-bold">
            <Milestone className="w-4 h-4 text-[#C6A34A]" />
            <span>خارطة الطريق الأكاديمية لاحتراف تطوير الويب</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-[#252B27] font-['Cairo']">
            المسار التخصصي المتكامل لتطوير الويب
          </h1>
          <p className="text-xs sm:text-sm text-[#747C76] max-w-2xl mx-auto">
            منهج مصمم بعناية فائقة يضمن انتقال الطالب من المبادئ البرمجية الأساسية إلى الكفاءة الكاملة لإنجاز مشروع التخرج.
          </p>
        </div>

        {/* Timeline Path Steps */}
        <div className="space-y-6 relative before:absolute before:inset-0 before:right-6 md:before:right-8 before:w-0.5 before:bg-[#176B45]/20">
          {steps.map((st) => (
            <div key={st.step} className="relative flex items-start gap-5 pr-2 md:pr-4 group">
              
              {/* Step Number Circle */}
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-[#176B45] text-white flex items-center justify-center font-black text-sm md:text-base shrink-0 z-10 shadow-md shadow-[#176B45]/20 group-hover:scale-110 transition-transform">
                {st.step}
              </div>

              {/* Step Card */}
              <div className="flex-1 bg-white p-6 rounded-2xl border border-[#dbe6df] shadow-xs hover:shadow-lg transition-all space-y-3">
                <div className="flex flex-wrap justify-between items-center gap-2">
                  <span className="text-xs font-bold text-[#C6A34A] bg-[#FAF8F2] px-2.5 py-0.5 rounded-full border border-[#C6A34A]/30">
                    {st.level}
                  </span>
                  <span className="text-xs text-[#747C76] font-mono">المدة المقدرة: {st.duration}</span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[#176B45]">
                  {st.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#747C76] leading-relaxed">
                  {st.description}
                </p>

                <div className="pt-2 flex items-center gap-3">
                  <button
                    onClick={() => onSelectCourse(st.courseId)}
                    className="px-4 py-2 rounded-xl bg-[#176B45] hover:bg-[#0f482e] text-white text-xs font-bold transition-colors cursor-pointer"
                  >
                    استعراض المنهج والدروس
                  </button>
                  <button
                    onClick={() => setCurrentView('workspace')}
                    className="px-3.5 py-2 rounded-xl border border-gray-200 hover:bg-[#FAF8F2] text-xs font-bold text-[#252B27] cursor-pointer"
                  >
                    فتح المحرر
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
