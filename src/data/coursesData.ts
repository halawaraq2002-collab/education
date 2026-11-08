import { Course, Badge } from '../types';

export const initialCourses: Course[] = [
  // ==========================================
  // المسار الأول: تطوير الواجهات الأمامية (Frontend Development)
  // ==========================================

  // المستوى 1: أساسيات الويب
  {
    id: 'web-fundamentals',
    title: 'المستوى 1: أساسيات الويب وكيف يعمل الإنترنت',
    titleEn: 'Level 1: Web Fundamentals & How the Internet Works',
    shortDescription: 'فهم بنية الإنترنت، خوادم الويب، المتصفحات، والفرق الجوهري بين الواجهة الأمامية والخلفية.',
    shortDescriptionEn: 'Understand internet architecture, browsers, servers, DNS, HTTP, and the Frontend vs Backend paradigm.',
    level: 'مبتدئ',
    levelEn: 'Beginner',
    duration: '8 ساعات',
    totalLessons: 6,
    category: 'أساسيات الويب',
    iconName: 'Globe',
    color: '#176B45',
    imageUrl: '/src/assets/images/html_course_art_1793989779225.jpg',
    track: 'frontend',
    levelNumber: 1,
    practicalProject: {
      title: 'تهيئة بيئة العمل وبناء أول صفحة معمارية',
      titleEn: 'Dev Environment Setup & First Architecture Blueprint',
      description: 'إعداد محرر VS Code، فحص أدوات المطور (DevTools)، ومحاكاة طلب HTTP ومعاينة الاستجابة داخل المتصفح.',
      descriptionEn: 'Configure VS Code, inspect browser DevTools network tab, and simulate an HTTP request-response cycle.'
    },
    overview: 'المدخل التأسيسي لعلوم وهندسة الويب. يكتسب الطالب في هذا المستوى الفهم العميق لرحلة حزمة البيانات من المتصفح عبر مزودي خدمة الإنترنت ونظام أسماء النطاقات (DNS) وصولاً إلى خوادم الويب وتفسير محرك العرض.',
    learningObjectives: [
      'فهم دورة الطلب والاستجابة (HTTP Request & Response Cycle).',
      'التمييز الهندسي الدقيق بين مسؤليات Frontend ومسؤوليات Backend.',
      'التعرف على بروتوكولات الإنترنت (HTTP/HTTPS, TCP/IP, DNS).',
      'إتقان استخدام أدوات المطور في المتصفح (Browser DevTools).'
    ],
    modules: [
      {
        title: 'الوحدة الأولى: معمارية الويب والبروتوكولات',
        titleEn: 'Module 1: Web Architecture & Protocols',
        lessons: [
          {
            id: 'wf-1',
            courseId: 'web-fundamentals',
            moduleIndex: 1,
            moduleTitle: 'معمارية الويب والبروتوكولات',
            moduleTitleEn: 'Web Architecture & Protocols',
            title: 'كيف يعمل الإنترنت والمتصفح من وراء الكواليس؟',
            titleEn: 'How the Internet & Browsers Work Behind the Scenes',
            duration: '35 دقيقة',
            objective: 'اكتب كوداً يوضح دورة استدعاء الموارد وتفسير البروتوكولات عبر الويب.',
            explanation: `
عندما تكتب عنوان موقع في شريط المتصفح (مثل https://university.edu):
1. يسأل المتصفح خادم DNS للبحث عن عنوان الـ IP المقابل لهذا النطاق.
2. يرسل المتصفح طلب HTTP GET مشفراً عبر بروتوكول TLS/HTTPS إلى خادم الويب.
3. يستقبل الخادم الطلب ويعيد ملف HTML، ثم يطلب المتصفح ملفات CSS وJS التابعة.
4. يقوم محرك المتصفح ببناء شجرة الـ DOM وتطبيق قواعد CSSOM ثم رسم الصفحة للمستخدم.
            `,
            starterHtml: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <title>كيف يعمل الويب | الجامعة الوطنية الخاصة</title>
</head>
<body>
  <header>
    <h1>رحلة طلب الويب (HTTP Request Cycle)</h1>
    <p>تعلم كيف يتواصل المتصفح مع الخوادم السحابية.</p>
  </header>
  <main>
    <div class="step-card">
      <h3>الخطوة 1: استعلام النطاق (DNS Lookup)</h3>
      <p>تحويل الرابط النصي إلى عنوان بروتوكول رقمي (IP Address).</p>
    </div>
    <div class="step-card">
      <h3>الخطوة 2: مصافحة الأمان (TLS Handshake)</h3>
      <p>تشفير قناة الاتصال بشهادة SSL الرقمية لحماية بيانات الطلاب.</p>
    </div>
    <div class="step-card">
      <h3>الخطوة 3: بناء وتصيير الصفحة (DOM & CSSOM)</h3>
      <p>رسم العناصر التفاعلية بسرعة وسلاسة على شاشة المستخدم.</p>
    </div>
  </main>
</body>
</html>`,
            starterCss: `body {
  font-family: system-ui, -apple-system, sans-serif;
  padding: 24px;
  background-color: #FAF8F2;
  color: #252B27;
}
header {
  border-bottom: 2px solid #176B45;
  padding-bottom: 12px;
  margin-bottom: 20px;
}
h1 { color: #176B45; margin: 0 0 8px 0; }
.step-card {
  background: white;
  border: 1px solid #dbe6df;
  border-right: 4px solid #C6A34A;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 12px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}
.step-card h3 { margin-top: 0; color: #176B45; }`,
            starterJs: `console.log("تم تحميل بيئة فحص أساسيات الويب بنجاح.");
console.log("حالة الاتصال: HTTP/2 200 OK");`,
            expectedOutputHint: 'جرب إضافة خطوة رابعة بعنوان "الخطوة 4: تشغيل شيفرات JavaScript" واضغط زر تشغيل الكود.'
          }
        ]
      }
    ],
    quiz: {
      id: 'quiz-wf',
      courseId: 'web-fundamentals',
      title: 'اختبار التحصيل: أساسيات الويب والإنترنت',
      titleEn: 'Assessment: Web Fundamentals',
      passingScore: 75,
      questions: [
        {
          id: 'qwf1',
          question: 'ما هي الوظيفة الأساسية لنظام أسماء النطاقات (DNS) في شبكة الإنترنت؟',
          questionEn: 'What is the primary function of DNS on the internet?',
          options: [
            'ترجمة أسماء المواقع النصية إلى عناوين IP رقمية تفهمها أجهزة الشبكة',
            'تشفير كلمات المرور في قواعد البيانات',
            'تصميم صفحات الويب المتجاوبة',
            'تسريع تحميل مقاطع الفيديو والصوت'
          ],
          optionsEn: [
            'Translating domain names into IP addresses that network routers understand',
            'Encrypting database passwords',
            'Designing responsive user interfaces',
            'Accelerating audio and video streams'
          ],
          correctIndex: 0,
          explanation: 'الـ DNS يشبه دليل الهاتف العالمي للإنترنت، يترجم النطاقات مثل example.com إلى عنوان IP رقمي.'
        },
        {
          id: 'qwf2',
          question: 'أي من العناصر التالية يختص بمعالجتها مطور الواجهات الأمامية (Frontend Developer)؟',
          questionEn: 'Which of the following is the primary responsibility of a Frontend Developer?',
          options: [
            'تصميم وبرمجة واجهات المستخدم التفاعلية والتحكم بـ DOM وتجربة المستخدم',
            'إدارة خوادم قواعد البيانات والنسخ الاحتياطي السحابي',
            'إعداد شبكات الاتصال والراوترات الفيزيائية',
            'كتابة خوارزميات التبريد لمراكز البيانات'
          ],
          optionsEn: [
            'Designing and scripting interactive user interfaces, DOM, and user experience',
            'Managing relational database clusters and cloud backups',
            'Configuring physical network switches and cabling',
            'Writing HVAC datacenter cooling scripts'
          ],
          correctIndex: 0,
          explanation: 'يركز مطور الـ Frontend على كل ما يراه ويتفاعل معه المستخدم داخل المتصفح عبر HTML, CSS, JavaScript.'
        }
      ]
    }
  },

  // المستوى 2: بناء صفحات الويب بـ HTML
  {
    id: 'html-fundamentals',
    title: 'المستوى 2: HTML – بناء وهيكلة صفحات الويب',
    titleEn: 'Level 2: HTML – Semantic Structure & Web Architecture',
    shortDescription: 'بناء هياكل صفحات الويب القياسية، النماذج، الجداول، الوسوم الدلالية، وإمكانية الوصول.',
    shortDescriptionEn: 'Master semantic HTML5 tags, interactive forms, tables, accessibility, and modern web structuring.',
    level: 'مبتدئ',
    levelEn: 'Beginner',
    duration: '14 ساعة',
    totalLessons: 10,
    category: 'هيكلة الويب',
    iconName: 'CodeXml',
    color: '#176B45',
    imageUrl: '/src/assets/images/html_course_art_1793989779225.jpg',
    track: 'frontend',
    levelNumber: 2,
    practicalProject: {
      title: 'تصميم وبناء صفحة تعريفية شخصية (Portfolio)',
      titleEn: 'Designing & Coding a Personal Portfolio Page',
      description: 'بناء صفحة سيرة ذاتية متكاملة بالوسوم الدلالية تحتوي على نبذة، معرض أعمال، نموذج تواصل، وروابط موثقة.',
      descriptionEn: 'Build a comprehensive semantic portfolio with about section, project showcase, verified links, and contact form.'
    },
    overview: 'يقدم هذا المقرر المفاهيم المعيارية لهيكلة الويب الحديث وفق معايير W3C العالمية، بالتركيز على الدلالية وتوافقية محركات البحث (SEO) والوصول الميسر لذوي الاحتياجات الخاصة (a11y).',
    learningObjectives: [
      'فهم شجرة الـ DOM وهيكل مستند HTML5 القياسي.',
      'استخدام الوسوم الدلالية (header, main, section, article, nav, footer).',
      'بناء نماذج إدخال بيانات متطورة مع التحقق من صحة المدخلات.',
      'إدراج وتضمين الوسائط المتعددة (صور، فيديو، صوت) بطرق محسنة للأداء.'
    ],
    modules: [
      {
        title: 'الوحدة الأولى: البنية الدلالية وعناصر النصوص',
        titleEn: 'Module 1: Semantic Structure & Typography',
        lessons: [
          {
            id: 'html-1',
            courseId: 'html-fundamentals',
            moduleIndex: 1,
            moduleTitle: 'البنية الدلالية وعناصر النصوص',
            moduleTitleEn: 'Semantic Structure & Typography',
            title: 'بناء الهيكل الدلالي الأول لصفحة ويب',
            titleEn: 'Building Your First Semantic Web Structure',
            duration: '45 دقيقة',
            objective: 'قم بإنشاء صفحة ويب تعريفية تستخدم العناصر الدلالية: header و nav و main و footer.',
            explanation: `
في هذا الدرس، ننظم محتوى صفحة الويب باستخدام وسوم HTML5 الدلالية بدلاً من الاعتماد الكلي على وسوم <div> العامة.
العناصر الدلالية تمنح محركات البحث وقارئات الشاشة فهماً دقيقاً لبنية الصفحة:
- <header>: يمثل ترويسة الموقع أو الترويسة الفرعية.
- <nav>: يحتوي على روابط التنقل الرئيسية.
- <main>: يحمل المحتوى الفريد والأساسي للصفحة.
- <article>: يمثل محتوى مستقلاً بذاته وقابلاً لإعادة النشر.
- <footer>: يمثل تذييل الصفحة ومعلومات الاتصال وحقوق النشر.
            `,
            starterHtml: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <title>بوابة الطالب | الجامعة الوطنية الخاصة</title>
</head>
<body>
  <!-- ترويسة الصفحة الدلالية -->
  <header>
    <h1>الجامعة الوطنية الخاصة</h1>
    <p>كلية علوم الحاسب وهندسة البرمجيات</p>
  </header>

  <!-- شريط التنقل -->
  <nav>
    <a href="#about">عن المنصة</a> | 
    <a href="#curriculum">الخطة الدراسية</a> |
    <a href="#contact">التواصل</a>
  </nav>

  <!-- المحتوى الرئيسي -->
  <main>
    <article id="about">
      <h2>مسار هندسة البرمجيات 2026</h2>
      <p>منهج تطبيقي متكامل يأخذ الطالب من الصفر حتى بناء ونشر المواقع الحقيقية.</p>
    </article>
  </main>

  <!-- التذييل الأكاديمي -->
  <footer>
    <p>© 2026 جميع الحقوق محفوظة للجامعة الوطنية الخاصة</p>
  </footer>
</body>
</html>`,
            starterCss: `body {
  font-family: system-ui, -apple-system, sans-serif;
  margin: 0;
  padding: 20px;
  background-color: #FAF8F2;
  color: #252B27;
}
header {
  background: white;
  padding: 20px;
  border-radius: 12px;
  border-right: 5px solid #176B45;
  box-shadow: 0 2px 6px rgba(0,0,0,0.04);
}
h1 { color: #176B45; margin: 0 0 6px 0; }
nav { margin: 15px 0; padding: 10px; background: #E8F2EC; border-radius: 8px; }
nav a { color: #176B45; text-decoration: none; font-weight: bold; }
article { background: white; padding: 20px; border-radius: 12px; margin-top: 15px; }
footer { margin-top: 25px; text-align: center; font-size: 12px; color: #747C76; }`,
            starterJs: `console.log("تم تحميل مستند HTML الدلالي بنجاح.");`,
            expectedOutputHint: 'جرب إضافة وسم <section> داخل <main> يحتوي على قائمة بالمقررات واضغط تشغيل الكود.'
          }
        ]
      }
    ],
    quiz: {
      id: 'quiz-html',
      courseId: 'html-fundamentals',
      title: 'اختبار التحصيل: لغة HTML5 والعناصر الدلالية',
      titleEn: 'Assessment: HTML5 Semantics',
      passingScore: 70,
      questions: [
        {
          id: 'q1',
          question: 'أي من الوسوم التالية يمثل عنصراً دلالياً صحيحاً في HTML5 لروابط التنقل؟',
          questionEn: 'Which HTML5 element represents the primary navigation links?',
          options: ['<nav>', '<links>', '<menu-bar>', '<navigation>'],
          optionsEn: ['<nav>', '<links>', '<menu-bar>', '<navigation>'],
          correctIndex: 0,
          explanation: 'الوسم <nav> هو الوسم الدلالي القياسي المخصص لحاويات روابط التنقل الرئيسية.'
        }
      ]
    }
  },

  // المستوى 3: تصميم وتنسيق المواقع بـ CSS
  {
    id: 'css-styling',
    title: 'المستوى 3: CSS – تصميم وتنسيق واجهات المواقع',
    titleEn: 'Level 3: CSS – Styling, Layouts, Flexbox & Grid',
    shortDescription: 'تحويل الهياكل إلى تصاميم جذابة بنظامي Flexbox و CSS Grid والظلال والتحريك.',
    shortDescriptionEn: 'Master modern CSS styling, Box Model, Flexbox, Grid, transitions, variables, and typography.',
    level: 'مبتدئ',
    levelEn: 'Beginner',
    duration: '18 ساعة',
    totalLessons: 12,
    category: 'تصميم الواجهات',
    iconName: 'Palette',
    color: '#C6A34A',
    imageUrl: '/src/assets/images/css_course_art_1793989794924.jpg',
    track: 'frontend',
    levelNumber: 3,
    practicalProject: {
      title: 'تصميم موقع تعريفي احترافي لمؤسسة أو شركة',
      titleEn: 'Corporate Landing Page Design with CSS Flex & Grid',
      description: 'بناء واجهة صفحة رئيسية كاملة تحتوي على شريط علوي، بطاقات خدمات، معرض، ونموذج اشتراك أنيق.',
      descriptionEn: 'Code a full corporate landing page featuring hero banner, service cards, hover states, and CSS grid gallery.'
    },
    overview: 'إتقان تنسيق صفحات الويب وتحويل كود HTML المجرد إلى واجهات استخدام تفاعلية مبهرة تعكس الهوية الأكاديمية الراقية باللونين الأخضر الزمردي والذهب الملكي.',
    learningObjectives: [
      'فهم نموذج الصندوق (Box Model) والتحكم في الهوامش والحشوات (Margin & Padding).',
      'إتقان تقنية الـ Flexbox لبناء أشرطة التصفح ومحاذاة العناصر بدقة.',
      'بناء شبكات معقدة بنظام CSS Grid ثنائي الأبعاد.',
      'إضافة التأثيرات الحركية (Hover, Transitions, Keyframe Animations).'
    ],
    modules: [
      {
        title: 'الوحدة الأولى: أنظمة التخطيط الحديثة Flexbox & Grid',
        titleEn: 'Module 1: Modern Layouts with Flexbox & Grid',
        lessons: [
          {
            id: 'css-1',
            courseId: 'css-styling',
            moduleIndex: 1,
            moduleTitle: 'أنظمة التخطيط الحديثة Flexbox & Grid',
            moduleTitleEn: 'Modern Layouts with Flexbox & Grid',
            title: 'هندسة بطاقات الخدمات باستخدام Flexbox',
            titleEn: 'Engineering Service Cards with Flexbox',
            duration: '50 دقيقة',
            objective: 'صمم شبكة بطاقات متناسقة تستخدم display: flex ومحاذاة العناصر التلقائية.',
            explanation: `
يوفر نظام Flexbox طريقة بديهية ومرنة للغاية لتوزيع المساحة ومحاذاة العناصر حتى عندما تكون أبعادها مجهولة:
- display: flex: يحول العنصر الأب إلى حاوية مرنة.
- justify-content: يتحكم في توزيع العناصر على المحور الرئيسي (space-between, center, flex-start).
- align-items: يتحكم في المحاذاة على المحور العمودي.
- gap: يحدد المسافة المنتظمة بين العناصر دون الحاجة لهوامش يدوية.
            `,
            starterHtml: `<div class="cards-container">
  <div class="academic-card">
    <div class="card-icon">📚</div>
    <h3>المناهج المعتمدة</h3>
    <p>خطة دراسية متكاملة تبدأ من أسس الويب وتتدرج حتى مشاريع التخرج.</p>
    <button class="btn">استكشف المنهج</button>
  </div>
  <div class="academic-card highlight">
    <div class="card-icon">💻</div>
    <h3>محرر الأكواد المباشر</h3>
    <p>بيئة تطوير متكاملة داخل المتصفح لتجربة وتشغيل الشيفرات البرمجية فوراً.</p>
    <button class="btn btn-gold">فتح المحرر</button>
  </div>
  <div class="academic-card">
    <div class="card-icon">🤖</div>
    <h3>المرشد الأكاديمي الذكي</h3>
    <p>مساعد ذكاء اصطناعي يقدم تلميحات توجيهية ويحلل أخطاء البرمجة خطوة بخطوة.</p>
    <button class="btn">جرب المساعد</button>
  </div>
</div>`,
            starterCss: `:root {
  --primary-green: #176B45;
  --accent-gold: #C6A34A;
  --bg-card: #FFFFFF;
}
body {
  font-family: system-ui, -apple-system, sans-serif;
  padding: 30px 15px;
  background-color: #FAF8F2;
}
.cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}
.academic-card {
  background: var(--bg-card);
  border: 1px solid #dbe6df;
  border-radius: 16px;
  padding: 24px;
  flex: 1 1 260px;
  max-width: 320px;
  box-shadow: 0 4px 12px rgba(23, 107, 69, 0.05);
  transition: transform 0.2s, box-shadow 0.2s;
}
.academic-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(23, 107, 69, 0.12);
}
.academic-card.highlight {
  border: 2px solid var(--accent-gold);
}
.card-icon { font-size: 32px; margin-bottom: 12px; }
h3 { color: var(--primary-green); margin: 0 0 10px 0; }
p { color: #747C76; font-size: 14px; line-height: 1.6; }
.btn {
  background: var(--primary-green);
  color: white;
  border: none;
  padding: 10px 18px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 12px;
  width: 100%;
}
.btn-gold { background: var(--accent-gold); }`,
            starterJs: `console.log("تم تفعيل أنماط Flexbox التفاعلية.");`,
            expectedOutputHint: 'جرب إضافة تأثير hover يغير خلفية الزر إلى تدرج لوني عند وضع مؤشر الفأرة عليه.'
          }
        ]
      }
    ],
    quiz: {
      id: 'quiz-css',
      courseId: 'css-styling',
      title: 'اختبار التحصيل: تنسيقات CSS ونظام Flexbox',
      titleEn: 'Assessment: CSS Layouts & Flexbox',
      passingScore: 70,
      questions: [
        {
          id: 'qcss1',
          question: 'أي خاصية في Flexbox تستخدم لتوزيع العناصر على المحور الرئيسي بمسافات متساوية؟',
          questionEn: 'Which Flexbox property distributes items evenly along the main axis?',
          options: ['justify-content: space-between;', 'align-items: center;', 'flex-direction: column;', 'display: block;'],
          optionsEn: ['justify-content: space-between;', 'align-items: center;', 'flex-direction: column;', 'display: block;'],
          correctIndex: 0,
          explanation: 'خاصية justify-content هي المسؤولة عن المحاذاة وتوزيع المساحات على المحور الرئيسي.'
        }
      ]
    }
  },

  // المستوى 4: برمجة وتفاعل المواقع بـ JavaScript
  {
    id: 'javascript-programming',
    title: 'المستوى 4: JavaScript – برمجة وتفاعل المواقع',
    titleEn: 'Level 4: JavaScript – Core Programming, DOM & Fetch API',
    shortDescription: 'برمجة التفاعل وإدارة DOM، معالجة الأحداث، Local Storage واستدعاء الـ APIs.',
    shortDescriptionEn: 'Master JavaScript ES6+, DOM manipulation, event listeners, async/await, and LocalStorage.',
    level: 'متوسط',
    levelEn: 'Intermediate',
    duration: '24 ساعة',
    totalLessons: 14,
    category: 'البرمجة والتفاعل',
    iconName: 'FileCode2',
    color: '#176B45',
    imageUrl: '/src/assets/images/js_course_art_1793989809548.jpg',
    track: 'frontend',
    levelNumber: 4,
    practicalProject: {
      title: 'تطبيق قائمة مهام تفاعلي (To-Do App) مع الحفظ التلقائي',
      titleEn: 'Interactive Task Manager App with LocalStorage Persistence',
      description: 'بناء تطبيق إدارة مهام يسمح بإضافة، شطب، فلترة، وحذف المهام مع حفظها في ذاكرة المتصفح المحلية.',
      descriptionEn: 'Build a CRUD task management app with dynamic DOM creation, event delegation, and browser LocalStorage.'
    },
    overview: 'العمود الفقري لتطوير الويب الحديث. يتعلم الطالب كيفية بث الحياة في صفحات الويب، وإجراء العمليات الحسابية والمنطقية، ومعالجة أحداث المستخدم، والاتصال بالخوادم عبر الـ Fetch API.',
    learningObjectives: [
      'إتقان بنية جافاسكريبت الحديثة (ES6+ Variables, Arrow Functions, Destructuring).',
      'التحكم الكامل بشجرة العناصر DOM (إنشاء، تعديل، حذف، وتنسيق العناصر).',
      'التعامل مع الأحداث وعزل الأخطاء (Events & Error Handling).',
      'البرمجة غير المتزامنة واستدعاء البيانات (Async/Await & Fetch API).'
    ],
    modules: [
      {
        title: 'الوحدة الأولى: التحكم بشجرة الـ DOM وتفاعل النماذج',
        titleEn: 'Module 1: DOM Manipulation & Event Handling',
        lessons: [
          {
            id: 'js-1',
            courseId: 'javascript-programming',
            moduleIndex: 1,
            moduleTitle: 'التحكم بشجرة الـ DOM وتفاعل النماذج',
            moduleTitleEn: 'DOM Manipulation & Event Handling',
            title: 'إدارة المهام وتحديث الـ DOM في الوقت الفعلي',
            titleEn: 'Real-time Task Management & DOM Updates',
            duration: '60 دقيقة',
            objective: 'اكتب كود جافاسكريبت يستمع لأحداث النقر ويضيف عناصر جديدة ديناميكياً للـ DOM.',
            explanation: `
في هذا الدرس، سنستخدم نموذج كائن المستند (DOM API):
- document.getElementById(): للوصول للعناصر عبر معرّفها الفريد.
- addEventListener('click', fn): للاستماع للنقرات وتشغيل الدوال.
- document.createElement(): لتوليد عناصر HTML جديدة عبر البرمجة.
- element.appendChild(): لإدراج العنصر الجديد داخل الشجرة.
            `,
            starterHtml: `<div class="todo-app">
  <h2>قائمة المهام الدراسية 📝</h2>
  <div class="input-group">
    <input type="text" id="taskInput" placeholder="أدخل اسم المهمة الأكاديمية الجديدة...">
    <button id="addBtn">إضافة مهمة</button>
  </div>
  <ul id="taskList">
    <li class="done">قراءة مفاهيم الـ DOM في جافاسكريبت</li>
  </ul>
  <div class="stats">
    <span id="taskCount">إجمالي المهام: 1</span>
  </div>
</div>`,
            starterCss: `body {
  font-family: system-ui, -apple-system, sans-serif;
  padding: 20px;
  background: #FAF8F2;
}
.todo-app {
  max-width: 450px;
  margin: 0 auto;
  background: white;
  padding: 24px;
  border-radius: 16px;
  border: 1px solid #dbe6df;
  box-shadow: 0 4px 12px rgba(0,0,0,0.06);
}
h2 { color: #176B45; margin-top: 0; text-align: center; }
.input-group { display: flex; gap: 8px; margin-bottom: 20px; }
input {
  flex: 1;
  padding: 10px 14px;
  border: 1px solid #dbe6df;
  border-radius: 8px;
  font-size: 14px;
}
button {
  background: #176B45;
  color: white;
  border: none;
  padding: 10px 18px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
}
ul { list-style: none; padding: 0; margin: 0; }
li {
  padding: 12px;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}
li.done { text-decoration: line-through; color: #747C76; background: #FAF8F2; }
.stats { margin-top: 15px; font-size: 12px; color: #747C76; text-align: left; }`,
            starterJs: `const input = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const countSpan = document.getElementById('taskCount');

function updateCount() {
  const total = taskList.querySelectorAll('li').length;
  countSpan.textContent = 'إجمالي المهام: ' + total;
}

addBtn.addEventListener('click', () => {
  const text = input.value.trim();
  if (!text) return;

  const li = document.createElement('li');
  li.textContent = text;
  li.addEventListener('click', () => {
    li.classList.toggle('done');
  });

  taskList.appendChild(li);
  input.value = '';
  updateCount();
});`,
            expectedOutputHint: 'جرب كتابة مهمة في حقل الإدخال والضغط على "إضافة مهمة" لمعاينة التفاعل المباشر.'
          }
        ]
      }
    ],
    quiz: {
      id: 'quiz-js',
      courseId: 'javascript-programming',
      title: 'اختبار التحصيل: لغة JavaScript وإدارة الـ DOM',
      titleEn: 'Assessment: JavaScript & DOM',
      passingScore: 70,
      questions: [
        {
          id: 'qjs1',
          question: 'ما هي الطريقة القياسية لربط دالة برمجية بحدث النقر على عنصر في جافاسكريبت؟',
          questionEn: 'What is the standard method to attach a click event listener in JS?',
          options: ['element.addEventListener("click", fn)', 'element.attachEvent("click", fn)', 'element.onClick = fn', 'element.listen("click")'],
          optionsEn: ['element.addEventListener("click", fn)', 'element.attachEvent("click", fn)', 'element.onClick = fn', 'element.listen("click")'],
          correctIndex: 0,
          explanation: 'الطريقة addEventListener هي المعيار القياسي الآمن الذي يتيح تسجيل عدة معالجات لنفس الحدث.'
        }
      ]
    }
  },

  // المستوى 5: تصميم المواقع المتجاوبة
  {
    id: 'responsive-design',
    title: 'المستوى 5: تصميم المواقع المتجاوبة (Responsive Design)',
    titleEn: 'Level 5: Responsive Web Design & Mobile-First Patterns',
    shortDescription: 'جعل المواقع متوافقة مع كل الشاشات: Media Queries، Viewport، والصور المتجاوبة.',
    shortDescriptionEn: 'Master responsive breakpoints, viewport configurations, mobile navigation, and fluid layouts.',
    level: 'متوسط',
    levelEn: 'Intermediate',
    duration: '12 ساعة',
    totalLessons: 8,
    category: 'التصميم المتجاوب',
    iconName: 'Smartphone',
    color: '#C6A34A',
    imageUrl: '/src/assets/images/css_course_art_1793989794924.jpg',
    track: 'frontend',
    levelNumber: 5,
    practicalProject: {
      title: 'تحويل موقع إلى تصميم متجاوب 100% مع الهاتف والحاسوب',
      titleEn: 'Converting a Static Site to 100% Responsive Experience',
      description: 'بناء شريط تنقل متجاوب يتحول إلى قائمة هاتف (Hamburger Menu) مع إعادة توزيع الأعمدة تلقائياً.',
      descriptionEn: 'Build a fluid navbar with mobile drawer navigation, responsive typography, and adaptive grid columns.'
    },
    overview: 'في هذا المستوى، يتعلم الطالب قواعد التصميم الحديث الموجه للهاتف أولاً (Mobile-First)، وضبط الـ Viewport، واستخدام استعلامات الوسائط (Media Queries)، وتنسيق الصور لتعمل على الهواتف والأجهزة اللوحية والحواسيب بدقة متناهية.',
    learningObjectives: [
      'فهم إعدادات الـ Viewport وسلوك شاشات Retina الحديثة.',
      'كتابة Media Queries معيارية وفق نقاط التوقف القياسية (Breakpoints: 640px, 768px, 1024px, 1280px).',
      'تصميم أشرطة التنقل الذكية المخصصة للهواتف الذكية.',
      'تحسين أحجام الصور وأوزانها لتسريع تحميل صفحات الهاتف.'
    ],
    modules: [
      {
        title: 'الوحدة الأولى: نقاط التوقف واستعلامات الوسائط',
        titleEn: 'Module 1: Breakpoints & Media Queries',
        lessons: [
          {
            id: 'resp-1',
            courseId: 'responsive-design',
            moduleIndex: 1,
            moduleTitle: 'نقاط التوقف واستعلامات الوسائط',
            moduleTitleEn: 'Breakpoints & Media Queries',
            title: 'بناء تخطيط شبكي متكيف بين الهاتف والحاسوب',
            titleEn: 'Building an Adaptive Mobile-to-Desktop Layout',
            duration: '45 دقيقة',
            objective: 'طبق Media Query لإعادة تنظيم الأعمدة من عمود واحد بالهاتف إلى 3 أعمدة بالحاسوب.',
            explanation: `
في التصميم الموجه للمحمول (Mobile-First):
- نكتب التنسيق الأساسي للشاشات الصغيرة دون استعلامات.
- نستخدم @media (min-width: 768px) لتطبيق التنسيقات للشاشات المتوسطة والكبيرة.
هذا الأسلوب يوفر أداءً أسرع على الهواتف ويضمن خلو الموقع من أشرطة التمرير الأفقية المزعجة.
            `,
            starterHtml: `<div class="responsive-layout">
  <div class="col">
    <h3>📱 تصميم الهاتف</h3>
    <p>يظهر في عمود فردي مريح للقراءة والتمرير باللمس.</p>
  </div>
  <div class="col">
    <h3>💻 شاشة الحاسوب</h3>
    <p>يتمدد تلقائياً ليعرض 3 أعمدة جنب إلى جنب للاستفادة من المساحة.</p>
  </div>
  <div class="col">
    <h3>⚡ أداء فائق</h3>
    <p>تحميل سريع واستهلاك خفيف للبيانات على كل مقاسات الأجهزة.</p>
  </div>
</div>`,
            starterCss: `body {
  font-family: system-ui, -apple-system, sans-serif;
  padding: 20px;
  background: #FAF8F2;
}
.responsive-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}
.col {
  background: white;
  padding: 20px;
  border-radius: 12px;
  border: 1px solid #dbe6df;
  border-top: 4px solid #176B45;
}
h3 { color: #176B45; margin-top: 0; }
p { color: #747C76; font-size: 14px; line-height: 1.6; }

/* استعلام الوسائط للحواسيب والتابلت */
@media (min-width: 600px) {
  .responsive-layout {
    grid-template-columns: repeat(3, 1fr);
  }
}`,
            starterJs: `console.log("عرض الشاشة الحالي: " + window.innerWidth + "px");`,
            expectedOutputHint: 'جرب تبديل زر المعاينة في شريط المحرر بين أيقونة الحاسوب والهاتف لمشاهدة التكيف لحظياً.'
          }
        ]
      }
    ],
    quiz: {
      id: 'quiz-resp',
      courseId: 'responsive-design',
      title: 'اختبار التحصيل: التصميم المتجاوب واستعلامات الوسائط',
      titleEn: 'Assessment: Responsive Web Design',
      passingScore: 70,
      questions: [
        {
          id: 'qresp1',
          question: 'ما فائدة تضمين وسم meta viewport في ترويسة صفحة HTML؟',
          questionEn: 'Why is the meta viewport tag essential in HTML?',
          options: [
            'لضبط مقياس عرض الصفحة تلقائياً ليتطابق مع مقاس شاشة جهاز المستخدم',
            'لتسريع استعلامات قواعد البيانات',
            'لحماية الموقع من هجمات الاختراق',
            'لإنشاء شريط التنقل العلوي'
          ],
          optionsEn: [
            'To set the viewport width and initial zoom scale matching device screen width',
            'To accelerate SQL queries',
            'To protect against cyber attacks',
            'To render the top navigation bar'
          ],
          correctIndex: 0,
          explanation: 'بدون وسم meta viewport، ستعرض الهواتف الذكية الصفحة بمقياس سطح مكتب صغير جداً وغير مقروء.'
        }
      ]
    }
  },

  // المستوى 6: إدارة الإصدارات بـ Git و GitHub
  {
    id: 'git-github',
    title: 'المستوى 6: Git و GitHub – حفظ المشاريع وإدارة الأكواد',
    titleEn: 'Level 6: Git & GitHub – Version Control & Team Collaboration',
    shortDescription: 'إتقان مستودعات Git، إنشاء الفروع، إدارة التعديلات، ورفع المشاريع على GitHub.',
    shortDescriptionEn: 'Master Git commits, branches, pull requests, merge conflict resolution, and cloud repositories.',
    level: 'متوسط',
    levelEn: 'Intermediate',
    duration: '10 ساعات',
    totalLessons: 7,
    category: 'إدارة الأكواد',
    iconName: 'GitBranch',
    color: '#176B45',
    imageUrl: '/src/assets/images/git_github_art_1794108272217.jpg',
    track: 'backend',
    levelNumber: 6,
    practicalProject: {
      title: 'تهيئة مستودع على GitHub ورفع مشروع مع ملف README',
      titleEn: 'Setting up a GitHub Repository & Open Source Release',
      description: 'إنشاء Repository حقيقي، إنشاء فرع feature-branch، دمج التعديلات، وكتابة توثيق README أكاديمي احترافي.',
      descriptionEn: 'Create a local repository, stage commits, create feature branches, resolve merge, and draft a markdown README.'
    },
    overview: 'المهارة الإلزامية لكل مبرمج في سوق العمل البرمجي المعاصر. يتعلم الطالب كيفية تتبع تاريخ التعديلات، وحفظ نقاط استعادة للمشروع، والعمل الجماعي بإنشاء الفروع (Branches) وإرسال طلبات السحب (Pull Requests).',
    learningObjectives: [
      'فهم فلسفة نظام إدارة الإصدارات الموزع (VCS).',
      'إتقان أوامر Git الأساسية (init, status, add, commit, push, pull).',
      'إدارة الفروع البرمجية وحل تعارض الشيفرات (Merge Conflicts).',
      'توثيق المشاريع البرمجية بصيغة Markdown وبناء Portfolio على GitHub.'
    ],
    modules: [
      {
        title: 'الوحدة الأولى: دورة حياة Git والأوامر الأساسية',
        titleEn: 'Module 1: Git Lifecycle & Core Commands',
        lessons: [
          {
            id: 'git-1',
            courseId: 'git-github',
            moduleIndex: 1,
            moduleTitle: 'دورة حياة Git والأوامر الأساسية',
            moduleTitleEn: 'Git Lifecycle & Core Commands',
            title: 'محاكاة أوامر Git وسجل الـ Commits',
            titleEn: 'Simulating Git Commands & Commit History',
            duration: '40 دقيقة',
            objective: 'اكتب كوداً يحاكي تسجيل ومتابعة إصدارات المشروع وربطها بنقاط الـ Commit.',
            explanation: `
المراحل الثلاث لحالة الملفات في Git:
1. Working Directory: مجلد العمل الذي تحرر فيه ملفاتك.
2. Staging Area (git add): منطقة التجهيز لتحديد الملفات التي ترغب بحفظها.
3. Local Repository (git commit): المستودع الذي يخزن لقطة دائمة لتاريخ التعديلات.
بعدها نرفع التعديلات للسحابة عبر: git push origin main.
            `,
            starterHtml: `<div class="git-terminal">
  <div class="terminal-bar">
    <span class="dot red"></span>
    <span class="dot yellow"></span>
    <span class="dot green"></span>
    <span class="title">bash — git-workflow-simulation</span>
  </div>
  <div class="terminal-body" id="termOutput">
    <div class="line"><span class="prompt">$</span> git init</div>
    <div class="line text-green">Initialized empty Git repository in /app/graduation-project/.git/</div>
    <div class="line"><span class="prompt">$</span> git status</div>
    <div class="line text-gray">Untracked files: index.html, style.css, app.js</div>
    <div class="line"><span class="prompt">$</span> git add . && git commit -m "feat: initial commit"</div>
    <div class="line text-gold">[main (root-commit) 8f3a2b1] feat: initial commit - 3 files changed</div>
  </div>
</div>`,
            starterCss: `body {
  font-family: monospace;
  background: #0f1311;
  color: #e0e0e0;
  padding: 20px;
}
.git-terminal {
  max-width: 600px;
  margin: 0 auto;
  background: #151a17;
  border: 1px solid #2a352e;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0,0,0,0.5);
}
.terminal-bar {
  background: #1e2420;
  padding: 10px 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  border-bottom: 1px solid #2a352e;
}
.dot { width: 10px; height: 10px; border-radius: 50%; }
.dot.red { background: #ff5f56; }
.dot.yellow { background: #ffbd2e; }
.dot.green { background: #27c93f; }
.title { font-size: 11px; color: #a0a0a0; margin-left: 10px; }
.terminal-body { padding: 16px; font-size: 13px; line-height: 1.7; }
.prompt { color: #C6A34A; font-weight: bold; }
.text-green { color: #4ade80; }
.text-gray { color: #888; }
.text-gold { color: #facc15; }`,
            starterJs: `console.log("Git repository state: clean, ready to push.");`,
            expectedOutputHint: 'جرب إضافة سطر يحاكي أمر git push origin main لمعاينة رفع الأكواد إلى GitHub.'
          }
        ]
      }
    ],
    quiz: {
      id: 'quiz-git',
      courseId: 'git-github',
      title: 'اختبار التحصيل: إدارة الإصدارات ونظام Git',
      titleEn: 'Assessment: Git & GitHub',
      passingScore: 70,
      questions: [
        {
          id: 'qgit1',
          question: 'ما هو الأمر المستخدم لإنشاء فرع برمجي جديد في Git والانتقال إليه مباشرة؟',
          questionEn: 'Which command creates and switches to a new branch in Git?',
          options: ['git checkout -b feature-name', 'git new branch feature-name', 'git create-branch feature-name', 'git push -b feature-name'],
          optionsEn: ['git checkout -b feature-name', 'git new branch feature-name', 'git create-branch feature-name', 'git push -b feature-name'],
          correctIndex: 0,
          explanation: 'الأمر git checkout -b (أو git switch -c في الإصدارات الحديثة) ينشئ فرعاً جديداً وينتقل إليه فوراً.'
        }
      ]
    }
  },

  // المستوى 7: بناء تطبيقات الويب الحديثة بـ React.js
  {
    id: 'react-fundamentals',
    title: 'المستوى 7: React.js – هندسة وتطوير تطبيقات الويب الحديثة',
    titleEn: 'Level 7: React.js – Component Architecture, State & Hooks',
    shortDescription: 'بناء تطبيقات أحادية الصفحة (SPA)، إدارة الحالة بالـ Hooks، وتصميم واجهات المكونات.',
    shortDescriptionEn: 'Master React components, JSX, useState, useEffect, props, forms, and component modularity.',
    level: 'متوسط',
    levelEn: 'Intermediate',
    duration: '26 ساعة',
    totalLessons: 14,
    category: 'أطر العمل الحديثة',
    iconName: 'Atom',
    color: '#176B45',
    imageUrl: '/src/assets/images/react_course_art_1793989823330.jpg',
    track: 'frontend',
    levelNumber: 7,
    practicalProject: {
      title: 'تصميم واجهة منصة تعليمية متكاملة بالمكونات',
      titleEn: 'Building an E-Learning Platform Frontend with React Components',
      description: 'بناء لوحة تحكم كاملة بمكونات قابلة لإعادة الاستخدام (Navbar, Sidebar, CourseCard, ProgressTracker).',
      descriptionEn: 'Build a modular education dashboard featuring interactive state updates, filtered courses, and active tabs.'
    },
    overview: 'الإطار الأكثر طلباً عالمياً في هندسة الواجهات. يتعلم الطالب كيفية التفكير بالمكونات القابلة لإعادة الاستخدام (Reusable Components)، وإدارة الحالة (State)، واستخدام خطافات React الحديثة (Hooks) لبناء تطبيقات سريعة التجاوب.',
    learningObjectives: [
      'فهم صيغة JSX وتوليد العناصر الديناميكية.',
      'إدارة تدفق البيانات عبر المكونات باستخدام الـ Props والـ State.',
      'استخدام الخطافات الأساسية (useState, useEffect) لإدارة دورة حياة المكون.',
      'بناء واجهات أحادية الصفحة (SPA) سريعة الاستجابة دون إعادة تحميل الصفحة.'
    ],
    modules: [
      {
        title: 'الوحدة الأولى: المكونات وإدارة الحالة بالـ Hooks',
        titleEn: 'Module 1: Components & State Management with Hooks',
        lessons: [
          {
            id: 'react-1',
            courseId: 'react-fundamentals',
            moduleIndex: 1,
            moduleTitle: 'المكونات وإدارة الحالة بالـ Hooks',
            moduleTitleEn: 'Components & State Management with Hooks',
            title: 'بناء مكون عداد الإنجاز الأكاديمي مع useState',
            titleEn: 'Building an Academic Progress Counter with useState',
            duration: '60 دقيقة',
            objective: 'صمم مكوناً تفاعلياً يحاكي دورة حياة مكونات React وتحديث الحالة التلقائي.',
            explanation: `
في React، بدلاً من تعديل عناصر الـ DOM يدوياً، نربط واجهة المستخدم بحالة المكون (State):
- عندما تتغير الحالة عبر الدالة المعدلة (setState)، يعيد React تصيير المكون تلقائياً (Re-render) فقط للأجزاء التي تغيرت.
- هذا المبدأ يجعل الشيفرة أكثر نظافة وسهولة في الصيانة.
            `,
            starterHtml: `<div class="react-component">
  <div class="badge">React Component Simulation</div>
  <h2>مقياس إنجاز الساعات الأكاديمية 🎓</h2>
  <div class="progress-box">
    <div class="progress-bar" id="progressBar" style="width: 25%;"></div>
  </div>
  <div class="counter-display">
    <span id="hoursCount">1</span> / 4 ساعات مكتملة
  </div>
  <div class="btn-group">
    <button id="incBtn" class="btn btn-green">+ تسجيل ساعة دراسية</button>
    <button id="resetBtn" class="btn btn-outline">إعادة ضبط</button>
  </div>
</div>`,
            starterCss: `body {
  font-family: system-ui, -apple-system, sans-serif;
  background: #FAF8F2;
  padding: 24px;
}
.react-component {
  max-width: 440px;
  margin: 0 auto;
  background: white;
  border: 1px solid #dbe6df;
  border-radius: 20px;
  padding: 24px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.06);
  text-align: center;
}
.badge {
  display: inline-block;
  background: #E8F2EC;
  color: #176B45;
  font-size: 11px;
  font-weight: bold;
  padding: 4px 12px;
  border-radius: 20px;
  margin-bottom: 12px;
}
h2 { color: #176B45; margin: 0 0 16px 0; font-size: 18px; }
.progress-box {
  background: #f0f0f0;
  height: 12px;
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 12px;
}
.progress-bar {
  background: #176B45;
  height: 100%;
  transition: width 0.3s ease;
}
.counter-display { font-size: 14px; font-weight: bold; color: #747C76; margin-bottom: 20px; }
.btn-group { display: flex; gap: 10px; justify-content: center; }
.btn {
  padding: 10px 18px;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
  border: none;
  font-size: 13px;
}
.btn-green { background: #176B45; color: white; }
.btn-outline { background: #FAF8F2; color: #747C76; border: 1px solid #dbe6df; }`,
            starterJs: `let hours = 1;
const maxHours = 4;
const countSpan = document.getElementById('hoursCount');
const progressBar = document.getElementById('progressBar');
const incBtn = document.getElementById('incBtn');
const resetBtn = document.getElementById('resetBtn');

function renderState() {
  countSpan.textContent = hours;
  progressBar.style.width = ((hours / maxHours) * 100) + '%';
}

incBtn.addEventListener('click', () => {
  if (hours < maxHours) {
    hours++;
    renderState();
  }
});

resetBtn.addEventListener('click', () => {
  hours = 0;
  renderState();
});`,
            expectedOutputHint: 'جرب النقر على "+ تسجيل ساعة دراسية" وشاهد كيف تتحدث شريحة التقدم ونسبة الإنجاز فورياً.'
          }
        ]
      }
    ],
    quiz: {
      id: 'quiz-react',
      courseId: 'react-fundamentals',
      title: 'اختبار التحصيل: بنية React.js وإدارة الحالة',
      titleEn: 'Assessment: React Architecture & State',
      passingScore: 70,
      questions: [
        {
          id: 'qr1',
          question: 'ما هو دور الخطاف (Hook) الشهير useState في React؟',
          questionEn: 'What is the primary role of the useState hook in React?',
          options: [
            'تعريف متغير حالة خاص بالمكون مع دالة لإعادة تصيير الواجهة عند تحديثه',
            'الاتصال التلقائي بقواعد البيانات دون خادم',
            'تسريع تحميل ملفات الصور الكبيرة',
            'تحويل كود JavaScript إلى كود Python'
          ],
          optionsEn: [
            'Declaring component state variable with a setter function triggering re-render',
            'Connecting directly to SQL databases without a server',
            'Compressing image assets automatically',
            'Converting JavaScript code to Python'
          ],
          correctIndex: 0,
          explanation: 'الخطاف useState يمنح المكونات الوظيفية القدرة على امتلاك حالة ديناميكية وإعادة تحديث الواجهة عند تغيرها.'
        }
      ]
    }
  },

  // ==========================================
  // المسار الثاني: الواجهة الخلفية وقواعد البيانات (Backend & Database)
  // ==========================================

  // المستوى 8: تطوير الواجهة الخلفية بـ Node.js و Express.js
  {
    id: 'backend-nodejs',
    title: 'المستوى 8: Backend – تطوير الواجهة الخلفية بـ Node.js و Express',
    titleEn: 'Level 8: Backend – Server-Side Architecture with Node.js & Express',
    shortDescription: 'بناء الخوادم، مسارات REST API، الـ Middleware، ونظام المصادقة والتسجيل.',
    shortDescriptionEn: 'Build HTTP servers, RESTful endpoints, middleware chains, controllers, and JWT auth.',
    level: 'متوسط',
    levelEn: 'Intermediate',
    duration: '22 ساعة',
    totalLessons: 12,
    category: 'الواجهة الخلفية',
    iconName: 'Server',
    color: '#176B45',
    imageUrl: '/src/assets/images/backend_nodejs_art_1794108246766.jpg',
    track: 'backend',
    levelNumber: 8,
    practicalProject: {
      title: 'بناء خادم REST API متكامل لمنصة تعليمية',
      titleEn: 'Building a Full-Fledged Education Platform REST API Server',
      description: 'برمجة خادم Express يدعم تسجيل الطلاب، استرجاع المقررات، إضافة الدروس، والتحقق من التوثيق.',
      descriptionEn: 'Build an Express.js backend with endpoints for students, courses, lessons, and role authentication.'
    },
    overview: 'الانتقال إلى عالم الواجهة الخلفية ومعالجة البيانات على الخادم. يتعلم الطالب كيفية إنشاء خادم HTTP، وهندسة مسارات RESTful APIs، وتطبيق البرمجيات الوسيطة (Middleware)، والتحقق من صحة المدخلات، وتأمين نقاط النهاية.',
    learningObjectives: [
      'فهم بيئة تشغيل Node.js غير المحظورة (Event Loop & Non-blocking I/O).',
      'بناء خادم Express.js متكامل وتنظيم الملفات بنمط Routes & Controllers.',
      'تطبيق الـ Middleware لفحص الـ Headers، تسجيل السجلات، ومعالجة الأخطاء.',
      'إنشاء واجهات برمجة تطبيقات REST API تدعم عمليات GET, POST, PUT, DELETE.'
    ],
    modules: [
      {
        title: 'الوحدة الأولى: معمارية الخادم وتوجيه المسارات (Routing)',
        titleEn: 'Module 1: Server Architecture & Route Handlers',
        lessons: [
          {
            id: 'node-1',
            courseId: 'backend-nodejs',
            moduleIndex: 1,
            moduleTitle: 'معمارية الخادم وتوجيه المسارات',
            moduleTitleEn: 'Server Architecture & Route Handlers',
            title: 'هندسة مسار REST API لإرجاع قائمة المقررات',
            titleEn: 'Engineering a RESTful GET Courses API Endpoint',
            duration: '50 دقيقة',
            objective: 'قم بمحاكاة خادم Express يعالج طلب GET ويعيد استجابة JSON برمز حالة 200 OK.',
            explanation: `
في معمارية REST API:
- العميل يرسل طلب GET /api/courses.
- الخادم يمرر الطلب عبر سلسلة الـ Middlewares (فحص التوثيق وتسجيل الوقت).
- الـ Controller يسترجع قائمة المقررات من قاعدة البيانات.
- الخادم يعيد استجابة بصيغة JSON مع ترويسة Content-Type: application/json ورمز 200 OK.
            `,
            starterHtml: `<div class="api-console">
  <div class="console-header">
    <span class="badge get">GET</span>
    <span class="endpoint">/api/v1/courses</span>
    <button id="sendBtn" class="send-btn">إرسال الطلب (Send)</button>
  </div>
  <div class="response-panel">
    <div class="status-bar">
      <span>الحالة: <strong id="statusCode" class="text-green">200 OK</strong></span>
      <span>الوقت: <strong id="latency">18ms</strong></span>
    </div>
    <pre id="jsonPayload">{
  "success": true,
  "institution": "الجامعة الوطنية الخاصة",
  "data": [
    { "id": 1, "title": "أساسيات الويب", "lessons": 8 },
    { "id": 2, "title": "برمجة JavaScript", "lessons": 14 }
  ]
}</pre>
  </div>
</div>`,
            starterCss: `body {
  font-family: monospace;
  background: #0f1311;
  color: #e0e0e0;
  padding: 20px;
}
.api-console {
  max-width: 600px;
  margin: 0 auto;
  background: #151a17;
  border: 1px solid #2a352e;
  border-radius: 12px;
  overflow: hidden;
}
.console-header {
  background: #1e2420;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
}
.badge.get {
  background: #176B45;
  color: white;
  padding: 4px 10px;
  border-radius: 6px;
  font-weight: bold;
}
.endpoint { flex: 1; color: #FAF8F2; font-size: 14px; }
.send-btn {
  background: #C6A34A;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
}
.response-panel { padding: 16px; }
.status-bar {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #2a352e;
  padding-bottom: 8px;
  margin-bottom: 12px;
  font-size: 12px;
}
.text-green { color: #4ade80; }
pre { margin: 0; color: #a5d6a7; font-size: 13px; line-height: 1.6; }`,
            starterJs: `const sendBtn = document.getElementById('sendBtn');
const payload = document.getElementById('jsonPayload');
const latency = document.getElementById('latency');

sendBtn.addEventListener('click', () => {
  latency.textContent = Math.floor(Math.random() * 20 + 10) + 'ms';
  console.log("تم استدعاء مسار REST API بنجاح.");
});`,
            expectedOutputHint: 'جرب النقر على زر "إرسال الطلب (Send)" لمعاينة محاكاة استدعاء API واستجابة الخادم.'
          }
        ]
      }
    ],
    quiz: {
      id: 'quiz-node',
      courseId: 'backend-nodejs',
      title: 'اختبار التحصيل: تطوير الواجهة الخلفية بـ Node.js',
      titleEn: 'Assessment: Node.js Backend',
      passingScore: 70,
      questions: [
        {
          id: 'qnode1',
          question: 'ما هو رمز استجابة HTTP القياسي الذي يعبر عن نجاح إنشاء مورد جديد في الخادم؟',
          questionEn: 'Which standard HTTP status code signifies that a resource was successfully created?',
          options: ['201 Created', '200 OK', '404 Not Found', '500 Server Error'],
          optionsEn: ['201 Created', '200 OK', '404 Not Found', '500 Server Error'],
          correctIndex: 0,
          explanation: 'الرمز 201 Created يخبر العميل بأن طلب الـ POST قد نُفذ بنجاح وأُنشئ السجل الجديد.'
        }
      ]
    }
  },

  // المستوى 9: قواعد البيانات
  {
    id: 'database-sql',
    title: 'المستوى 9: قواعد البيانات – تصميم الجداول واستعلامات SQL',
    titleEn: 'Level 9: Database – Relational Schema Design & SQL Queries',
    shortDescription: 'تصميم الجداول، المفاتيح الأساسية والخارجية، علاقات ERD، وعمليات CRUD.',
    shortDescriptionEn: 'Master relational schema design, primary & foreign keys, SQL joins, and database integrations.',
    level: 'متوسط',
    levelEn: 'Intermediate',
    duration: '20 ساعة',
    totalLessons: 10,
    category: 'قواعد البيانات',
    iconName: 'Database',
    color: '#C6A34A',
    imageUrl: '/src/assets/images/database_sql_art_1794108259054.jpg',
    track: 'backend',
    levelNumber: 9,
    practicalProject: {
      title: 'تصميم مخطط قاعدة بيانات متكامل لمنصة تعليمية (ERD)',
      titleEn: 'Designing a Complete Database Schema for University Platform',
      description: 'بناء جداول الطلاب، المقررات، التسجيل، ودرجات الاختبارات مع ربط العلاقات بمفاتيح أجنبية واستعلامات JOIN.',
      descriptionEn: 'Design an Entity-Relationship Diagram (ERD) and write SQL statements for students, courses, and transcripts.'
    },
    overview: 'تعلم كيفية حفظ وإدارة واسترجاع البيانات بكفاءة وأمان عاليين. يغطي هذا المستوى تصميم المخططات العلائقية (Relational Schemas)، وفهم الفروقات بين أنظمة SQL و NoSQL، وكتابة استعلامات البيانات المتقدمة.',
    learningObjectives: [
      'تصميم مخطط الكيانات والعلاقات (ERD) بطريقة معيارية تمنع تكرار البيانات.',
      'كتابة استعلامات SQL الأساسية (SELECT, INSERT, UPDATE, DELETE).',
      'ربط الجداول واسترجاع البيانات المركبة باستخدام عمليات الـ JOIN.',
      'حماية قواعد البيانات من ثغرات الحقن (SQL Injection Prevention).'
    ],
    modules: [
      {
        title: 'الوحدة الأولى: استعلامات SQL وربط الجداول',
        titleEn: 'Module 1: Relational Queries & Table Joins',
        lessons: [
          {
            id: 'sql-1',
            courseId: 'database-sql',
            moduleIndex: 1,
            moduleTitle: 'استعلامات SQL وربط الجداول',
            moduleTitleEn: 'Relational Queries & Table Joins',
            title: 'استرجاع سجلات الطلاب ودرجاتهم عبر SQL JOIN',
            titleEn: 'Querying Student Transcripts with SQL JOIN',
            duration: '50 دقيقة',
            objective: 'اكتب استعلام SQL يربط جدول الطلاب بجدول المقررات لعرض قائمة النتائج.',
            explanation: `
في قواعد البيانات العلائقية (RDBMS):
- جدول students يحتوي على بيانات الطالب ومفتاح أساسي (student_id).
- جدول enrollments يربط الطالب بالمقرر بواسطة مفتاح أجنبي (foreign key).
- باستخدام INNER JOIN ندمج السجلات المطابقة لنحصل على تقرير أكاديمي شامل.
            `,
            starterHtml: `<div class="sql-studio">
  <h3>محرر استعلامات SQL الأكاديمي 🗄️</h3>
  <div class="sql-editor">
    <code>SELECT s.name, c.title, e.grade 
FROM students s
JOIN enrollments e ON s.id = e.student_id
JOIN courses c ON e.course_id = c.id
WHERE e.grade >= 90;</code>
  </div>
  <button id="runSqlBtn" class="sql-btn">تنفيذ الاستعلام (Execute Query)</button>
  <div class="sql-results">
    <h4>النتائج المسترجعة (Query Result):</h4>
    <table id="sqlTable">
      <thead>
        <tr><th>اسم الطالب</th><th>المقرر الأكاديمي</th><th>الدرجة</th></tr>
      </thead>
      <tbody>
        <tr><td>أحمد عبد الرحمن</td><td>أساسيات HTML5</td><td>95</td></tr>
        <tr><td>سارة القحطاني</td><td>مشروع التخرج</td><td>98</td></tr>
      </tbody>
    </table>
  </div>
</div>`,
            starterCss: `body {
  font-family: system-ui, -apple-system, sans-serif;
  background: #FAF8F2;
  padding: 20px;
}
.sql-studio {
  max-width: 580px;
  margin: 0 auto;
  background: white;
  border: 1px solid #dbe6df;
  border-radius: 16px;
  padding: 24px;
}
h3 { color: #176B45; margin-top: 0; }
.sql-editor {
  background: #151a17;
  color: #4ade80;
  padding: 16px;
  border-radius: 8px;
  font-family: monospace;
  margin-bottom: 12px;
}
.sql-btn {
  background: #176B45;
  color: white;
  border: none;
  padding: 10px 18px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
}
.sql-results { margin-top: 20px; }
h4 { color: #252B27; margin-bottom: 8px; font-size: 14px; }
table { width: 100%; border-collapse: collapse; font-size: 13px; text-align: right; }
th, td { padding: 10px; border-bottom: 1px solid #eee; }
th { background: #E8F2EC; color: #176B45; }`,
            starterJs: `const btn = document.getElementById('runSqlBtn');
btn.addEventListener('click', () => {
  console.log("تم تنفيذ استعلام SQL بنجاح: تم إرجاع صفين (2 rows).");
});`,
            expectedOutputHint: 'جرب تعديل شرط الاستعلام WHERE e.grade >= 80 واضغط تنفيذ الاستعلام.'
          }
        ]
      }
    ],
    quiz: {
      id: 'quiz-sql',
      courseId: 'database-sql',
      title: 'اختبار التحصيل: قواعد البيانات واستعلامات SQL',
      titleEn: 'Assessment: Relational Databases & SQL',
      passingScore: 70,
      questions: [
        {
          id: 'qsql1',
          question: 'ما هو دور المفتاح الأجنبي (Foreign Key) في قواعد البيانات العلائقية؟',
          questionEn: 'What is the purpose of a Foreign Key in relational databases?',
          options: [
            'ربط سجل في جدول معين بسجل مطابق في جدول آخر لتحقيق التكامل المرجعي',
            'تسريع تشغيل خادم الويب',
            'تشفير كلمات المرور في المتصفح',
            'تحديد الحجم الأقصى لقاعدة البيانات'
          ],
          optionsEn: [
            'Linking a record in one table to a matching record in another table ensuring referential integrity',
            'Accelerating web server performance',
            'Encrypting passwords inside the client browser',
            'Determining the maximum size of the database file'
          ],
          correctIndex: 0,
          explanation: 'المفتاح الأجنبي هو حقل يشير إلى المفتاح الأساسي في جدول آخر لربط الكيانات ببعضها.'
        }
      ]
    }
  },

  // ==========================================
  // المسار الثالث: التطوير الشامل والنشر (Full Stack & Deployment)
  // ==========================================

  // المستوى 10: الاختبار والنشر السحابي
  {
    id: 'testing-deployment',
    title: 'المستوى 10: الاختبار والنشر السحابي (Testing & Deployment)',
    titleEn: 'Level 10: Testing, CI/CD & Cloud Deployment',
    shortDescription: 'فحص الجودة، معايير الأمان، إعدادات SEO، والنشر السحابي المباشر برابط عالمي.',
    shortDescriptionEn: 'Master unit testing, SEO optimization, security audits, and cloud deployment pipelines.',
    level: 'متقدم',
    levelEn: 'Advanced',
    duration: '16 ساعة',
    totalLessons: 8,
    category: 'النشر السحابي',
    iconName: 'CloudUpload',
    color: '#176B45',
    imageUrl: '/src/assets/images/deployment_cloud_art_1794108285097.jpg',
    track: 'fullstack',
    levelNumber: 10,
    practicalProject: {
      title: 'نشر موقع حقيقي على السحابة وربطه بنطاق مخصص',
      titleEn: 'Deploying a Live Production Site with Custom Domain & HTTPS',
      description: 'نشر الواجهة الأمامية والخلفية على بيئة استضافة سحابية، تفعيل شهادة SSL، وضبط إعدادات الـ DNS.',
      descriptionEn: 'Deploy web app to cloud platform (Vercel/Cloud Run), configure SSL certificates, and audit performance.'
    },
    overview: 'تحويل المشروع من مجرد ملفات على حاسوبك الشخصي إلى موقع حقيقي منشور على شبكة الإنترنت العالمية متاح لكل المستخدمين، مع ضبط معايير الأمان ومراقبة الأداء ومحركات البحث.',
    learningObjectives: [
      'فحص واختبار واجهات ووظائف الموقع لضمان خلوه من الأخطاء (Unit & E2E Testing).',
      'تطبيق تحسينات محركات البحث (SEO & OpenGraph Social Cards).',
      'بناء ونشر التطبيقات السحابية باستخدام خطوط الإنتاج المؤتمتة (CI/CD Pipelines).',
      'إدارة النطاقات المخصصة وتأمين بروتوكول HTTPS.'
    ],
    modules: [
      {
        title: 'الوحدة الأولى: خطوط الإنتاج والنشر السحابي',
        titleEn: 'Module 1: Production Build & Cloud Delivery',
        lessons: [
          {
            id: 'dep-1',
            courseId: 'testing-deployment',
            moduleIndex: 1,
            moduleTitle: 'خطوط الإنتاج والنشر السحابي',
            moduleTitleEn: 'Production Build & Cloud Delivery',
            title: 'بناء حزمة الإنتاج المؤتمتة (Production Build)',
            titleEn: 'Automating the Production Build Pipeline',
            duration: '45 دقيقة',
            objective: 'اكتب كوداً يحاكي تجهيز وضغط حزمة الإنتاج وتوليد رابط النشر الحي.',
            explanation: `
قبل النشر على الإنترنت:
1. يتم تشغيل فحص الأكواد واكتشاف الأخطاء (Linting & Testing).
2. يتم ضغط ملفات JS و CSS وتقليص أحجامها (Minification & Tree Shaking).
3. يتم تصدير حزمة الـ dist الجاهزة ورفعها إلى السحابة.
4. تصبح النسخة متاحة على رابط HTTPS مباشر عالمياً.
            `,
            starterHtml: `<div class="deploy-monitor">
  <div class="deploy-header">
    <div class="pulse-dot"></div>
    <span class="status-text">حالة خط النشر السحابي: <strong id="deployStatus">جاهز للبناء</strong></span>
  </div>
  <div class="pipeline-steps">
    <div class="pipe-step done">✓ فحص الشيفرة (Lint & Syntax Check)</div>
    <div class="pipe-step done">✓ اختبارات الجودة (Unit Tests: Passed 12/12)</div>
    <div class="pipe-step active" id="buildStep">⚙️ ضغط وتوليد حزمة الإنتاج (Vite Build)</div>
  </div>
  <button id="deployBtn" class="deploy-action">بدء النشر السحابي المباشر 🚀</button>
  <div id="liveUrlBox" class="url-card hidden">
    <span>🌐 تم نشر الموقع بنجاح على الرابط المباشر:</span>
    <a href="#" target="_blank" class="live-link">https://my-graduation-project.web.app</a>
  </div>
</div>`,
            starterCss: `body {
  font-family: system-ui, -apple-system, sans-serif;
  background: #FAF8F2;
  padding: 20px;
}
.deploy-monitor {
  max-width: 520px;
  margin: 0 auto;
  background: white;
  border: 1px solid #dbe6df;
  border-radius: 16px;
  padding: 24px;
}
.deploy-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}
.pulse-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #4ade80;
  box-shadow: 0 0 0 4px rgba(74, 222, 128, 0.2);
}
.pipeline-steps { display: flex; flex-direction: column; gap: 8px; margin-bottom: 20px; }
.pipe-step {
  padding: 10px 14px;
  border-radius: 8px;
  font-size: 13px;
  background: #f8faf8;
  border: 1px solid #dbe6df;
}
.pipe-step.done { color: #176B45; font-weight: bold; }
.pipe-step.active { border-color: #C6A34A; color: #C6A34A; }
.deploy-action {
  width: 100%;
  background: #176B45;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
}
.url-card {
  margin-top: 18px;
  padding: 14px;
  background: #E8F2EC;
  border-radius: 10px;
  font-size: 13px;
  text-align: center;
}
.url-card.hidden { display: none; }
.live-link { display: block; font-weight: bold; color: #176B45; margin-top: 6px; }`,
            starterJs: `const deployBtn = document.getElementById('deployBtn');
const liveUrlBox = document.getElementById('liveUrlBox');
const statusText = document.getElementById('deployStatus');

deployBtn.addEventListener('click', () => {
  statusText.textContent = 'تم النشر بنجاح على السحابة (Deployed)';
  liveUrlBox.classList.remove('hidden');
  console.log("تم إطلاق الموقع رسمياً على الإنترنت.");
});`,
            expectedOutputHint: 'اضغط على زر "بدء النشر السحابي المباشر" لمشاهدة توليد الرابط المباشر للجمهور.'
          }
        ]
      }
    ],
    quiz: {
      id: 'quiz-dep',
      courseId: 'testing-deployment',
      title: 'اختبار التحصيل: الاختبار والنشر السحابي',
      titleEn: 'Assessment: Testing & Cloud Deployment',
      passingScore: 70,
      questions: [
        {
          id: 'qdep1',
          question: 'ما هي الفائدة الأساسية من خطوط الـ CI/CD في نشر مواقع الويب الحديثة؟',
          questionEn: 'What is the primary benefit of CI/CD pipelines in web deployment?',
          options: [
            'أتمتة عمليات الفحص والبناء والنشر السحابي فور دمج الأكواد الجديدة دون أخطاء يدوية',
            'كتابة كود HTML نيابة عن المطور',
            'تقليل عدد صفحات الموقع',
            'إلغاء الحاجة لشهادات التشفير SSL'
          ],
          optionsEn: [
            'Automating testing, building, and deployment whenever new code is committed avoiding human errors',
            'Writing HTML code on behalf of developers',
            'Reducing the number of website pages',
            'Eliminating the need for SSL encryption'
          ],
          correctIndex: 0,
          explanation: 'خطوط الـ CI/CD تضمن نشر الشيفرات التي تم فحصها والتأكد من خلوها من الأخطاء بشكل مؤتمت وسريع.'
        }
      ]
    }
  },

  // المستوى 11: مشروع التخرج التطبيقي الشامل
  {
    id: 'frontend-fullstack',
    title: 'المستوى 11: المشروع النهائي الشامل – منصة ويب حقيقية متكاملة',
    titleEn: 'Level 11: Final Graduation Project – Full-Stack Web Platform',
    shortDescription: 'دمج كل المهارات: الواجهة الأمامية، الخادم، قاعدة البيانات، الذكاء الاصطناعي، والنشر.',
    shortDescriptionEn: 'Integrate the complete stack: responsive UI, REST API, database, auth, AI tutor, and cloud deploy.',
    level: 'متقدم',
    levelEn: 'Advanced',
    duration: '35 ساعة',
    totalLessons: 16,
    category: 'مشروع التخرج الأكاديمي',
    iconName: 'GraduationCap',
    color: '#C6A34A',
    imageUrl: '/src/assets/images/capstone_course_art_1793989838051.jpg',
    track: 'fullstack',
    levelNumber: 11,
    practicalProject: {
      title: 'تطوير منصة تعليمية إلكترونية متكاملة ونشرها على الإنترنت',
      titleEn: 'Developing & Deploying a Complete Academic E-Learning Platform',
      description: 'بناء منصة تعليمية كاملة تحتوي على تسجيل مستخدمين، عرض مواد، محرر أكواد تفاعلي، ومساعد ذكاء اصطناعي.',
      descriptionEn: 'Build and deploy a full-stack educational portal with user auth, course catalog, live IDE, and AI debugger.'
    },
    overview: 'المشروع الختامي الذي يجمع كافة المهارات التي اكتسبها الطالب في مسيرته. يقوم الطالب بتطوير بوابة خدمات ويب متكاملة تبرز براعته في هندسة الواجهات، اختبار الكود، إدارة قواعد البيانات، والتكامل مع الذكاء الاصطناعي.',
    learningObjectives: [
      'تخطيط وتنفيذ منصة ويب حقيقية بالمعايير العالمية للجامعات المرموقة.',
      'دمج واجهات برمجية خارجية ومعالجة الأخطاء السحابية بذكاء.',
      'تطبيق أفضل ممارسات الحماية والأداء وسرعة التحميل.',
      'نشر التطبيق وربطه بمساعد ذكاء اصطناعي مرشد.'
    ],
    modules: [
      {
        title: 'الوحدة الختامية: بناء لوحة معلومات أكاديمية متكاملة',
        titleEn: 'Capstone: Integrated Academic Dashboard',
        lessons: [
          {
            id: 'cap-1',
            courseId: 'frontend-fullstack',
            moduleIndex: 1,
            moduleTitle: 'الوحدة الختامية: بناء لوحة معلومات أكاديمية متكاملة',
            moduleTitleEn: 'Capstone: Integrated Academic Dashboard',
            title: 'تطوير لوحة مؤشرات أداء الطالب الحية (KPI Dashboard)',
            titleEn: 'Engineering a Real-Time Student Analytics Dashboard',
            duration: '90 دقيقة',
            objective: 'قم ببناء لوحة معلومات تفاعلية تحتوي على مؤشرات إحصائية ورسم بياني حي وسجل إنجازات.',
            explanation: `
في هذا المشروع الختامي، ستجمع كافة الخبرات التي اكتسبتها:
- هيكلة دلالية متقنة.
- تناسق لوني وتخطيط شبكي حديث بهوية جامعية راقية.
- منطق جافاسكريبت متقدم لتحديث الأرقام والإشعارات في الوقت الفعلي.
            `,
            starterHtml: `<div class="dashboard-wrap">
  <aside class="sidebar">
    <div class="logo">الجامعة الوطنية الخاصة</div>
    <ul class="nav">
      <li class="active">📊 لوحة التحكم</li>
      <li>📚 مقرراتي</li>
      <li>🏆 الإنجازات</li>
      <li>⚙️ الإعدادات</li>
    </ul>
  </aside>

  <main class="content">
    <header class="topbar">
      <h2>مرحباً بك، م. سارة القحطاني</h2>
      <span class="status">🟢 متصل بالنظام الأكاديمي</span>
    </header>

    <div class="kpi-grid">
      <div class="kpi-card">
        <span class="label">المقررات المكتملة</span>
        <span class="val" id="valCourses">10 / 11</span>
      </div>
      <div class="kpi-card">
        <span class="label">المعدل التراكمي (GPA)</span>
        <span class="val text-gold">3.95</span>
      </div>
      <div class="kpi-card">
        <span class="label">النقاط الأكاديمية</span>
        <span class="val text-green" id="valPoints">1,250</span>
      </div>
    </div>

    <div class="action-box">
      <h3>تسليم مرحلة مشروع التخرج النهائية</h3>
      <p>ربط محرر الأكواد Monaco بنظام التصحيح الآلي للذكاء الاصطناعي.</p>
      <button id="submitCapstoneBtn" class="btn-capstone">تسليم ومناقشة المشروع 🎓</button>
    </div>
  </main>
</div>`,
            starterCss: `body {
  font-family: system-ui, -apple-system, sans-serif;
  margin: 0;
  background-color: #FAF8F2;
  color: #252B27;
}
.dashboard-wrap {
  display: flex;
  min-height: 480px;
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
}
.sidebar {
  width: 200px;
  background: #176B45;
  color: white;
  padding: 20px 15px;
}
.logo {
  font-weight: 800;
  font-size: 14px;
  padding-bottom: 15px;
  border-bottom: 1px solid rgba(255,255,255,0.2);
  margin-bottom: 20px;
  color: #C6A34A;
}
.nav { list-style: none; padding: 0; margin: 0; }
.nav li {
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 6px;
  font-size: 13px;
  cursor: pointer;
}
.nav li.active { background: rgba(255,255,255,0.15); font-weight: bold; }
.content { flex: 1; padding: 24px; }
.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #dbe6df;
  padding-bottom: 15px;
  margin-bottom: 20px;
}
.topbar h2 { margin: 0; font-size: 18px; color: #176B45; }
.status { font-size: 11px; color: #176B45; font-weight: bold; }
.kpi-grid { display: flex; gap: 15px; margin-bottom: 25px; flex-wrap: wrap; }
.kpi-card {
  flex: 1;
  min-width: 120px;
  background: #FAF8F2;
  border: 1px solid #dbe6df;
  border-radius: 12px;
  padding: 16px;
}
.kpi-card .label { display: block; font-size: 11px; color: #747C76; margin-bottom: 6px; }
.kpi-card .val { font-size: 22px; font-weight: 800; color: #252B27; }
.text-gold { color: #C6A34A !important; }
.text-green { color: #176B45 !important; }
.action-box {
  background: #E8F2EC;
  border-radius: 12px;
  padding: 20px;
  border: 1px solid rgba(23, 107, 69, 0.2);
}
.action-box h3 { margin: 0 0 6px 0; color: #176B45; font-size: 16px; }
.action-box p { margin: 0 0 15px 0; font-size: 13px; color: #747C76; }
.btn-capstone {
  background: #176B45;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(23, 107, 69, 0.2);
}`,
            starterJs: `const btn = document.getElementById('submitCapstoneBtn');
const pointsVal = document.getElementById('valPoints');

btn.addEventListener('click', () => {
  btn.textContent = '🎉 تم اعتماد المشروع بدرجة الامتياز!';
  btn.style.background = '#C6A34A';
  pointsVal.textContent = '1,500 (+250)';
  console.log("تهانينا! لقد اجتزت مناقشة المشروع النهائي بامتياز.");
});`,
            expectedOutputHint: 'اضغط على زر "تسليم ومناقشة المشروع" لمشاهدة التفاعل الحي مع التقييم الأكاديمي.'
          }
        ]
      }
    ],
    quiz: {
      id: 'quiz-capstone',
      courseId: 'frontend-fullstack',
      title: 'اختبار التحصيل: المشروع النهائي وهندسة الويب الشاملة',
      titleEn: 'Assessment: Full-Stack Capstone Defense',
      passingScore: 75,
      questions: [
        {
          id: 'qcap1',
          question: 'ما هي الركائز الأساسية الواجب توفرها في منصة تعليمية ويب احترافية متكاملة؟',
          questionEn: 'What are the essential pillars of a complete professional web e-learning platform?',
          options: [
            'واجهة مستخدم متجاوبة، خادم API آمن، قاعدة بيانات منظمة، بيئة تطبيق عملية، وتوثيق معتمد',
            'صفحات نصية فقط بدون أي تفاعل أو أكواد',
            'الاعتماد على روابط خارجية بدون محرر مباشر',
            'عدم وجود نظام لاختبار وفحص فهم الطالب'
          ],
          optionsEn: [
            'Responsive UI, secure backend API, structured database, live IDE sandbox, and verified accreditation',
            'Static text pages without interaction',
            'External links without integrated editor',
            'Omitting assessment systems'
          ],
          correctIndex: 0,
          explanation: 'المنصة المتكاملة تجمع الواجهة الأمامية والخلفية وقواعد البيانات مع بيئة تطبيق عملية واختبارات قياس.'
        }
      ]
    }
  }
];

export const initialBadges: Badge[] = [
  {
    id: 'first-step',
    title: 'الخطوة الأولى',
    titleEn: 'First Step',
    description: 'إتمام أول درس وتطبيق كود HTML5 بنجاح.',
    icon: 'Sparkles',
    color: 'bg-green-100 text-green-800'
  },
  {
    id: 'html-master',
    title: 'مهندس الهيكل الدلالي',
    titleEn: 'HTML5 Architect',
    description: 'اجتياز جميع دروس واختبارات HTML بنسبة تفوق 80%.',
    icon: 'Code2',
    color: 'bg-emerald-100 text-emerald-800'
  },
  {
    id: 'css-designer',
    title: 'فنان الواجهات والتنسيق',
    titleEn: 'CSS & Flexbox Stylist',
    description: 'إتقان تنسيقات Flexbox وتصميم واجهة موقع متجاوب.',
    icon: 'Palette',
    color: 'bg-amber-100 text-amber-800'
  },
  {
    id: 'js-ninja',
    title: 'مبرمج الويب التفاعلي',
    titleEn: 'JavaScript Engineer',
    description: 'بناء تطبيقات ديناميكية والتعامل السلس مع شجرة الـ DOM.',
    icon: 'FileCode2',
    color: 'bg-yellow-100 text-yellow-800'
  },
  {
    id: 'backend-master',
    title: 'مهندس الواجهة الخلفية',
    titleEn: 'Backend & API Architect',
    description: 'بناء خوادم Node.js وExpress وربطها بقواعد البيانات العلائقية.',
    icon: 'Server',
    color: 'bg-blue-100 text-blue-800'
  },
  {
    id: 'capstone-graduate',
    title: 'خريج هندسة الويب الشاملة',
    titleEn: 'Full-Stack Web Graduate',
    description: 'إتمام كافة المستويات الـ 11 وبناء ونشر مشروع التخرج المتكامل بنجاح.',
    icon: 'GraduationCap',
    color: 'bg-purple-100 text-purple-800'
  }
];

export const badgesList = initialBadges;
