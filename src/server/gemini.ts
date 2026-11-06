import { GoogleGenAI } from '@google/genai';

let aiInstance: GoogleGenAI | null = null;

function getAIClient(): GoogleGenAI {
  if (!aiInstance) {
    const apiKey = process.env.GEMINI_API_KEY;
    aiInstance = new GoogleGenAI({
      apiKey: apiKey || '',
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }
  return aiInstance;
}

export interface AssistantRequest {
  code: {
    html: string;
    css: string;
    js: string;
  };
  prompt?: string;
  mode: 'analyze' | 'explain' | 'hint' | 'debug' | 'chat';
  lessonContext?: {
    courseTitle?: string;
    lessonTitle?: string;
    objective?: string;
  };
  history?: Array<{ role: 'user' | 'model'; text: string }>;
  language?: 'ar' | 'en';
}

export async function askAiAssistant(req: AssistantRequest) {
  const ai = getAIClient();
  const isEnglish = req.language === 'en';

  const systemInstruction = isEnglish
    ? `
You are the dedicated Academic AI Mentor for "Educational Platform", a prestigious university-grade web engineering learning environment teaching HTML, CSS, JavaScript, and React.
Your tone: Academic, encouraging, supportive, and pedagogical, like an elite computer science faculty professor.
Language: Fluent, professional English.

Key Pedagogical Rules:
1. In "hint" mode: Never spoil the full solution directly. Offer progressive guiding questions and hints so the student discovers the answer themselves.
2. In "analyze" mode: Scrutinize the student's HTML/CSS/JS code, detect syntax or logical bugs, and explain the root cause clearly.
3. In "explain" mode: Explain the underlying programming concept concisely with a brief illustrative snippet.
4. In "debug" mode: Provide step-by-step guidance showing what changed and why.
5. In "chat" mode: Answer student inquiries with academic rigor and encouragement.
Format all replies with clean Markdown and appropriate code blocks.
`.trim()
    : `
أنت المساعد الذكي الأكاديمي لمنصة "منصة تعليمية" المتخصصة في تدريس تطوير مواقع الويب (HTML, CSS, JavaScript, React).
طابعك الأكاديمي: راقٍ، مهني، مشجع، ناصح كأستاذ جامعي في كلية علوم الحاسب.
لغتك الأساسية: اللغة العربية الفصحى الواضحة والسهلة مع الحفاظ على المصطلحات التقنية عند اللزوم (مثل DOM, Event Listener, Flexbox, Semantic tags).

قواعد الإجابة:
1. في وضع "hint" (تلميح): لا تعطي الحل المباشر كاملاً فوراً، بل وجه الطالب بأسئلة ذكية وتلميحات خطوة بخطوة للوصول إلى الحل بنفسه.
2. في وضع "analyze" (تحليل الأخطاء): افحص كود الطالب (HTML/CSS/JS)، حدد الأخطاء النحوية أو المنطقية، واشرح سبب المشكلة باللغة العربية بوضوح.
3. في وضع "explain" (شرح المفهوم): اشرح المفهوم البرمجي ببساطة مع مثال توضيحي موجز.
4. في وضع "debug" (إصلاح الأخطاء): قدّم توجيهاً تفصيلياً مع إظهار الجزئية المصححة وتفسير التصحيح.
5. في وضع "chat" (المحادثة العامة): أجب عن استفسارات الطالب البرمجية برحابة صدر ودقة علمية.
نسق إجابتك دائماً بتنسيق Markdown أنيق ومرتب مع تمييز الأكواد بلغات البرمجة المناسبة.
`.trim();

  let userPrompt = '';

  const codeContext = isEnglish
    ? `
Student Code:
--- HTML ---
${req.code.html || '<!-- No HTML code -->'}

--- CSS ---
${req.code.css || '/* No CSS code */'}

--- JavaScript ---
${req.code.js || '// No JavaScript code'}
`
    : `
كود الطالب الحالي:
--- HTML ---
${req.code.html || '<!-- لا يوجد كود HTML -->'}

--- CSS ---
${req.code.css || '/* لا يوجد كود CSS */'}

--- JavaScript ---
${req.code.js || '// لا يوجد كود JS'}
`;

  const lessonInfo = req.lessonContext
    ? (isEnglish
        ? `\nLesson Context: ${req.lessonContext.courseTitle || ''} - ${req.lessonContext.lessonTitle || ''}\nLearning Objective: ${req.lessonContext.objective || ''}\n`
        : `\nسياق الدرس: ${req.lessonContext.courseTitle || ''} - ${req.lessonContext.lessonTitle || ''}\nالهدف التعليمي: ${req.lessonContext.objective || ''}\n`)
    : '';

  if (isEnglish) {
    switch (req.mode) {
      case 'analyze':
        userPrompt = `Analyze the student's code and identify potential errors, anti-patterns, or best-practice improvements:\n${codeContext}\n${lessonInfo}`;
        break;
      case 'hint':
        userPrompt = `Provide a gentle, guiding hint to help complete the exercise without spoiling the answer:\n${codeContext}\n${lessonInfo}\nStudent request: ${req.prompt || 'Where should I start?'}`;
        break;
      case 'debug':
        userPrompt = `Help debug the code with step-by-step remediation instructions and corrected snippet:\n${codeContext}\n${lessonInfo}\nIssue reported: ${req.prompt || 'Code does not execute as expected.'}`;
        break;
      case 'explain':
        userPrompt = `Explain the following concept:\n${req.prompt || 'Explain how this code works'}\n${codeContext}`;
        break;
      case 'chat':
      default:
        userPrompt = `${req.prompt || 'Hello, could you help me with this code?'}\n${codeContext}\n${lessonInfo}`;
        break;
    }
  } else {
    switch (req.mode) {
      case 'analyze':
        userPrompt = `قم بتحليل كود الطالب التالي واكتشاف أي أخطاء برمجية أو تحسينات في كتابة الكود (Best Practices):\n${codeContext}\n${lessonInfo}`;
        break;
      case 'hint':
        userPrompt = `أحتاج إلى تلميح لطيف وموجه يساعدني في إكمال التمرين دون حرق الحل بالكامل.\n${codeContext}\n${lessonInfo}\nطلب الطالب: ${req.prompt || 'أين يجب أن أبدأ وكيف أحل هذا؟'}`;
        break;
      case 'debug':
        userPrompt = `ساعدني في تصحيح الكود، وضح الأخطاء خطوة بخطوة مع الكود المصحح:\n${codeContext}\n${lessonInfo}\nالمشكلة التي يواجهها الطالب: ${req.prompt || 'الكود لا يعمل بالشكل المتوقع.'}`;
        break;
      case 'explain':
        userPrompt = `اشرح لي المفهوم البرمجي التالي:\n${req.prompt || 'اشرح طريقة عمل هذا الكود'}\n${codeContext}`;
        break;
      case 'chat':
      default:
        userPrompt = `${req.prompt || 'مرحباً، هل يمكنك مساعدتي في هذا الكود؟'}\n${codeContext}\n${lessonInfo}`;
        break;
    }
  }

  const response = await ai.models.generateContent({
    model: 'gemini-3.8-flash',
    contents: userPrompt,
    config: {
      systemInstruction,
    },
  });

  return {
    reply: response.text || (isEnglish ? 'Sorry, unable to generate a response at this moment.' : 'عذراً، لم أستطع توليد إجابة في الوقت الحالي. يرجى إعادة المحاولة.'),
  };
}
