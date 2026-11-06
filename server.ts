import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { askAiAssistant } from './src/server/gemini.ts';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

// Server-side Gemini AI Endpoint
app.post('/api/ai/assist', async (req, res) => {
  try {
    const result = await askAiAssistant(req.body);
    res.json(result);
  } catch (error: any) {
    console.error('Server error in /api/ai/assist:', error);
    res.status(500).json({ error: error?.message || 'Internal Server Error' });
  }
});

// Serve frontend production build
const distPath = path.resolve(__dirname, 'dist');
app.use(express.static(distPath));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(distPath, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Educational Platform server running on port ${PORT}`);
});
