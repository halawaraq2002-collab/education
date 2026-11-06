import React from 'react';
import { useAuth } from '../context/AuthContext';
import { GraduationCap, CheckCircle2 } from 'lucide-react';

export const AboutPage: React.FC<{ setCurrentView: (view: string) => void }> = ({ setCurrentView }) => {
  const { language, t } = useAuth();

  return (
    <div className="bg-[#FAF8F2] min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Academic Card */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#dbe6df] shadow-xs space-y-6 text-center md:text-start">
          <div className="w-16 h-16 rounded-2xl bg-[#176B45] text-white flex items-center justify-center mx-auto md:mx-0 shadow-lg shadow-[#176B45]/20">
            <GraduationCap className="w-9 h-9 text-[#C6A34A]" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold text-[#C6A34A] tracking-wider uppercase px-3 py-1 rounded-full bg-[#FAF8F2] border border-[#C6A34A]/30 inline-block">
              {t('aboutProjectBadge')}
            </span>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-[#252B27] font-['Cairo']">
              {t('aboutTitle')}
            </h1>
            <p className="text-sm sm:text-base text-[#747C76] leading-relaxed">
              {t('aboutSub')}
            </p>
          </div>

          <div className="pt-4 border-t border-gray-100 space-y-4 text-sm text-[#252B27] leading-relaxed text-start">
            <h3 className="font-bold text-[#176B45] text-base">
              {language === 'ar' ? 'الرؤية والرسالة الأكاديمية:' : 'Academic Vision & Mission:'}
            </h3>
            <p>
              {language === 'ar'
                ? 'تجسير الفجوة بين المقررات النظرية واحتياجات سوق العمل التقني المعاصر من خلال توفير بيئة برمجية تفاعلية مباشرة داخل المتصفح، مدعومة بتقنيات الذكاء الاصطناعي الأكاديمي، لتدريب الطلاب على منهجية التفكير التحليلي وحل المشكلات بدلاً من التلقين.'
                : 'Bridging the gap between university theoretical curricula and modern software industry demands by providing an interactive in-browser development environment powered by pedagogical AI, training students in algorithmic problem-solving rather than rote memorization.'}
            </p>

            <h3 className="font-bold text-[#176B45] text-base pt-2">
              {language === 'ar' ? 'أبرز الخصائص والابتكارات:' : 'Key Platform Innovations:'}
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#747C76]">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#176B45] shrink-0" />
                <span>
                  {language === 'ar'
                    ? 'محرر أكواد حقيقي مدمج يدعم HTML و CSS و JavaScript مع المعاينة الحية الفورية.'
                    : 'Integrated real-time code editor supporting HTML, CSS, and JavaScript with responsive live preview.'}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#176B45] shrink-0" />
                <span>
                  {language === 'ar'
                    ? 'مرشد ذكاء اصطناعي أكاديمي يقدم التوجيه والتحليل دون حرق الحلول البرمجية.'
                    : 'Dedicated pedagogical AI assistant providing diagnostic hints without spoiling answers.'}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#176B45] shrink-0" />
                <span>
                  {language === 'ar'
                    ? 'نظام تقييم واختبارات قياس معتمد بنقاط وشارات تميز أكاديمية.'
                    : 'Accredited assessment system with automated grading, instant feedback, and merit badges.'}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#176B45] shrink-0" />
                <span>
                  {language === 'ar'
                    ? 'هوية بصرية أكاديمية راقية باللونين الأخضر والذهب الملكي للجامعات المرموقة.'
                    : 'Prestigious academic visual identity featuring deep emerald green and royal gold.'}
                </span>
              </li>
            </ul>
          </div>

          <div className="pt-6 flex justify-center md:justify-start">
            <button
              onClick={() => setCurrentView('courses')}
              className="px-6 py-3 rounded-xl bg-[#176B45] text-white font-bold text-sm hover:bg-[#0f482e] shadow-md shadow-[#176B45]/20 cursor-pointer transition-colors"
            >
              {t('exploreAccreditedCoursesBtn')}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
