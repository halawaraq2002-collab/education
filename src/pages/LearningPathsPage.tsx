import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { 
  Milestone, 
  ArrowLeft, 
  ArrowRight, 
  BookOpen,
  Code2,
  Server,
  Rocket,
  Sparkles,
  CheckCircle2,
  Play
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
  const [activeTrackTab, setActiveTrackTab] = useState<'all' | 'frontend' | 'backend' | 'fullstack'>('all');

  const isAr = language === 'ar';

  const tracks = [
    {
      id: 'frontend',
      titleAr: 'المسار الأول: تطوير الواجهات الأمامية (Frontend Development)',
      titleEn: 'Track 1: Frontend Web Development',
      badgeAr: 'المستويات 1 - 5 و 7',
      badgeEn: 'Levels 1 - 5 & 7',
      descAr: 'بناء هياكل الويب، التنسيق المتقدم، التفاعل بـ JavaScript، التصميم المتجاوب، وهندسة المكونات بـ React.js.',
      descEn: 'Semantic HTML5, CSS layouts, interactive JavaScript, mobile-first responsive design, and React.js components.',
      icon: Code2,
      color: 'bg-emerald-700'
    },
    {
      id: 'backend',
      titleAr: 'المسار الثاني: تطوير الواجهة الخلفية وقواعد البيانات (Backend & Database)',
      titleEn: 'Track 2: Backend & Database Engineering',
      badgeAr: 'المستويات 6 و 8 و 9',
      badgeEn: 'Levels 6, 8 & 9',
      descAr: 'إدارة الإصدارات بـ Git/GitHub، بناء خوادم Node.js و Express، مسارات RESTful APIs، وهندسة قواعد البيانات و SQL.',
      descEn: 'Git & GitHub version control, Node.js and Express servers, RESTful APIs, and relational SQL database design.',
      icon: Server,
      color: 'bg-blue-800'
    },
    {
      id: 'fullstack',
      titleAr: 'المسار الثالث: التطوير الشامل والنشر السحابي (Full Stack & Cloud)',
      titleEn: 'Track 3: Full-Stack Integration & Cloud Deployment',
      badgeAr: 'المستويات 10 و 11',
      badgeEn: 'Levels 10 & 11',
      descAr: 'دمج الواجهات مع الخادم وقاعدة البيانات، فحص الأمان واختبار الجودة، والنشر السحابي المباشر لمشروع التخرج.',
      descEn: 'End-to-end integration, automated testing, cloud deployment pipelines, domain setup, and live capstone defense.',
      icon: Rocket,
      color: 'bg-amber-700'
    }
  ];

  const steps = [
    {
      step: 1,
      track: 'frontend',
      courseId: 'web-fundamentals',
      titleAr: 'المستوى الأول: أساسيات الويب (Web Fundamentals)',
      titleEn: 'Level 1: Web Fundamentals & HTTP Protocol',
      descriptionAr: 'فهم معمارية الإنترنت، خوادم الويب، المتصفحات، والفرق الجوهري بين Frontend و Backend وإعداد أدوات التطوير.',
      descriptionEn: 'Understand internet architecture, browsers, servers, DNS, HTTP, and developer tools.',
      projectAr: 'مشروع المستوى: إعداد بيئة التطوير وفحص أدوات المتصفح DevTools ومحاكاة دورة طلب الويب.',
      projectEn: 'Practical Project: Configure dev environment, inspect DevTools, and simulate an HTTP cycle.',
      durationAr: '8 ساعات',
      durationEn: '8 Hours',
      levelAr: 'مبتدئ',
      levelEn: 'Beginner',
    },
    {
      step: 2,
      track: 'frontend',
      courseId: 'html-fundamentals',
      titleAr: 'المستوى الثاني: HTML – بناء وهيكلة صفحات الويب',
      titleEn: 'Level 2: HTML – Semantic Structure & Web Architecture',
      descriptionAr: 'بناء هيكل صفحات المواقع، العناوين، الروابط، الصور، القوائم، الجداول، النماذج، والوسوم الدلالية وفق معايير W3C.',
      descriptionEn: 'Master semantic HTML5 tags, interactive forms, tables, accessibility, and modern web page structuring.',
      projectAr: 'مشروع المستوى: تصميم صفحة تعريفية شخصية (Portfolio) متكاملة بالوسوم الدلالية ومعرض الأعمال.',
      projectEn: 'Practical Project: Design a comprehensive semantic portfolio with about section and contact form.',
      durationAr: '14 ساعة',
      durationEn: '14 Hours',
      levelAr: 'مبتدئ',
      levelEn: 'Beginner',
    },
    {
      step: 3,
      track: 'frontend',
      courseId: 'css-styling',
      titleAr: 'المستوى الثالث: CSS – تصميم وتنسيق المواقع',
      titleEn: 'Level 3: CSS – Styling, Flexbox & Grid Systems',
      descriptionAr: 'تحويل الهياكل إلى تصاميم جذابة بنظامي Flexbox و CSS Grid والظلال والتحريك والانتقالات السلسة.',
      descriptionEn: 'Transform layouts into modern designs with Flexbox, CSS Grid, animations, variables, and typography.',
      projectAr: 'مشروع المستوى: تصميم موقع تعريفي كامل لشركة أو مؤسسة تعليمية باستخدام HTML و CSS.',
      projectEn: 'Practical Project: Code a full corporate landing page featuring hero banner, service cards, and grid gallery.',
      durationAr: '18 ساعة',
      durationEn: '18 Hours',
      levelAr: 'مبتدئ إلى متوسط',
      levelEn: 'Beginner to Intermediate',
    },
    {
      step: 4,
      track: 'frontend',
      courseId: 'javascript-programming',
      titleAr: 'المستوى الرابع: JavaScript – برمجة وتفاعل المواقع',
      titleEn: 'Level 4: JavaScript – DOM Manipulation & Fetch API',
      descriptionAr: 'كتابة شيفرات ES6+ الحديثة، التحكم في شجرة العناصر DOM، معالجة الأحداث، التحقق من النماذج، والـ Fetch API.',
      descriptionEn: 'Write modern ES6+ code, handle asynchronous events, manage DOM nodes, and integrate APIs.',
      projectAr: 'مشروع المستوى: بناء تطبيق إدارة مهام تفاعلي (To-Do App) يسمح بحفظ وتعديل وشطب المهام بالـ LocalStorage.',
      projectEn: 'Practical Project: Build a CRUD task management app with dynamic DOM creation and browser persistence.',
      durationAr: '24 ساعة',
      durationEn: '24 Hours',
      levelAr: 'متوسط',
      levelEn: 'Intermediate',
    },
    {
      step: 5,
      track: 'frontend',
      courseId: 'responsive-design',
      titleAr: 'المستوى الخامس: تصميم المواقع المتجاوبة (Responsive Design)',
      titleEn: 'Level 5: Responsive Design & Mobile-First Patterns',
      descriptionAr: 'جعل الموقع يعمل بشكل ممتاز على مختلف مقاسات الشاشات باستخدام Media Queries والتصميم الموجه للهاتف أولاً.',
      descriptionEn: 'Master responsive breakpoints, viewport configurations, mobile navigation, and fluid layouts.',
      projectAr: 'مشروع المستوى: تحويل الموقع إلى تصميم متجاوب 100% مع الهاتف والتابلت والكمبيوتر مع قائمة برغر ذكية.',
      projectEn: 'Practical Project: Convert a static website to a 100% responsive experience with mobile drawer navigation.',
      durationAr: '12 ساعة',
      durationEn: '12 Hours',
      levelAr: 'متوسط',
      levelEn: 'Intermediate',
    },
    {
      step: 6,
      track: 'backend',
      courseId: 'git-github',
      titleAr: 'المستوى السادس: Git و GitHub – حفظ المشاريع وإدارة الأكواد',
      titleEn: 'Level 6: Git & GitHub – Version Control & Team Work',
      descriptionAr: 'إدارة الإصدارات، حفظ تاريخ التعديلات، إنشاء الفروع البرمجية، الدمج وحل التعارضات، ورفع المشاريع على GitHub.',
      descriptionEn: 'Master Git commits, branches, pull requests, merge conflict resolution, and cloud repositories.',
      projectAr: 'مشروع المستوى: تهيئة مستودع على GitHub، إنشاء فروع، ورفع مشروع موقع كامل مع ملف README احترافي.',
      projectEn: 'Practical Project: Create a local repository, stage commits, create feature branches, and publish on GitHub.',
      durationAr: '10 ساعات',
      durationEn: '10 Hours',
      levelAr: 'متوسط',
      levelEn: 'Intermediate',
    },
    {
      step: 7,
      track: 'frontend',
      courseId: 'react-fundamentals',
      titleAr: 'المستوى السابع: React.js – بناء تطبيقات ويب حديثة',
      titleEn: 'Level 7: React.js – Component Architecture & Hooks',
      descriptionAr: 'بناء تطبيقات أحادية الصفحة (SPA)، تصميم الواجهات بنظام المكونات القابلة لإعادة الاستخدام، وإدارة الحالة بالـ Hooks.',
      descriptionEn: 'Build scalable single-page apps (SPAs), state workflows with hooks, and reactive component lifecycles.',
      projectAr: 'مشروع المستوى: تصميم واجهة منصة تعليمية متكاملة تحتوي على الصفحة الرئيسية والدورات ولوحة الطالب.',
      projectEn: 'Practical Project: Build a modular education dashboard featuring interactive state updates and tabs.',
      durationAr: '26 ساعة',
      durationEn: '26 Hours',
      levelAr: 'متوسط إلى متقدم',
      levelEn: 'Intermediate to Advanced',
    },
    {
      step: 8,
      track: 'backend',
      courseId: 'backend-nodejs',
      titleAr: 'المستوى الثامن: Backend – تطوير الواجهة الخلفية بـ Node.js و Express',
      titleEn: 'Level 8: Backend – Server-Side Architecture with Node & Express',
      descriptionAr: 'فهم كيف يعمل الجزء الخلفي، إنشاء خادم HTTP، بناء مسارات RESTful API، البرمجيات الوسيطة Middleware، ونظام المصادقة.',
      descriptionEn: 'Build HTTP servers, RESTful endpoints, middleware chains, controllers, and JWT auth.',
      projectAr: 'مشروع المستوى: إنشاء خادم REST API يسمح بتسجيل الطلاب وعرض الدورات وإضافة الدروس مع حماية المسارات.',
      projectEn: 'Practical Project: Build an Express.js backend with endpoints for students, courses, and role authentication.',
      durationAr: '22 ساعة',
      durationEn: '22 Hours',
      levelAr: 'متوسط إلى متقدم',
      levelEn: 'Intermediate to Advanced',
    },
    {
      step: 9,
      track: 'backend',
      courseId: 'database-sql',
      titleAr: 'المستوى التاسع: قواعد البيانات (Database & SQL)',
      titleEn: 'Level 9: Database – Relational Schemas & SQL Queries',
      descriptionAr: 'تخزين واسترجاع وإدارة البيانات، الفرق بين SQL و NoSQL، إنشاء الجداول والمفاتيح الأساسية والأجنبية، وعمليات CRUD و JOIN.',
      descriptionEn: 'Master relational schema design, primary & foreign keys, SQL joins, and database integrations.',
      projectAr: 'مشروع المستوى: تصميم وتنفيذ مخطط قاعدة بيانات متكامل (ERD) لمنصة تعليمية تشمل الطلاب والمقررات ودرجات الاختبارات.',
      projectEn: 'Practical Project: Design an ERD and write SQL statements for students, courses, enrollments, and transcripts.',
      durationAr: '20 ساعة',
      durationEn: '20 Hours',
      levelAr: 'متوسط إلى متقدم',
      levelEn: 'Intermediate to Advanced',
    },
    {
      step: 10,
      track: 'fullstack',
      courseId: 'testing-deployment',
      titleAr: 'المستوى العاشر: الاختبار والنشر السحابي (Testing & Deployment)',
      titleEn: 'Level 10: Testing, CI/CD & Cloud Deployment',
      descriptionAr: 'تحويل المشروع إلى موقع حقيقي متاح على الإنترنت، اختبار الواجهات والوظائف، تحسين الأداء و SEO، والنشر السحابي وربط النطاق.',
      descriptionEn: 'Master unit testing, SEO optimization, security audits, and cloud deployment pipelines.',
      projectAr: 'مشروع المستوى: نشر موقع حقيقي على السحابة مع شهادة SSL ونطاق مخصص متاح لأي زائر على الإنترنت.',
      projectEn: 'Practical Project: Deploy web app to cloud platform, configure SSL certificates, and verify public URL.',
      durationAr: '16 ساعة',
      durationEn: '16 Hours',
      levelAr: 'متقدم',
      levelEn: 'Advanced',
    },
    {
      step: 11,
      track: 'fullstack',
      courseId: 'frontend-fullstack',
      titleAr: 'المستوى الحادي عشر: المشروع النهائي الشامل (Final Capstone Platform)',
      titleEn: 'Level 11: Final Capstone Web Platform – Full-Stack System',
      descriptionAr: 'جمع كافة المهارات التي تعلمها الطالب لبناء منصة تعليمية إلكترونية متكاملة مع محرر أكواد ومساعد ذكاء اصطناعي وقاعدة بيانات.',
      descriptionEn: 'Integrate the complete stack: responsive UI, REST API, database, auth, AI tutor, and cloud deploy.',
      projectAr: 'المشروع البرمجي الشامل النهائي: منصة تعليمية إلكترونية متكاملة جاهزة للاستخدام والنشر السحابي الكامل.',
      projectEn: 'Final Capstone Project: A production-ready educational platform with live coding IDE and AI mentor.',
      durationAr: '35 ساعة',
      durationEn: '35 Hours',
      levelAr: 'مستوى متقدم احترافي',
      levelEn: 'Advanced Professional Level',
    },
  ];

  const filteredSteps = steps.filter((st) => {
    if (activeTrackTab === 'all') return true;
    return st.track === activeTrackTab;
  });

  return (
    <div className="bg-[#FAF8F2] min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Back Button */}
        <div>
          <button
            onClick={() => setCurrentView('home')}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#176B45] hover:text-[#0f482e] bg-white px-4 py-2.5 rounded-xl border border-[#dbe6df] shadow-xs hover:shadow-sm hover:border-[#176B45]/50 transition-all cursor-pointer group"
          >
            {isAr ? (
              <ArrowRight className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-[#176B45]" />
            ) : (
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-[#176B45]" />
            )}
            <span>{isAr ? "الرجوع إلى الصفحة السابقة (الرئيسية)" : "Back to Home Page"}</span>
          </button>
        </div>

        {/* Header */}
        <div className="bg-white p-8 sm:p-10 rounded-3xl border border-[#dbe6df] shadow-xs text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F2EC] text-[#176B45] text-xs font-bold">
            <Milestone className="w-4 h-4 text-[#C6A34A]" />
            <span>{isAr ? 'المنهج التعليمي الكامل لتطوير مواقع الويب' : 'Full Web Development Learning Path'}</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-[#252B27] font-['Cairo']">
            {isAr ? 'خارطة الطريق: من الصفر إلى إطلاق موقع حقيقي متكامل' : 'Roadmap: From Zero to a Live, Deployed Web Application'}
          </h1>
          <p className="text-xs sm:text-sm text-[#747C76] max-w-3xl mx-auto leading-relaxed">
            {isAr
              ? 'رحلة أكاديمية عملية منظمة في 11 مستوى و 3 مسارات رئيسية، لا تكتفي بتقديم المعلومات النظرية بل تتضمن تطبيقات عملية واختبارات ومشروعاً تطبيقياً في نهاية كل مرحلة.'
              : 'A structured university learning path spanning 11 progressive levels across 3 core tracks, culminating in hands-on projects and a live deployed capstone website.'}
          </p>
        </div>

        {/* 3 Main Tracks Presentation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tracks.map((tr) => {
            const Icon = tr.icon;
            const isSelected = activeTrackTab === tr.id;
            return (
              <div
                key={tr.id}
                onClick={() => setActiveTrackTab(isSelected ? 'all' : (tr.id as any))}
                className={`bg-white rounded-3xl p-6 border transition-all cursor-pointer shadow-xs hover:shadow-md flex flex-col justify-between space-y-4 text-start ${
                  isSelected ? 'border-[#176B45] ring-2 ring-[#176B45]/20 bg-[#FAF8F2]/60' : 'border-[#dbe6df]'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-12 rounded-2xl bg-[#E8F2EC] text-[#176B45] flex items-center justify-center shadow-xs">
                      <Icon className="w-6 h-6 text-[#176B45]" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#FAF8F2] border border-[#C6A34A]/40 text-[#C6A34A]">
                      {isAr ? tr.badgeAr : tr.badgeEn}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#176B45] leading-snug">
                    {isAr ? tr.titleAr : tr.titleEn}
                  </h3>

                  <p className="text-xs text-[#747C76] leading-relaxed">
                    {isAr ? tr.descAr : tr.descEn}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#176B45]">
                  <span>{isSelected ? (isAr ? '✓ المسار محدد' : '✓ Selected') : (isAr ? 'استعراض مستويات المسار' : 'View Levels')}</span>
                  <span>←</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Filter Indicator */}
        <div className="flex flex-wrap items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-[#dbe6df] shadow-2xs">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-[#252B27]">
              {isAr ? 'عرض المستويات:' : 'Showing Levels:'}
            </span>
            <span className="text-xs font-semibold text-[#747C76]">
              {activeTrackTab === 'all'
                ? (isAr ? 'كافة المستويات الـ 11' : 'All 11 Levels')
                : (isAr ? `مستويات المسار المحدد (${filteredSteps.length})` : `Filtered Track Levels (${filteredSteps.length})`)}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTrackTab('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                activeTrackTab === 'all' ? 'bg-[#176B45] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {isAr ? 'عرض الكل (11)' : 'Show All (11)'}
            </button>
            <button
              onClick={() => setActiveTrackTab('frontend')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                activeTrackTab === 'frontend' ? 'bg-[#176B45] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Frontend
            </button>
            <button
              onClick={() => setActiveTrackTab('backend')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                activeTrackTab === 'backend' ? 'bg-[#176B45] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Backend
            </button>
            <button
              onClick={() => setActiveTrackTab('fullstack')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                activeTrackTab === 'fullstack' ? 'bg-[#176B45] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Full-Stack
            </button>
          </div>
        </div>

        {/* Timeline Path 11 Steps */}
        <div className="space-y-6 relative before:absolute before:inset-0 rtl:before:right-6 rtl:md:before:right-8 ltr:before:left-6 ltr:md:before:left-8 before:w-0.5 before:bg-[#176B45]/20">
          {filteredSteps.map((st) => (
            <div key={st.step} className="relative flex items-start gap-5 rtl:pr-2 rtl:md:pr-4 ltr:pl-2 ltr:md:pl-4 group">
              
              {/* Step Number Circle */}
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-[#176B45] text-white flex items-center justify-center font-black text-sm md:text-base shrink-0 z-10 shadow-md shadow-[#176B45]/20 group-hover:scale-110 transition-transform">
                {st.step}
              </div>

              {/* Step Card */}
              <div className="flex-1 bg-white p-6 sm:p-7 rounded-3xl border border-[#dbe6df] shadow-xs hover:shadow-lg transition-all space-y-4 text-start">
                <div className="flex flex-wrap justify-between items-center gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#C6A34A] bg-[#FAF8F2] px-2.5 py-0.5 rounded-full border border-[#C6A34A]/30">
                      {isAr ? st.levelAr : st.levelEn}
                    </span>
                    <span className="text-[11px] font-semibold text-[#176B45] bg-[#E8F2EC] px-2.5 py-0.5 rounded-full uppercase">
                      {st.track}
                    </span>
                  </div>

                  <span className="text-xs text-[#747C76] font-mono">
                    {isAr ? `المدة المقدرة: ${st.durationAr}` : `Duration: ${st.durationEn}`}
                  </span>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#176B45]">
                    {isAr ? st.titleAr : st.titleEn}
                  </h3>
                  <div className="text-[11px] text-[#747C76] font-mono mt-0.5" dir="ltr">
                    {isAr ? st.titleEn : st.titleAr}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#747C76] leading-relaxed">
                  {isAr ? st.descriptionAr : st.descriptionEn}
                </p>

                {/* Practical Project Highlight */}
                <div className="p-3.5 bg-[#FAF8F2] rounded-2xl border border-[#C6A34A]/30 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#176B45]">
                    <Sparkles className="w-4 h-4 text-[#C6A34A]" />
                    <span>{isAr ? 'المشروع العملي التطبيقي للمستوى:' : 'Level Practical Project:'}</span>
                  </div>
                  <p className="text-xs text-[#252B27] font-semibold leading-relaxed">
                    {isAr ? st.projectAr : st.projectEn}
                  </p>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => onSelectCourse(st.courseId)}
                    className="px-4 py-2.5 rounded-xl bg-[#176B45] hover:bg-[#0f482e] text-white text-xs font-bold transition-colors cursor-pointer shadow-sm flex items-center gap-1.5"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>{isAr ? 'استعراض وحدات المنهج' : 'View Syllabus & Lessons'}</span>
                  </button>
                  <button
                    onClick={() => setCurrentView('workspace')}
                    className="px-4 py-2.5 rounded-xl border border-gray-200 hover:bg-[#FAF8F2] text-xs font-bold text-[#252B27] cursor-pointer flex items-center gap-1.5"
                  >
                    <Play className="w-3.5 h-3.5 text-[#176B45]" />
                    <span>{isAr ? 'تطبيق في المحرر التفاعلي' : 'Practice in Code IDE'}</span>
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
