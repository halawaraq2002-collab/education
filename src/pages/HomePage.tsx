import React from 'react';
import { initialCourses } from '../data/coursesData';
import { 
  BookOpen, 
  Sparkles, 
  Code2, 
  CheckCircle2, 
  ArrowLeft, 
  ArrowRight,
  GraduationCap, 
  Terminal, 
  Award, 
  Users, 
  Laptop, 
  Star, 
  ShieldCheck,
  Play,
  Check,
  Zap,
  TrendingUp,
  Cpu
} from 'lucide-react';

interface HomePageProps {
  setCurrentView: (view: string) => void;
  onSelectCourse: (courseId: string) => void;
  openAuthModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  setCurrentView,
  onSelectCourse,
  openAuthModal,
}) => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 md:py-24 bg-gradient-to-b from-[#FAF8F2] via-white to-white border-b border-[#E8F2EC]">
        {/* Subtle decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#E8F2EC]/60 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#C6A34A]/10 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left/Main Column: Text & CTAs */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-right">
              
              {/* Academic Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F2EC] border border-[#176B45]/20 text-[#176B45] text-xs font-bold shadow-2xs">
                <GraduationCap className="w-4 h-4 text-[#C6A34A]" />
                <span>مشروع تخرج أكاديمي لجامعة المستقبل الأهلية 2026</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#252B27] tracking-tight leading-[1.25] font-['Cairo']">
                ابدأ رحلتك نحو{' '}
                <span className="text-[#176B45] relative inline-block">
                  احتراف تطوير الويب
                  <svg className="absolute w-full h-3 -bottom-1 right-0 text-[#C6A34A] opacity-60" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <path d="M0,15 Q50,0 100,15" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>

              {/* Supporting Copy */}
              <p className="text-base sm:text-lg text-[#747C76] leading-relaxed max-w-2xl mx-auto lg:mx-0">
                تعلم البرمجة بطريقة تفاعلية، طبّق ما تتعلمه مباشرة، واكتشف أخطاءك بمساعدة الذكاء الاصطناعي في بيئة جامعية تحاكي سوق العمل العالمي.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
                <button
                  onClick={() => setCurrentView('courses')}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#176B45] hover:bg-[#0f482e] text-white font-bold text-base shadow-lg shadow-[#176B45]/25 hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer group active:scale-95"
                >
                  <span>استكشف الدورات</span>
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform rtl:inline hidden" />
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform ltr:inline hidden" />
                </button>

                <button
                  onClick={() => setCurrentView('workspace')}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white hover:bg-[#FAF8F2] text-[#176B45] font-bold text-base border-2 border-[#176B45] shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                >
                  <Code2 className="w-5 h-5 text-[#C6A34A]" />
                  <span>ابدأ التعلم مجاناً بالمحرر التفاعلي</span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-[#747C76]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#176B45]" />
                  <span>محرر أكواد حقيقي مدمج</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#176B45]" />
                  <span>توجيه ذكي باللغة العربية</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#176B45]" />
                  <span>شهادة معتمدة بنظام الساعات</span>
                </div>
              </div>
            </div>

            {/* Right Column: High-Tech Interactive IDE Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Visual Glassmorphism Card Container */}
                <div className="rounded-2xl bg-[#1a201c] p-4 sm:p-5 shadow-2xl border-2 border-[#C6A34A]/40 text-white relative">
                  
                  {/* Window Bar */}
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-xs">
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-gray-400 font-mono text-[11px] flex items-center gap-1">
                      <Terminal className="w-3.5 h-3.5 text-[#C6A34A]" />
                      <span>workspace/main.js</span>
                    </div>
                    <span className="text-[10px] bg-[#176B45] text-white px-2 py-0.5 rounded font-bold">
                      LIVE IDE
                    </span>
                  </div>

                  {/* Code Snippet */}
                  <div className="font-mono text-xs text-left leading-relaxed text-gray-300 pb-3" dir="ltr">
                    <div className="text-gray-500">// مشروع التخرج: تطوير الويب الأكاديمي</div>
                    <div><span className="text-[#C6A34A]">const</span> student = <span className="text-[#1f8a5a]">new</span> <span className="text-yellow-300">WebDeveloper</span>();</div>
                    <div>student.<span className="text-blue-400">learnCourse</span>(<span className="text-green-300">'HTML, CSS, JS, React'</span>);</div>
                    <div>student.<span className="text-blue-400">askAiAssistant</span>(<span className="text-green-300">'حلل الكود واكتشف الأخطاء'</span>);</div>
                    <div className="text-gray-400">// Output: التقدير ممتاز مع مرتبة الشرف ⭐</div>
                  </div>

                  {/* Live Mini Preview Box inside card */}
                  <div className="mt-2 p-3 bg-white text-[#252B27] rounded-xl text-right">
                    <div className="flex justify-between items-center mb-1 text-[11px]">
                      <span className="font-bold text-[#176B45]">معاينة حية للمشروع</span>
                      <span className="text-[10px] bg-[#E8F2EC] text-[#176B45] px-1.5 py-0.2 rounded font-semibold">استجابة 100%</span>
                    </div>
                    <div className="bg-[#FAF8F2] border border-[#C6A34A]/30 p-2.5 rounded-lg flex items-center justify-between">
                      <div className="text-xs font-bold text-[#252B27]">جامعة المستقبل الأهلية</div>
                      <div className="w-6 h-6 rounded-full bg-[#176B45] text-white flex items-center justify-center text-[10px] font-bold">A+</div>
                    </div>
                  </div>

                  {/* Floating AI Notification Card */}
                  <div className="absolute -bottom-6 -right-6 sm:-right-8 bg-white text-[#252B27] p-3.5 rounded-xl shadow-xl border border-[#dbe6df] flex items-center gap-3 animate-bounce [animation-duration:3s]">
                    <div className="w-9 h-9 rounded-lg bg-[#C6A34A] text-white flex items-center justify-center shrink-0">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-bold text-[#176B45]">مساعد الذكاء الاصطناعي</div>
                      <div className="text-[11px] text-[#747C76]">كودك سليم ومتوافق مع المعايير القياسية!</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 bg-white border-b border-[#E8F2EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            
            <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#C6A34A]/20">
              <div className="text-3xl sm:text-4xl font-black text-[#176B45] font-['Cairo']">
                12,500+
              </div>
              <div className="text-xs sm:text-sm font-semibold text-[#747C76] mt-1">
                طالب وطالبة مسجلين
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#E8F2EC] border border-[#176B45]/20">
              <div className="text-3xl sm:text-4xl font-black text-[#176B45] font-['Cairo']">
                5
              </div>
              <div className="text-xs sm:text-sm font-semibold text-[#747C76] mt-1">
                مسارات تخصصية معتمدة
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#C6A34A]/20">
              <div className="text-3xl sm:text-4xl font-black text-[#C6A34A] font-['Cairo']">
                140+
              </div>
              <div className="text-xs sm:text-sm font-semibold text-[#747C76] mt-1">
                درساً وتكليفاً عملياً
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#E8F2EC] border border-[#176B45]/20">
              <div className="text-3xl sm:text-4xl font-black text-[#176B45] font-['Cairo']">
                48,000+
              </div>
              <div className="text-xs sm:text-sm font-semibold text-[#747C76] mt-1">
                تمريناً تم تصحيحه آلياً
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-[#C6A34A] tracking-wider uppercase px-3 py-1 rounded-full bg-[#FAF8F2] border border-[#C6A34A]/30">
              المناهج الأكاديمية المعتمدة
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#252B27]">
              المقررات الدراسية التخصصية
            </h2>
            <p className="text-sm sm:text-base text-[#747C76]">
              خطة دراسية متكاملة تبدأ من أسس الويب وتتدرج بك خطوة بخطوة حتى بناء تطبيقات الويب المتكاملة لمشروع التخرج.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {initialCourses.map((course, idx) => (
              <div
                key={course.id}
                className="bg-white rounded-2xl border border-[#dbe6df] overflow-hidden shadow-xs hover:shadow-xl transition-all hover:-translate-y-1.5 flex flex-col group"
              >
                {/* Course Header Banner */}
                <div className="p-6 bg-gradient-to-br from-[#176B45] to-[#0f482e] text-white relative">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-xs text-[#FAF8F2]">
                      {course.category}
                    </span>
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#C6A34A] text-white shadow-xs">
                      {course.level}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#FAF8F2] transition-colors">
                    {course.title}
                  </h3>
                  <div className="text-xs text-white/70 font-mono" dir="ltr">
                    {course.titleEn}
                  </div>
                </div>

                {/* Course Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-sm text-[#747C76] line-clamp-3 leading-relaxed">
                    {course.shortDescription}
                  </p>

                  <div className="pt-4 border-t border-[#f1f4f2] flex items-center justify-between text-xs text-[#747C76]">
                    <div className="flex items-center gap-1.5">
                      <BookOpen className="w-4 h-4 text-[#176B45]" />
                      <span>{course.totalLessons} دروس تفاعلية</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <GraduationCap className="w-4 h-4 text-[#C6A34A]" />
                      <span>{course.duration}</span>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center gap-2">
                    <button
                      onClick={() => onSelectCourse(course.id)}
                      className="flex-1 py-2.5 px-4 rounded-xl bg-[#176B45] hover:bg-[#0f482e] text-white text-xs sm:text-sm font-bold transition-all text-center cursor-pointer shadow-xs"
                    >
                      تفاصيل المقرر
                    </button>
                    <button
                      onClick={() => setCurrentView('workspace')}
                      className="py-2.5 px-3.5 rounded-xl border border-[#176B45] text-[#176B45] hover:bg-[#E8F2EC] text-xs font-bold transition-all cursor-pointer"
                      title="فتح المحرر المباشر"
                    >
                      <Code2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => setCurrentView('courses')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-[#176B45] text-[#176B45] font-bold text-sm hover:bg-[#E8F2EC] transition-all cursor-pointer"
            >
              <span>عرض جميع مسارات ومقررات التخرج</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* Why Choose Our Platform Section */}
      <section className="py-20 bg-[#FAF8F2] border-y border-[#E8F2EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#252B27]">
              لماذا تختار <span className="text-[#176B45]">منصتنا التعليمية</span>؟
            </h2>
            <p className="text-sm sm:text-base text-[#747C76]">
              صُممت المنصة وفق أحدث المعايير الأكاديمية العالمية لتمنحك التجربة الأكثر شمولاً وتكاملاً.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-white p-8 rounded-2xl border border-[#dbe6df] shadow-xs hover:shadow-lg transition-all space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#E8F2EC] flex items-center justify-center text-[#176B45]">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#176B45]">
                بيئة تطوير حقيقية تفاعلية (Web IDE)
              </h3>
              <p className="text-sm text-[#747C76] leading-relaxed">
                اكتب الكود مباشرة داخل المتصفح وشاهد النتائج لحظياً على مختلف مقاسات الشاشات دون الحاجة إلى تثبيت برامج إضافية.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-[#dbe6df] shadow-xs hover:shadow-lg transition-all space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#FAF8F2] border border-[#C6A34A]/30 flex items-center justify-center text-[#C6A34A]">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#176B45]">
                مساعد ذكاء اصطناعي أكاديمي ومرشد
              </h3>
              <p className="text-sm text-[#747C76] leading-relaxed">
                لا يعطيك الحلول الجاهزة فقط، بل يحلل شفرتك البرمجية، يحدد الأخطاء بدقة، ويمنحك تلميحات ذكية لتصل للحل بمفردك.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-[#dbe6df] shadow-xs hover:shadow-lg transition-all space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#E8F2EC] flex items-center justify-center text-[#176B45]">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#176B45]">
                تقييم ذاتي واختبارات فورية
              </h3>
              <p className="text-sm text-[#747C76] leading-relaxed">
                اختبارات قياس مستوى متعددة الخيارات وتمارين برمجية عملية مع تصحيح فوري وشرح أسباب الإجابات الصحيحة والخاطئة.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* AI Assistant Promotional Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#176B45] to-[#114b31] rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden border-2 border-[#C6A34A]/50">
            <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-[#C6A34A]/15 rounded-full blur-2xl"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-[#FAF8F2] text-xs font-bold">
                  <Sparkles className="w-4 h-4 text-[#C6A34A]" />
                  <span>تقنية Gemini 3.8 الذكية المدمجة</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold font-['Cairo']">
                  تعلم البرمجة مع أستاذك الخصوصي المتاح على مدار الساعة
                </h2>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed max-w-2xl">
                  تجاوز عقبة الأخطاء البرمجية المحبطة! مرشدنا الذكي يشرح لك سبب الخطأ باللغة العربية البسيطة، ويدربك على التفكير المنطقي كمهندس برمجيات حقيقي.
                </p>
                <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold">
                  <span className="flex items-center gap-1.5 bg-black/20 px-3 py-1.5 rounded-lg">
                    ✓ تحليل شامل لأكواد HTML و CSS و JS
                  </span>
                  <span className="flex items-center gap-1.5 bg-black/20 px-3 py-1.5 rounded-lg">
                    ✓ تلميحات دون إفساد متعة الحل
                  </span>
                  <span className="flex items-center gap-1.5 bg-black/20 px-3 py-1.5 rounded-lg">
                    ✓ إرشادات تصحيح خطوة بخطوة
                  </span>
                </div>
              </div>

              <div className="lg:col-span-4 text-center lg:text-left">
                <button
                  onClick={() => setCurrentView('workspace')}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#C6A34A] hover:bg-[#b59239] text-white font-extrabold text-base shadow-lg transition-all cursor-pointer active:scale-95"
                >
                  جرّب المساعد الذكي الآن
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Testimonials Section */}
      <section className="py-20 bg-[#FAF8F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-[#176B45] tracking-wider uppercase px-3 py-1 rounded-full bg-[#E8F2EC]">
              قصص نجاح الطلاب
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#252B27]">
              ماذا يقول طلاب الجامعات عن المنصة؟
            </h2>
            <p className="text-sm sm:text-base text-[#747C76]">
              آراء حقيقية من طلاب كلية علوم الحاسب وهندسة البرمجيات بعد إكمال المقررات.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-white p-6 rounded-2xl border border-[#dbe6df] shadow-xs space-y-4">
              <div className="flex items-center gap-1 text-[#C6A34A]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-sm text-[#252B27] leading-relaxed italic">
                "المحرر التفاعلي مع المساعد الذكي وفّر علي ساعات من البحث في المنتديات. فكرة شرح الأخطاء بالعربية مع الحفاظ على المصطلحات ممتازة جداً."
              </p>
              <div className="pt-2 border-t border-gray-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#176B45] text-white font-bold flex items-center justify-center text-sm">
                  ع
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#252B27]">عبد الرحمن الغامدي</h4>
                  <p className="text-[11px] text-[#747C76]">طالب هندسة برمجيات — جامعة الملك سعود</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#dbe6df] shadow-xs space-y-4">
              <div className="flex items-center gap-1 text-[#C6A34A]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-sm text-[#252B27] leading-relaxed italic">
                "أفضل منصة أكاديمية ساعدتني في إنجاز مشروع تخرجي بجدارة. التدرج من HTML حتى React واضح وسلس للغاية."
              </p>
              <div className="pt-2 border-t border-gray-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#C6A34A] text-white font-bold flex items-center justify-center text-sm">
                  س
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#252B27]">سارة القحطاني</h4>
                  <p className="text-[11px] text-[#747C76]">خريجة علوم حاسب — جامعة المستقبل الأهلية</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#dbe6df] shadow-xs space-y-4">
              <div className="flex items-center gap-1 text-[#C6A34A]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-sm text-[#252B27] leading-relaxed italic">
                "نظام الاختبارات التفاعلية والدرجات الفورية يعطي حافزاً كبيراً للاستمرار وجمع النقاط والشارات الأكاديمية."
              </p>
              <div className="pt-2 border-t border-gray-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#176B45] text-white font-bold flex items-center justify-center text-sm">
                  ي
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#252B27]">يوسف النجار</h4>
                  <p className="text-[11px] text-[#747C76]">طالب تقنية معلومات — جامعة القاهرة</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
