import React from 'react';
import { BookOpen, GraduationCap, Code2, Award, Mail, Phone, MapPin, Heart } from 'lucide-react';

interface FooterProps {
  setCurrentView: (view: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentView }) => {
  return (
    <footer className="bg-[#1f2823] text-white pt-16 pb-12 border-t-4 border-[#C6A34A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Project Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#176B45] flex items-center justify-center relative">
                <BookOpen className="w-5 h-5 text-white" />
                <GraduationCap className="w-3.5 h-3.5 text-[#C6A34A] absolute -top-1 -right-1" />
              </div>
              <div>
                <span className="text-lg font-bold text-white block">منصة تعليمية</span>
                <span className="text-[10px] tracking-wider text-[#C6A34A] uppercase font-semibold">
                  EDUCATIONAL PLATFORM
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              منصة أكاديمية تفاعلية لتطوير الويب صُممت ونُفذت كـ مشروع تخرج جامعي متميز يعكس أعلى معايير الجودة والتعليم التقني الحديث.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#C6A34A] font-semibold">
              <Award className="w-4 h-4" />
              <span>مشروع تخرج مرشح لمرتبة الشرف الأكاديمية</span>
            </div>
          </div>

          {/* Quick Academic Navigation */}
          <div>
            <h4 className="text-base font-bold text-[#C6A34A] mb-4 pb-2 border-b border-white/10">
              المقررات والمسارات
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <button onClick={() => setCurrentView('courses')} className="hover:text-white transition-colors cursor-pointer">
                  أساسيات HTML5 وبنية الويب
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentView('courses')} className="hover:text-white transition-colors cursor-pointer">
                  تنسيق CSS3 والتصميم المتجاوب
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentView('courses')} className="hover:text-white transition-colors cursor-pointer">
                  برمجة JavaScript التفاعلية المتقدمة
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentView('courses')} className="hover:text-white transition-colors cursor-pointer">
                  تطوير المكونات بـ React.js
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentView('courses')} className="hover:text-white transition-colors cursor-pointer">
                  مشروع التخرج الشامل للواجهات
                </button>
              </li>
            </ul>
          </div>

          {/* Academic Features */}
          <div>
            <h4 className="text-base font-bold text-[#C6A34A] mb-4 pb-2 border-b border-white/10">
              المزايا التعليمية
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <button onClick={() => setCurrentView('workspace')} className="hover:text-[#C6A34A] flex items-center gap-2 cursor-pointer">
                  <Code2 className="w-4 h-4 text-[#176B45]" />
                  <span>محرر أكواد حقيقي (Online IDE)</span>
                </button>
              </li>
              <li>
                <span className="flex items-center gap-2 text-gray-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C6A34A]"></span>
                  <span>مساعد الذكاء الاصطناعي الأكاديمي</span>
                </span>
              </li>
              <li>
                <span className="flex items-center gap-2 text-gray-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C6A34A]"></span>
                  <span>اختبارات تقييم فورية مع التصحيح الذاتي</span>
                </span>
              </li>
              <li>
                <span className="flex items-center gap-2 text-gray-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C6A34A]"></span>
                  <span>شهادات إنجاز معتمدة بمعدل GPA</span>
                </span>
              </li>
            </ul>
          </div>

          {/* Contact & University Info */}
          <div>
            <h4 className="text-base font-bold text-[#C6A34A] mb-4 pb-2 border-b border-white/10">
              الاعتماد الأكاديمي
            </h4>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C6A34A] shrink-0 mt-1" />
                <span>المملكة العربية السعودية، الجامعة الوطنية الخاصة، كلية علوم الحاسب</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C6A34A] shrink-0" />
                <span className="font-mono text-xs">cs-graduation@national-university.edu.sa</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C6A34A] shrink-0" />
                <span className="font-mono text-xs">+966 11 456 7890</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>
            © 2026 جميع الحقوق محفوظة لـ <strong className="text-white font-medium">منصة تعليمية</strong> — مشروع تخرج جامعي متميز.
          </p>
          <div className="flex items-center gap-1 text-gray-400">
            <span>صُنعت بشغف وأناقة أكاديمية</span>
            <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400 inline" />
            <span>لطلاب هندسة البرمجيات</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
