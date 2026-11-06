import React from 'react';
import { useAuth } from '../context/AuthContext';
import { 
  Milestone, 
  ArrowLeft, 
  ArrowRight, 
  BookOpen
} from 'lucide-react';

interface LearningPathsPageProps {
  onSelectCourse: (courseId: string) => void;
  setCurrentView: (view: string) => void;
}

export const LearningPathsPage: React.FC<LearningPathsPageProps> = ({
  onSelectCourse,
  setCurrentView,
}) => {
  const { language, t } = useAuth();

  const steps = [
    {
      step: 1,
      courseId: 'html-fundamentals',
      titleAr: 'المرحلة 1: بناء الهيكل والوسوم الدلالية',
      titleEn: 'Stage 1: Semantic Structure & HTML5 Architecture',
      descriptionAr: 'تعلم هيكلة صفحات الويب المتوافقة مع معايير W3C الدلالية وقواعد الوصول (Accessibility).',
      descriptionEn: 'Master semantic web architecture complying with W3C standards and accessibility best practices.',
      durationAr: 'أسبوعان',
      durationEn: '2 Weeks',
      levelAr: 'مبتدئ',
      levelEn: 'Beginner',
    },
    {
      step: 2,
      courseId: 'css-responsive',
      titleAr: 'المرحلة 2: إتقان التنسيق والتصميم المتجاوب',
      titleEn: 'Stage 2: Styling & Responsive Web Design',
      descriptionAr: 'تحويل الهيكل إلى تصاميم جذابة بنظامي Flexbox و Grid مع التوافق التام مع كل الشاشات.',
      descriptionEn: 'Transform layouts into modern designs with Flexbox, CSS Grid, and mobile-first responsiveness.',
      durationAr: '3 أسابيع',
      durationEn: '3 Weeks',
      levelAr: 'مبتدئ إلى متوسط',
      levelEn: 'Beginner to Intermediate',
    },
    {
      step: 3,
      courseId: 'javascript-programming',
      titleAr: 'المرحلة 3: البرمجة التفاعلية وإدارة DOM',
      titleEn: 'Stage 3: Interactive Programming & DOM Engine',
      descriptionAr: 'كتابة شيفرات ES6+ الحديثة، التحكم في الأحداث، التعامل مع الذاكرة والـ Async/Await.',
      descriptionEn: 'Write modern ES6+ code, handle asynchronous events, manage DOM nodes, and integrate APIs.',
      durationAr: '4 أسابيع',
      durationEn: '4 Weeks',
      levelAr: 'متوسط',
      levelEn: 'Intermediate',
    },
    {
      step: 4,
      courseId: 'react-fundamentals',
      titleAr: 'المرحلة 4: هندسة المكونات بأطر العمل (React.js)',
      titleEn: 'Stage 4: Component Architecture with React.js',
      descriptionAr: 'بناء تطبيقات أحادية الصفحة (SPA)، إدارة الحالة بالـ Hooks، وتصميم واجهات عالية الأداء.',
      descriptionEn: 'Build scalable single-page apps (SPAs), state workflows with hooks, and reactive component lifecycles.',
      durationAr: '4 أسابيع',
      durationEn: '4 Weeks',
      levelAr: 'متوسط إلى متقدم',
      levelEn: 'Intermediate to Advanced',
    },
    {
      step: 5,
      courseId: 'frontend-fullstack',
      titleAr: 'المرحلة 5: مشروع التخرج الشامل والاعتماد النهائي',
      titleEn: 'Stage 5: Full-Stack Capstone Project Defense',
      descriptionAr: 'تطوير مشروع تخرج واقعي متكامل يربط الـ APIs ويجتاز مناقشة اللجنة الأكاديمية.',
      descriptionEn: 'Develop an end-to-end full-stack capstone project ready for graduation faculty defense.',
      durationAr: '5 أسابيع',
      durationEn: '5 Weeks',
      levelAr: 'مشروع التخرج الأكاديمي',
      levelEn: 'Academic Capstone Level',
    },
  ];

  return (
    <div className="bg-[#FAF8F2] min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="bg-white p-8 rounded-3xl border border-[#dbe6df] shadow-xs text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F2EC] text-[#176B45] text-xs font-bold">
            <Milestone className="w-4 h-4 text-[#C6A34A]" />
            <span>{t('roadmapTag')}</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-[#252B27] font-['Cairo']">
            {t('roadmapTitle')}
          </h1>
          <p className="text-xs sm:text-sm text-[#747C76] max-w-2xl mx-auto">
            {t('roadmapSub')}
          </p>
        </div>

        {/* Timeline Path Steps */}
        <div className="space-y-6 relative before:absolute before:inset-0 rtl:before:right-6 rtl:md:before:right-8 ltr:before:left-6 ltr:md:before:left-8 before:w-0.5 before:bg-[#176B45]/20">
          {steps.map((st) => (
            <div key={st.step} className="relative flex items-start gap-5 rtl:pr-2 rtl:md:pr-4 ltr:pl-2 ltr:md:pl-4 group">
              
              {/* Step Number Circle */}
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-[#176B45] text-white flex items-center justify-center font-black text-sm md:text-base shrink-0 z-10 shadow-md shadow-[#176B45]/20 group-hover:scale-110 transition-transform">
                {st.step}
              </div>

              {/* Step Card */}
              <div className="flex-1 bg-white p-6 rounded-2xl border border-[#dbe6df] shadow-xs hover:shadow-lg transition-all space-y-3 text-start">
                <div className="flex flex-wrap justify-between items-center gap-2">
                  <span className="text-xs font-bold text-[#C6A34A] bg-[#FAF8F2] px-2.5 py-0.5 rounded-full border border-[#C6A34A]/30">
                    {language === 'ar' ? st.levelAr : st.levelEn}
                  </span>
                  <span className="text-xs text-[#747C76] font-mono">
                    {language === 'ar' ? `المدة المقدرة: ${st.durationAr}` : `Duration: ${st.durationEn}`}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[#176B45]">
                  {language === 'ar' ? st.titleAr : st.titleEn}
                </h3>

                <p className="text-xs sm:text-sm text-[#747C76] leading-relaxed">
                  {language === 'ar' ? st.descriptionAr : st.descriptionEn}
                </p>

                <div className="pt-2 flex items-center gap-3">
                  <button
                    onClick={() => onSelectCourse(st.courseId)}
                    className="px-4 py-2 rounded-xl bg-[#176B45] hover:bg-[#0f482e] text-white text-xs font-bold transition-colors cursor-pointer"
                  >
                    {t('exploreCurriculumBtn')}
                  </button>
                  <button
                    onClick={() => setCurrentView('workspace')}
                    className="px-3.5 py-2 rounded-xl border border-gray-200 hover:bg-[#FAF8F2] text-xs font-bold text-[#252B27] cursor-pointer"
                  >
                    {t('openEditorBtn')}
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
