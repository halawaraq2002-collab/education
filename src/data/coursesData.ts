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
        title: 'الوحدة الأولى: بنية الإنترنت ونموذج العميل والخادم',
        titleEn: 'Module 1: Internet Architecture & Client-Server',
        lessons: [
          {
            id: 'wf-1',
            courseId: 'web-fundamentals',
            moduleIndex: 1,
            moduleTitle: 'الوحدة الأولى: بنية الإنترنت ونموذج العميل والخادم',
            moduleTitleEn: 'Module 1: Internet Architecture & Client-Server',
            title: 'كيف يعمل الإنترنت ونموذج العميل والخادم (Client-Server)؟',
            titleEn: 'How the Internet & Client-Server Model Work',
            duration: '35 دقيقة',
            objective: 'فهم مسار حزم البيانات عبر شبكة الإنترنت وتطبيق نموذج العميل والخادم عملياً عبر محاكي شبكي تفاعلي.',
            explanation: `• ما هو الإنترنت؟
الإنترنت هو شبكة عالمية عملاقة من مليارات الحواسيب المتصلة عبر كابلات ألياف ضوئية عابرة للمحيطات، وأجهزة توجيه (Routers)، ومزودي خدمة الإنترنت (ISPs).

• نموذج العميل والخادم (Client / Server Paradigm):
1. العميل (Client): جهازك أو متصفح الويب الخاص بك، وظيفته إرسال طلب (Request) للحصول على صفحة أو مورد.
2. الخادم (Server): حاسوب فائق الأداء مستضاف في مركز بيانات، يستمع دائماً على منافذ الشبكة (Port 80 / 443) ويعالج الطلبات ويعيد استجابة (Response).
3. عنوان البروتوكول (IP Address): الرقم الفريد المخصص لكل جهاز متصل بالشبكة لتحديد وجهته بدقة.
4. حزم البيانات (Packets): تقطيع الرسائل الكبيرة إلى حزم صغيرة تحمل أرقام تسلسل وعناوين المصدر والوجهة يعاد تجميعها في جهة الاستقبال.

• التمرين التطبيقي العملي:
1. انقر زر "إرسال طلب تجريبي (Send Packet)" في شاشة المعاينة الحية.
2. راقب تدفق الحزمة عبر الراوتر وصولاً إلى الخادم وعودة رسالة التأكيد (200 OK).
3. في ملف main.js، جرب تعديل قيمة customMessage أو زيادة سرعة الشبكة واضغط "تشغيل الكود".`,
            starterHtml: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <title>محاكي شبكة الإنترنت | الجامعة الوطنية الخاصة</title>
</head>
<body>
  <div class="network-lab">
    <header class="lab-header">
      <span class="badge">المستوى 1 · الدرس 1</span>
      <h2>محاكي رحلة حزم البيانات ونموذج العميل والخادم</h2>
      <p>عاين مسار الطلب من المتصفح عبر الموجهات إلى الخادم السحابي.</p>
    </header>

    <!-- Network Topology View -->
    <div class="topology-grid">
      <div class="node-card client-node active" id="clientNode">
        <div class="node-icon">💻</div>
        <div class="node-title">العميل (Client)</div>
        <div class="node-ip">IP: 192.168.1.15</div>
        <span class="node-tag">متصفح الويب</span>
      </div>

      <div class="connector">
        <div class="packet" id="dataPacket"></div>
        <div class="wire-line"></div>
      </div>

      <div class="node-card router-node" id="routerNode">
        <div class="node-icon">📡</div>
        <div class="node-title">الموجه (Router)</div>
        <div class="node-ip">Gateway ISP</div>
        <span class="node-tag">توجيه الحزم</span>
      </div>

      <div class="connector">
        <div class="wire-line"></div>
      </div>

      <div class="node-card server-node" id="serverNode">
        <div class="node-icon">🖥️</div>
        <div class="node-title">خادم الويب (Server)</div>
        <div class="node-ip">IP: 172.217.16.206</div>
        <span class="node-tag">Port 443 (HTTPS)</span>
      </div>
    </div>

    <!-- Controls & Metrics -->
    <div class="control-panel">
      <button id="sendBtn" class="btn-primary">
        🚀 إرسال حزمة بيانات (Send Request)
      </button>
      <div class="metrics">
        <div class="metric-item">
          <span class="label">حالة الاتصال:</span>
          <span id="connStatus" class="value ok">جاهز للإرسال</span>
        </div>
        <div class="metric-item">
          <span class="label">زمن الوصول (RTT):</span>
          <span id="latencyMetric" class="value">-- ms</span>
        </div>
      </div>
    </div>

    <!-- Live Transmission Log -->
    <div class="log-box">
      <div class="log-title">سجل تدفق البروتوكولات (Network Event Log):</div>
      <div id="logContent" class="log-content">
        <div class="log-line info">[00:00.00] تم تهيئة بروتوكول TCP/IP بنجاح.</div>
      </div>
    </div>
  </div>
</body>
</html>`,
            starterCss: `body {
  font-family: system-ui, -apple-system, sans-serif;
  margin: 0;
  padding: 20px;
  background-color: #FAF8F2;
  color: #252B27;
  direction: rtl;
}
.network-lab {
  max-width: 800px;
  margin: 0 auto;
  background: white;
  border-radius: 16px;
  border: 1px solid #dbe6df;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.04);
}
.lab-header {
  border-bottom: 2px solid #E8F2EC;
  padding-bottom: 16px;
  margin-bottom: 24px;
}
.badge {
  background: #E8F2EC;
  color: #176B45;
  font-size: 11px;
  font-weight: bold;
  padding: 4px 10px;
  border-radius: 20px;
  display: inline-block;
  margin-bottom: 8px;
}
h2 { color: #176B45; margin: 0 0 6px 0; font-size: 20px; }
p { color: #747C76; margin: 0; font-size: 13px; }

.topology-grid {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  background: #FAF8F2;
  padding: 24px 16px;
  border-radius: 12px;
  border: 1px dashed #dbe6df;
  margin-bottom: 20px;
  position: relative;
}
.node-card {
  background: white;
  border: 2px solid #dbe6df;
  border-radius: 12px;
  padding: 14px 16px;
  text-align: center;
  width: 140px;
  transition: all 0.3s;
}
.node-card.active {
  border-color: #176B45;
  box-shadow: 0 4px 12px rgba(23, 107, 69, 0.15);
}
.node-card.receiving {
  border-color: #C6A34A;
  transform: scale(1.05);
  box-shadow: 0 4px 16px rgba(198, 163, 74, 0.3);
}
.node-icon { font-size: 28px; margin-bottom: 6px; }
.node-title { font-weight: bold; font-size: 13px; color: #176B45; }
.node-ip { font-family: monospace; font-size: 11px; color: #747C76; margin: 4px 0; }
.node-tag { font-size: 10px; background: #FAF8F2; padding: 2px 6px; border-radius: 4px; color: #252B27; }

.connector {
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
}
.wire-line {
  width: 100%;
  height: 3px;
  background: #dbe6df;
  border-radius: 2px;
}
.packet {
  position: absolute;
  width: 12px;
  height: 12px;
  background: #C6A34A;
  border-radius: 50%;
  right: 0;
  display: none;
  box-shadow: 0 0 8px #C6A34A;
}

.control-panel {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 20px;
}
.btn-primary {
  background: #176B45;
  color: white;
  border: none;
  padding: 12px 22px;
  border-radius: 10px;
  font-weight: bold;
  font-size: 13px;
  cursor: pointer;
  transition: background 0.2s, transform 0.1s;
}
.btn-primary:hover { background: #0f482e; }
.btn-primary:active { transform: scale(0.97); }
.metrics { display: flex; gap: 16px; font-size: 12px; }
.metric-item .label { color: #747C76; margin-left: 4px; }
.metric-item .value { font-weight: bold; color: #176B45; font-family: monospace; }
.metric-item .value.ok { color: #176B45; }

.log-box {
  background: #1a201c;
  color: #a3e635;
  border-radius: 10px;
  padding: 14px;
  font-family: monospace;
  font-size: 12px;
}
.log-title { color: #C6A34A; font-weight: bold; margin-bottom: 8px; font-family: sans-serif; }
.log-content { height: 110px; overflow-y: auto; display: flex; flex-col; gap: 4px; direction: ltr; text-align: left; }
.log-line.info { color: #cbd5e1; }
.log-line.success { color: #4ade80; }
.log-line.warn { color: #facc15; }`,
            starterJs: `// محاكي إرسال حزم البيانات ونموذج Client-Server
const sendBtn = document.getElementById('sendBtn');
const clientNode = document.getElementById('clientNode');
const routerNode = document.getElementById('routerNode');
const serverNode = document.getElementById('serverNode');
const dataPacket = document.getElementById('dataPacket');
const connStatus = document.getElementById('connStatus');
const latencyMetric = document.getElementById('latencyMetric');
const logContent = document.getElementById('logContent');

let isSending = false;

function addLog(text, type = 'info') {
  const line = document.createElement('div');
  line.className = 'log-line ' + type;
  const time = new Date().toLocaleTimeString('ar-SA', { hour12: false });
  line.textContent = '[' + time + '] ' + text;
  logContent.appendChild(line);
  logContent.scrollTop = logContent.scrollHeight;
  console.log(text);
}

sendBtn.addEventListener('click', function() {
  if (isSending) return;
  isSending = true;
  sendBtn.disabled = true;
  sendBtn.style.opacity = '0.6';

  const startTime = performance.now();
  connStatus.textContent = 'جاري إرسال طلب HTTP GET...';
  connStatus.style.color = '#C6A34A';

  addLog('Client (192.168.1.15): إنشاء اتصال TCP عبر Port 443...');
  clientNode.classList.add('active');

  // خطوة 1: الوصول إلى الراوتر
  setTimeout(function() {
    addLog('Router Gateway: فحص جدول التوجيه وحزم البيانات...');
    routerNode.classList.add('receiving');
  }, 400);

  // خطوة 2: الوصول إلى الخادم
  setTimeout(function() {
    routerNode.classList.remove('receiving');
    serverNode.classList.add('receiving');
    addLog('Server (172.217.16.206): استلام الطلب ومعالجة الصفحة...');
  }, 900);

  // خطوة 3: عودة الاستجابة بنجاح
  setTimeout(function() {
    serverNode.classList.remove('receiving');
    const endTime = performance.now();
    const rtt = Math.round(endTime - startTime);

    latencyMetric.textContent = rtt + ' ms';
    connStatus.textContent = '200 OK - تم استلام المحتوى';
    connStatus.style.color = '#176B45';

    addLog('Server Response: HTTP/2 200 OK (Content-Type: text/html)', 'success');
    addLog('Client: المتصفح يبدأ بناء شجرة عناصر الـ DOM الآن!', 'success');

    isSending = false;
    sendBtn.disabled = false;
    sendBtn.style.opacity = '1';
  }, 1500);
});

console.log("بيئة محاكاة شبكة الويب جاهزة للاختبار.");`,
            expectedOutputHint: 'اضغط على زر "إرسال حزمة بيانات"، ثم جرب تعديل عنوان الـ IP أو حمولة الرسالة في ملف main.js واضغط "تشغيل الكود".'
          },
          {
            id: 'wf-2',
            courseId: 'web-fundamentals',
            moduleIndex: 1,
            moduleTitle: 'الوحدة الأولى: بنية الإنترنت ونموذج العميل والخادم',
            moduleTitleEn: 'Module 1: Internet Architecture & Client-Server',
            title: 'ما هو موقع الويب والفرق بين Frontend و Backend؟',
            titleEn: 'What is a Website? Frontend vs Backend Architecture',
            duration: '40 دقيقة',
            objective: 'التمييز العملي بين ما يُنفذ في متصفح العميل (HTML, CSS, JS) وما يعالجه الخادم وقواعد البيانات عبر واجهات API.',
            explanation: `• ما هو موقع الويب (Website)؟
موقع الويب هو مجموعة متكاملة من الملفات البرمجية والصور المترابطة المستضافة على خادم ويب، والتي يتصفحها المستخدم عبر رابط URL.

• ركائز الواجهة الأمامية (Frontend - Client Side):
1. هيكل المحتوى (HTML): يحدد العناوين والفقرات والجداول والأزرار.
2. التنسيق والجماليات (CSS): يحدد الألوان، الخطوط، التجاوب مع الجوال، والتحريك.
3. التفاعل والسلوك (JavaScript): التحكم بالـ DOM، معالجة النقرات، وإرسال واستقبال البيانات بدون إعادة تحميل الصفحة.

• مسؤوليات الواجهة الخلفية (Backend - Server Side):
1. منطق الأعمال (Business Logic): معالجة العمليات الحسابية، فحص الشروط، وحماية البيانات السرية.
2. قواعد البيانات (Database): تخزين بيانات الطلاب والمقررات واسترجاعها بسرعة عبر SQL/NoSQL.
3. واجهات برمجة التطبيقات (APIs): تجهيز البيانات بصيغة JSON لتبادلها مع الواجهة الأمامية.

• التمرين التطبيقي العملي:
1. عاين بطاقة "بوابة الطالب التعليمية" في المعاينة.
2. اضغط زر "جلب المقررات المسجلة من خادم الـ API".
3. راقب كيف تستقبل الجافاسكريبت مصفوفة الـ JSON وترسم بطاقات الواجهة فوراً.
4. أضف مقرراً جديداً إلى مصفوفة backendDatabase في ملف main.js واضغط "تشغيل الكود".`,
            starterHtml: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <title>الواجهة الأمامية مقابل الخلفية | الجامعة الوطنية الخاصة</title>
</head>
<body>
  <div class="app-container">
    <header class="app-header">
      <span class="badge">المستوى 1 · الدرس 2</span>
      <h2>بوابة الطالب: تكامل الـ Frontend مع الـ Backend</h2>
      <p>اكتشف كيف ترسم الواجهة الأمامية بيانات الـ JSON القادمة من الخادم.</p>
    </header>

    <!-- Architecture Tabs -->
    <div class="tabs-nav">
      <button id="tabUiBtn" class="tab-btn active">🎨 واجهة المستخدم (Frontend UI)</button>
      <button id="tabJsonBtn" class="tab-btn">⚡ استجابة الخادم (Backend JSON)</button>
    </div>

    <!-- Frontend View -->
    <div id="frontendView" class="view-panel">
      <div class="action-bar">
        <button id="fetchCoursesBtn" class="btn-primary">
          📥 جلب بيانات المقررات (Fetch API Mock)
        </button>
        <span id="loadState" class="status-indicator">البيانات جاهزة للطلب</span>
      </div>

      <div id="coursesList" class="courses-grid">
        <!-- Courses will be dynamically injected here -->
        <div class="empty-state">اضغط الزر أعلاه لاستدعاء البيانات من الخادم السحابي...</div>
      </div>
    </div>

    <!-- Backend JSON View -->
    <div id="backendView" class="view-panel" style="display: none;">
      <div class="json-header">
        <span>Endpoint: GET /api/v1/students/courses</span>
        <span class="status-200">200 OK</span>
      </div>
      <pre id="jsonPreview" class="json-box"></pre>
    </div>
  </div>
</body>
</html>`,
            starterCss: `body {
  font-family: system-ui, -apple-system, sans-serif;
  margin: 0;
  padding: 20px;
  background-color: #FAF8F2;
  color: #252B27;
  direction: rtl;
}
.app-container {
  max-width: 800px;
  margin: 0 auto;
  background: white;
  border-radius: 16px;
  border: 1px solid #dbe6df;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.04);
}
.app-header {
  border-bottom: 2px solid #E8F2EC;
  padding-bottom: 16px;
  margin-bottom: 20px;
}
.badge {
  background: #E8F2EC;
  color: #176B45;
  font-size: 11px;
  font-weight: bold;
  padding: 4px 10px;
  border-radius: 20px;
  display: inline-block;
  margin-bottom: 8px;
}
h2 { color: #176B45; margin: 0 0 6px 0; font-size: 20px; }
p { color: #747C76; margin: 0; font-size: 13px; }

.tabs-nav {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  border-bottom: 1px solid #E8F2EC;
  padding-bottom: 8px;
}
.tab-btn {
  background: none;
  border: none;
  padding: 8px 16px;
  font-size: 13px;
  font-weight: bold;
  color: #747C76;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.2s;
}
.tab-btn.active {
  background: #E8F2EC;
  color: #176B45;
}

.action-bar {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 18px;
}
.btn-primary {
  background: #176B45;
  color: white;
  border: none;
  padding: 10px 18px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 12px;
  cursor: pointer;
  transition: background 0.2s;
}
.btn-primary:hover { background: #0f482e; }
.status-indicator { font-size: 12px; color: #747C76; font-style: italic; }

.courses-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 14px;
}
.course-card {
  background: #FAF8F2;
  border: 1px solid #dbe6df;
  border-right: 4px solid #C6A34A;
  border-radius: 10px;
  padding: 14px;
  transition: transform 0.2s;
}
.course-card:hover { transform: translateY(-2px); }
.course-card h4 { margin: 0 0 6px 0; color: #176B45; font-size: 14px; }
.course-card p { font-size: 11px; color: #747C76; margin: 0 0 10px 0; }
.course-card .meta { display: flex; justify-content: space-between; font-size: 10px; font-weight: bold; color: #252B27; }

.empty-state {
  grid-column: 1 / -1;
  text-align: center;
  padding: 30px;
  color: #747C76;
  font-size: 13px;
  background: #FAF8F2;
  border-radius: 10px;
  border: 1px dashed #dbe6df;
}

.json-header {
  display: flex;
  justify-content: space-between;
  font-family: monospace;
  font-size: 12px;
  padding: 8px 12px;
  background: #1a201c;
  color: #cbd5e1;
  border-radius: 8px 8px 0 0;
}
.status-200 { color: #4ade80; font-weight: bold; }
.json-box {
  background: #131714;
  color: #facc15;
  padding: 16px;
  margin: 0;
  border-radius: 0 0 8px 8px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  overflow-x: auto;
  direction: ltr;
  text-align: left;
}`,
            starterJs: `// قاعدة بيانات افتراضية على الخادم (Backend Mock Database)
const backendDatabase = [
  {
    id: "CS-101",
    title: "أساسيات برمجة الويب",
    credits: 3,
    level: "مبتدئ",
    instructor: "د. عبد الرحمن النجار"
  },
  {
    id: "CS-202",
    title: "تصميم واجهات المستخدم الحديثة",
    credits: 3,
    level: "متوسط",
    instructor: "م. سارة القدسي"
  },
  {
    id: "CS-305",
    title: "قواعد البيانات وهندسة الـ SQL",
    credits: 4,
    level: "متقدم",
    instructor: "د. كنان المصري"
  }
];

const fetchCoursesBtn = document.getElementById('fetchCoursesBtn');
const coursesList = document.getElementById('coursesList');
const loadState = document.getElementById('loadState');
const jsonPreview = document.getElementById('jsonPreview');
const tabUiBtn = document.getElementById('tabUiBtn');
const tabJsonBtn = document.getElementById('tabJsonBtn');
const frontendView = document.getElementById('frontendView');
const backendView = document.getElementById('backendView');

// تحديث عرض الـ JSON مسبقاً
jsonPreview.textContent = JSON.stringify(backendDatabase, null, 2);

// محاكاة طلب Fetch API
fetchCoursesBtn.addEventListener('click', function() {
  loadState.textContent = 'جاري الاتصال بالخادم السحابي...';
  loadState.style.color = '#C6A34A';
  fetchCoursesBtn.disabled = true;

  setTimeout(function() {
    loadState.textContent = 'تم استلام بيانات الـ JSON بنجاح!';
    loadState.style.color = '#176B45';
    fetchCoursesBtn.disabled = false;

    // تفريغ المحتوى ورسم بطاقات الـ Frontend
    coursesList.innerHTML = '';
    backendDatabase.forEach(function(course) {
      const card = document.createElement('div');
      card.className = 'course-card';
      card.innerHTML = 
        '<h4>' + course.title + '</h4>' +
        '<p>المدرس: ' + course.instructor + '</p>' +
        '<div class="meta">' +
          '<span>كود المادة: ' + course.id + '</span>' +
          '<span>الساعات: ' + course.credits + '</span>' +
        '</div>';
      coursesList.appendChild(card);
    });

    console.log("تم تحويل بيانات JSON إلى عناصر DOM بنجاح:", backendDatabase);
  }, 600);
});

// التبديل بين الواجهات
tabUiBtn.addEventListener('click', function() {
  tabUiBtn.classList.add('active');
  tabJsonBtn.classList.remove('active');
  frontendView.style.display = 'block';
  backendView.style.display = 'none';
});

tabJsonBtn.addEventListener('click', function() {
  tabJsonBtn.classList.add('active');
  tabUiBtn.classList.remove('active');
  frontendView.style.display = 'none';
  backendView.style.display = 'block';
});

console.log("تم تجهيز واجهة المقارنة بين Frontend و Backend.");`,
            expectedOutputHint: 'اضغط زر "جلب بيانات المقررات"، ثم بدل بين عرض الواجهة وعرض الـ JSON، وجرب إضافة مادة جديدة في مصفوفة backendDatabase في ملف main.js.'
          }
        ]
      },
      {
        title: 'الوحدة الثانية: محركات التصفح والبروتوكولات',
        titleEn: 'Module 2: Browser Engines & Protocols',
        lessons: [
          {
            id: 'wf-3',
            courseId: 'web-fundamentals',
            moduleIndex: 2,
            moduleTitle: 'الوحدة الثانية: محركات التصفح والبروتوكولات',
            moduleTitleEn: 'Module 2: Browser Engines & Protocols',
            title: 'كيف يعمل المتصفح ومحرك التصيير وشجرة الـ DOM؟',
            titleEn: 'How Browsers Work: DOM Construction & Rendering Pipeline',
            duration: '45 دقيقة',
            objective: 'استيعاب مسار تصيير الويب (Critical Rendering Path) والتفاعل مع شجرة عناصر الـ DOM مباشرة.',
            explanation: `• مسار تصيير الويب (Critical Rendering Path):
كيف يحول المتصفح نصوص الأكواد إلى بكسلات ملونة على الشاشة؟
1. التحليل اللغوي (HTML Parsing): يقرأ المتصفح ملف الـ HTML سطراً بسطر ويحول الوسوم إلى Tokens ثم Nodes لينشئ شجرة كائنات المستند DOM (Document Object Model).
2. بناء شجرة الأنماط (CSSOM): قراءة قواعد الـ CSS وحساب الأنماط لكل عنصر.
3. شجرة العرض (Render Tree): دمج الـ DOM والـ CSSOM لاختيار العناصر المرئية فقط واستبعاد ما يحمل \`display: none\`.
4. حساب التخطيط (Layout / Reflow): حساب الإحداثيات الدقيقة والأبعاد والمواضع لكل عنصر على شاشة المستخدم.
5. الرسم (Painting): تحويل العناصر إلى بكسلات وتمريرها إلى وحدة معالجة الرسوميات (GPU).

• التمرين التطبيقي العملي:
1. عاين شجرة عناصر الـ DOM التفاعلية في شاشة المعاينة.
2. اكتب اسماً لعنصر جديد في صندوق النص واضغط "إضافة عقدة (Add DOM Node)".
3. شاهد كيف يتم تحديث الشجرة وتحديث عداد العناصر فورياً بواسطة كود JavaScript.`,
            starterHtml: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <title>مستكشف شجرة الـ DOM ومحرك التصيير</title>
</head>
<body>
  <div class="dom-explorer">
    <header class="header">
      <span class="badge">المستوى 1 · الدرس 3</span>
      <h2>محاكي بناء شجرة كائنات المستند (DOM Tree Construction)</h2>
      <p>راقب كيف يبني المتصفح الشجرة الهرمية للعناصر وحدثها مباشرة.</p>
    </header>

    <!-- Controls to add DOM nodes -->
    <div class="controls-card">
      <div class="input-group">
        <label>اسم العنصر الجديد:</label>
        <input type="text" id="nodeNameInput" value="&lt;button&gt; زر تسجيل المقررات &lt;/button&gt;" />
      </div>
      <button id="addNodeBtn" class="btn-primary">
        🌿 إضافة عقدة إلى شجرة الـ DOM
      </button>
    </div>

    <!-- Visual DOM Tree Diagram -->
    <div class="tree-canvas">
      <div class="tree-node root">
        <span class="tag">&lt;html&gt;</span>
        <div class="branch">
          <div class="tree-node head">
            <span class="tag">&lt;head&gt;</span>
            <div class="leaf">&lt;title&gt; الجامعة &lt;/title&gt;</div>
          </div>
          <div class="tree-node body" id="bodyNode">
            <span class="tag">&lt;body&gt;</span>
            <div id="dynamicNodesContainer" class="leaves-container">
              <div class="leaf">&lt;header&gt; ترويسة الموقع &lt;/header&gt;</div>
              <div class="leaf">&lt;main&gt; محتوى الصفحة &lt;/main&gt;</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Live Stats -->
    <div class="stats-footer">
      <span>إجمالي العقد في المستند: <strong id="totalNodesCount" class="highlight">5</strong> عناصر</span>
      <span class="hint">حالة الرسم: تم تصيير الـ DOM بنجاح 🟢</span>
    </div>
  </div>
</body>
</html>`,
            starterCss: `body {
  font-family: system-ui, -apple-system, sans-serif;
  margin: 0;
  padding: 20px;
  background-color: #FAF8F2;
  color: #252B27;
  direction: rtl;
}
.dom-explorer {
  max-width: 800px;
  margin: 0 auto;
  background: white;
  border-radius: 16px;
  border: 1px solid #dbe6df;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.04);
}
.header {
  border-bottom: 2px solid #E8F2EC;
  padding-bottom: 16px;
  margin-bottom: 20px;
}
.badge {
  background: #E8F2EC;
  color: #176B45;
  font-size: 11px;
  font-weight: bold;
  padding: 4px 10px;
  border-radius: 20px;
  display: inline-block;
  margin-bottom: 8px;
}
h2 { color: #176B45; margin: 0 0 6px 0; font-size: 20px; }
p { color: #747C76; margin: 0; font-size: 13px; }

.controls-card {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  gap: 12px;
  background: #FAF8F2;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid #dbe6df;
  margin-bottom: 20px;
}
.input-group {
  flex: 1;
  min-width: 240px;
}
.input-group label {
  display: block;
  font-size: 12px;
  font-weight: bold;
  color: #176B45;
  margin-bottom: 6px;
}
.input-group input {
  width: 100%;
  padding: 9px 12px;
  border: 1px solid #dbe6df;
  border-radius: 8px;
  font-size: 13px;
  font-family: monospace;
  box-sizing: border-box;
}
.btn-primary {
  background: #176B45;
  color: white;
  border: none;
  padding: 10px 18px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 12px;
  cursor: pointer;
  transition: background 0.2s;
}
.btn-primary:hover { background: #0f482e; }

.tree-canvas {
  background: #1a201c;
  color: white;
  padding: 24px;
  border-radius: 12px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  overflow-x: auto;
}
.tree-node {
  margin-right: 16px;
  position: relative;
}
.tag {
  display: inline-block;
  background: #176B45;
  color: #FAF8F2;
  padding: 4px 10px;
  border-radius: 6px;
  font-weight: bold;
  margin-bottom: 8px;
  border: 1px solid #C6A34A;
}
.branch {
  margin-right: 24px;
  border-right: 2px dashed #C6A34A;
  padding-right: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.leaf {
  background: #252e27;
  color: #a3e635;
  padding: 6px 12px;
  border-radius: 6px;
  border: 1px solid #36443a;
  display: inline-block;
  margin-bottom: 6px;
  animation: fadeIn 0.3s ease;
}
.leaves-container {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 6px;
}

.stats-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  font-size: 12px;
  color: #747C76;
}
.highlight { color: #176B45; font-size: 14px; }
.hint { color: #176B45; font-weight: bold; }

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-4px); }
  to { opacity: 1; transform: translateY(0); }
}`,
            starterJs: `const addNodeBtn = document.getElementById('addNodeBtn');
const nodeNameInput = document.getElementById('nodeNameInput');
const dynamicNodesContainer = document.getElementById('dynamicNodesContainer');
const totalNodesCount = document.getElementById('totalNodesCount');

let currentCount = 5;

addNodeBtn.addEventListener('click', function() {
  const text = nodeNameInput.value.trim();
  if (!text) return;

  // إنشاء عنصر leaf جديد في شجرة الـ DOM
  const newLeaf = document.createElement('div');
  newLeaf.className = 'leaf';
  newLeaf.textContent = text;
  dynamicNodesContainer.appendChild(newLeaf);

  currentCount++;
  totalNodesCount.textContent = currentCount;

  console.log("تمت إضافة عقدة DOM جديدة: " + text);
  console.log("محرك المتصفح قام بعملية Reflow و Repaint بنجاح.");
});

console.log("مستكشف شجرة الـ DOM جاهز للعمل.");`,
            expectedOutputHint: 'اكتب اسماً لأي وسم جديد في خانة الإدخال واضغط "إضافة عقدة إلى الـ DOM"، ولاحظ كيف يعيد المتصفح رسم الشجرة حياً.'
          },
          {
            id: 'wf-4',
            courseId: 'web-fundamentals',
            moduleIndex: 2,
            moduleTitle: 'الوحدة الثانية: محركات التصفح والبروتوكولات',
            moduleTitleEn: 'Module 2: Browser Engines & Protocols',
            title: 'بروتوكول HTTP وأفعال الطلبات ورموز الاستجابة (Status Codes)',
            titleEn: 'HTTP Protocol: Request Methods & Status Codes (200, 404, 500)',
            duration: '40 دقيقة',
            objective: 'إتقان أفعال HTTP (GET, POST, DELETE) وفهم معاني وتصنيفات رموز الاستجابة (200, 201, 404, 500) عملياً.',
            explanation: `• بروتوكول نقل النص الفائق (HTTP):
هو حجر الأساس في اتصال الويب، يحدد قواعد صياغة الرسائل بين المتصفح والخادم.

• أشهر أفعال الطلب (HTTP Methods):
1. GET: قراءة واسترجاع الموارد من الخادم دون تعديلها.
2. POST: إرسال بيانات جديدة لحفظها على الخادم (مثل إنشاء حساب أو تسجيل مادة).
3. PUT / PATCH: تعديل بيانات موجودة مسبقاً.
4. DELETE: حذف مورد محدد من الخادم.

• رموز الحالة (HTTP Status Codes):
- 2xx (Success): مثل 200 OK (نجاح تام)، 201 Created (تم إنشاء السجل بنجاح).
- 3xx (Redirection): مثل 301 Moved Permanently (إعادة التوجيه لرابط جديد).
- 4xx (Client Error): مثل 400 Bad Request، 404 Not Found (الملف غير موجود).
- 5xx (Server Error): مثل 500 Internal Server Error (عطل برمجي في الخادم).

• التمرين التطبيقي العملي:
1. اختر الفعل (Method) ومسار الرابط (Endpoint) من قائمة المحاكي.
2. اضغط "إرسال طلب HTTP" ولاحظ رمز الاستجابة ولونه والترويسات (Headers).
3. جرب مسار غير موجود لاختبار حالة 404 Not Found.`,
            starterHtml: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <title>مختبر بروتوكول HTTP | الجامعة الوطنية الخاصة</title>
</head>
<body>
  <div class="http-tester">
    <header class="header">
      <span class="badge">المستوى 1 · الدرس 4</span>
      <h2>أداة فحص واختبار طلبات HTTP ورموز الاستجابة</h2>
      <p>أرسل طلبات تجريبية واستكشف ردود أفعال الخادم وأكواد الحالة.</p>
    </header>

    <!-- Request Builder Bar -->
    <div class="request-builder">
      <select id="methodSelect" class="method-select">
        <option value="GET">GET</option>
        <option value="POST">POST</option>
        <option value="DELETE">DELETE</option>
      </select>
      <input type="text" id="urlInput" value="/api/students/courses" class="url-input" />
      <button id="sendHttpBtn" class="btn-send">إرسال الطلب ⚡</button>
    </div>

    <!-- Quick Test Scenarios -->
    <div class="scenarios-bar">
      <span>سيناريوهات سريعة:</span>
      <button class="chip" onclick="setPreset('GET', '/api/students/courses')">200 OK (جلب المواد)</button>
      <button class="chip" onclick="setPreset('POST', '/api/students/enroll')">201 Created (تسجيل)</button>
      <button class="chip" onclick="setPreset('GET', '/api/invalid-page')">404 Not Found (غير موجود)</button>
      <button class="chip" onclick="setPreset('POST', '/api/crash-server')">500 Server Error (عطل)</button>
    </div>

    <!-- Response Panel -->
    <div class="response-card">
      <div class="res-header">
        <div class="status-badge" id="statusBadge">-- STATUS</div>
        <span id="resTime" class="res-time">0 ms</span>
      </div>
      <div class="res-body">
        <div class="section-label">ترويسات الاستجابة (Response Headers):</div>
        <pre id="headersView" class="code-view">Content-Type: application/json\nServer: NPU-Cloud-Cluster</pre>
        <div class="section-label">محتوى الاستجابة (Response Body):</div>
        <pre id="payloadView" class="code-view json">{"message": "اضغط زر الإرسال لتنفيذ الطلب..."}</pre>
      </div>
    </div>
  </div>
</body>
</html>`,
            starterCss: `body {
  font-family: system-ui, -apple-system, sans-serif;
  margin: 0;
  padding: 20px;
  background-color: #FAF8F2;
  color: #252B27;
  direction: rtl;
}
.http-tester {
  max-width: 800px;
  margin: 0 auto;
  background: white;
  border-radius: 16px;
  border: 1px solid #dbe6df;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.04);
}
.header {
  border-bottom: 2px solid #E8F2EC;
  padding-bottom: 16px;
  margin-bottom: 20px;
}
.badge {
  background: #E8F2EC;
  color: #176B45;
  font-size: 11px;
  font-weight: bold;
  padding: 4px 10px;
  border-radius: 20px;
  display: inline-block;
  margin-bottom: 8px;
}
h2 { color: #176B45; margin: 0 0 6px 0; font-size: 20px; }
p { color: #747C76; margin: 0; font-size: 13px; }

.request-builder {
  display: flex;
  gap: 10px;
  margin-bottom: 14px;
}
.method-select {
  padding: 10px 14px;
  font-weight: bold;
  font-size: 13px;
  border: 1px solid #dbe6df;
  border-radius: 8px;
  background: #FAF8F2;
  color: #176B45;
  cursor: pointer;
}
.url-input {
  flex: 1;
  padding: 10px 14px;
  font-family: monospace;
  font-size: 13px;
  border: 1px solid #dbe6df;
  border-radius: 8px;
  direction: ltr;
}
.btn-send {
  background: #176B45;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 13px;
  cursor: pointer;
  transition: background 0.2s;
}
.btn-send:hover { background: #0f482e; }

.scenarios-bar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  color: #747C76;
  margin-bottom: 20px;
}
.chip {
  background: #FAF8F2;
  border: 1px solid #dbe6df;
  border-radius: 16px;
  padding: 4px 10px;
  font-size: 11px;
  cursor: pointer;
  color: #252B27;
  transition: all 0.2s;
}
.chip:hover {
  background: #E8F2EC;
  border-color: #176B45;
  color: #176B45;
}

.response-card {
  background: #1a201c;
  border-radius: 12px;
  overflow: hidden;
}
.res-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background: #131714;
  border-bottom: 1px solid #2a352e;
}
.status-badge {
  font-family: monospace;
  font-size: 13px;
  font-weight: bold;
  color: #a3e635;
  padding: 3px 8px;
  border-radius: 4px;
  background: rgba(163, 230, 53, 0.1);
}
.res-time { font-family: monospace; font-size: 11px; color: #747C76; }
.res-body { padding: 16px; }
.section-label { font-size: 11px; color: #C6A34A; margin-bottom: 4px; font-weight: bold; }
.code-view {
  background: #0f1311;
  color: #e2e8f0;
  padding: 10px 14px;
  border-radius: 8px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  margin-bottom: 12px;
  direction: ltr;
  text-align: left;
  overflow-x: auto;
}
.code-view.json { color: #facc15; }`,
            starterJs: `const methodSelect = document.getElementById('methodSelect');
const urlInput = document.getElementById('urlInput');
const sendHttpBtn = document.getElementById('sendHttpBtn');
const statusBadge = document.getElementById('statusBadge');
const resTime = document.getElementById('resTime');
const headersView = document.getElementById('headersView');
const payloadView = document.getElementById('payloadView');

window.setPreset = function(method, url) {
  methodSelect.value = method;
  urlInput.value = url;
};

sendHttpBtn.addEventListener('click', function() {
  const method = methodSelect.value;
  const url = urlInput.value.trim();
  const startTime = performance.now();

  console.log("جاري إرسال الطلب: " + method + " " + url);

  setTimeout(function() {
    const elapsed = Math.round(performance.now() - startTime) + 35;
    resTime.textContent = elapsed + " ms";

    if (url.includes('invalid')) {
      statusBadge.textContent = "404 Not Found";
      statusBadge.style.color = "#fb923c";
      statusBadge.style.background = "rgba(251, 146, 60, 0.1)";
      headersView.textContent = "HTTP/1.1 404 Not Found\\nContent-Type: application/json\\nDate: " + new Date().toUTCString();
      payloadView.textContent = JSON.stringify({ error: "المسار المطلوب غير موجود على الخادم", statusCode: 404 }, null, 2);
    } else if (url.includes('crash')) {
      statusBadge.textContent = "500 Internal Server Error";
      statusBadge.style.color = "#f87171";
      statusBadge.style.background = "rgba(248, 113, 113, 0.1)";
      headersView.textContent = "HTTP/1.1 500 Internal Server Error\\nContent-Type: application/json";
      payloadView.textContent = JSON.stringify({ error: "خطأ غير متوقع في قاعدة بيانات الخادم", statusCode: 500 }, null, 2);
    } else if (method === 'POST') {
      statusBadge.textContent = "201 Created";
      statusBadge.style.color = "#4ade80";
      statusBadge.style.background = "rgba(74, 222, 128, 0.1)";
      headersView.textContent = "HTTP/1.1 201 Created\\nLocation: /api/students/enroll/982\\nContent-Type: application/json";
      payloadView.textContent = JSON.stringify({ success: true, message: "تم تسجيل المقرر بنجاح في خطتك الدراسية" }, null, 2);
    } else {
      statusBadge.textContent = "200 OK";
      statusBadge.style.color = "#4ade80";
      statusBadge.style.background = "rgba(74, 222, 128, 0.1)";
      headersView.textContent = "HTTP/1.1 200 OK\\nCache-Control: max-age=3600\\nContent-Type: application/json";
      payloadView.textContent = JSON.stringify({ status: "success", totalCourses: 4, verified: true }, null, 2);
    }

    console.log("استجابة الخادم مكتملة:", statusBadge.textContent);
  }, 250);
});

console.log("مختبر بروتوكول HTTP جاهز لتنفيذ طلباتك.");`,
            expectedOutputHint: 'جرب اختيار أفعال مختلفة مثل POST أو مسار خاطئ لاختبار كود 404 Not Found، ثم عدّل دالة sendHttpRequest في main.js.'
          }
        ]
      },
      {
        title: 'الوحدة الثالثة: النطاقات والاستضافة وأدوات التطوير',
        titleEn: 'Module 3: Domains, Hosting & DevTools',
        lessons: [
          {
            id: 'wf-5',
            courseId: 'web-fundamentals',
            moduleIndex: 3,
            moduleTitle: 'الوحدة الثالثة: النطاقات والاستضافة وأدوات التطوير',
            moduleTitleEn: 'Module 3: Domains, Hosting & DevTools',
            title: 'أسماء النطاقات (DNS) والاستضافة السحابية والـ CDN',
            titleEn: 'DNS Resolution, Cloud Hosting & CDN Caching',
            duration: '40 دقيقة',
            objective: 'فهم دورة استعلام الـ DNS وتأثير خوادم التخزين المؤقت CDN على تسريع تحميل صفحات الويب.',
            explanation: `• كيف يترجم الـ DNS أسماء النطاقات؟
عندما تكتب رابط الموقع: npu.edu.sy
1. التحقق من الكاش المحلي (Local Cache): يتأكد المتصفح ونظام التشغيل إن كان قد زار الموقع حديثاً.
2. خادم DNS Resolver (المزود): يتواصل مع الـ Root Nameservers.
3. خوادم النطاق الأعلى (TLD Server): يبحث عن امتدادات مثل .edu أو .sy.
4. خادم النطاق المعتمد (Authoritative DNS): يعيد عنوان الـ IP النهائي المقابل للموقع.

• شبكات توصيل المحتوى (CDN - Content Delivery Network):
هي شبكة خوادم سحابية موزعة جغرافياً في عواصم العالم، تحتفظ بنسخة مؤقتة (Cache) من ملفات الموقع الثابتة (HTML, CSS, JS, Images) وتقدمها من أقرب خادم جغرافي للطالب لتقليل زمن الاستجابة إلى أجزاء من الثانية.

• التمرين التطبيقي العملي:
1. انقر زر "بدء استعلام النطاق (DNS Lookup)".
2. راقب خطوات الترجمة خطوة بخطوة حتى الحصول على عنوان IP.
3. فعّل زر "استخدام شبكة CDN" ولاحظ كيف ينخفض زمن الاستجابة مباشرة.`,
            starterHtml: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <title>محاكي نظام أسماء النطاقات DNS والـ CDN</title>
</head>
<body>
  <div class="dns-lab">
    <header class="header">
      <span class="badge">المستوى 1 · الدرس 5</span>
      <h2>محاكي استعلام أسماء النطاقات (DNS Resolution & CDN)</h2>
      <p>تتبع رحلة ترجمة اسم الموقع النصي إلى عنوان رقمي IP Address.</p>
    </header>

    <!-- Domain Input & Switcher -->
    <div class="search-bar">
      <input type="text" id="domainInput" value="npu.edu.sy" placeholder="اكتب اسم النطاق..." />
      <button id="lookupBtn" class="btn-lookup">🔍 بدء استعلام DNS</button>
      <label class="cdn-toggle">
        <input type="checkbox" id="cdnToggle" />
        <span>تفعيل تسريع CDN ⚡</span>
      </label>
    </div>

    <!-- Resolution Steps Pipeline -->
    <div class="steps-flow">
      <div class="step-box" id="stepRoot">
        <div class="step-num">1</div>
        <div class="step-name">Root Server (.)</div>
        <div class="step-desc">توجيه إلى نطاقات TLD</div>
      </div>
      <div class="arrow">➡️</div>
      <div class="step-box" id="stepTld">
        <div class="step-num">2</div>
        <div class="step-name">TLD Server (.edu)</div>
        <div class="step-desc">نطاقات التعليم العالي</div>
      </div>
      <div class="arrow">➡️</div>
      <div class="step-box" id="stepAuth">
        <div class="step-num">3</div>
        <div class="step-name">Authoritative DNS</div>
        <div class="step-desc">سجلات النطاق A Record</div>
      </div>
    </div>

    <!-- Resolved Info Card -->
    <div class="result-card">
      <div class="result-item">
        <span class="label">عنوان الـ IP المكتشف:</span>
        <span id="ipResult" class="ip-code">194.126.15.42</span>
      </div>
      <div class="result-item">
        <span class="label">زمن الاستعلام الكلي:</span>
        <span id="dnsLatency" class="latency-code">180 ms</span>
      </div>
      <div class="result-item">
        <span class="label">نوع الاستضافة:</span>
        <span id="hostingType" class="host-badge">استضافة سحابية قياسية</span>
      </div>
    </div>
  </div>
</body>
</html>`,
            starterCss: `body {
  font-family: system-ui, -apple-system, sans-serif;
  margin: 0;
  padding: 20px;
  background-color: #FAF8F2;
  color: #252B27;
  direction: rtl;
}
.dns-lab {
  max-width: 800px;
  margin: 0 auto;
  background: white;
  border-radius: 16px;
  border: 1px solid #dbe6df;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.04);
}
.header {
  border-bottom: 2px solid #E8F2EC;
  padding-bottom: 16px;
  margin-bottom: 20px;
}
.badge {
  background: #E8F2EC;
  color: #176B45;
  font-size: 11px;
  font-weight: bold;
  padding: 4px 10px;
  border-radius: 20px;
  display: inline-block;
  margin-bottom: 8px;
}
h2 { color: #176B45; margin: 0 0 6px 0; font-size: 20px; }
p { color: #747C76; margin: 0; font-size: 13px; }

.search-bar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
}
.search-bar input {
  flex: 1;
  min-width: 200px;
  padding: 10px 14px;
  border: 1px solid #dbe6df;
  border-radius: 8px;
  font-family: monospace;
  font-size: 13px;
  direction: ltr;
}
.btn-lookup {
  background: #176B45;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 13px;
  cursor: pointer;
  transition: background 0.2s;
}
.btn-lookup:hover { background: #0f482e; }

.cdn-toggle {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: bold;
  color: #C6A34A;
  background: #FAF8F2;
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid #C6A34A;
  cursor: pointer;
}

.steps-flow {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 24px;
}
.step-box {
  flex: 1;
  background: #FAF8F2;
  border: 2px solid #dbe6df;
  border-radius: 12px;
  padding: 14px;
  text-align: center;
  transition: all 0.3s;
}
.step-box.highlight {
  border-color: #176B45;
  background: #E8F2EC;
  box-shadow: 0 4px 12px rgba(23,107,69,0.15);
}
.step-num {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #176B45;
  color: white;
  margin: 0 auto 6px auto;
  font-size: 12px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
}
.step-name { font-weight: bold; font-size: 13px; color: #176B45; margin-bottom: 4px; }
.step-desc { font-size: 11px; color: #747C76; }
.arrow { font-size: 16px; color: #C6A34A; }

.result-card {
  background: #1a201c;
  color: white;
  border-radius: 12px;
  padding: 16px 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}
.result-item .label { display: block; font-size: 11px; color: #747C76; margin-bottom: 4px; }
.ip-code { font-family: monospace; font-size: 15px; font-weight: bold; color: #4ade80; }
.latency-code { font-family: monospace; font-size: 15px; font-weight: bold; color: #facc15; }
.host-badge { font-size: 12px; font-weight: bold; background: #2a352e; padding: 4px 10px; border-radius: 6px; color: #FAF8F2; }`,
            starterJs: `const domainInput = document.getElementById('domainInput');
const lookupBtn = document.getElementById('lookupBtn');
const cdnToggle = document.getElementById('cdnToggle');
const stepRoot = document.getElementById('stepRoot');
const stepTld = document.getElementById('stepTld');
const stepAuth = document.getElementById('stepAuth');
const ipResult = document.getElementById('ipResult');
const dnsLatency = document.getElementById('dnsLatency');
const hostingType = document.getElementById('hostingType');

lookupBtn.addEventListener('click', function() {
  const domain = domainInput.value.trim() || 'npu.edu.sy';
  const isCdn = cdnToggle.checked;

  lookupBtn.disabled = true;
  stepRoot.classList.remove('highlight');
  stepTld.classList.remove('highlight');
  stepAuth.classList.remove('highlight');

  console.log("بدء استعلام الـ DNS للنطاق: " + domain);

  if (isCdn) {
    // استجابة سريعة من الـ CDN Edge Cache
    setTimeout(function() {
      stepAuth.classList.add('highlight');
      ipResult.textContent = "104.21.55.19 (Cloudflare CDN Edge)";
      dnsLatency.textContent = "12 ms ⚡";
      dnsLatency.style.color = "#4ade80";
      hostingType.textContent = "شبكة توزيع محتوى CDN عالمية";
      lookupBtn.disabled = false;
      console.log("تم جلب عنوان IP فورياً من ذاكرة الـ Edge Cache في أقرب مركز بيانات محلي.");
    }, 200);
    return;
  }

  // محاكاة الاستعلام المتسلسل الكامل
  setTimeout(function() {
    stepRoot.classList.add('highlight');
    console.log("1. استعلام خوادم الجذر Root Servers...");
  }, 300);

  setTimeout(function() {
    stepTld.classList.add('highlight');
    console.log("2. استعلام خوادم TLD (.edu)...");
  }, 700);

  setTimeout(function() {
    stepAuth.classList.add('highlight');
    ipResult.textContent = "194.126.15.42 (Origin Host)";
    dnsLatency.textContent = "185 ms";
    dnsLatency.style.color = "#facc15";
    hostingType.textContent = "استضافة أصلية مركزية (Origin)";
    lookupBtn.disabled = false;
    console.log("3. تم الحصول على السجل النهائي A Record: " + domain + " -> 194.126.15.42");
  }, 1100);
});

console.log("محاكي الـ DNS والـ CDN جاهز للاستخدام.");`,
            expectedOutputHint: 'اكتب نطاقاً مثل npu.edu.sy واضغط "بدء الاستعلام"، ثم فعّل خيار CDN ولاحظ انخفاض زمن الاستجابة إلى 12ms.'
          },
          {
            id: 'wf-6',
            courseId: 'web-fundamentals',
            moduleIndex: 3,
            moduleTitle: 'الوحدة الثالثة: النطاقات والاستضافة وأدوات التطوير',
            moduleTitleEn: 'Module 3: Domains, Hosting & DevTools',
            title: 'أدوات مطور الويب (DevTools) وفحص العناصر والكونسول',
            titleEn: 'Browser DevTools: Inspect Elements, Network, and Console Debugging',
            duration: '50 دقيقة',
            objective: 'الاحتراف العملي لأدوات المطور في المتصفح، فحص شجرة العناصر وتعديلها فورياً، وتتبع وحل أخطاء JavaScript.',
            explanation: `• ما هي أدوات المطور (Browser DevTools)؟
هي لوحة أدوات برمجية مدمجة في كافة المتصفحات الحديثة (تُفتح بضغط F12 أو Right Click -> Inspect).

• الأقسام الرئيسية لأدوات المطور:
1. تبويب العناصر (Elements / Inspector):
   - استعراض شجرة الـ DOM وتعديل نصوصها أو وسومها فورياً.
   - فحص وتعديل تنسيقات الـ CSS ونموذج الصندوق (Box Model: Margin, Border, Padding, Content).
2. تبويب وحدة التحكم (Console):
   - طباعة مخرجات الكود: console.log()
   - إظهار التحذيرات: console.warn()
   - رصد وتصحيح الأخطاء: console.error()
   - تنفيذ أوامر JavaScript واختبار الدوال الحسابية والتفاعلية.
3. تبويب الشبكة (Network):
   - مراقبة زمن تنزيل ملفات الموقع، حجم الحزم، وأكواد استجابة الخادم.

• التمرين التطبيقي العملي:
1. جرب تحريك منزلقات الـ CSS (Padding & Margin) ولاحظ التغير المباشر على بطاقة المعاينة (Box Model).
2. اضغط أزرار الكونسول وشاهد الرسائل تظهر فوراً في نافذة الكونسول بالأسفل.
3. اضغط زر "إصلاح الخطأ البرمجي" لتنفيذ كود مصحح يحل المشكلة البرمجية دون توقف الصفحة.`,
            starterHtml: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <title>مختبر أدوات المطور وفحص الصندوق</title>
</head>
<body>
  <div class="devtools-lab">
    <header class="header">
      <span class="badge">المستوى 1 · الدرس 6</span>
      <h2>محاكي أدوات المطور (DevTools & Box Model Inspector)</h2>
      <p>تفاعل مع نموذج الصندوق واختبر أدوات فحص وتصحيح الكونسول.</p>
    </header>

    <!-- Interactive Box Model Controls -->
    <div class="controls-grid">
      <div class="control-card">
        <h4>🎛️ أداة فحص CSS الحية (Live Style Inspector)</h4>
        <div class="slider-group">
          <label>الحشوة الداخلية (Padding): <span id="paddingVal">18px</span></label>
          <input type="range" id="paddingSlider" min="5" max="40" value="18" />
        </div>
        <div class="slider-group">
          <label>الهامش الخارجي (Margin): <span id="marginVal">12px</span></label>
          <input type="range" id="marginSlider" min="0" max="30" value="12" />
        </div>
      </div>

      <div class="control-card">
        <h4>🧪 اختبار رسائل الكونسول (Console API)</h4>
        <div class="console-actions">
          <button id="btnLog" class="btn-console log">console.log()</button>
          <button id="btnWarn" class="btn-console warn">console.warn()</button>
          <button id="btnErr" class="btn-console err">console.error()</button>
          <button id="btnFix" class="btn-console fix">🛠️ إصلاح خطأ برمجي</button>
        </div>
      </div>
    </div>

    <!-- Visual Box Model Diagram -->
    <div class="preview-stage">
      <div class="box-model-demo" id="targetElement">
        <div class="box-label">عنصر الاختبار: بطاقة مقرر تطوير الويب</div>
        <p class="box-desc">هذا النص يتأثر مباشرة بتغيير قيم الحشوة والهوامش في نموذج الصندوق.</p>
      </div>
    </div>
  </div>
</body>
</html>`,
            starterCss: `body {
  font-family: system-ui, -apple-system, sans-serif;
  margin: 0;
  padding: 20px;
  background-color: #FAF8F2;
  color: #252B27;
  direction: rtl;
}
.devtools-lab {
  max-width: 800px;
  margin: 0 auto;
  background: white;
  border-radius: 16px;
  border: 1px solid #dbe6df;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.04);
}
.header {
  border-bottom: 2px solid #E8F2EC;
  padding-bottom: 16px;
  margin-bottom: 20px;
}
.badge {
  background: #E8F2EC;
  color: #176B45;
  font-size: 11px;
  font-weight: bold;
  padding: 4px 10px;
  border-radius: 20px;
  display: inline-block;
  margin-bottom: 8px;
}
h2 { color: #176B45; margin: 0 0 6px 0; font-size: 20px; }
p { color: #747C76; margin: 0; font-size: 13px; }

.controls-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
  margin-bottom: 24px;
}
.control-card {
  background: #FAF8F2;
  border: 1px solid #dbe6df;
  border-radius: 12px;
  padding: 16px;
}
.control-card h4 {
  margin: 0 0 12px 0;
  font-size: 13px;
  color: #176B45;
}
.slider-group {
  margin-bottom: 10px;
}
.slider-group label {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  font-weight: bold;
  color: #252B27;
  margin-bottom: 4px;
}
.slider-group input {
  width: 100%;
  accent-color: #176B45;
  cursor: pointer;
}

.console-actions {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}
.btn-console {
  padding: 8px 10px;
  border-radius: 6px;
  border: none;
  font-family: monospace;
  font-size: 11px;
  font-weight: bold;
  cursor: pointer;
  transition: opacity 0.2s;
}
.btn-console:hover { opacity: 0.9; }
.btn-console.log { background: #176B45; color: white; }
.btn-console.warn { background: #C6A34A; color: white; }
.btn-console.err { background: #dc2626; color: white; }
.btn-console.fix { background: #2563eb; color: white; grid-column: span 2; font-family: sans-serif; }

.preview-stage {
  background: #FAF8F2;
  border: 2px dashed #dbe6df;
  border-radius: 12px;
  padding: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.box-model-demo {
  background: white;
  border: 3px solid #176B45;
  border-radius: 10px;
  padding: 18px;
  margin: 12px;
  max-width: 360px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.06);
  transition: padding 0.15s, margin 0.15s;
}
.box-label { font-weight: bold; font-size: 14px; color: #176B45; margin-bottom: 6px; }
.box-desc { font-size: 12px; color: #747C76; margin: 0; line-height: 1.5; }`,
            starterJs: `const paddingSlider = document.getElementById('paddingSlider');
const marginSlider = document.getElementById('marginSlider');
const paddingVal = document.getElementById('paddingVal');
const marginVal = document.getElementById('marginVal');
const targetElement = document.getElementById('targetElement');

const btnLog = document.getElementById('btnLog');
const btnWarn = document.getElementById('btnWarn');
const btnErr = document.getElementById('btnErr');
const btnFix = document.getElementById('btnFix');

// التحكم المباشر بـ Box Model
paddingSlider.addEventListener('input', function(e) {
  const val = e.target.value + 'px';
  paddingVal.textContent = val;
  targetElement.style.padding = val;
});

marginSlider.addEventListener('input', function(e) {
  const val = e.target.value + 'px';
  marginVal.textContent = val;
  targetElement.style.margin = val;
});

// رسائل الكونسول
btnLog.addEventListener('click', function() {
  console.log("معلومات DevTools: تم فحص أبعاد الصندوق الحالية بنجاح.");
});

btnWarn.addEventListener('click', function() {
  console.warn("تحذير أداء: تأكد من تقليل الصور الكبيرة لتسريع تحميل الصفحة.");
});

btnErr.addEventListener('click', function() {
  console.error("خطأ تجريبي (TypeError): الدالة غير معرفة، تحقق من السطر البرمجي.");
});

btnFix.addEventListener('click', function() {
  console.log("تم تطبيق الإصلاح البرمجي بنجاح: تم تعريف المتغير وإلغاء استثناء الخطأ!");
  alert("تهانينا! قمت باكتشاف الخطأ في الكونسول وإصلاحه.");
});

console.log("مختبر أدوات المطور DevTools جاهز للفحص والتشغيل.");`,
            expectedOutputHint: 'حرّك منزلقات الهوامش لتغيير الـ Box Model مباشرة، واضغط أزرار الكونسول وشاهد المخرجات في لوحة الكونسول بالأسفل.'
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

  <!-- التذييل التعليمي -->
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
    overview: 'إتقان تنسيق صفحات الويب وتحويل كود HTML المجرد إلى واجهات استخدام تفاعلية مبهرة تعكس الهوية الراقية باللونين الأخضر الزمردي والذهب الملكي.',
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
    <h3>المرشد التعليمي الذكي</h3>
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
    <input type="text" id="taskInput" placeholder="أدخل اسم المهمة الجديدة...">
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
      description: 'إنشاء Repository حقيقي، إنشاء فرع feature-branch، دمج التعديلات، وكتابة توثيق README احترافي.',
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
            title: 'بناء مكون عداد الإنجاز مع useState',
            titleEn: 'Building a Progress Counter with useState',
            duration: '60 دقيقة',
            objective: 'صمم مكوناً تفاعلياً يحاكي دورة حياة مكونات React وتحديث الحالة التلقائي.',
            explanation: `
في React، بدلاً من تعديل عناصر الـ DOM يدوياً، نربط واجهة المستخدم بحالة المكون (State):
- عندما تتغير الحالة عبر الدالة المعدلة (setState)، يعيد React تصيير المكون تلقائياً (Re-render) فقط للأجزاء التي تغيرت.
- هذا المبدأ يجعل الشيفرة أكثر نظافة وسهولة في الصيانة.
            `,
            starterHtml: `<div class="react-component">
  <div class="badge">React Component Simulation</div>
  <h2>مقياس إنجاز الساعات التعليمية 🎓</h2>
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
- باستخدام INNER JOIN ندمج السجلات المطابقة لنحصل على تقرير دراسي شامل.
            `,
            starterHtml: `<div class="sql-studio">
  <h3>محرر استعلامات SQL التفاعلي 🗄️</h3>
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
        <tr><th>اسم الطالب</th><th>المقرر التعليمي</th><th>الدرجة</th></tr>
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
    category: 'المشروع النهائي الشامل',
    iconName: 'GraduationCap',
    color: '#C6A34A',
    imageUrl: '/src/assets/images/capstone_course_art_1793989838051.jpg',
    track: 'fullstack',
    levelNumber: 11,
    practicalProject: {
      title: 'تطوير منصة تعليمية إلكترونية متكاملة ونشرها على الإنترنت',
      titleEn: 'Developing & Deploying a Complete E-Learning Platform',
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
        title: 'الوحدة الختامية: بناء لوحة معلومات تعليمية متكاملة',
        titleEn: 'Capstone: Integrated Educational Dashboard',
        lessons: [
          {
            id: 'cap-1',
            courseId: 'frontend-fullstack',
            moduleIndex: 1,
            moduleTitle: 'الوحدة الختامية: بناء لوحة معلومات تعليمية متكاملة',
            moduleTitleEn: 'Capstone: Integrated Educational Dashboard',
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
      <span class="status">🟢 متصل بالنظام التعليمي</span>
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
        <span class="label">النقاط التعليمية</span>
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
            expectedOutputHint: 'اضغط على زر "تسليم ومناقشة المشروع" لمشاهدة التفاعل الحي مع التقييم النهائي.'
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
