import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { askAiAssistant, generateCodeFromPrompt } from './src/server/gemini.ts';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  app.use(express.json());

  // Server-side Gemini AI Endpoint for Mentor Chat, Hints & Debugging
  app.post('/api/ai/assist', async (req, res) => {
    try {
      const result = await askAiAssistant(req.body);
      res.json(result);
    } catch (error: any) {
      console.error('Server error in /api/ai/assist:', error);
      res.status(500).json({ error: error?.message || 'Internal Server Error' });
    }
  });

  // Server-side Gemini AI Endpoint for Natural Language Prompt to Code
  app.post('/api/ai/generate-code', async (req, res) => {
    try {
      const { prompt, currentCode, action, language } = req.body;
      if (!prompt || typeof prompt !== 'string') {
        return res.status(400).json({ error: 'Instruction prompt is required.' });
      }
      const result = await generateCodeFromPrompt({
        prompt,
        currentCode,
        action,
        language: language || 'ar',
      });
      res.json(result);
    } catch (error: any) {
      console.error('Server error in /api/ai/generate-code:', error);
      res.status(500).json({ error: error?.message || 'Failed to generate code from prompt.' });
    }
  });

  // Real Mock API Endpoints for testing student code requests in the IDE
  app.get('/api/mock/courses', (_req, res) => {
    res.json([
      { id: 'CS101', name: 'أساسيات الويب وHTML5', credits: 3, track: 'Frontend' },
      { id: 'CS102', name: 'تصميم الواجهات الحديثة CSS3', credits: 3, track: 'Frontend' },
      { id: 'CS103', name: 'برمجة التفاعل JavaScript ES6', credits: 4, track: 'Frontend' },
      { id: 'CS201', name: 'بناء الخوادم Node.js & Express', credits: 4, track: 'Backend' },
    ]);
  });

  app.get('/api/mock/students', (_req, res) => {
    res.json([
      { id: 'ST-2026-01', name: 'أحمد المحمد', major: 'هندسة برمجيات', gpa: 3.92 },
      { id: 'ST-2026-02', name: 'سارة العبدالله', major: 'علوم حاسوب', gpa: 3.88 },
      { id: 'ST-2026-03', name: 'عمر القاسم', major: 'أمن سيبراني', gpa: 3.75 },
    ]);
  });

  app.post('/api/mock/login', (req, res) => {
    const { username, password } = req.body || {};
    if (username && password) {
      res.json({
        success: true,
        message: 'تم تسجيل الدخول بنجاح إلى النظام الأكاديمي',
        token: 'academic_jwt_token_' + Date.now(),
        user: { username, role: 'student', university: 'الجامعة الوطنية الخاصة' },
      });
    } else {
      res.status(400).json({
        success: false,
        error: 'يرجى تقديم اسم المستخدم وكلمة المرور.',
      });
    }
  });

  app.get('/api/mock/status/:status', (req, res) => {
    const status = parseInt(req.params.status, 10) || 200;
    res.status(status).json({
      status,
      timestamp: new Date().toISOString(),
      message: `استجابة حقيقية من الخادم برمز الحالة ${status}`,
    });
  });

  const isProduction = process.env.NODE_ENV === 'production';

  if (isProduction) {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  } else {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Educational Platform server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
