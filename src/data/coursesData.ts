import { Course, Badge } from '../types';

export const initialCourses: Course[] = [
  {
    id: 'html-fundamentals',
    title: 'أساسيات HTML5 وبنية الويب',
    titleEn: 'HTML5 Fundamentals & Web Semantics',
    shortDescription: 'تعلم هيكلة صفحات الويب باستخدام الوسوم الدلالية، النماذج التفاعلية، وإمكانية الوصول.',
    shortDescriptionEn: 'Master semantic HTML5 tags, interactive forms, accessibility, and modern web page structuring.',
    level: 'مبتدئ',
    levelEn: 'Beginner',
    duration: '12 ساعة',
    totalLessons: 8,
    category: 'هيكلة الويب',
    iconName: 'CodeXml',
    color: '#176B45',
    overview: 'يقدم هذا المسار الأكاديمي المفاهيم الأساسية لبناء صفحات الويب المتوافقة مع معايير W3C العالمية، مع التركيز على كتابة شيفرة برمجية نظيفة ودلالية تدعم محركات البحث وإمكانية الوصول لذوي الاحتياجات الخاصة.',
    learningObjectives: [
      'فهم شجرة الـ DOM وهيكل مستند HTML5 القياسي.',
      'استخدام الوسوم الدلالية (header, main, section, article, nav, footer).',
      'بناء نماذج إدخال بيانات متطورة مع التحقق من صحة المدخلات.',
      'إدراج وتضمين الوسائط المتعددة (صور، فيديو، صوت) بطرق محسنة للأداء.'
    ],
    modules: [
      {
        title: 'الوحدة الأولى: البنية الأساسية والعناصر الدلالية',
        titleEn: 'Module 1: Document Structure & Semantics',
        lessons: [
          {
            id: 'html-1',
            courseId: 'html-fundamentals',
            moduleIndex: 1,
            moduleTitle: 'البنية الأساسية والعناصر الدلالية',
            moduleTitleEn: 'Document Structure & Semantics',
            title: 'بناء الهيكل الأول لصفحة ويب أكاديمية',
            titleEn: 'Building Your First Semantic Web Page',
            duration: '45 دقيقة',
            objective: 'قم بإنشاء صفحة ويب تعريفية تستخدم العناصر الدلالية: header و nav و main و footer.',
            explanation: `
في هذا الدرس، سنتعلم كيفية تنظيم محتوى صفحة الويب باستخدام وسوم HTML5 الدلالية بدلاً من الاعتماد الكلي على وسوم <div> العامة.
العناصر الدلالية تمنح محركات البحث وقارئات الشاشة فهماً دقيقاً لبنية الصفحة.
- <header>: يمثل ترويسة الموقع أو المقال.
- <nav>: يحتوي على روابط التنقل الرئيسية.
- <main>: يحمل المحتوى الفريد والأساسي للصفحة.
- <article>: يمثل محتوى مستقلاً بذاته.
- <footer>: يمثل تذييل الصفحة ومعلومات حقوق النشر.
            `,
            starterHtml: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <title>بوابة الجامعة الأكاديمية</title>
</head>
<body>
  <!-- اكتب الكود الدلالي هنا -->
  <header>
    <h1>جامعة المستقبل الأهلية</h1>
    <p>كلية علوم الحاسب وتقنية المعلومات</p>
  </header>

  <nav>
    <a href="#about">عن الكلية</a> | 
    <a href="#courses">المقررات</a>
  </nav>

  <main>
    <article>
      <h2>مشروع تخرج: منصة تعليمية لتطوير الويب</h2>
      <p>بيئة تفاعلية لتدريب الطلاب على أحدث تقنيات الويب الحديثة.</p>
    </article>
  </main>

  <footer>
    <p>© 2026 جميع الحقوق محفوظة لجامعة المستقبل</p>
  </footer>
</body>
</html>`,
            starterCss: `body {
  font-family: system-ui, -apple-system, sans-serif;
  margin: 0;
  padding: 20px;
  background-color: #f8faf8;
  color: #252b27;
}
header {
  background: #176B45;
  color: #ffffff;
  padding: 24px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(23, 107, 69, 0.15);
}
nav {
  margin: 15px 0;
  padding: 10px;
  background: #E8F2EC;
  border-radius: 6px;
  text-align: center;
}
nav a {
  color: #176B45;
  font-weight: 600;
  text-decoration: none;
}
main {
  background: #ffffff;
  padding: 24px;
  border-radius: 8px;
  border: 1px solid #e2e8e4;
  margin-top: 15px;
}
footer {
  text-align: center;
  margin-top: 30px;
  color: #747C76;
  font-size: 0.9rem;
}`,
            starterJs: `console.log("تم تحميل الصفحة الدلالية بنجاح!");`,
            expectedOutputHint: 'تأكد من وجود عناصر header, nav, main, footer مع نصوص أكاديمية واضحة.'
          },
          {
            id: 'html-2',
            courseId: 'html-fundamentals',
            moduleIndex: 1,
            moduleTitle: 'البنية الأساسية والعناصر الدلالية',
            moduleTitleEn: 'Document Structure & Semantics',
            title: 'تصميم نموذج تسجيل طالب تفاعلي',
            titleEn: 'Interactive Student Registration Form',
            duration: '50 دقيقة',
            objective: 'قم بإنشاء نموذج تسجيل يحتوي على حقول الإدخال: الاسم، البريد، الرقم الأكاديمي، واختيار المسار.',
            explanation: `
تعتبر النماذج <form> حجر الزاوية في تفاعل المستخدم مع الموقع.
سنتعرف على سمات التحقق المدمجة: required, type="email", pattern, بالإضافة إلى ربط <label> مع <input> عبر السمة for لضمان أفضل تجربة استخدام.
            `,
            starterHtml: `<div class="form-card">
  <h2>تسجيل طالب في المسار الأكاديمي</h2>
  <form id="regForm">
    <div class="field">
      <label for="fullName">الاسم الكامل:</label>
      <input type="text" id="fullName" name="fullName" placeholder="مثال: أحمد محمد الأحمد" required>
    </div>

    <div class="field">
      <label for="email">البريد الجامعي:</label>
      <input type="email" id="email" name="email" placeholder="student@university.edu" required>
    </div>

    <div class="field">
      <label for="track">المسار التدريبي:</label>
      <select id="track" name="track">
        <option value="frontend">تطوير واجهات المستخدم (Frontend)</option>
        <option value="fullstack">تطوير الويب الشامل (Full Stack)</option>
      </select>
    </div>

    <button type="submit">إتمام التسجيل الأكاديمي</button>
  </form>
  <div id="statusMessage" class="hidden"></div>
</div>`,
            starterCss: `.form-card {
  max-width: 480px;
  margin: 30px auto;
  background: #ffffff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.06);
  border-top: 5px solid #176B45;
}
.form-card h2 {
  color: #176B45;
  margin-top: 0;
  font-size: 1.4rem;
}
.field {
  margin-bottom: 18px;
}
label {
  display: block;
  margin-bottom: 6px;
  font-weight: 600;
  color: #252B27;
}
input, select {
  width: 100%;
  padding: 10px 14px;
  border: 1px solid #d2ded7;
  border-radius: 6px;
  font-size: 1rem;
  box-sizing: border-box;
}
input:focus, select:focus {
  outline: none;
  border-color: #176B45;
  box-shadow: 0 0 0 3px #E8F2EC;
}
button {
  width: 100%;
  background: #176B45;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 6px;
  font-size: 1.05rem;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s;
}
button:hover {
  background: #0f482e;
}
#statusMessage {
  margin-top: 15px;
  padding: 12px;
  border-radius: 6px;
  background: #E8F2EC;
  color: #176B45;
  font-weight: 600;
  text-align: center;
}
.hidden { display: none; }`,
            starterJs: `document.getElementById('regForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('fullName').value;
  const status = document.getElementById('statusMessage');
  status.textContent = 'تم تسجيل الطالب بنجاح: ' + name;
  status.classList.remove('hidden');
});`,
            expectedOutputHint: 'املأ النموذج واضغط زر الإرسال لتشاهد رسالة التأكيد التفاعلية.'
          }
        ]
      }
    ],
    quiz: {
      id: 'quiz-html',
      courseId: 'html-fundamentals',
      title: 'الاختبار الأكاديمي لمقرر HTML5',
      titleEn: 'HTML5 Academic Certification Quiz',
      passingScore: 75,
      questions: [
        {
          id: 'q1',
          question: 'ما هو العنصر الدلالي الأنسب لاحتواء روابط التنقل الرئيسية في الموقع؟',
          questionEn: 'Which semantic element should contain the main navigation links?',
          options: ['<nav>', '<header>', '<section>', '<menu>'],
          optionsEn: ['<nav>', '<header>', '<section>', '<menu>'],
          correctIndex: 0,
          explanation: 'عنصر <nav> مخصص خصيصاً لاحتواء كتل روابط التنقل الرئيسية في مستند الويب.'
        },
        {
          id: 'q2',
          question: 'أي من السمات التالية تجعل حقل الإدخال في النموذج إلزامياً قبل الإرسال؟',
          questionEn: 'Which attribute makes an input field mandatory in a form?',
          options: ['validate', 'mandatory', 'required', 'checked'],
          optionsEn: ['validate', 'mandatory', 'required', 'checked'],
          correctIndex: 2,
          explanation: 'السمة required هي السمة القياسية في HTML5 لمنع إرسال النموذج إذا كان الحقل فارغاً.'
        },
        {
          id: 'q3',
          question: 'ما فائدة استخدام الوسم الدلالي <article> مقارنة بالوسم <div>؟',
          questionEn: 'What is the main benefit of using <article> instead of <div>?',
          options: [
            'يجعل الخط عريضاً تلقائياً',
            'يعبر عن محتوى مستقل بذاته ويسهل فهرسته لمحركات البحث',
            'يزيد من سرعة استجابة السيرفر',
            'يضيف إطاراً ذهبياً حول النص'
          ],
          optionsEn: [
            'Makes text bold automatically',
            'Represents self-contained content for better SEO and accessibility',
            'Increases server response speed',
            'Adds a golden border'
          ],
          correctIndex: 1,
          explanation: 'الوسوم الدلالية مثل <article> تعطي معنى دلالياً للمحتوى المستقل ولقارئات الشاشة ومحركات البحث.'
        },
        {
          id: 'q4',
          question: 'ما هو الوسم الصحيح لإدراج صورة في صفحة الويب؟',
          questionEn: 'What is the correct tag to insert an image?',
          options: ['<image src="...">', '<img src="..." alt="...">', '<picture link="...">', '<photo>'],
          optionsEn: ['<image src="...">', '<img src="..." alt="...">', '<picture link="...">', '<photo>'],
          correctIndex: 1,
          explanation: 'الوسم الصحيح هو <img> مع السمة src لمصدر الصورة والسمة alt لوصف الصورة.'
        }
      ]
    }
  },
  {
    id: 'css-responsive',
    title: 'تنسيق الصفحات والتصميم المتجاوب (CSS3)',
    titleEn: 'CSS3 & Responsive Web Design',
    shortDescription: 'احترف تنسيق المواقع الحديثة، شبكات CSS Grid، وتخطيطات Flexbox والتجاوب مع جميع الشاشات.',
    shortDescriptionEn: 'Master modern layouts with CSS Grid, Flexbox, media queries, and responsive academic styling.',
    level: 'مبتدئ',
    levelEn: 'Beginner',
    duration: '16 ساعة',
    totalLessons: 10,
    category: 'تصميم الواجهات',
    iconName: 'Palette',
    color: '#C6A34A',
    overview: 'يركز هذا المقرر على تحويل الهياكل المجردة إلى واجهات فنية متناسقة وفق الهوية البصرية الأكاديمية الراقية، وتطبيق قواعد التصميم المتجاوب على الهواتف والأجهزة اللوحية والحواسيب.',
    learningObjectives: [
      'فهم نموذج الصندوق (CSS Box Model) وقواعد الأسبقية (Specificity).',
      'إتقان تقنية Flexbox لبناء شاشات مرنة ومحاذاة متقدمة.',
      'تصميم شبكات معقدة واحترافية باستخدام CSS Grid.',
      'تطبيق استعلامات الوسائط (Media Queries) للتوافق مع كافة أحجام الشاشات.'
    ],
    modules: [
      {
        title: 'الوحدة الأولى: تخطيط Flexbox والتصميم المتجاوب',
        titleEn: 'Module 1: Flexbox Layout & Responsiveness',
        lessons: [
          {
            id: 'css-1',
            courseId: 'css-responsive',
            moduleIndex: 1,
            moduleTitle: 'تخطيط Flexbox والتصميم المتجاوب',
            moduleTitleEn: 'Flexbox Layout & Responsiveness',
            title: 'بناء بطاقات المقررات الأكاديمية بنظام Flexbox',
            titleEn: 'Building Academic Course Cards with Flexbox',
            duration: '45 دقيقة',
            objective: 'قم بمحاذاة بطاقات المقررات أفقياً مع توزيع متساوٍ للمسافات وتصميم متجاوب.',
            explanation: `
يوفر نموذج Flexbox طريقة سهلة لتوزيع المساحة ومحاذاة العناصر داخل الحاوية حتى لو كانت أبعادها غير معلومة مسبقاً.
الخصائص الأساسية:
- display: flex لتفعيل الصندوق المرن.
- justify-content: لمحاذاة العناصر على المحور الرئيسي.
- align-items: لمحاذاة العناصر على المحور العمودي.
- flex-wrap: wrap للسماح للبطاقات بالنزول لسطر جديد عند ضيق الشاشة.
            `,
            starterHtml: `<div class="courses-container">
  <div class="card">
    <div class="badge">مستوى 1</div>
    <h3>علوم الحاسب</h3>
    <p>مقدمة في الخوارزميات وهياكل البيانات الأساسية للبرمجة.</p>
    <a href="#" class="btn">عرض التفاصيل</a>
  </div>

  <div class="card featured">
    <div class="badge gold">مميز</div>
    <h3>تطوير الويب</h3>
    <p>احتراف بناء المواقع التفاعلية الشاملة بأحدث التقنيات.</p>
    <a href="#" class="btn">عرض التفاصيل</a>
  </div>

  <div class="card">
    <div class="badge">مستوى 2</div>
    <h3>قواعد البيانات</h3>
    <p>تصميم وإدارة قواعد البيانات العلائقية المتقدمة.</p>
    <a href="#" class="btn">عرض التفاصيل</a>
  </div>
</div>`,
            starterCss: `body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: #f4f7f5;
  margin: 0;
  padding: 40px 20px;
}
.courses-container {
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 24px;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: 0 auto;
}
.card {
  flex: 1 1 280px;
  background: #ffffff;
  border: 1px solid #dbe6df;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.04);
  display: flex;
  flex-direction: column;
  transition: transform 0.2s, box-shadow 0.2s;
}
.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(23, 107, 69, 0.12);
}
.card.featured {
  border: 2px solid #C6A34A;
  background: linear-gradient(180deg, #ffffff 0%, #FAF8F2 100%);
}
.badge {
  align-self: flex-start;
  background: #E8F2EC;
  color: #176B45;
  font-size: 0.8rem;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 20px;
  margin-bottom: 12px;
}
.badge.gold {
  background: #C6A34A;
  color: #ffffff;
}
h3 {
  margin: 0 0 10px 0;
  color: #176B45;
}
p {
  color: #747C76;
  font-size: 0.95rem;
  line-height: 1.6;
  flex-grow: 1;
}
.btn {
  display: inline-block;
  text-align: center;
  background: #176B45;
  color: white;
  text-decoration: none;
  padding: 10px;
  border-radius: 6px;
  font-weight: 600;
  margin-top: 15px;
}`,
            starterJs: `console.log("بطاقات المقررات جاهزة ومتجاوبة بنظام Flexbox!");`,
            expectedOutputHint: 'لاحظ كيف تتناسق البطاقات بشكل متوازن أفقياً وتنزل لسطر جديد عند تضييق الشاشة.'
          }
        ]
      }
    ],
    quiz: {
      id: 'quiz-css',
      courseId: 'css-responsive',
      title: 'الاختبار الأكاديمي لمقرر CSS3 والتصميم المتجاوب',
      titleEn: 'CSS3 & Responsive Design Quiz',
      passingScore: 75,
      questions: [
        {
          id: 'qc1',
          question: 'أي خاصية في Flexbox تستخدم لتوزيع المساحة الفارغة بين العناصر على المحور الأفقي الرئيسي؟',
          questionEn: 'Which Flexbox property distributes empty space along the main axis?',
          options: ['justify-content', 'align-items', 'flex-direction', 'align-content'],
          optionsEn: ['justify-content', 'align-items', 'flex-direction', 'align-content'],
          correctIndex: 0,
          explanation: 'خاصية justify-content تتحكم في توزيع العناصر على المحور الرئيسي (Main Axis).'
        },
        {
          id: 'qc2',
          question: 'ما هي الوسيلة المعيارية في CSS لتطبيق تنسيقات خاصة فقط للشاشات الأصغر من 768 بكسل؟',
          questionEn: 'How do you apply specific styles for screens narrower than 768px?',
          options: [
            '@media screen and (max-width: 768px)',
            '@screen mobile-768',
            '@viewport (width < 768px)',
            '@responsive (max-width: 768)'
          ],
          optionsEn: [
            '@media screen and (max-width: 768px)',
            '@screen mobile-768',
            '@viewport (width < 768px)',
            '@responsive (max-width: 768)'
          ],
          correctIndex: 0,
          explanation: 'استعلامات الوسائط @media مع max-width هي الطريقة القياسية المتبعة في التصميم المتجاوب.'
        }
      ]
    }
  },
  {
    id: 'javascript-programming',
    title: 'برمجة جافاسكريبت المتقدمة (ES6+)',
    titleEn: 'JavaScript Programming & DOM Mastery',
    shortDescription: 'تعلم لغة الويب الأساسية من الصفر: المتغيرات الحديثة، الدوال السهمية، التعامل مع DOM و Async/Await.',
    shortDescriptionEn: 'Master modern ES6+, DOM manipulation, event listeners, promises, and asynchronous JavaScript.',
    level: 'متوسط',
    levelEn: 'Intermediate',
    duration: '22 ساعة',
    totalLessons: 12,
    category: 'البرمجة والتفاعل',
    iconName: 'Braces',
    color: '#176B45',
    overview: 'يمثل هذا المقرر جوهر التفاعل في تطبيقات الويب الحديثة. يتعلم الطالب كيفية التحكم في شجرة العناصر (DOM)، والتعامل مع طلبات الشبكة، وبرمجة الخوارزميات المنطقية.',
    learningObjectives: [
      'فهم مميزات ES6+ مثل let, const, Arrow Functions, Destructuring.',
      'التفاعل مع عناصر الصفحة وإضافة مستمعي الأحداث (Event Listeners).',
      'التعامل مع البرمجة غير المتزامنة بـ Promises و async/await.',
      'تنظيم الشيفرة البرمجية وفق مبادئ Clean Code.'
    ],
    modules: [
      {
        title: 'الوحدة الأولى: التفاعل مع DOM وحساب المعدل التراكمي',
        titleEn: 'Module 1: DOM Interaction & Logic',
        lessons: [
          {
            id: 'js-1',
            courseId: 'javascript-programming',
            moduleIndex: 1,
            moduleTitle: 'التفاعل مع DOM وحساب المعدل التراكمي',
            moduleTitleEn: 'DOM Interaction & Logic',
            title: 'بناء حاسبة المعدل التراكمي للطلاب (GPA Calculator)',
            titleEn: 'Building an Academic GPA Calculator',
            duration: '50 دقيقة',
            objective: 'قم بكتابة دالة جافاسكريبت تحسب متوسط الدرجات المدخلة وتظهر التقدير الأكاديمي تلقائياً.',
            explanation: `
في هذا التمرين، سنتعامل مع مصفوفات الأعداد ودوال التكرار في جافاسكريبت مثل Array.reduce() أو for...of.
سنقوم بقراءة القيم من حقول الإدخال، حساب المتوسط، وتحديث النص ولون التقدير في واجهة المستخدم dynamically.
            `,
            starterHtml: `<div class="gpa-card">
  <h2>حاسبة المعدل الفصلي الأكاديمي</h2>
  <div class="inputs-grid">
    <input type="number" id="grade1" placeholder="درجة المقرر 1 (من 100)" min="0" max="100" value="85">
    <input type="number" id="grade2" placeholder="درجة المقرر 2 (من 100)" min="0" max="100" value="92">
    <input type="number" id="grade3" placeholder="درجة المقرر 3 (من 100)" min="0" max="100" value="78">
    <input type="number" id="grade4" placeholder="درجة المقرر 4 (من 100)" min="0" max="100" value="95">
  </div>
  <button id="calcBtn">احسب المعدل والتقدير</button>

  <div class="result-box" id="resultBox">
    <div class="score" id="averageScore">--</div>
    <div class="grade" id="academicRating">اضغط الزر لحساب النتيجة</div>
  </div>
</div>`,
            starterCss: `.gpa-card {
  max-width: 500px;
  margin: 30px auto;
  background: #ffffff;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.07);
  border: 1px solid #dbe6df;
  text-align: center;
}
.gpa-card h2 {
  color: #176B45;
  margin-top: 0;
}
.inputs-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin: 20px 0;
}
input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  text-align: center;
  font-size: 1rem;
}
button {
  background: #176B45;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 6px;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.2s;
}
button:hover {
  background: #0f482e;
}
.result-box {
  margin-top: 25px;
  padding: 20px;
  background: #E8F2EC;
  border-radius: 8px;
}
.score {
  font-size: 2.2rem;
  font-weight: 800;
  color: #176B45;
}
.grade {
  font-size: 1.1rem;
  color: #252B27;
  font-weight: 600;
  margin-top: 6px;
}`,
            starterJs: `document.getElementById('calcBtn').addEventListener('click', function() {
  const g1 = Number(document.getElementById('grade1').value) || 0;
  const g2 = Number(document.getElementById('grade2').value) || 0;
  const g3 = Number(document.getElementById('grade3').value) || 0;
  const g4 = Number(document.getElementById('grade4').value) || 0;

  const grades = [g1, g2, g3, g4];
  const sum = grades.reduce((acc, curr) => acc + curr, 0);
  const avg = (sum / grades.length).toFixed(1);

  let rating = '';
  if (avg >= 90) {
    rating = 'ممتاز مرتفع (A+) ⭐ مع مرتبة الشرف';
  } else if (avg >= 80) {
    rating = 'جيد جداً (B)';
  } else if (avg >= 70) {
    rating = 'جيد (C)';
  } else {
    rating = 'يحتاج إلى تحسين أكاديمي';
  }

  document.getElementById('averageScore').textContent = avg + '%';
  document.getElementById('academicRating').textContent = rating;
});`,
            expectedOutputHint: 'اضغط على زر الحساب وشاهد كيف يتم استخراج المعدل بدقة وتحديد التقدير الأكاديمي.'
          }
        ]
      }
    ],
    quiz: {
      id: 'quiz-js',
      courseId: 'javascript-programming',
      title: 'الاختبار الأكاديمي لمقرر JavaScript',
      titleEn: 'JavaScript Core Proficiency Quiz',
      passingScore: 75,
      questions: [
        {
          id: 'qj1',
          question: 'ما هو الفرق الأساسي بين let و const في جافاسكريبت الحديثة؟',
          questionEn: 'What is the primary difference between let and const in modern JavaScript?',
          options: [
            'let تسمح بإعادة تعيين القيمة بينما const تمنع إعادة الإسناد للمتغير',
            'const مخصصة للنصوص فقط و let للأرقام',
            'let تعمل داخل المتصفح فقط',
            'لا يوجد أي فرق بينهما'
          ],
          optionsEn: [
            'let allows reassignment while const prevents reassigning the variable',
            'const is for strings only, let is for numbers',
            'let only works in the browser',
            'There is no difference'
          ],
          correctIndex: 0,
          explanation: 'المتغير المعرف بـ const لا يمكن إعادة إسناده لقيمة جديدة، على عكس let.'
        },
        {
          id: 'qj2',
          question: 'كيف نقوم بالانتظار حتى انتهاء Promise داخل دالة في جافاسكريبت؟',
          questionEn: 'How do we await the resolution of a Promise inside a function?',
          options: ['باستخدام الكلمة المفتاحية await داخل دالة async', 'باستخدام pause()', 'باستخدام wait for()', 'باستخدام delay()'],
          optionsEn: ['Using the await keyword inside an async function', 'Using pause()', 'Using wait for()', 'Using delay()'],
          correctIndex: 0,
          explanation: 'تستخدم الكلمة المفتاحية await للانتظار غير المتزامن داخل الدوال المعرفة بـ async.'
        }
      ]
    }
  },
  {
    id: 'react-fundamentals',
    title: 'أساسيات React.js وبناء المكونات',
    titleEn: 'React.js Fundamentals & Component Architecture',
    shortDescription: 'بناء واجهات مستخدم معاصرة وتفاعلية بمكتبة React: المكونات، الـ State، الـ Props و الـ Hooks.',
    shortDescriptionEn: 'Build modern dynamic single-page applications with React components, hooks, state, and props.',
    level: 'متوسط',
    levelEn: 'Intermediate',
    duration: '26 ساعة',
    totalLessons: 14,
    category: 'أطر عمل الواجهات',
    iconName: 'Atom',
    color: '#0284C7',
    overview: 'يغطي هذا المسار التقنيات التي تعتمدها الشركات الكبرى في بناء الويب التفاعلي. يتعرف الطالب على صياغة JSX، وإدارة الحالة المحلية بمساعدة useState و useEffect، وتمرير البيانات بين المكونات.',
    learningObjectives: [
      'فهم نموذج Virtual DOM وكيفية تحديث واجهة المستخدم بكفاءة.',
      'كتابة مكونات وظيفية نظيفة ومتقاطعة (Functional Components).',
      'إدارة الحالة عبر React Hooks (useState, useEffect, useMemo).',
      'بناء تطبيقات أحادية الصفحة (SPA) فائقة السرعة.'
    ],
    modules: [
      {
        title: 'الوحدة الأولى: المكونات وإدارة الحالة',
        titleEn: 'Module 1: Components & State',
        lessons: [
          {
            id: 'react-1',
            courseId: 'react-fundamentals',
            moduleIndex: 1,
            moduleTitle: 'المكونات وإدارة الحالة',
            moduleTitleEn: 'Components & State',
            title: 'بناء قائمة مهام الطلاب الدراسية بمكونات React',
            titleEn: 'Building a Student Study Tracker with React',
            duration: '60 دقيقة',
            objective: 'قم بمحاكاة تطبيق قائمة مهام أكاديمية تفاعلية تتيح إضافة المهام ووسمها كمكتملة.',
            explanation: `
تعتبر حالة المكون (State) هي الذاكرة الحية التي تتغير مع تفاعل المستخدم وتؤدي إلى إعادة تصيير (Re-render) الشاشة لعرض البيانات المحدثة.
في هذا التمرين المحاكى، نشاهد كيف يتم التعبير عن تفاعل React داخل كود JavaScript تفاعلي.
            `,
            starterHtml: `<div id="app">
  <div class="todo-app">
    <div class="header">
      <h2>قائمة المهام الدراسية (React State)</h2>
      <span class="badge" id="counter">0 مكتملة</span>
    </div>
    
    <div class="input-row">
      <input type="text" id="taskInput" placeholder="أضف واجباً أو تكليفاً جديداً...">
      <button id="addBtn">+ إضافة</button>
    </div>

    <ul id="taskList">
      <!-- المهام تضاف هنا ديناميكياً -->
    </ul>
  </div>
</div>`,
            starterCss: `.todo-app {
  max-width: 480px;
  margin: 30px auto;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.06);
  border: 1px solid #dce8e1;
  overflow: hidden;
}
.header {
  background: #176B45;
  color: white;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header h2 { margin: 0; font-size: 1.25rem; }
.badge {
  background: #C6A34A;
  color: white;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: bold;
}
.input-row {
  display: flex;
  padding: 16px;
  gap: 10px;
  border-bottom: 1px solid #edf2ef;
}
.input-row input {
  flex-grow: 1;
  padding: 10px 14px;
  border: 1px solid #d2ded7;
  border-radius: 6px;
  font-size: 1rem;
}
.input-row button {
  background: #176B45;
  color: white;
  border: none;
  padding: 10px 18px;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
  padding: 14px 20px;
  border-bottom: 1px solid #f0f4f1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: 0.2s;
}
li.completed {
  text-decoration: line-through;
  color: #949c97;
  background: #fbfdfc;
}
li input[type="checkbox"] {
  width: 18px;
  height: 18px;
  accent-color: #176B45;
  cursor: pointer;
}`,
            starterJs: `const tasks = [
  { id: 1, text: 'تسليم مشروع HTML & CSS النهائي', done: true },
  { id: 2, text: 'مراجعة خوارزميات المصفوفات في JS', done: false }
];

function render() {
  const list = document.getElementById('taskList');
  list.innerHTML = '';
  let completedCount = 0;

  tasks.forEach((t, index) => {
    if (t.done) completedCount++;
    const li = document.createElement('li');
    li.className = t.done ? 'completed' : '';
    li.innerHTML = \`
      <span>\${t.text}</span>
      <input type="checkbox" \${t.done ? 'checked' : ''} data-index="\${index}">
    \`;
    list.appendChild(li);
  });

  document.getElementById('counter').textContent = completedCount + ' من ' + tasks.length + ' مكتملة';

  list.querySelectorAll('input[type="checkbox"]').forEach(box => {
    box.addEventListener('change', (e) => {
      const idx = e.target.getAttribute('data-index');
      tasks[idx].done = e.target.checked;
      render();
    });
  });
}

document.getElementById('addBtn').addEventListener('click', () => {
  const input = document.getElementById('taskInput');
  if (input.value.trim()) {
    tasks.push({ id: Date.now(), text: input.value.trim(), done: false });
    input.value = '';
    render();
  }
});

render();`,
            expectedOutputHint: 'جرب إضافة مهمة دراسية جديدة وحددها كمكتملة لملاحظة تحديث العداد الفوري.'
          }
        ]
      }
    ],
    quiz: {
      id: 'quiz-react',
      courseId: 'react-fundamentals',
      title: 'الاختبار الأكاديمي لمقرر React.js',
      titleEn: 'React.js Concepts & Hooks Quiz',
      passingScore: 75,
      questions: [
        {
          id: 'qr1',
          question: 'ما هو الخطاف (Hook) الذي نستخدمه لإضافة حالة (State) داخل المكون الوظيفي في React؟',
          questionEn: 'Which hook is used to add state to a functional component in React?',
          options: ['useState', 'useEffect', 'useReducer', 'useContext'],
          optionsEn: ['useState', 'useEffect', 'useReducer', 'useContext'],
          correctIndex: 0,
          explanation: 'الخطاف useState هو الأداة الأساسية لتعريف وتحديث الحالة في المكونات الوظيفية.'
        },
        {
          id: 'qr2',
          question: 'ما هي الخاصية الفريدة (Prop) الإلزامية التي يطلبها React عند تكرار قائمة عناصر باستخدام map()؟',
          questionEn: 'Which unique prop is required when rendering a list of items using map() in React?',
          options: ['key', 'id', 'index', 'ref'],
          optionsEn: ['key', 'id', 'index', 'ref'],
          correctIndex: 0,
          explanation: 'خاصية key تساعد React في تتبع العناصر بدقة ومعرفة ما تم تغييره أو حذفه بكفاءة.'
        }
      ]
    }
  },
  {
    id: 'frontend-fullstack',
    title: 'مشروع التخرج: تطوير الواجهات الاحترافية',
    titleEn: 'Capstone Project: Professional Frontend Engineering',
    shortDescription: 'تطبيق عملي شامل يجمع بين الهيكلة، التصميم، التفاعل وربط واجهات برمجة التطبيقات (APIs).',
    shortDescriptionEn: 'Complete capstone engineering project combining UI/UX, APIs, responsive layouts, and performance.',
    level: 'متقدم',
    levelEn: 'Advanced',
    duration: '35 ساعة',
    totalLessons: 16,
    category: 'مشروع التخرج الأكاديمي',
    iconName: 'GraduationCap',
    color: '#C6A34A',
    overview: 'مشروع التخرج المعتمد للمنصة التعليمية. يقوم الطالب بتطوير بوابة خدمات متكاملة تبرز مهاراته في هندسة البرمجيات، اختبار الكود، والتكامل مع الذكاء الاصطناعي.',
    learningObjectives: [
      'تخطيط وتنفيذ مشروع تخرج جامعي متكامل بالمعايير العالمية.',
      'دمج واجهات برمجية خارجية ومعالجة الأخطاء بذكاء.',
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
في مشروع التخرج هذا، ستجمع كافة الخبرات التي اكتسبتها:
- هيكلة دلالية متقنة.
- تناسق لوني وتخطيط شبكي حديث بهوية جامعية راقية.
- منطق جافاسكريبت متقدم لتحديث الأرقام والإشعارات في الوقت الفعلي.
            `,
            starterHtml: `<div class="dashboard-wrap">
  <aside class="sidebar">
    <div class="logo">جامعة المستقبل</div>
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

    <div class="metrics-grid">
      <div class="metric-card">
        <h4>الساعات المكتملة</h4>
        <div class="num" id="hoursCount">48 / 60</div>
        <div class="progress-bar"><div class="fill" style="width: 80%"></div></div>
      </div>
      <div class="metric-card gold">
        <h4>المعدل التراكمي (GPA)</h4>
        <div class="num">3.94 / 4.0</div>
        <div class="tag">مرتبة شرف أولى</div>
      </div>
      <div class="metric-card">
        <h4>المشاريع المسلمة</h4>
        <div class="num">12 مشروعاً</div>
        <div class="tag">تقييم 98%</div>
      </div>
    </div>

    <div class="notice-box">
      <h3>🚀 جاهز لمناقشة مشروع التخرج</h3>
      <p>تم استيفاء كافة المتطلبات الأكاديمية بنجاح واعتماد المشرف العلمي.</p>
    </div>
  </main>
</div>`,
            starterCss: `body {
  margin: 0;
  font-family: 'Segoe UI', Tahoma, sans-serif;
  background: #f4f7f5;
  color: #252B27;
}
.dashboard-wrap {
  display: flex;
  min-height: 100vh;
}
.sidebar {
  width: 220px;
  background: #176B45;
  color: white;
  padding: 24px 16px;
}
.logo {
  font-size: 1.2rem;
  font-weight: 800;
  color: #C6A34A;
  margin-bottom: 30px;
  text-align: center;
}
.nav {
  list-style: none;
  padding: 0;
  margin: 0;
}
.nav li {
  padding: 12px 16px;
  border-radius: 8px;
  margin-bottom: 8px;
  cursor: pointer;
  transition: 0.2s;
}
.nav li.active, .nav li:hover {
  background: rgba(255, 255, 255, 0.15);
  color: #ffffff;
}
.content {
  flex-grow: 1;
  padding: 30px;
}
.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  padding: 20px 24px;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.03);
  margin-bottom: 24px;
}
.topbar h2 { margin: 0; font-size: 1.3rem; color: #176B45; }
.status { color: #176B45; font-size: 0.85rem; font-weight: 600; }
.metrics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  margin-bottom: 24px;
}
.metric-card {
  background: white;
  padding: 22px;
  border-radius: 12px;
  border: 1px solid #dce8e1;
  box-shadow: 0 4px 12px rgba(0,0,0,0.03);
}
.metric-card.gold {
  border-top: 4px solid #C6A34A;
}
.metric-card h4 { margin: 0 0 10px 0; color: #747C76; font-size: 0.9rem; }
.metric-card .num { font-size: 1.8rem; font-weight: 800; color: #176B45; }
.progress-bar {
  background: #E8F2EC;
  height: 8px;
  border-radius: 4px;
  margin-top: 10px;
  overflow: hidden;
}
.fill { background: #176B45; height: 100%; border-radius: 4px; }
.tag { color: #C6A34A; font-weight: 700; font-size: 0.85rem; margin-top: 8px; }
.notice-box {
  background: #E8F2EC;
  border: 1px solid #c2dccb;
  border-radius: 12px;
  padding: 24px;
}
.notice-box h3 { margin-top: 0; color: #176B45; }`,
            starterJs: `console.log("لوحة مؤشرات أداء الطالب تعمل وجاهزة للمناقشة!");`,
            expectedOutputHint: 'تأكد من تناسق الألوان الأكاديمية والخطوط والمربعات التفاعلية.'
          }
        ]
      }
    ],
    quiz: {
      id: 'quiz-capstone',
      courseId: 'frontend-fullstack',
      title: 'الاختبار الشامل لمشروع التخرج',
      titleEn: 'Capstone Web Engineering Assessment',
      passingScore: 80,
      questions: [
        {
          id: 'qcap1',
          question: 'ما هي الممارسة الفضلى لضمان أداء عالي وسرعة استجابة في تطبيقات الويب الكبيرة؟',
          questionEn: 'What is the best practice for high performance in large-scale web applications?',
          options: [
            'تحسين وضغط الصور، استخدام التقسيم الكودي (Code Splitting)، والتخزين المؤقت الفعال',
            'إضافة أكبر قدر ممكن من ملفات CSS الخارجية',
            'عدم استخدام أي أدوات بناء',
            'تحميل جميع البيانات مرة واحدة عند فتح الصفحة الأولى'
          ],
          optionsEn: [
            'Optimizing images, leveraging code splitting, and caching effectively',
            'Adding excessive external CSS files',
            'Avoiding any build tools',
            'Fetching all data at once on initial page load'
          ],
          correctIndex: 0,
          explanation: 'تقنيات تحسين الصور والـ Code Splitting والتخزين المؤقت تضمن أسرع زمن تحميل للصفحات.'
        }
      ]
    }
  }
];

export const badgesList: Badge[] = [
  {
    id: 'first-step',
    title: 'الخطوة الأولى',
    titleEn: 'First Step',
    description: 'إكمال أول درس تفاعلي في المنصة التعليمية بنجاح.',
    icon: 'Footprints',
    color: '#176B45'
  },
  {
    id: 'html-master',
    title: 'مهندس الهيكلة',
    titleEn: 'HTML Master',
    description: 'اجتياز اختبار مسار HTML5 ونماذج الويب الدلالية.',
    icon: 'CodeXml',
    color: '#176B45'
  },
  {
    id: 'css-designer',
    title: 'فنان التصميم المتجاوب',
    titleEn: 'Responsive Artist',
    description: 'إتقان تنسيق صفحات Flexbox و Grid بأناقة أكاديمية.',
    icon: 'Palette',
    color: '#C6A34A'
  },
  {
    id: 'js-ninja',
    title: 'فارس الجافاسكريبت',
    titleEn: 'JavaScript Knight',
    description: 'حل تمارين DOM المعقدة وبرمجة المنطق الأكاديمي.',
    icon: 'Zap',
    color: '#176B45'
  },
  {
    id: 'capstone-graduate',
    title: 'خريج الامتياز الأكاديمي',
    titleEn: 'Honors Graduate',
    description: 'إنجاز مشروع التخرج المتكامل بنسبة نجاح تفوق 90%.',
    icon: 'GraduationCap',
    color: '#C6A34A'
  }
];
