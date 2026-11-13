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
            explanation: `### 1. المقدمة وأهمية الموضوع
عندما تكتب عنوان موقع إلكتروني في متصفحك وتضغط على مفتاح الإدخال (Enter)، تحدث خلف الكواليس سلسلة سريعة ودقيقة من الاتصالات الشبكية خلال أجزاء من الثانية. فهم كيف يعمل الإنترنت ونموذج العميل والخادم هو حجر الأساس لكل مطور ويب؛ لأنه يفسر أين يُنفذ الكود، وكيف تنتقل البيانات بين المستخدم والخادم، ولماذا تتأخر صفحة ما أو تفشل في التحميل.

### 2. المفاهيم الأساسية بالتفصيل
- الإنترنت (Internet): شبكة عالمية لامركزية تربط ملايين الشبكات المحلية ومراكز البيانات عبر كابلات الألياف الضوئية الأرضية والبحرية والأقمار الصناعية، وتتبادل البيانات وفق بروتوكولات موحدة مثل TCP/IP.
- العميل (Client): هو الطرف الذي يطلب الخدمة أو المحتوى، وغالباً ما يكون متصفح الويب (مثل Chrome أو Firefox أو Safari) على حاسوبك أو هاتفك، وقد يكون أيضاً تطبيق هاتف أو أداة سطر أوامر.
- الخادم (Server): حاسوب أو بيئة برمجية متصلة بالإنترنت على مدار الساعة، تستمع على منافذ محددة (Ports) وتستقبل طلبات العملاء، ثم تعالجها وتعيد النتيجة المطلوبة.
- الطلب والاستجابة (Request & Response): دورة التواصل الأساسية في الويب؛ يبدأ العميل بإرسال رسالة طلب (Request)، ويرد الخادم برسالة استجابة (Response) تحتوي على الصفحة أو البيانات أو رسالة خطأ.

### 3. المصطلحات التقنية وترجمتها
- Client (العميل): الجهاز أو البرنامج الذي يطلب الموارد من الخادم.
- Server (الخادم): الجهاز أو البرنامج الذي يستضيف الملفات والبيانات ويعالج الطلبات.
- IP Address (عنوان بروتوكول الإنترنت): رقم تعريفي فريد لكل جهاز على الشبكة (مثل \`192.168.1.1\` في IPv4 أو عنوان IPv6) لتوجيه البيانات إلى الوجهة الصحيحة.
- Data Packet (حزمة البيانات): وحدة صغيرة يتم تقسيم البيانات الكبيرة إليها قبل إرسالها عبر الشبكة، وتحمل عنوان المرسل والمستقبل ورقم التسلسل.
- Router (الموجه): جهاز شبكي يقرأ عنوان الوجهة في كل حزمة بيانات ويختار المسار الأنسب لتمريرها عبر الشبكات.
- Port (المنفذ): رقم منطقي يحدد الخدمة المقصودة داخل الخادم، مثل المنفذ \`80\` لبروتوكول HTTP والمنفذ \`443\` لبروتوكول HTTPS المشفر.
- RTT - Round-Trip Time (زمن الذهاب والعودة): الوقت المستغرق لانتقال الطلب من العميل إلى الخادم وعودة الاستجابة بالمللي ثانية (ms).

### 4. آلية العمل خطوة بخطوة
1. يبدأ المستخدم بطلب موقع عبر المتصفح (العميل).
2. ينشئ الجهاز اتصالاً عبر بروتوكول TCP/IP متجهاً إلى عنوان الـ IP والمنفذ \`443\` الخاص بالخادم.
3. تُقسّم البيانات إلى حزم صغيرة (Packets) تمر عبر جهاز التوجيه المنزلي (Router) ثم مزود خدمة الإنترنت (ISP) وعقد التوجيه العالمية.
4. يستقبل الخادم الحزم، يعيد تجميعها بالترتيب، يتحقق من صحة الطلب، ثم يُرجع ملفات HTML وCSS وJavaScript أو بيانات JSON.
5. يتسلم المتصفح الاستجابة ويبدأ بعرض الصفحة للمستخدم.

### 5. أمثلة واقعية في تطوير المواقع
- فتح منصة تعليمية: المتصفح (Client) يطلب صفحة المقرر من خادم المنصة (Server)، فيُرجع الخادم كود الصفحة والصور.
- تسجيل الدخول: يرسل المتصفح بيانات النموذج إلى الخادم عبر منفذ \`443\`، فيتحقق الخادم منها ويعيد استجابة نجاح أو رفض.

### 6. استخدام المفهوم في المشاريع الحقيقية
في تطبيقات الويب الإنتاجية، لا يتواصل العميل مع قاعدة البيانات مباشرة لأسباب أمنية؛ بل يرسل طلباً إلى خادم الويب (Web Server) مثل Nginx أو خادم Node.js، وهو الذي يتحقق من الصلاحيات ويجلب البيانات المطلوبة ثم يعيدها للعميل بأمان.

### 7. الأخطاء الشائعة وكيفية تجنبها
- الخلط بين عنوان IP والمنفذ (Port): العنوان يحدد الخادم نفسه، بينما المنفذ يحدد البرنامج المستمع داخل هذا الخادم.
- افتراض أن الحزم تصل في مسار واحد دائماً: قد تسلك حزم الطلب الواحد مسارات مختلفة عبر الشبكة، ويضمن بروتوكول TCP إعادة ترتيبها والتحقق من وصولها كاملة.
- تجاهل زمن الوصول (Latency): إرسال طلبات متكررة غير ضرورية يبطئ تجربة المستخدم، لذا يجب تجميع الطلبات وتقليل أحجام الملفات.

### 8. الربط مع الدروس السابقة واللاحقة
يمهد هذا الدرس لفهم الدرس التالي (الفرق بين Frontend و Backend)؛ لأن الشيفرة التي تعمل على جهاز العميل تُعد Frontend، بينما الشيفرة التي تعمل على الخادم تُعد Backend، كما يرتبط مباشرة بدرس بروتوكول HTTP ودرس الـ DNS.`,
            practicalSteps: `1. انقر زر "إرسال حزمة بيانات (Send Request)" في شاشة المعاينة الحية.
2. راقب تدفق الحزمة عبر الموجه (Router) وصولاً إلى الخادم وعودة رسالة التأكيد (200 OK) وزمن الوصول RTT.
3. في تبويب main.js داخل المحرر، جرّب تعديل نص رسالة الحالة أو زمن الخطوات عبر setTimeout ثم اضغط "تشغيل الكود" لمعاينة التعديل.`,
            videoSearchQuery: 'كيف يعمل الإنترنت Client Server model شرح بالعربي',
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
            explanation: `### 1. المقدمة وأهمية الموضوع
يسمع كل مبتدئ في تطوير المواقع مصطلحي Frontend (الواجهة الأمامية) وBackend (الواجهة الخلفية). فهم الفرق الدقيق بينهما يحدد كيفية توزيع المهام داخل المشروع البرمجي، وأين يجب وضع كل نوع من الشيفرات للحفاظ على سرعة الموقع وأمان البيانات.

### 2. المفاهيم الأساسية بالتفصيل
- موقع الويب (Website) وتطبيق الويب (Web Application): حزمة مترابطة من الملفات والموارد (صفحات، تنسيقات، نصوص برمجية، وبيانات) تُعرض للمستخدم عبر عنوان URL في المتصفح.
- الواجهة الأمامية (Frontend / Client-Side): كل ما يراه المستخدم ويتفاعل معه مباشرة داخل المتصفح. تُبنى بثلاث تقنيات أساسية:
  1. \`HTML\`: لبناء هيكل الصفحة وعناصرها (العناوين، الأزرار، النماذج، الجداول).
  2. \`CSS\`: لتنسيق المظهر البصري (الألوان، الخطوط، التخطيط، والتجاوب مع الشاشات).
  3. \`JavaScript\`: لإضافة التفاعل وتحديث العناصر وإرسال الطلبات في الخلفية.
- الواجهة الخلفية (Backend / Server-Side): الطبقة الخفية التي تعمل على الخادم وتتولى المعالجة الثقيلة والآمنة:
  1. منطق الأعمال (Business Logic): التحقق من الهوية، حساب النتائج، وتطبيق القواعد.
  2. قواعد البيانات (Database): حفظ واسترجاع وتحديث السجلات بشكل دائم.
  3. واجهات البرمجة (APIs): استقبال طلبات الواجهة الأمامية وإرجاع البيانات غالباً بصيغة JSON.

### 3. المصطلحات التقنية وترجمتها
- Frontend (الواجهة الأمامية): الجزء المرئي والتفاعلي من الموقع الذي يُنفّذ داخل متصفح المستخدم.
- Backend (الواجهة الخلفية): الجزء الذي يعمل على الخادم لمعالجة الطلبات وإدارة قواعد البيانات.
- API - Application Programming Interface (واجهة برمجة التطبيقات): قناة تواصل برمجية منظمة تسمح للواجهة الأمامية بطلب البيانات أو تنفيذ عمليات على الخادم.
- JSON - JavaScript Object Notation (تدوين كائنات جافاسكريبت): صيغة نصية خفيفة ومنظمة لتبادل البيانات بين الخادم والعميل على شكل أزواج \`"key": value\`.
- Database (قاعدة البيانات): نظام منظم لتخزين البيانات واسترجاعها بسرعة وأمان (مثل PostgreSQL أو MySQL أو MongoDB).

### 4. آلية العمل والتكامل بين الجانبين
1. يفتح المستخدم واجهة بوابة الطالب في المتصفح (Frontend HTML/CSS).
2. يضغط المستخدم على زر "جلب المقررات"، فتُرسل JavaScript طلباً إلى مسار الخادم مثل \`GET /api/v1/students/courses\`.
3. يستقبل الخادم (Backend) الطلب، يتحقق من صلاحية المستخدم، ثم يستعلم عن المقررات من قاعدة البيانات.
4. يحوّل الخادم النتيجة إلى صيغة \`JSON\` ويرسلها إلى المتصفح.
5. تستقبل الواجهة الأمامية بيانات الـ JSON وتحولها ديناميكياً إلى بطاقات HTML منسقة يراها الطالب.

### 5. أمثلة واقعية في تطوير المواقع
- متجر إلكتروني: قائمة المنتجات وأزرار سلة الشراء هي Frontend، بينما التحقق من المخزون ومعالجة الدفع وحفظ الطلب هي مسؤوليات Backend.
- منصة تعليمية: شاشة الدرس ومحرر الأكواد يظهران في Frontend، أما حفظ تقدم الطالب ودرجات الاختبارات فيتم على Backend.

### 6. استخدام المفهوم في المشاريع الحقيقية
تعتمد المشاريع الحديثة على فصل الواجهة عن الخادم (Decoupled Architecture)؛ حيث تُبنى الواجهة بإطار مثل React وتتصل بخادم Express/Node.js عبر REST API، مما يتيح استخدام نفس الخادم لخدمة موقع الويب وتطبيق الهاتف معاً.

### 7. الأخطاء الشائعة وكيفية تجنبها
- وضع أسرار أو مفاتيح API أو كلمات مرور في كود الـ Frontend: أي كود يُرسل للمتصفح يمكن لأي مستخدم قراءته عبر أدوات المطور، لذا يجب حفظ الأسرار دائماً في الـ Backend.
- الاعتماد على التحقق في الواجهة الأمامية فقط: التحقق في المتصفح يهدف لتحسين تجربة المستخدم، لكن التحقق الأمني الحقيقي يجب أن يتكرر في الخادم.

### 8. الربط مع الدروس السابقة واللاحقة
يبني هذا الدرس مباشرة على نموذج العميل والخادم من الدرس الأول، ويمهد لفهم كيف يتعامل المتصفح مع شجرة الـ DOM في الدرس الثالث، وكذلك المستويات اللاحقة الخاصة بـ HTML وCSS وJavaScript ثم Node.js وقواعد البيانات.`,
            practicalSteps: `1. عاين بطاقة "بوابة الطالب: تكامل الـ Frontend مع الـ Backend" في نافذة المعاينة.
2. اضغط زر "جلب بيانات المقررات (Fetch API Mock)" وراقب ظهور البطاقات من بيانات الخادم.
3. انتقل إلى تبويب "استجابة الخادم (Backend JSON)" لمشاهدة شكل البيانات الخام قبل رسمها.
4. أضف مقرراً جديداً إلى مصفوفة \`backendDatabase\` داخل ملف \`main.js\` ثم اضغط "تشغيل الكود".`,
            videoSearchQuery: 'الفرق بين Frontend و Backend تطوير الويب شرح مبسط',
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
            explanation: `### 1. المقدمة وأهمية الموضوع
يصل ملف HTML إلى متصفحك على هيئة مجرد سطور نصية، ومع ذلك تراه في لحظة على شكل صفحة متناسقة بألوان وخطوط وأزرار تفاعلية. كيف يحوّل المتصفح النص إلى رسوميات على الشاشة؟ فهم هذه الرحلة—المعروفة بمسار التصيير الحرج (Critical Rendering Path) وشجرة الـ DOM—يساعدك على كتابة صفحات سريعة التجاوب وتعديلها بسلاسة عبر JavaScript.

### 2. المفاهيم الأساسية بالتفصيل
- المتصفح ومحرك التصيير (Browser Rendering Engine): المكون البرمجي المسؤول عن قراءة أكواد HTML وCSS ورسمها على الشاشة (مثل محرك Blink في Chrome وEdge، ومحرك WebKit في Safari، ومحرك Gecko في Firefox).
- شجرة كائنات المستند (DOM - Document Object Model): تمثيل هرمي (شجري) داخل ذاكرة المتصفح لكل وسوم صفحة الـ HTML بحيث يصبح كل وسم أو نص عقدة (Node) يمكن لـ JavaScript الوصول إليها وتعديلها أو حذفها.
- شجرة الأنماط (CSSOM - CSS Object Model): بنية شجرية موازية يبنيها المتصفح من قواعد الـ CSS لحساب الألوان والأبعاد والخطوط الموروثة لكل عنصر.
- شجرة العرض (Render Tree): ناتج دمج الـ DOM والـ CSSOM معاً، وتشمل العناصر المرئية فقط (تُستثنى العناصر المخفية بـ \`display: none\` أو وسوم \`<head>\`).

### 3. المصطلحات التقنية وترجمتها
- Parsing (التحليل اللغوي): قراءة النص المصدري وتفكيكه إلى رموز (Tokens) ثم إلى عقد مفهومة للمتصفح.
- DOM - Document Object Model (نموذج كائن المستند): الواجهة الشجرية التي تمثل مستند HTML في الذاكرة.
- CSSOM - CSS Object Model (نموذج كائن الأنماط): التمثيل البنيوي لقواعد التنسيق CSS.
- Layout / Reflow (حساب التخطيط): مرحلة تحديد العرض والارتفاع والموقع الدقيق \`(x, y)\` لكل عنصر داخل نافذة العرض.
- Painting (الرسم): تلوين النصوص والحدود والظلال والصور على طبقات الشاشة وتحويلها إلى بكسلات (Rasterization).

### 4. آلية العمل: مراحل مسار التصيير الخمس
1. تحليل HTML وبناء الـ DOM: يقرأ المتصفح الملف بالبايتات ثم يحوّل الوسوم مثل \`<html>\` و\`<body>\` و\`<header>\` إلى عقد متفرعة (أب وابن).
2. تحليل CSS وبناء الـ CSSOM: يقرأ المتصفح ملفات التنسيق ليحدد القواعد المطبقة على كل عقدة.
3. تكوين شجرة العرض (Render Tree): يربط كل عقدة مرئية في الـ DOM بتنسيقاتها في الـ CSSOM.
4. التخطيط (Layout): يحسب الأبعاد الهندسية الدقيقة بناءً على مقاس الشاشة الحالية.
5. الرسم والتركيب (Painting & Compositing): يرسم الطبقات ويدمجها عبر بطاقة الرسوميات (GPU) لعرضها للمستخدم.

### 5. أمثلة واقعية في تطوير المواقع
- إضافة إشعار أو تعليق جديد في الصفحة دون تحديثها: تستخدم JavaScript دالة \`document.createElement()\` لإنشاء عقدة جديدة وإلحاقها بشجرة الـ DOM، فيعيد المتصفح تنفيذ التخطيط والرسم لتظهر فوراً.
- إخفاء قائمة جانبية: تغيير خاصية CSS للعقدة يحفّز المتصفح على تحديث شجرة العرض.

### 6. استخدام المفهوم في المشاريع الحقيقية
في التطبيقات التفاعلية الكبيرة، التعديل العشوائي المتكرر على الـ DOM قد يسبب بطء الصفحة بسبب تكرار عملية الـ Reflow. لذلك تجمع الشيفرات الاحترافية التعديلات معاً أو تستخدم أطر عمل مثل React التي تحسب التغييرات في نسخة افتراضية (Virtual DOM) قبل تحديث الشجرة الحقيقية.

### 7. الأخطاء الشائعة وكيفية تجنبها
- تشغيل كود JavaScript يبحث عن عنصر قبل اكتمال بناء الـ DOM: إذا وُضع وسم \`<script>\` في \`<head>\` بدون \`defer\`، فقد يفشل \`getElementById\` لأن العنصر لم يُبنَ بعد. الحل وضع السكربت قبل نهاية \`</body>\` أو استخدام \`defer\`.
- تعديل أبعاد عناصر كثيرة داخل حلقة تكرار واحدة مما يسبب Layout Thrashing (تخطيط متكرر يستهلك الأداء).

### 8. الربط مع الدروس السابقة واللاحقة
يوضّح هذا الدرس ما يحدث داخل جهاز العميل (Frontend) بعد استلام استجابة الخادم التي درسناها في الدرسين السابقين، ويُعد المدخل النظري المباشر لمستوى HTML ومستوى JavaScript الخاص بإدارة الـ DOM.`,
            practicalSteps: `1. عاين شجرة عناصر الـ DOM التفاعلية في نافذة المعاينة ولاحظ تفرع \`<head>\` و\`<body>\` تحت \`<html>\`.
2. اكتب اسم وسم جديد داخل حقل الإدخال (مثل \`<section>قسم الأخبار</section>\`) ثم اضغط "إضافة عقدة إلى شجرة الـ DOM".
3. راقب تحديث عداد العقد وظهور العقدة الجديدة في الشجرة وفي سجل الكونسول، وجرب تعديل الشيفرة في \`main.js\` ثم اضغط "تشغيل الكود".`,
            videoSearchQuery: 'كيف يعمل المتصفح Critical Rendering Path DOM شرح',
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
            explanation: `### 1. المقدمة وأهمية الموضوع
لكي يتفاهم المتصفح (العميل) مع أي خادم في العالم مهما اختلفت لغة برمجة الخادم، لا بد من لغة تخاطب قياسية موحدة. هذه اللغة هي بروتوكول HTTP. فهم أفعال الطلبات ورموز الاستجابة يمكّن المطور من بناء واجهات تتعامل بوضوح مع الخوادم وتشخيص أي خلل يظهر للمستخدم سواء كان بسبب رابط خاطئ أو عطل في الخادم.

### 2. المفاهيم الأساسية بالتفصيل
- بروتوكول HTTP و HTTPS: نظام قواعد لتبادل رسائل الطلب والاستجابة بين العميل والخادم. النسخة الآمنة \`HTTPS\` تضيف طبقة تشفير \`TLS/SSL\` لحماية البيانات المتبادلة من التجسس أو التعديل أثناء النقل.
- أفعال الطلبات (HTTP Methods): تحدد نوع العملية التي يريد العميل تنفيذها على المورد المطلوب في الخادم:
  1. \`GET\`: لطلب وقراءة البيانات فقط دون تغيير حالة الخادم.
  2. \`POST\`: لإرسال بيانات جديدة إلى الخادم لإنشاء سجل أو تنفيذ عملية (مثل تسجيل حساب).
  3. \`PUT / PATCH\`: لتحديث بيانات مورد موجود مسبقاً (كلياً بـ \`PUT\` أو جزئياً بـ \`PATCH\`).
  4. \`DELETE\`: لحذف مورد محدد من الخادم.
- ترويسات HTTP (Headers): بيانات وصفية تُرفق بالطلب أو الاستجابة لتوضيح نوع المحتوى \`Content-Type\`، التوثيق \`Authorization\`، وسياسة التخزين المؤقت \`Cache-Control\`.

### 3. المصطلحات التقنية وترجمتها
- HTTP - HyperText Transfer Protocol (بروتوكول نقل النص الفائق): البروتوكول الأساسي لتبادل البيانات على الويب.
- HTTPS (بروتوكول HTTP الآمن): نسخة مشفرة من HTTP تحمي الاتصال باستخدام شهادات SSL/TLS.
- Status Code (رمز الحالة): رقم مكوّن من 3 خانات يعيد الخادم به نتيجة معالجة الطلب.
- Endpoint (نقطة النهاية): مسار URL محدد على الخادم يستقبل طلبات معينة مثل \`/api/students/courses\`.
- Payload / Body (حمولة الرسالة): المحتوى الفعلي المرفق بالطلب أو الاستجابة مثل كائن JSON أو ملف HTML.

### 4. آلية العمل وتصنيفات رموز الحالة (Status Codes)
1. يرسل المتصفح سطر الطلب مثل: \`GET /api/students/courses HTTP/1.1\` مرفقاً بالترويسات.
2. يعالج الخادم الطلب ويرد برمز حالة يندرج تحت إحدى الفئات الخمس:
   - \`2xx\` (نجاح - Success): مثل \`200 OK\` (نجح الطلب) و\`201 Created\` (تم إنشاء المورد بنجاح).
   - \`3xx\` (إعادة توجيه - Redirection): مثل \`301 Moved Permanently\` لتوجيه المتصفح إلى رابط جديد.
   - \`4xx\` (خطأ من العميل - Client Error): مثل \`400 Bad Request\` (بيانات غير صالحة)، \`401 Unauthorized\` (يتطلب تسجيل دخول)، و\`404 Not Found\` (المسار غير موجود).
   - \`5xx\` (خطأ من الخادم - Server Error): مثل \`500 Internal Server Error\` (عطل برمجي داخل الخادم).

### 5. أمثلة واقعية في تطوير المواقع
- فتح صفحة مقالة: يرسل المتصفح طلب \`GET\`، فإذا وُجدت المقالة يعود الرمز \`200\`، وإن كُتب رابط خاطئ يعود الرمز \`404\`.
- إرسال نموذج "تواصل معنا": يرسل المتصفح طلب \`POST\` محمّلاً بالاسم والرسالة، وعند حفظها يرد الخادم بـ \`201 Created\`.

### 6. استخدام المفهوم في المشاريع الحقيقية
عند برمجة تطبيقات الويب باستخدام \`fetch()\` في JavaScript، يعتمد المبرمج على قراءة \`response.status\` و\`response.ok\`: فإذا كان الرمز ضمن \`200-299\` يعرض البيانات، وإذا كان \`401\` يوجّه المستخدم لصفحة الدخول، وإذا كان \`500\` يعرض رسالة تنبيه مناسبة دون انهيار الواجهة.

### 7. الأخطاء الشائعة وكيفية تجنبها
- استخدام طلب \`GET\` لإرسال كلمات مرور أو تنفيذ عمليات حذف أو تعديل: البيانات في \`GET\` تظهر في شريط العنوان URL وسجلات الخادم، لذا يجب استخدام \`POST\` أو \`DELETE\` للعمليات الحساسة والمعدّلة للبيانات.
- تجاهل التحقق من فئة الخطأ \`4xx\` مقابل \`5xx\`: إظهار "مشكلة في الاتصال" لكل الأخطاء يربك المستخدم؛ بل يجب التفريق بين البيانات الناقصة (400) والعطل الفني (500).

### 8. الربط مع الدروس السابقة واللاحقة
يُفصّل هذا الدرس آلية التواصل المذكورة في الدرس الأول (Request/Response)، ويُعد معرفة أساسية قبل تعلم تطوير الخوادم وواجهات REST API في المستوى الثامن (Node.js & Express).`,
            practicalSteps: `1. اختر الفعل (GET أو POST أو DELETE) ومسار الرابط من لوحة المحاكي، أو انقر أحد أزرار "سيناريوهات سريعة".
2. اضغط "إرسال الطلب ⚡" وراقب لون ورمز الاستجابة (200، 201، 404، 500) وترويسات \`Response Headers\`.
3. في ملف \`main.js\`، راجع الشروط البرمجية التي تولد كل رمز حالة وجرب إضافة حالة \`401 Unauthorized\` إذا احتوى الرابط على كلمة \`private\`.`,
            videoSearchQuery: 'شرح بروتوكول HTTP Methods و Status Codes للمبتدئين',
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
            explanation: `### 1. المقدمة وأهمية الموضوع
يحفظ البشر أسماء المواقع السهلة مثل \`npu.edu.sy\`، بينما لا تفهم أجهزة التوجيه على الإنترنت سوى العناوين الرقمية مثل \`194.126.15.42\`. إضافة إلى ذلك، يحتاج الموقع ليكون متاحاً للزوار طوال الوقت وبأعلى سرعة ممكنة بغض النظر عن بعدهم الجغرافي. هنا يظهر دور نظام أسماء النطاقات (DNS) والاستضافة السحابية (Cloud Hosting) وشبكات توصيل المحتوى (CDN).

### 2. المفاهيم الأساسية بالتفصيل
- نظام أسماء النطاقات (DNS - Domain Name System): البنية الموزعة التي تترجم أسماء النطاقات النصية إلى عناوين IP رقمية، ويُشبّه بدليل الهاتف العالمي للإنترنت.
- الاستضافة السحابية (Cloud Hosting): استئجار مساحة وموارد حوسبة (معالج، ذاكرة، تخزين) على خوادم متصلة بالإنترنت لحفظ ملفات الموقع وتشغيل خادمه وقواعد بياناته.
- شبكات توصيل المحتوى (CDN - Content Delivery Network): شبكة خوادم متوزعة في مدن ودول مختلفة (Edge Locations) تحتفظ بنسخة مخبأة من الملفات الثابتة (HTML, CSS, JS, الصور) لتسليمها من أقرب نقطة جغرافية للمستخدم.
- التخزين المؤقت (Caching): حفظ نسخة جاهزة من المورد في ذاكرة قريبة (المتصفح أو خادم الـ CDN) لتفادي إعادة إنشائه أو نقله من مسافة بعيدة في كل طلب.

### 3. المصطلحات التقنية وترجمتها
- DNS - Domain Name System (نظام أسماء النطاقات): نظام ترجمة النطاقات إلى عناوين IP.
- DNS Resolver (محلّل أسماء النطاقات): الخادم الوسيط (غالباً لدى مزود الإنترنت أو خدمات مثل 1.1.1.1 و8.8.8.8) الذي يتتبع الإجابة للمتصفح.
- TLD - Top-Level Domain (النطاق الأعلى): الجزء الأخير من النطاق مثل \`.com\` أو \`.edu\` أو \`.sy\`.
- A Record (سجل العنوان): سجل DNS يربط اسم النطاق مباشرة بعنوان IPv4 الخاص بالخادم.
- Origin Server (الخادم الأصلي): الخادم الأساسي الذي يستضيف النسخة الأصلية من الموقع.
- CDN Edge Server (خادم الحافة): خادم قريب جغرافياً من المستخدم يقدّم الملفات المخزنة مؤقتاً بسرعة فائقة.

### 4. آلية العمل: رحلة استعلام الـ DNS والـ CDN
1. يفحص المتصفح ونظام التشغيل ذاكرة التخزين المؤقت المحلية (Local Cache) لمعرفة إن كان عنوان النطاق محفوظاً مسبقاً.
2. إذا لم يُعثر عليه، يسأل المتصفح خادم \`DNS Resolver\`.
3. يتواصل الـ Resolver مع خوادم الجذر (\`Root Nameservers\`) التي تدله على خادم النطاق الأعلى (\`TLD Server\`) المسؤول عن \`.edu\` أو \`.sy\`.
4. يوجهه خادم الـ TLD إلى الخادم المعتمد للنطاق (\`Authoritative DNS Server\`) الذي يعيد عنوان الـ IP النهائي.
5. عند تفعيل \`CDN\`، يوجه الـ DNS المستخدم نحو أقرب خادم حافة (Edge) مما يقلص زمن الاستجابة بشكل ملموس.

### 5. أمثلة واقعية في تطوير المواقع
- منصة تعليمية تستضيف صور المقررات وملفات JS/CSS عبر CDN: يفتح الطالب الموقع في بلده فتصله الملفات خلال 12ms من خادم إقليمي قريب بدلاً من انتظار استجابة خادم رئيسي عبر القارات.
- ربط اسم نطاق مخصص بموقع منشور: عند نشر مشروعك تشتري نطاقاً وتضيف سجل \`A\` أو \`CNAME\` ليشير النطاق إلى استضافتك السحابية.

### 6. استخدام المفهوم في المشاريع الحقيقية
في الإنتاج، تُنشر الواجهات الأمامية عادة على منصات تدعم CDN مدمجاً (مثل Cloudflare وVercel وNetlify)، بينما يُشغَّل الخادم الرئيسي على استضافة سحابية قريبة من قاعدة البيانات لتقليل زمن الاستعلام، مع ضبط \`TTL\` (مدة الصلاحية) لسجلات الـ DNS.

### 7. الأخطاء الشائعة وكيفية تجنبها
- الاعتقاد أن تغيير سجلات DNS يظهر لجميع المستخدمين في نفس اللحظة: التغييرات تخضع لمدة التخزين المؤقت (\`TTL\`) وقد تستغرق من دقائق إلى ساعات لتحديثها عالمياً (DNS Propagation).
- التخزين المؤقت المفرط لبيانات المستخدم الخاصة داخل الـ CDN: يجب أن تُخزن الملفات العامة فقط في الـ CDN، وليس بيانات الحسابات الشخصية.

### 8. الربط مع الدروس السابقة واللاحقة
يُكمل هذا الدرس رحلة الطلب عبر الشبكة من الدرس الأول والرابع؛ فقبل أن يرسل المتصفح طلب \`HTTP\` إلى \`Server IP\`، يمر أولاً بمرحلة استعلام الـ \`DNS\` لمعرفة ذلك العنوان، كما يرتبط مباشرة بدرس النشر السحابي في المستوى العاشر.`,
            practicalSteps: `1. اكتب اسم نطاق مثل \`npu.edu.sy\` في خانة البحث داخل المحاكي وانقر "بدء استعلام DNS".
2. راقب تسلسل إضاءة الخوادم الثلاثة: \`Root Server\` ثم \`TLD Server\` ثم \`Authoritative DNS\` وزمن الاستجابة الناتج.
3. فعّل خيار "تفعيل تسريع CDN ⚡" وأعد الاستعلام، ولاحظ انخفاض الزمن إلى \`12 ms\` بفضل الـ Edge Cache، ثم راجع \`main.js\` لتفهم الشرط البرمجي.`,
            videoSearchQuery: 'شرح DNS و CDN والاستضافة السحابية للمبتدئين بالعربي',
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
            explanation: `### 1. المقدمة وأهمية الموضوع
يواجه كل مبرمج أخطاء في التصميم أو السلوك البرمجي أثناء تطوير المواقع. بدلاً من التخمين العشوائي، يوفر كل متصفح حديث مجموعة أدوات مدمجة تُسمى أدوات المطور (Browser DevTools). إتقان هذه الأدوات يختصر ساعات طويلة من البحث عن الأخطاء، ويمكّنك من معاينة التعديلات حياً قبل كتابتها في ملفاتك.

### 2. المفاهيم الأساسية بالتفصيل
- فتح أدوات المطور: تُفتح في المتصفح بضغط مفتاح \`F12\` أو النقر بزر الفأرة الأيمن واختيار "فحص" (\`Inspect\`).
- تبويب العناصر (Elements / Inspector): يعرض شجرة الـ \`DOM\` الحية للصفحة، ويسمح بتحديد أي عنصر ومعاينة خصائص الـ CSS المطبقة عليه وتعديل قيم \`Box Model\` مباشرة.
- تبويب وحدة التحكم (Console): بيئة تفاعلية تعرض رسائل \`JavaScript\`، والتحذيرات، والأخطاء الفورية مع رقم السطر، كما تتيح تنفيذ أوامر JS مباشرة على الصفحة المفتوحة.
- تبويب الشبكة (Network): يسجل كل طلبات \`HTTP\` الصادرة من الصفحة (ملفات، صور، APIs) مع رموز الحالة وحجم كل مورد وزمن تحميله.

### 3. المصطلحات التقنية وترجمتها
- Browser DevTools (أدوات مطور المتصفح): حزمة أدوات الفحص والتنقيح المدمجة في المتصفح.
- Element Inspector (فاحص العناصر): أداة تحديد عناصر الواجهة لرؤية وسمها وتنسيقاتها الحية.
- Box Model (نموذج الصندوق): التمثيل الهندسي لكل عنصر HTML ويتكون من أربع طبقات من الداخل للخارج: المحتوى \`Content\`، الحشوة \`Padding\`، الإطار \`Border\`، والهامش الخارجي \`Margin\`.
- Console API (واجهة وحدة التحكم): دوال مثل \`console.log()\` و\`console.warn()\` و\`console.error()\` لتتبع سير التنفيذ.
- Debugging (تنقيح الأخطاء): عملية اكتشاف العيوب البرمجية (Bugs) وتحليل سببها وإصلاحها.

### 4. آلية العمل: كيف تستخدم DevTools في الفحص؟
1. عند فحص عنصر في تبويب Elements، يظهر المخطط الرباعي لنموذج الصندوق بحيث تعرف بالضبط المسافة الناتجة عن \`padding\` (الداخلية) مقابل \`margin\` (الخارجية).
2. عند حدوث خطأ في JavaScript مثل \`TypeError\` أو \`ReferenceError\`، يلتقط المتصفح الاستثناء ويطبعه باللون الأحمر في \`Console\` محدداً اسم الملف ورقم السطر.
3. التعديلات التي تجريها داخل DevTools مؤقتة في ذاكرة المتصفح ولا تغير ملفاتك الأصلية، لذا بعد التأكد من الحل تنقله إلى الكود المصدري.

### 5. أمثلة واقعية في تطوير المواقع
- عنصر زر يظهر متلاصقاً مع النص: تفتحه في Elements وتجرب زيادة \`padding\` و\`margin\` بصرياً حتى تصل للمسافة المتوازنة، ثم تنسخ القيم لملف \`style.css\`.
- زر لا يستجيب عند النقر: تفتح \`Console\` فتجد رسالة \`TypeError: Cannot read properties of null\` مما ينبهك أن \`id\` العنصر في JS لا يطابق المكتوب في HTML.

### 6. استخدام المفهوم في المشاريع الحقيقية
يستخدم المهندسون تبويب \`Network\` لمراقبة بطء الواجهات أو فشل طلبات الـ API (مثل خطأ 401 أو 404)، كما يستخدمون وضع الجهاز (\`Device Toolbar\`) لمحاكاة شاشات الهواتف أثناء تطوير التصميم المتجاوب.

### 7. الأخطاء الشائعة وكيفية تجنبها
- الاعتماد على \`alert()\` لفحص قيم المتغيرات: أسلوب مزعج يوقف تنفيذ الصفحة؛ الأفضل استخدام \`console.log()\` أو نقاط التوقف (Breakpoints).
- نسيان نقل التعديلات من المتصفح إلى المحرر: تحديث الصفحة (Refresh) يمسح كل تعديلات DevTools، لذا احتفظ بالنسخة النهائية في ملفات مشروعك.
- ترك رسائل خطأ حمراء في الكونسول دون قراءتها ظناً أنها غير مؤثرة.

### 8. الربط مع الدروس السابقة واللاحقة
يجمع هذا الدرس مفاهيم شجرة الـ \`DOM\` (الدرس 3) وطلبات \`HTTP\` (الدرس 4) عملياً داخل أداة واحدة، وسيرافقك استخدام الكونسول وفاحص الصندوق في جميع دروس HTML وCSS وJavaScript وReact القادمة.`,
            practicalSteps: `1. حرك منزلقات الحشوة الداخلية (\`Padding\`) والهامش الخارجي (\`Margin\`) داخل المحاكي ولاحظ كيف تتغير أبعاد بطاقة الاختبار مباشرة مثل أداة Inspect.
2. اضغط أزرار \`console.log()\` و\`console.warn()\` و\`console.error()\` ثم افتح لوحة "الكونسول" في أسفل المحرر لمشاهدة تصنيف الرسائل.
3. اضغط زر "إصلاح خطأ برمجي" وراجع سجل الكونسول، ثم جرب إضافة رسالة \`console.log\` مخصصة في \`main.js\` وتشغيل الكود.`,
            videoSearchQuery: 'شرح Browser DevTools فحص العناصر والكونسول للمبتدئين',
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
            explanation: `### 1. المقدمة وأهمية الموضوع
لغة \`HTML\` هي اللغة البنائية التي تحدد هيكل كل صفحة ويب تراها على الإنترنت. قبل إضافة أي لون أو حركة، يجب أن يفهم المتصفح ومحركات البحث وقارئات الشاشة معنى كل جزء من الصفحة: أين العنوان؟ أين قائمة التنقل؟ وأين المحتوى الأساسي؟ استخدام العناصر الدلالية في \`HTML5\` يحقق بنية منظمة وواضحة للآلات والبشر معاً.

### 2. المفاهيم الأساسية بالتفصيل
- مستند HTML5 القياسي: يبدأ بتصريح \`<!DOCTYPE html>\` لتعريف المتصفح بإصدار HTML الحديث، ثم العنصر الجذري \`<html lang="ar" dir="rtl">\` لتحديد اللغة واتجاه النص، وينقسم داخله إلى قسمين:
  1. \`<head>\`: يحتوي على بيانات وصفية لا تظهر في جسم الصفحة مثل الترميز \`<meta charset="UTF-8">\` وعنوان التبويب \`<title>\`.
  2. \`<body>\`: يحتوي على كل ما يراه المستخدم في الصفحة.
- الوسوم الدلالية (Semantic Tags): وسوم تصف معنى ودور المحتوى بداخلها بدلاً من مجرد كونه حاوية صماء مثل \`<div>\`:
  - \`<header>\`: يمثل الترويسة العليا للصفحة أو للقسم (الشعار، العنوان الرئيسي).
  - \`<nav>\`: مخصص لروابط التنقل الرئيسية داخل الموقع.
  - \`<main>\`: يحمل المحتوى الأساسي الفريد للصفحة (ويكون واحداً فقط في الصفحة).
  - \`<section>\` و \`<article>\`: \`<section>\` لتجميع فقرات ذات موضوع مشترك، و\`<article>\` لمحتوى مستقل بذاته كالخبر أو المقال أو التدوينة.
  - \`<footer>\`: تذييل الصفحة ويضم حقوق النشر ومعلومات التواصل.

### 3. المصطلحات التقنية وترجمتها
- HTML - HyperText Markup Language (لغة توصيف النص الفائق): اللغة المعيارية لوصف بنية صفحات الويب.
- Semantic HTML (HTML الدلالي): كتابة وسوم تعبّر عن وظيفة المحتوى لا عن شكله فقط.
- Tag / Element (الوسم / العنصر): الوحدة البنائية في HTML وتتكون غالباً من وسم فتح مثل \`<header>\` ومحتوى ووسم إغلاق \`</header>\`.
- Attribute (السمة / الخاصية): معلومة إضافية داخل وسم الفتح مثل \`lang="ar"\` أو \`href="#about"\`.
- Accessibility - a11y (إمكانية الوصول): تصميم الموقع ليكون قابلاً للاستخدام بسهولة من قبل جميع المستخدمين بمن فيهم مستخدمو قارئات الشاشة ولوحة المفاتيح.
- SEO - Search Engine Optimization (تحسين محركات البحث): ممارسات تساعد محركات البحث على فهم الصفحة وفهرستها بدقة.

### 4. آلية العمل في المتصفح ومحركات البحث
عندما يحلل المتصفح وسماً مثل \`<nav>\` أو \`<main>\`، يبني شجرة الـ DOM متضمنةً أدواراً دلالية (Landmarks). تستفيد برامج قراءة الشاشة (مثل NVDA وVoiceOver) من هذه المعالم لتمكين المستخدم من القفز مباشرة إلى المحتوى الرئيسي \`<main>\` أو شريط التنقل \`<nav>\`، بينما تفهم محركات البحث أهمية العنوان \`<h1>\` والمقال \`<article>\` عند ترتيب نتائج البحث.

### 5. أمثلة واقعية في تطوير المواقع
- صفحة بوابة جامعية: تضم \`<header>\` لاسم الجامعة، \`<nav>\` لروابط المقررات والخطة الدراسية، \`<main>\` لعرض المسار التعليمي داخل \`<article>\` و\`<section>\`، و\`<footer>\` لحقوق النشر.
- مدونة تقنية: كل تدوينة توضع داخل \`<article>\` مستقلة وتنقل المقالات داخل \`<nav>\`.

### 6. استخدام المفهوم في المشاريع الحقيقية
في مشاريع الواجهات الحديثة (حتى مع أطر العمل مثل React)، يلتزم المهندسون بإخراج DOM دلالي نظيف: استخدام \`<button>\` للأزرار التفاعلية، \`<a>\` للروابط، وعنوان رئيسي \`<h1>\` واحد متسلسل مع \`<h2>\` و\`<h3>\` دون تخطي مستويات، لضمان أعلى تقييم في فحوصات الجودة مثل Google Lighthouse.

### 7. الأخطاء الشائعة وكيفية تجنبها
- استخدام \`<div>\` و\`<span>\` لكل شيء (Div Soup): يصعّب صيانة الكود ويضعف إمكانية الوصول؛ استبدلها بالوسوم الدلالية المناسبة.
- استخدام \`<div>\` بدلاً من \`<button>\` للأزرار أو \`<h1>\` لمجرد تكبير الخط: الحجم يُضبط عبر CSS، أما اختيار الوسم فيجب أن يعتمد على المعنى.
- تكرار وسم \`<main>\` أكثر من مرة في نفس الصفحة أو نسيان إغلاق أحد الوسوم.

### 8. الربط مع الدروس السابقة واللاحقة
يُطبق هذا الدرس ما تعلمناه في المستوى الأول عن بناء شجرة الـ \`DOM\` عند قراءة المتصفح لملف HTML، ويمهد مباشرة للمستوى الثالث (CSS) الذي ينسّق هذه العناصر الدلالية ويضبط تخطيطها.`,
            practicalSteps: `1. افحص ملف \`index.html\` في المحرر وتعرّف على ترتيب الوسوم الدلالية: \`<header>\` ثم \`<nav>\` ثم \`<main>\` ثم \`<footer>\`.
2. أضف داخل وسم \`<main>\` عنصر \`<section>\` جديداً يحتوي على عنوان \`<h3>قائمة المقررات</h3>\` وقائمة نقطية \`<ul>\` تضم عناصر \`<li>\` للمستويات الأولى.
3. اضغط زر "تشغيل الكود" وتحقق من ظهور القسم الجديد بالتنسيق الملائم في المعاينة الحية.`,
            videoSearchQuery: 'شرح Semantic HTML5 header nav main footer للمبتدئين',
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
            explanation: `### 1. المقدمة وأهمية الموضوع
بعد بناء الهيكل الدلالي بـ HTML، تبقى الصفحة عمودية بسيطة بدون هوية بصرية أو توزيع متوازن للمساحات. هنا تأتي لغة \`CSS\`، وبشكل خاص نظام التخطيط المرن \`Flexbox\` الذي يُعد من أهم أدوات التنسيق الحديثة لترتيب البطاقات والأزرار وأشرطة التنقل في صفوف أو أعمدة متناسقة دون تعقيد الحسابات اليدوية.

### 2. المفاهيم الأساسية بالتفصيل
- الحاوية المرنة وعناصرها (Flex Container & Flex Items): عند تطبيق \`display: flex;\` على عنصر أب، يصبح حاوية مرنة، وتصبح أبناؤه المباشرون عناصر مرنة تُرتب وفق محورين:
  1. المحور الرئيسي (Main Axis): يكون أفقياً افتراضياً (\`flex-direction: row\`) أو عمودياً (\`column\`).
  2. المحور المتقاطع (Cross Axis): العمودي على المحور الرئيسي.
- أهم خصائص الحاوية (\`Container Properties\`):
  - \`justify-content\`: تتحكم في توزيع المسافات ومحاذاة العناصر على المحور الرئيسي مثل \`center\` و\`space-between\` و\`space-around\`.
  - \`align-items\`: تحاذي العناصر على المحور المتقاطع مثل \`center\` أو \`stretch\` (لتوحيد ارتفاع البطاقات تلقائياً).
  - \`flex-wrap: wrap;\`: تسمح بنزول العناصر إلى سطر جديد عند ضيق المساحة بدلاً من انضغاطها أو خروجها من الشاشة.
  - \`gap\`: تحدد مسافة فراغ منتظمة بين العناصر فقط دون أطراف الحاوية.
- خصائص العناصر (\`Item Properties\`): مثل \`flex: 1 1 260px;\` التي تسمح للبطاقة بالتمدد (\`grow\`) والتقلص (\`shrink\`) انطلاقاً من عرض أساسي قدره \`260px\`.

### 3. المصطلحات التقنية وترجمتها
- CSS - Cascading Style Sheets (صفحات الأنماط الانسيابية): اللغة المسؤولة عن المظهر البصري والتخطيط لصفحات الويب.
- Flexbox - Flexible Box Layout (تخطيط الصندوق المرن): نظام توزيع أحادي البُعد للمحاذاة وتوزيع المساحات.
- CSS Variables (متغيرات CSS): قيم قابلة لإعادة الاستخدام تُعرّف داخل \`:root\` مثل \`--primary-green: #176B45;\` لتوحيد ألوان المشروع.
- Transition (الانتقال السلس): خاصية تنشئ حركة ناعمة عند تغير حالة العنصر مثل وضع مؤشر الفأرة (\`:hover\`).

### 4. آلية العمل وحساب المساحات في Flexbox
1. يحسب المتصفح أولاً العرض المتاح داخل الحاوية \`.cards-container\`.
2. يفحص حجم كل بطاقة (\`flex-basis: 260px\`) ويضيف قيم \`gap\` بينها.
3. إذا كانت المساحة كافية، يضع البطاقات في نفس الصف؛ وإذا ضاقت الشاشة وكان \`flex-wrap: wrap\` مفعّلاً، تنتقل البطاقة الزائدة تلقائياً للسطر التالي.
4. تتقاسم البطاقات المساحة الإضافية بالتساوي بفضل معامل التمدد \`flex-grow: 1\` فتبقى الصفوف متوازنة.

### 5. أمثلة واقعية في تطوير المواقع
- شريط التنقل العلوي (Navbar): وضع الشعار على يمين الشريط وروابط القائمة في الوسط وأزرار الدخول على اليسار عبر \`display: flex; justify-content: space-between; align-items: center;\`.
- شبكة بطاقات الميزات أو الخدمات: عرض 3 بطاقات متجاورة على الحاسوب تلتف تلقائياً إلى بطاقتين أو بطاقة واحدة عند تصغير النافذة.

### 6. استخدام المفهوم في المشاريع الحقيقية
تُبنى مكونات الواجهة في المكتبات والأطر الحديثة (مثل Tailwind CSS وBootstrap) في جوهرها فوق قواعد Flexbox في توزيع الأشرطة والأزرار والبطاقات، ودمجها مع متغيرات CSS لتسهيل تغيير الهوية البصرية للمنصة من مكان واحد.

### 7. الأخطاء الشائعة وكيفية تجنبها
- نسيان \`flex-wrap: wrap;\` عند عرض عدة بطاقات: يؤدي إلى خروج البطاقات عن الشاشة في الهواتف.
- تطبيق خصائص Flexbox مثل \`justify-content\` على العنصر الابن بدلاً من الحاوية الأب (\`display: flex\`).
- استخدام هوامش (\`margin\`) كبيرة للتباعد بين البطاقات بدلاً من \`gap\`، مما يسبب فراغات غير متناظرة عند التفاف السطر.

### 8. الربط مع الدروس السابقة واللاحقة
يُنسّق هذا الدرس العناصر الدلالية التي أنشأناها في درس \`HTML5\`، كما يُمهّد مباشرة لدرس التصميم المتجاوب (\`Responsive Design\`) في المستوى الخامس لتطويع التخطيط عبر مختلف مقاسات الشاشات.`,
            practicalSteps: `1. افحص ملف \`style.css\` في المحرر ولاحظ كيف تضبط \`.cards-container\` توزيع البطاقات باستخدام \`display: flex\` و\`flex-wrap: wrap\` و\`gap: 20px\`.
2. أضف قاعدة \`.btn:hover\` في ملف \`style.css\` لتغيير لون الخلفية أو إضافة تدرج لوني عند تمرير مؤشر الفأرة على الزر.
3. اضغط "تشغيل الكود" وجرّب التبديل بين مقاسات المعاينة (حاسوب وهاتف) لتشاهد التفاف البطاقات تلقائياً.`,
            videoSearchQuery: 'شرح CSS Flexbox تصميم البطاقات للمبتدئين بالعربي',
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
            explanation: `### 1. المقدمة وأهمية الموضوع
تمنح \`HTML\` الموقع هيكله، وتمنحه \`CSS\` جماله البصري، لكن الموقع يظل ساكناً لا يتفاعل مع مدخلات المستخدم إلا بإضافة \`JavaScript\`. بفضل \`JavaScript\` يستجيب الموقع للنقرات والكتابة في الحقول، ويُحدّث أجزاءً من الصفحة في الوقت الفعلي دون الحاجة لإعادة تحميل المتصفح بالكامل.

### 2. المفاهيم الأساسية بالتفصيل
- البرمجة الموجهة بالأحداث (Event-Driven Programming): تنفيذ دوال برمجية عند وقوع حدث معين من المستخدم أو المتصفح مثل النقر (\`click\`) أو الإدخال (\`input\`) أو إرسال نموذج (\`submit\`).
- اختيار العناصر من الـ DOM: ربط كود JavaScript بعناصر الصفحة عبر:
  - \`document.getElementById('id')\`: للوصول السريع لعنصر يحمل معرّفاً فريداً.
  - \`document.querySelector()\` و\`querySelectorAll()\`: للوصول لعنصر أو قائمة عناصر باستخدام محددات CSS.
- الإنشاء والتعديل الديناميكي للعقد:
  - \`document.createElement('li')\`: إنشاء عنصر جديد في الذاكرة.
  - \`element.textContent\`: تعيين النص بأمان (يمنع حقن أكواد HTML ضارة مقارنة بـ \`innerHTML\`).
  - \`parent.appendChild(child)\`: إدراج العنصر الجديد داخل شجرة الـ DOM ليظهر على الشاشة.
  - \`element.classList.toggle('done')\`: تبديل صنف CSS لإظهار حالة الإنجاز أو إزالتها.

### 3. المصطلحات التقنية وترجمتها
- DOM API (واجهة برمجة نموذج المستند): مجموعة الدوال والكائنات التي يوفّرها المتصفح لتتحكم JavaScript بعناصر الصفحة.
- Event Listener (مستمع الحدث): آلية تراقب وقوع حدث معين على عنصر وتنفذ دالة استجابة (\`Callback Function\`) فور حدوثه.
- Callback Function (دالة الاستدعاء): دالة تُمرَّر كمعامل لدالة أخرى مثل \`addEventListener\` لتُنَفّذ لاحقاً عند الحدث.
- State Mutation / DOM Update (تحديث الحالة والشجرة): تعديل النصوص أو العناصر أو الفئات في الصفحة استجابةً لتفاعل المستخدم.

### 4. آلية العمل في تطبيق إدارة المهام
1. يقرأ السكربت مراجع العناصر الموجودة في الصفحة (\`taskInput\`، \`addBtn\`، \`taskList\`، \`taskCount\`).
2. يربط زر الإضافة بدالة استماع لحدث \`click\`.
3. عند نقر المستخدم، تقرأ الدالة نص حقل الإدخال وتزيل الفراغات الزائدة عبر \`input.value.trim()\`, وتتحقق من عدم فراغه.
4. تنشئ عنصر \`<li>\` جديداً وتضبط نصه وتضيف له مستمع نقر لتبديل الصنف \`done\`.
5. تُلحق العنصر بقائمة \`<ul>\`، ثم تُفرّغ حقل الإدخال وتُعيد حساب عداد المهام وتحديثه فوراً.

### 5. أمثلة واقعية في تطوير المواقع
- إضافة منتج إلى سلة المشتريات وتحديث رقم العداد في الأعلى مباشرة.
- فحص صحة البريد الإلكتروني أو طول كلمة المرور أثناء الكتابة في نموذج التسجيل وإظهار تنبيه فوري للمستخدم.

### 6. استخدام المفهوم في المشاريع الحقيقية
تُعد معالجة الأحداث وتحديث الـ DOM الأساس الذي بنيت فوقه كل مكتبات الواجهات الحديثة مثل React وVue. كما تعتمد المشاريع الواقعية على تقنية تفويض الأحداث (\`Event Delegation\`) عبر ربط مستمع واحد بالعنصر الأب عندما تكون القوائم كبيرة جداً لتقليل استهلاك الذاكرة.

### 7. الأخطاء الشائعة وكيفية تجنبها
- استخدام \`innerHTML\` مع نصوص أدخلها المستخدم مباشرة: قد يفتح ثغرة \`XSS\` (تنفيذ سكربتات ضارة)؛ استخدم \`textContent\` دائماً عند عرض نصوص المستخدم.
- عدم التحقق من القيم الفارغة قبل الإضافة: يضيف عناصر فارغة للقائمة؛ لذا شرط \`if (!text) return;\` ضروري.
- ربط مستمع الحدث بعنصر غير موجود (\`null\`) بسبب خطأ في كتابة الـ \`id\`.

### 8. الربط مع الدروس السابقة واللاحقة
يُطبّق هذا الدرس عملياً مفهوم شجرة الـ \`DOM\` من المستوى الأول على عناصر \`HTML\` وتنسيقات \`CSS\` من المستويين الثاني والثالث، ويهيّئك لفهم كيف تدير \`React.js\` تحديثات الواجهة تلقائياً عبر الحالة (\`useState\`) في المستوى السابع.`,
            practicalSteps: `1. اكتب اسم مهمة دراسية في حقل الإدخال داخل شاشة المعاينة واضغط "إضافة مهمة".
2. انقر على أي مهمة في القائمة لتجربة تبديل الصنف \`done\` وظهور خط الشطب عليها.
3. في ملف \`main.js\`، عدّل شيفرة الحدث أو أضف مستمعاً لمفتاح \`Enter\` على حقل الإدخال، وأضف عداداً للمهام المكتملة فقط ثم اضغط "تشغيل الكود".`,
            videoSearchQuery: 'شرح JavaScript DOM Manipulation و addEventListener للمبتدئين',
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
            explanation: `### 1. المقدمة وأهمية الموضوع
يفتح المستخدمون مواقع الويب اليوم من شاشات متباينة جداً: هواتف ذكية بعرض \`375px\`، أجهزة لوحية بعرض \`768px\`، وحواسيب محمولة ومكتبية تتجاوز \`1280px\`. إذا صُمّم الموقع بمقاسات ثابتة، فسيظهر متداخلاً أو صغيراً جداً على الهاتف. التصميم المتجاوب (\`Responsive Web Design\`) يضمن تكيف التخطيط والخطوط والصور تلقائياً لتقديم تجربة قراءة وتفاعل مريحة على كل جهاز.

### 2. المفاهيم الأساسية بالتفصيل
- منهجية الهاتف أولاً (Mobile-First Approach): البدء بكتابة تنسيقات CSS للشاشات الصغيرة أولاً بوصفها القاعدة الافتراضية (مثل عرض البطاقات في عمود واحد \`grid-template-columns: 1fr;\`)، ثم توسيع التخطيط تدريجياً للشاشات الأكبر باستخدام \`min-width\`.
- استعلامات الوسائط (Media Queries): قواعد شرطية في CSS مثل \`@media (min-width: 600px) { ... }\` تُفعَّل فقط عندما يتحقق شرط عرض الشاشة أو نوع الجهاز.
- التخطيط الشبكي المرن (CSS Grid): نظام تخطيط ثنائي الأبعاد (صفوف وأعمدة) يتكامل بقوة مع التصميم المتجاوب عبر وحدات مرنة مثل \`fr\` (Fraction).
- وسم نافذة العرض (\`meta viewport\`): وسم \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\` داخل \`<head>\` يمنع الهواتف من تصغير صفحة الحاسوب ويطابق العرض مع مقاس الشاشة الحقيقي.

### 3. المصطلحات التقنية وترجمتها
- Responsive Web Design (تصميم الويب المتجاوب): أسلوب تصميم يجعل الصفحة تتكيف تلقائياً مع عرض وارتفاع أي شاشة.
- Mobile-First (الهاتف أولاً): استراتيجية تبدأ بتصميم نسخة الجوال البسيطة ثم إضافة التوسعات للشاشات الأكبر.
- Media Query (استعلام الوسائط): قاعدة CSS تطبق أنماطاً محددة عند تحقق شرط مثل عرض الشاشة.
- Breakpoint (نقطة التوقف): قيمة العرض التي يتغير عندها التخطيط، ومن أشهر النقاط القياسية \`640px\` و\`768px\` و\`1024px\` و\`1280px\`.
- Viewport (نافذة العرض): المساحة المرئية الفعلية التي تعرض الصفحة داخل نافذة المتصفح.

### 4. آلية العمل خطوة بخطوة
1. يقرأ المتصفح وسم \`viewport\` ليحدد العرض الحقيقي لجهاز المستخدم.
2. يطبق القواعد الأساسية لـ \`.responsive-layout\` بحيث تُرتب البطاقات في عمود واحد (\`1fr\`).
3. يتحقق المتصفح باستمرار من عرض النافذة: إذا وصل العرض إلى \`600px\` فأكثر، يتفعل استعلام \`@media (min-width: 600px)\`.
4. يُستبدل \`grid-template-columns: 1fr\` بـ \`repeat(3, 1fr)\` لتتوزع البطاقات في 3 أعمدة متساوية فوراً دون إعادة تحميل.

### 5. أمثلة واقعية في تطوير المواقع
- صفحات عرض المنتجات أو المقررات: عمود واحد على الهاتف لتسهيل التمرير بالإبهام، وعمودان على التابلت، و3 أو 4 أعمدة على سطح المكتب.
- القوائم العلوية: تتحول من روابط أفقية على الحاسوب إلى قائمة مطوية (Hamburger Menu) على الهاتف.

### 6. استخدام المفهوم في المشاريع الحقيقية
تُعرّف أطر CSS الحديثة مثل Tailwind breakpoints جاهزة (\`sm:\`, \`md:\`, \`lg:\`, \`xl:\`) مبنية كلها على منطق Mobile-First و\`min-width\`. كما يُنصح باستخدام \`max-width: 100%\` للصور لمنع تجاوزها حدود الشاشة.

### 7. الأخطاء الشائعة وكيفية تجنبها
- استخدام عروض ثابتة بالبكسل مثل \`width: 900px;\` للحاويات الرئيسية: يسبب شريط تمرير أفقي مزعجاً على الهاتف؛ الحل استخدام \`max-width: 900px; width: 100%;\`.
- نسيان وسم \`meta viewport\` مما يعطل عمل الـ Media Queries على الأجهزة المحمولة الحقيقية.
- الإفراط في إنشاء عشرات نقاط التوقف بدلاً من الاعتماد على وحدات مرنة مثل \`auto-fit\` و\`minmax()\`.

### 8. الربط مع الدروس السابقة واللاحقة
يبني هذا الدرس مباشرة على مهارات التنسيق بـ \`CSS\` من المستوى الثالث، وستطبق هذه القواعد نفسها لاحقاً عند تصميم مكونات \`React\` ولوحة المشروع النهائي الشامل.`,
            practicalSteps: `1. افحص ملف \`style.css\` ولاحظ أن التخطيط الافتراضي يضع عموداً واحداً (\`1fr\`) بينما يحوّله استعلام \`@media (min-width: 600px)\` إلى 3 أعمدة.
2. استخدم أزرار المقاسات في أعلى نافذة المعاينة للتبديل بين شاشة "هاتف ذكي (375px)" و"شاشة حاسوب" وشاهد تحوّل الأعمدة لحظياً.
3. أضف نقطة توقف جديدة (مثلاً \`@media (min-width: 768px)\`) أو عدّل لون الخلفية عند الشاشات الصغيرة ثم اضغط "تشغيل الكود".`,
            videoSearchQuery: 'شرح Responsive Design و Media Queries في CSS للمبتدئين',
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
            explanation: `### 1. المقدمة وأهمية الموضوع
تخيل أنك تعمل على مشروع موقع ويب، ثم عدّلت ملفاً وتعطّل الموقع أو فقدت كوداً كتبته بالأمس، أو احتاج ثلاثة مطورين للعمل على نفس المشروع في وقت واحد دون أن يمسح أحدهم عمل الآخر. هنا يأتي نظام التحكم في الإصدارات \`Git\` ومنصة استضافة الأكواد \`GitHub\`، وهما مهارتان أساسيتان في كل شركة وفريق برمجي.

### 2. المفاهيم الأساسية بالتفصيل
- نظام التحكم بالإصدارات (VCS - Version Control System): برنامج يسجل تاريخ كل تغيير يطرأ على ملفات المشروع، مع حفظ من أجرى التعديل ومتى ولماذا، مع إمكانية العودة لأي نسخة سابقة في أي لحظة.
- المراحل الثلاث في \`Git\`:
  1. مجلد العمل (\`Working Directory\`): ملفات مشروعك الحالية على القرص أثناء التعديل.
  2. منطقة التجهيز (\`Staging Area\`): مساحة وسيطة تختار فيها التعديلات الجاهزة للحفظ عبر الأمر \`git add\`.
  3. المستودع المحلي (\`Local Repository\`): سجل اللقطات الدائمة (\`Commits\`) المحفوظة في مجلد \`.git\` عبر \`git commit\`.
- الفروع (Branches): مسارات تطوير مستقلة تسمح ببناء ميزة جديدة (مثلاً \`feature/login\`) دون المساس بالفرع الرئيسي المستقر (\`main\`)، ثم دمجها (\`Merge\`) بعد التأكد من سلامتها.
- منصة \`GitHub\`: خدمة سحابية تستضيف مستودعات Git عن بُعد (\`Remote Repositories\`) وتتيح العمل الجماعي ومراجعة الشيفرات وطلبات الدمج (\`Pull Requests\`).

### 3. المصطلحات التقنية وترجمتها
- Repository / Repo (المستودع): مجلد المشروع الخاضع لمراقبة Git وتاريخ إصداراته.
- Commit (لقطة حفظ / اعتماد): نقطة حفظ موثقة في تاريخ المشروع تحمل معرّفاً فريداً (Hash) ورسالة وصفية.
- Staging Area (منطقة التجهيز): قائمة الانتظار التي تحدد الملفات الداخلة في الـ Commit القادم.
- Branch (فرع برمجي): خط تطوير متفرع لتطوير ميزة أو إصلاح خطأ بعزل عن النسخة الرئيسية.
- Pull Request - PR (طلب الدمج): طلب على GitHub لمراجعة تعديلات فرع قبل دمجها في \`main\`.
- Merge Conflict (تعارض الدمج): حالة تحدث عند تعديل نفس السطور في ملف واحد من فرعين مختلفين وتستلزم تدخلاً يدوياً لاختيار النسخة الصحيحة.

### 4. آلية العمل وتسلسل الأوامر اليومي
1. \`git init\`: تهيئة مستودع Git جديد داخل مجلد المشروع.
2. \`git status\`: فحص حالة الملفات (جديدة، معدلة، أو جاهزة في Staging).
3. \`git add .\` (أو اسم ملف محدد): نقل التعديلات إلى منطقة التجهيز.
4. \`git commit -m "وصف واضح للتعديل"\`: تثبيت التعديلات كلقطة في السجل المحلي.
5. \`git push origin main\`: رفع اللقطات المحلية إلى المستودع البعيد على GitHub؛ ولجلب تعديلات الفريق نستخدم \`git pull\`.

### 5. أمثلة واقعية في تطوير المواقع
- إضافة صفحة تواصل جديدة: ينشئ المطور فرعاً \`git checkout -b feature/contact\`، ينفذ الصفحة ويحفظها بـ commits، ثم يرفع الفرع ويفتح Pull Request لزميله لمراجعته قبل نشره في \`main\`.
- اكتشاف خطأ بعد تعديل: يساعد أمر \`git log\` و\`git diff\` على معرفة السطر الذي تغيّر بالضبط واسترجاع الحالة السليمة.

### 6. استخدام المفهوم في المشاريع الحقيقية
تعتمد فرق الهندسة ملف \`.gitignore\` لاستبعاد الملفات المؤقتة والحساسة مثل \`node_modules/\` وملفات المفاتيح \`.env\` حتى لا تُرفع إلى GitHub، كما تربط مستودعات GitHub بخدمات النشر التلقائي (\`CI/CD\`) بحيث يُنشر الموقع تلقائياً بمجرد الدمج في \`main\`.

### 7. الأخطاء الشائعة وكيفية تجنبها
- رفع مجلد \`node_modules\` أو مفاتيح سرية \`.env\` للمستودع العام: يضخّم المستودع ويعرّض الأسرار للخطر؛ دائماً أضفهما في \`.gitignore\`.
- كتابة رسائل Commit مبهمة مثل \`"fix"\` أو \`"update"\`: اجعل الرسالة واضحة مثل \`"feat: add login validation"\`.
- العمل مباشرة على فرع \`main\` أثناء التجارب الخطرة بدلاً من فتح فرع مستقل.

### 8. الربط مع الدروس السابقة واللاحقة
يُحفظ بهذه الأداة كل ما كتبته في دروس \`HTML\` و\`CSS\` و\`JavaScript\`، ويُعد إتقان Git وGitHub المتطلب الأساسي قبل النشر السحابي الآلي (\`CI/CD\`) في المستوى العاشر.`,
            practicalSteps: `1. افحص محاكاة سطر الأوامر (Bash Terminal) في نافذة المعاينة ولاحظ تسلسل أوامر \`git init\` ثم \`git status\` ثم \`git add . && git commit\`.
2. في ملف \`index.html\`، أضف سطراً جديداً يحاكي تنفيذ الأمر \`git push origin main\` ورسالة نجاح الرفع إلى المستودع البعيد على GitHub.
3. أضف في \`main.js\` أمراً إضافياً مثل طباعة سجل اللقطة (\`git log --oneline\`) ثم اضغط "تشغيل الكود".`,
            videoSearchQuery: 'شرح Git و GitHub للمبتدئين الأوامر الأساسية بالعربي',
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
            explanation: `### 1. المقدمة وأهمية الموضوع
عندما يكبر موقع الويب ليصبح تطبيقاً تفاعلياً بعشرات الشاشات والأزرار والبيانات المتغيرة باستمرار، يصبح التعديل اليدوي على شجرة الـ \`DOM\` عبر \`getElementById\` و\`createElement\` معقداً وعرضة للأخطاء. طوّرت مكتبة \`React.js\` لتبسيط بناء الواجهات عبر تقسيم الصفحة إلى مكونات مستقلة وقابلة لإعادة الاستخدام تتحدث واجهتها تلقائياً كلما تغيرت بياناتها.

### 2. المفاهيم الأساسية بالتفصيل
- المكونات (Components): وحدات برمجية مستقلة (غالباً دوال JavaScript) تصف جزءاً محدداً من الواجهة مثل بطاقة مقرر أو شريط تنقل أو عداد إنجاز، ويمكن تكرارها في أي مكان ببيانات مختلفة.
- صيغة \`JSX\`: امتداد نحوي يتيح كتابة بنية شبيهة بوسوم \`HTML\` مباشرة داخل دوال JavaScript مع ربط المتغيرات والدوال بسلاسة.
- الخصائص (\`Props\`): بيانات تُمرَّر من المكون الأب إلى المكون الابن للقراءة فقط لتخصيص محتواه (مثل تمرير عنوان المقرر للبطاقة).
- الحالة (\`State\`) وخطاف \`useState\`: ذاكرة داخلية خاصة بالمكون تتغير مع تفاعل المستخدم. عند استدعاء دالة التحديث مثل \`setHours(hours + 1)\`، يعرف React أن البيانات تغيرت ويعيد تصيير المكون تلقائياً ليعكس القيمة الجديدة.

### 3. المصطلحات التقنية وترجمتها
- Component (المكون): وحدة واجهة مستخدم مستقلة وقابلة لإعادة الاستخدام.
- JSX - JavaScript XML: صيغة تدمج كتابة هيكل الواجهة داخل منطق JavaScript.
- State (الحالة): البيانات الديناميكية المتغيرة داخل المكون والتي تحدد شكل واجهته في لحظة معينة.
- Hook (الخطاف): دالة خاصة في React تبدأ بـ \`use\` مثل \`useState\` و\`useEffect\` لإضافة قدرات الحالة ودورة الحياة للمكونات.
- Virtual DOM (الـ DOM الافتراضي): تمثيل خفيف لشجرة الواجهة في الذاكرة يقارن التغييرات بسرعة قبل تحديث الصفحة الفعلية.
- Re-render (إعادة التصيير): إعادة حساب ناتج المكون وتحديث الواجهة تلقائياً عند تغير الحالة أو الخصائص.

### 4. آلية العمل: التفكير التصريحي (Declarative UI)
1. في JavaScript التقليدية (Imperative)، تكتب بنفسك: "اعثر على العنصر الفلاني، عدّل نصه، ثم عدّل عرض شريط التقدم بالبكسل".
2. في React (Declarative)، تصف شكل الواجهة كدالة من الحالة: \`width = (hours / maxHours) * 100%\`.
3. عند نقر زر "+ تسجيل ساعة دراسية"، تتغير قيمة الحالة \`hours\`.
4. يقارن React المخرجات القديمة بالجديدة في الـ Virtual DOM، ثم يحدث في المتصفح الرقم وشريط التقدم فقط بأقصى كفاءة.

### 5. أمثلة واقعية في تطوير المواقع
- مكون عداد الإشعارات أو الإنجاز الدراسي: يتغير الرقم وشريط التقدم ولون الشارة تلقائياً عند إتمام درس أو إضافة منتج للسلة.
- نموذج بحث تفاعلي: تتغير حالة \`searchQuery\` مع كل حرف يكتبه المستخدم فتتحدث قائمة النتائج المعروضة فوراً.

### 6. استخدام المفهوم في المشاريع الحقيقية
تُبنى المنصات الكبيرة (مثل هذه المنصة التعليمية نفسها) باستخدام مكونات React مع خطافات مثل \`useState\` لإدارة المدخلات والنوافذ، و\`useEffect\` لجلب البيانات من الخوادم وتنظيف المستمعين.

### 7. الأخطاء الشائعة وكيفية تجنبها
- تعديل متغير الحالة مباشرة مثل \`hours = 2;\` بدلاً من استدعاء دالة التحديث (\`setHours(2)\`): يؤدي إلى عدم علم React بالتغيير وعدم تحديث الواجهة.
- تعديل المصفوفات أو الكائنات داخل الحالة مباشرة عبر \`.push()\` بدلاً من إنشاء نسخة جديدة باستخدام \`[...items, newItem]\`.
- استدعاء خطافات مثل \`useState\` داخل شروط \`if\` أو حلقات \`for\` بدلاً من المستوى الأعلى للدالة.

### 8. الربط مع الدروس السابقة واللاحقة
يُظهر هذا الدرس كيف تطوّر ما تعلمناه في المستوى الرابع (إدارة \`DOM\` بـ \`JavaScript\`) إلى نمط مكونات حديث، ويمهد مباشرة لربط واجهة \`React\` بخادم \`Backend REST API\` في المستوى الثامن والمشروع النهائي.`,
            practicalSteps: `1. اضغط على زر "+ تسجيل ساعة دراسية" في شاشة المعاينة وراقب كيف تعيد دالة \`renderState()\` تحديث الرقم وشريط التقدم تلقائياً محاكيةً \`useState\`.
2. اضغط "إعادة ضبط" للتحقق من تصفير الحالة.
3. في ملف \`main.js\`، عدّل \`maxHours\` إلى 6 أو أضف رسالة تهنئة تظهر في الواجهة عندما يكتمل الشريط بنسبة 100% ثم اضغط "تشغيل الكود".`,
            videoSearchQuery: 'شرح React.js للمبتدئين Components و useState بالعربي',
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
            explanation: `### 1. المقدمة وأهمية الموضوع
بعد إتقان بناء واجهات المستخدم في المتصفح (Frontend)، يحتاج الموقع إلى عقل خفي يعمل على الخادم لحفظ حسابات الطلاب، إدارة المقررات، والتحقق من الصلاحيات. تتيح بيئة \`Node.js\` للمطورين تشغيل لغة \`JavaScript\` على الخادم نفسه، وبمساعدة إطار العمل \`Express.js\` يمكن هندسة خوادم ويب وواجهات برمجية (\`REST APIs\`) بسرعة وكفاءة عالية.

### 2. المفاهيم الأساسية بالتفصيل
- بيئة \`Node.js\`: بيئة تشغيل مبنية على محرك V8 تتيح تنفيذ JavaScript خارج المتصفح مع صلاحيات الوصول للملفات والشبكة وقواعد البيانات، وتعتمد على معمارية غير محظورة (\`Non-blocking I/O\`) و\`Event Loop\` لمعالجة آلاف الطلبات بكفاءة.
- إطار \`Express.js\`: إطار عمل خفيف ومنظم يبسط إنشاء مسارات الخادم (\`Routing\`) وإدارة الطلبات (\`req\`) والاستجابات (\`res\`).
- معمارية \`REST API\`: أسلوب قياسي لتصميم نقاط النهاية (\`Endpoints\`) بحيث يمثل الرابط اسم المورد مثل \`/api/v1/courses\`، ويحدد فعل HTTP نوع العملية (\`GET\` للقراءة، \`POST\` للإنشاء، \`PUT\` للتعديل، \`DELETE\` للحذف).
- البرمجيات الوسيطة (\`Middleware\`): دوال تمر عبرها الطلبات بالترتيب قبل الوصول للمعالج النهائي (\`Controller\`)، وتُستخدم لتحليل صيغة JSON، تسجيل السجلات، أو التحقق من رمز المصادقة (\`JWT\`).

### 3. المصطلحات التقنية وترجمتها
- Node.js Runtime (بيئة تشغيل Node.js): بيئة لتشغيل كود JavaScript على الخادم.
- REST - Representational State Transfer (نقل الحالة التمثيلية): نمط معماري لتصميم واجهات برمجة التطبيقات عبر HTTP.
- Route / Endpoint (المسار / نقطة النهاية): عنوان فرعي في الخادم يستجيب لطلب محدد مثل \`GET /api/v1/courses\`.
- Middleware (البرمجية الوسيطة): دالة تتوسط الطلب والاستجابة لفحص الطلب أو تعديله أو إيقافه عند الخطأ.
- Request / Response (\`req\` / \`res\`): كائنان يمثل الأول بيانات طلب العميل ويمثل الثاني أدوات إرسال رد الخادم مثل \`res.status(200).json(data)\`.

### 4. آلية العمل: رحلة طلب داخل خادم Express
1. يستقبل الخادم طلباً مثل \`GET /api/v1/courses\`.
2. يمر الطلب عبر طبقة الـ \`Middleware\` (مثل فحص الترويسات وتسجيل زمن الوصول).
3. يطابق الموجه (\`Router\`) المسار المطلوب ويسلمه لدالة المعالجة (\`Controller\`).
4. يسترجع المعالج البيانات من قاعدة البيانات أو طبقة الخدمة، ثم يرسلها عبر \`res.status(200).json({ success: true, data: courses })\`.
5. يضبط الخادم ترويسة \`Content-Type: application/json\` ويعيد النتيجة للعميل.

### 5. أمثلة واقعية في تطوير المواقع
- تحميل قائمة المقررات في المنصة: تطلب واجهة React المسار \`GET /api/v1/courses\` فيرجع الخادم مصفوفة JSON نظيفة بالمقررات وعدد دروسها.
- إضافة مقرر جديد من لوحة المشرف: ترسل الواجهة طلب \`POST /api/v1/courses\` محمّلاً بالبيانات فيتحقق الخادم منها ويرد بـ \`201 Created\`.

### 6. استخدام المفهوم في المشاريع الحقيقية
تُقسم مشاريع Node.js الاحترافية إلى طبقات منفصلة: \`routes/\` لتعريف الروابط، \`middlewares/\` للمصادقة والتحقق، \`controllers/\` لتنسيق الاستجابة، و\`services/\` لمنطق الأعمال والتعامل مع قاعدة البيانات، مما يسهل الاختبار والتوسع.

### 7. الأخطاء الشائعة وكيفية تجنبها
- نسيان إرسال استجابة (\`res.json\` أو \`res.send\`) داخل دالة المسار: يؤدي لتعليق المتصفح في انتظار الرد حتى انتهاء المهلة (Timeout).
- عدم معالجة الأخطاء غير المتوقعة (بـ \`try/catch\` أو Error Middleware): قد يتوقف الخادم بالكامل أو يرسل صفحة خطأ تكشف تفاصيل الخادم.
- عدم التحقق من صحة المدخلات القادمة في \`req.body\` قبل إرسالها لقاعدة البيانات.

### 8. الربط مع الدروس السابقة واللاحقة
يُترجم هذا الدرس ما تعلمناه نظرياً في المستوى الأول (الدرس 2 و4 عن الـ Backend وبروتوكول HTTP) إلى مسار عملي حقيقي، ويمهد مباشرة لربط هذا الخادم بقاعدة بيانات علائقية عبر \`SQL\` في المستوى التاسع.`,
            practicalSteps: `1. عاين لوحة استجابة الـ API في المعاينة ولاحظ عناصر المسار: الفعل \`GET\`، نقطة النهاية \`/api/v1/courses\`، رمز الحالة \`200 OK\`، وهيكل الـ \`JSON\` المرجع.
2. اضغط على زر "إرسال الطلب (Send)" وشاهد تحديث زمن الاستجابة وسجل الكونسول.
3. عدّل حمولة الـ JSON في \`index.html\` بإضافة مقرر ثالث (مثل \`"الذكاء الاصطناعي وتطوير الويب"\`) واضغط "تشغيل الكود".`,
            videoSearchQuery: 'شرح Node.js و Express REST API للمبتدئين بالعربي',
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
            explanation: `### 1. المقدمة وأهمية الموضوع
البيانات المحفوظة في متغيرات الذاكرة المؤقتة داخل الخادم تضيع بمجرد إعادة تشغيله. لتخزين سجلات الطلاب والمقررات والدرجات بصورة دائمة ومنظمة وسريعة البحث، نعتمد على قواعد البيانات العلائقية (\`Relational Databases\`) ولغة الاستعلام الهيكلية \`SQL\`. تتيح \`SQL\` تخزين البيانات في جداول مترابطة دون تكرار واسترجاع تقارير مركبة باستعلام واحد دقيق.

### 2. المفاهيم الأساسية بالتفصيل
- الجداول والسجلات والحقول (Tables, Rows, Columns): كل كيان في النظام (مثل \`students\` أو \`courses\`) يُخزن في جدول؛ الصف يمثل سجلاً واحداً (طالباً محدداً) والعمود يمثل صفة (الاسم، البريد).
- المفتاح الأساسي (\`Primary Key - PK\`): عمود قيمته فريدة ولا تتكرر أبداً في الجدول (مثل \`id\`) لتمييز كل صف بدقة.
- المفتاح الأجنبي (\`Foreign Key - FK\`): عمود في جدول يشير إلى المفتاح الأساسي في جدول آخر لإنشاء علاقة منطقية بينهما (مثل \`student_id\` و\`course_id\` في جدول التسجيلات \`enrollments\`).
- ربط الجداول (\`SQL JOIN\`): عملية تجمع صفوفاً من جدولين أو أكثر بناءً على تطابق المفاتيح، ومن أشهر أنواعها:
  - \`INNER JOIN\`: يعيد فقط السجلات التي لها تطابق في كلا الجدولين.
  - \`LEFT JOIN\`: يعيد جميع سجلات الجدول الأيسر حتى لو لم يكن لها تطابق في الجدول الأيمن.

### 3. المصطلحات التقنية وترجمتها
- SQL - Structured Query Language (لغة الاستعلام الهيكلية): اللغة القياسية لإدارة واستعلام قواعد البيانات العلائقية.
- RDBMS - Relational Database Management System (نظام إدارة قواعد البيانات العلائقية): برمجيات مثل PostgreSQL وMySQL وSQLite.
- Primary Key (المفتاح الأساسي): المعرف الفريد لكل سجل في الجدول.
- Foreign Key (المفتاح الأجنبي): حقل مرجعي يربط صفاً في جدول بصف في جدول آخر ويحفظ التكامل المرجعي.
- JOIN (الدمج / الربط): تعليمة لربط بيانات عدة جداول في نتيجة استعلام واحدة.
- CRUD: العمليات الأربع الأساسية على البيانات: الإنشاء \`INSERT\`، القراءة \`SELECT\`، التحديث \`UPDATE\`، والحذف \`DELETE\`.

### 4. آلية العمل في استعلام متعدد الجداول
1. يبدأ المحرك بالجدول الأول \`students\` (الاسم المستعار \`s\`).
2. يربطه عبر \`JOIN enrollments e ON s.id = e.student_id\` ليحصل على تسجيلات كل طالب ودرجاته.
3. يربطه مجدداً عبر \`JOIN courses c ON e.course_id = c.id\` لجلب اسم كل مقرر بدلاً من الاكتفاء برقمه.
4. يطبق شرط التصفية \`WHERE e.grade >= 90\` فيُرجع فقط السجلات المتفوقة بأسماء الطلاب والمقررات والدرجات.

### 5. أمثلة واقعية في تطوير المواقع
- كشف درجات الطالب: يحتاج دمج جدول الطلاب + جدول التسجيل + جدول المقررات في شاشة واحدة منظمة.
- تفاصيل طلب الشراء في متجر: ربط جدول الطلبات \`orders\` بجدول المستخدمين \`users\` وجدول عناصر الطلب \`order_items\`.

### 6. استخدام المفهوم في المشاريع الحقيقية
تستخدم تطبيقات الويب خادماً وسيطاً (Backend API) أو أدوات \`ORM\` مثل Prisma وDrizzle لتوليد استعلامات \`SQL\` بأمان، مع الاعتماد على المعاملات المربوطة (\`Parameterized Queries\`) بدلاً من دمج النصوص مباشرة لمنع هجمات حقن الـ SQL (\`SQL Injection\`).

### 7. الأخطاء الشائعة وكيفية تجنبها
- تكرار بيانات الطالب أو اسم المقرر نصياً في كل صف تسجيل (عدم تطبيق التطبيع Normalization): يؤدي لتضارب البيانات عند التعديل؛ الحل استخدام المفاتيح الأجنبية.
- نسيان شرط الربط \`ON\` أو شرط \`WHERE\` في أوامر \`UPDATE\` و\`DELETE\` مما قد يحدّث أو يحذف الجدول كاملاً!
- دمج مدخلات المستخدم مباشرة في نص استعلام SQL مما يفتح ثغرة \`SQL Injection\`.

### 8. الربط مع الدروس السابقة واللاحقة
يُكمّل هذا الدرس طبقة الواجهة الخلفية من المستوى الثامن (\`Node.js & Express\`)؛ حيث تستدعي مسارات الـ \`API\` هذه الاستعلامات لتزويد واجهات \`React\` بالبيانات الحقيقية المحفوظة.`,
            practicalSteps: `1. افحص نص استعلام الـ \`SQL JOIN\` المعروض في المحاكي ولاحظ كيف يربط ثلاثة جداول (\`students\` و\`enrollments\` و\`courses\`).
2. اضغط زر "تنفيذ الاستعلام (Execute Query)" وتابع رسالة الكونسول.
3. عدّل نص الاستعلام أو صفوف جدول النتائج في \`index.html\` (مثلاً خفّض الشرط إلى \`WHERE e.grade >= 80\` وأضف صفاً جديداً لطالب بدرجة \`85\`) ثم اضغط "تشغيل الكود".`,
            videoSearchQuery: 'شرح قواعد البيانات SQL و JOIN للمبتدئين بالعربي',
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
            explanation: `### 1. المقدمة وأهمية الموضوع
يبقى موقع الويب مجرد ملفات محلية على حاسوب المطور ما لم يمر بمرحلة البناء والاختبار والنشر ليصبح متاحاً للجميع عبر رابط عالمي آمن (\`HTTPS\`). فهم دورة الاختبار وضبط الجودة وبناء حزمة الإنتاج (\`Production Build\`) وخطوط التكامل والنشر المستمر (\`CI/CD\`) يضمن إطلاق مواقع سريعة ومستقرة وخالية من الأخطاء الحرجة.

### 2. المفاهيم الأساسية بالتفصيل
- فحص الجودة والاختبارات الآلية (\`Linting & Automated Testing\`):
  - \`Linting\`: تحليل ساكن للكود يكتشف الأخطاء النحوية والمتغيرات غير المستخدمة والممارسات الخاطئة قبل التشغيل.
  - \`Unit & Integration Testing\`: اختبارات برمجية مؤتمتة تتحقق من أن الدوال والواجهات تعمل كما هو متوقع بعد أي تعديل.
- حزمة الإنتاج (\`Production Build\`): عملية تحويل أكواد التطوير (TypeScript، JSX، عدة ملفات CSS/JS) عبر أدوات مثل \`Vite\` إلى ملفات نهائية محسّنة في مجلد \`dist/\` وتشمل:
  - التصغير (\`Minification\`): إزالة الفراغات والتعليقات وتقصير أسماء المتغيرات لتقليل الحجم.
  - إزالة الكود الميت (\`Tree Shaking\`): استبعاد الأجزاء غير المستخدمة من المكتبات لتسريع التحميل.
- خطوط \`CI/CD\`: أتمتة دورة البناء والفحص (\`Continuous Integration\`) والنشر السحابي التلقائي (\`Continuous Deployment\`) فور رفع الكود إلى GitHub.

### 3. المصطلحات التقنية وترجمتها
- Production Build (بناء الإنتاج): تجهيز وضغط نسخة المشروع النهائية الموجهة للمستخدمين الحقيقيين.
- Minification (التصغير والضغط): تقليل حجم ملفات الكود لتسريع تنزيلها عبر الشبكة.
- Tree Shaking (إزالة الكود غير المستخدم): التخلص من الشيفرات التي لم تُستدعَ في الحزمة النهائية.
- CI/CD - Continuous Integration / Continuous Deployment (التكامل والنشر المستمر): نظام مؤتمت لفحص وبناء ونشر التحديثات دون خطوات يدوية متكررة.
- SSL/TLS Certificate (شهادة التشفير): شهادة رقمية تفعّل بروتوكول \`HTTPS\` الآمن للموقع.

### 4. آلية العمل: مراحل النشر السحابي من الكود إلى الرابط الحي
1. يدفع المطور تعديلاته الجديدة إلى مستودع \`GitHub\`.
2. يلتقط خط الـ \`CI/CD\` التحديث ويشغّل تلقائياً أوامر الفحص (\`npm run lint\`) ثم الاختبارات الآلية.
3. إذا نجحت الفحوصات، ينفذ الخادم أمر البناء (\`npm run build\`) لإنتاج ملفات الإنتاج المضغوطة.
4. تُرفع الحزمة النهائية إلى منصة الاستضافة السحابية وتُوزع ملفاتها الثابتة على خوادم الـ \`CDN\` مع تفعيل شهادة \`HTTPS\`.
5. إذا فشل أي اختبار أو فحص نحوي، يوقف الخط النشر فوراً لحماية النسخة الحية من التعطل.

### 5. أمثلة واقعية في تطوير المواقع
- عند تحديث منصة تعليمية بإضافة درس جديد: يرفض خط النشر التحديث إذا كان هناك قوس ناقص أو خطأ TypeScript في أي ملف، مما يمنع ظهور شاشة بيضاء للطلاب.
- تقليص حجم ملف JavaScript من 1.5 ميغابايت في بيئة التطوير إلى أقل من 150 كيلوبايت في حزمة الإنتاج ليعمل بسرعة حتى على اتصال الهاتف البطيء.

### 6. استخدام المفهوم في المشاريع الحقيقية
تعتمد بيئات العمل الحديثة على استضافات سحابية مثل Cloud Run وVercel وFirebase Hosting مع ضبط متغيرات البيئة (\`Environment Variables\`) على الخادم لحفظ مفاتيح الـ API بأمان، ومراقبة مؤشرات الأداء وSEO بعد الإطلاق.

### 7. الأخطاء الشائعة وكيفية تجنبها
- نشر ملفات التطوير الخام دون تشغيل عملية الـ Build: يؤدي لبطء شديد أو فشل تشغيل ملفات TypeScript/JSX في المتصفح.
- رفع ملفات الأسرار \`.env\` ضمن الكود بدلاً من ضبطها في إعدادات الاستضافة السحابية.
- تجاهل التحقق من الاستجابة على الهاتف أو إهمال فحص الروابط والأخطاء في الكونسول قبل الإطلاق.

### 8. الربط مع الدروس السابقة واللاحقة
يربط هذا الدرس بين إدارة الأكواد عبر \`Git وGitHub\` (المستوى السادس) وشبكات \`DNS وCDN\` (المستوى الأول)، ليهيئك لتنفيذ ونشر مشروع الويب الشامل في المستوى الحادي عشر والأخير.`,
            practicalSteps: `1. راجع خطوات خط النشر المعروضة في بطاقة المراقبة (Lint ثم Unit Tests ثم Vite Build).
2. اضغط على زر "بدء النشر السحابي المباشر 🚀" ولاحظ تحديث حالة خط النشر وظهور بطاقة الرابط الحي.
3. في \`main.js\`، أضف محاكاة لفحص خطوة الـ Build أو مؤقتاً زمنياً يظهر تتابع المراحل قبل كشف الرابط ثم اضغط "تشغيل الكود".`,
            videoSearchQuery: 'شرح Production Build و CI CD نشر مواقع الويب للمبتدئين',
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
            explanation: `### 1. المقدمة وأهمية الموضوع
تمثل لوحات المعلومات (\`Dashboards\`) واجهة التحكم المركزية في معظم تطبيقات الويب الاحترافية—من منصات التعليم الإلكتروني إلى الأنظمة الطبية والتجارية. في هذا المستوى الختامي، نجمع كل ما تعلمناه من هيكلة دلالية وتخطيط متجاوب وبرمجة تفاعلية وهندسة بيانات لبناء واجهة مؤشرات أداء حية (\`KPI Dashboard\`) تحاكي الأنظمة الحقيقية في سوق العمل.

### 2. المفاهيم الأساسية بالتفصيل
- معمارية لوحة التحكم القياسية (\`Dashboard Layout Architecture\`): تتكون غالباً من ثلاثة أجزاء متكاملة:
  1. قائمة جانبية ثابتة أو متكيفة (\`Sidebar\`) للتنقل بين الأقسام الرئيسية.
  2. شريط علوي (\`Topbar\`) يعرض هوية المستخدم وحالة الاتصال بالنظام.
  3. منطقة المحتوى الرئيسية (\`Main Content\`) وتضم بطاقات مؤشرات الأداء (\`KPI Cards\`) وإجراءات التفاعل.
- مؤشرات الأداء الرئيسية (\`KPIs - Key Performance Indicators\`): قياسات رقمية واضحة ومباشرة تلخص حالة النظام في لمحة واحدة (مثل عدد المقررات المكتملة، المعدل التراكمي، والنقاط).
- التحديث التفاعلي اللحظي (\`Real-time State & UI Feedback\`): تحديث الأرقام والحالة البصرية فوراً عند تنفيذ إجراء مهم مثل تسليم المشروع دون الحاجة لتحديث الصفحة.

### 3. المصطلحات التقنية وترجمتها
- Full-Stack Web Application (تطبيق ويب متكامل): نظام يجمع بين الواجهة الأمامية والخلفية وقاعدة البيانات والنشر السحابي.
- KPI - Key Performance Indicator (مؤشر الأداء الرئيسي): قيمة قياسية تعكس مدى تحقيق الأهداف أو التقدم.
- Sidebar & Topbar Navigation (التنقل الجانبي والعلوي): نمط تنظيم واجهات الأنظمة لتسهيل الوصول للأقسام.
- Interactive Feedback (التغذية الراجعة التفاعلية): تغييرات بصرية ونصية واضحة تؤكد للمستخدم نجاح العملية فور تنفيذها.

### 4. آلية العمل: تكامل الطبقات الثلاث في اللوحة
1. طبقة البنية (\`HTML5 Semantic Structure\`): تستخدم \`<aside>\` للقائمة الجانبية و\`<main>\` للمحتوى و\`<header>\` للشريط العلوي، مما يحافظ على وضوح شجرة الـ \`DOM\`.
2. طبقة العرض (\`CSS Flexbox Layout\`): تقسّم الشاشة أفقياً بين الشريط الجانبي الداكن \`#176B45\` ومنطقة العمل الفاتحة، وتوزع بطاقات المؤشرات بمرونة عبر \`display: flex; flex-wrap: wrap;\`.
3. طبقة السلوك (\`JavaScript Logic\`): تربط زر التسليم بحدث النقر لتحديث النص واللون وزيادة عداد النقاط فوراً، بالتكامل مع منطق الحفظ في الخادم وقاعدة البيانات في التطبيقات الكاملة.

### 5. أمثلة واقعية في تطوير المواقع
- لوحة تحكم الطالب في الجامعات والمنصات التعليمية لمتابعة الحضور والمقررات والاختبارات.
- لوحات إدارة المبيعات والحجوزات التي تعرض الإيرادات والطلبات الجديدة لحظياً.

### 6. استخدام المفهوم في المشاريع الحقيقية
عند بناء تطبيق متكامل حقيقي، ترتبط بطاقات المؤشرات باستعلامات \`SQL\` تجميعية (مثل \`COUNT\` و\`AVG\`) تقدمها نقاط \`REST API\` في Node.js وتعرضها مكونات \`React\` مع تحديثات متزامنة وحماية للمسارات حسب صلاحية المستخدم (طالب أو مشرف).

### 7. الأخطاء الشائعة وكيفية تجنبها
- تكديس أرقام ونصوص مفرطة في لوحة التحكم مما يشتت المستخدم: اللوحة الناجحة تبرز المؤشرات الأهم بتباين واضح ومسافات مريحة.
- إغفال تكيف القائمة الجانبية على الشاشات الصغيرة أو تجاهل حالات التحميل والأخطاء عند جلب البيانات من الخادم.
- عدم تقديم تأكيد بصري واضح عند تنفيذ إجراء حساس مثل التسليم النهائي.

### 8. الربط مع الدروس السابقة واللاحقة
يُتوّج هذا الدرس رحلتك عبر المستويات الإحدى عشرة كاملة: شبكة الإنترنت وHTTP (المستوى 1)، HTML5 الدلالي (المستوى 2)، CSS Flexbox (المستوى 3)، تفاعل DOM وJavaScript (المستوى 4)، التجاوب (المستوى 5)، Git (المستوى 6)، React (المستوى 7)، Backend وSQL (المستويان 8 و9)، والنشر السحابي (المستوى 10).`,
            practicalSteps: `1. افحص أجزاء لوحة المعلومات في نافذة المعاينة: القائمة الجانبية (\`<aside>\`)، الشريط العلوي، وبطاقات مؤشرات الأداء الثلاث.
2. اضغط على زر "تسليم ومناقشة المشروع 🎓" وراقب تغير لون الزر وزيادة النقاط التعليمية إلى \`1,500 (+250)\`.
3. في ملف \`index.html\` و\`main.js\`، أضف مؤشر KPI رابعاً (مثل "نسبة الحضور" أو "المشاريع المنجزة") وبرمج تحديثه عند النقر ثم اضغط "تشغيل الكود".`,
            videoSearchQuery: 'بناء Dashboard تفاعلي HTML CSS JavaScript مشروع ويب متكامل',
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
