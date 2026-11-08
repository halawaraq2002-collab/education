import React, { useState, useEffect, useRef } from 'react';
import Editor from '@monaco-editor/react';
import { 
  Play, 
  RotateCcw, 
  Monitor, 
  Tablet, 
  Smartphone, 
  Terminal, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle,
  Copy,
  Columns,
  Rows,
  Maximize2,
  Code,
  Wand2,
  Globe,
  Send,
  RefreshCw,
  Check
} from 'lucide-react';

interface CodeEditorProps {
  initialCode: {
    html: string;
    css: string;
    js: string;
  };
  onCodeChange?: (code: { html: string; css: string; js: string }) => void;
  onAskAiWithCode?: (code: { html: string; css: string; js: string }) => void;
  lessonObjective?: string;
  lessonId?: string;
}

export interface NetworkLogItem {
  id: string;
  method: string;
  url: string;
  status: number;
  statusText: string;
  duration: number;
  type: 'fetch' | 'xhr';
  timestamp: string;
}

export const CodeEditor: React.FC<CodeEditorProps> = ({
  initialCode,
  onCodeChange,
  onAskAiWithCode,
  lessonObjective,
  lessonId,
}) => {
  const [activeTab, setActiveTab] = useState<'html' | 'css' | 'js'>('html');
  const [code, setCode] = useState(initialCode);
  const [srcDoc, setSrcDoc] = useState('');
  const [previewDevice, setPreviewDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [splitOrientation, setSplitOrientation] = useState<'horizontal' | 'vertical'>('horizontal');
  const [consoleLogs, setConsoleLogs] = useState<Array<{ type: 'log' | 'error' | 'warn'; text: string; time: string }>>([]);
  const [networkLogs, setNetworkLogs] = useState<NetworkLogItem[]>([]);
  const [activeBottomTab, setActiveBottomTab] = useState<'console' | 'network'>('console');
  const [isConsoleOpen, setIsConsoleOpen] = useState(true);
  const [copied, setCopied] = useState(false);
  const [lastRunTime, setLastRunTime] = useState<string>('');
  const [runSuccessToast, setRunSuccessToast] = useState<string>('');
  const [promptInput, setPromptInput] = useState<string>('');
  const [isGeneratingCode, setIsGeneratingCode] = useState<boolean>(false);
  const [isSendingRequest, setIsSendingRequest] = useState<boolean>(false);

  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Load from localStorage or sync with initialCode
  useEffect(() => {
    const storageKey = `academic_editor_saved_${lessonId || 'default'}`;
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && typeof parsed.html === 'string' && typeof parsed.css === 'string' && typeof parsed.js === 'string') {
          setCode(parsed);
          updatePreview(parsed);
          return;
        }
      }
    } catch (e) {
      console.error('Failed to parse localStorage code:', e);
    }
    setCode(initialCode);
    updatePreview(initialCode);
  }, [initialCode, lessonId]);

  // Keyboard shortcut Ctrl+Enter or Cmd+Enter to execute code
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        handleRunCode();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [code]);

  // Listen to messages from the sandbox iframe (console + real network requests)
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (!event.data) return;

      if (event.data.source === 'academic-iframe-console') {
        const now = new Date().toLocaleTimeString('ar-SA', { hour12: false });
        setConsoleLogs((prev) => [
          ...prev,
          {
            type: event.data.type || 'log',
            text: String(event.data.message),
            time: now,
          },
        ]);
      } else if (event.data.source === 'academic-iframe-network' && event.data.event) {
        setNetworkLogs((prev) => [
          event.data.event,
          ...prev.slice(0, 49),
        ]);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  const updatePreview = (currentCode = code) => {
    const combinedDoc = `
      <!DOCTYPE html>
      <html lang="ar" dir="rtl">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <style>
            ${currentCode.css}
          </style>
          <script>
            // Intercept console and real network messages and send to parent
            (function() {
              const origLog = console.log;
              const origError = console.error;
              const origWarn = console.warn;

              console.log = function(...args) {
                origLog.apply(console, args);
                window.parent.postMessage({
                  source: 'academic-iframe-console',
                  type: 'log',
                  message: args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' ')
                }, '*');
              };

              console.error = function(...args) {
                origError.apply(console, args);
                window.parent.postMessage({
                  source: 'academic-iframe-console',
                  type: 'error',
                  message: args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' ')
                }, '*');
              };

              console.warn = function(...args) {
                origWarn.apply(console, args);
                window.parent.postMessage({
                  source: 'academic-iframe-console',
                  type: 'warn',
                  message: args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' ')
                }, '*');
              };

              window.alert = function(msg) {
                origLog.apply(console, ['[تنبيه]: ' + msg]);
                window.parent.postMessage({
                  source: 'academic-iframe-console',
                  type: 'log',
                  message: '🔔 [تنبيه النافذة]: ' + msg
                }, '*');
              };

              window.onerror = function(message, source, lineno, colno, error) {
                window.parent.postMessage({
                  source: 'academic-iframe-console',
                  type: 'error',
                  message: 'خطأ برمجي (سطر ' + lineno + '): ' + message
                }, '*');
                return false;
              };

              // Intercept real Fetch API calls
              const origFetch = window.fetch;
              window.fetch = async function(...args) {
                const startTime = performance.now();
                const url = typeof args[0] === 'string' ? args[0] : (args[0]?.url || 'unknown');
                const options = args[1] || {};
                const method = (options.method || 'GET').toUpperCase();

                try {
                  const res = await origFetch.apply(window, args);
                  const duration = Math.round(performance.now() - startTime);
                  window.parent.postMessage({
                    source: 'academic-iframe-network',
                    event: {
                      id: 'net-' + Date.now() + '-' + Math.random().toString(36).substring(2, 6),
                      method,
                      url,
                      status: res.status,
                      statusText: res.statusText || (res.status === 200 ? 'OK' : 'Response'),
                      duration: duration || 15,
                      type: 'fetch',
                      timestamp: new Date().toLocaleTimeString('ar-SA', { hour12: false })
                    }
                  }, '*');
                  return res;
                } catch(err) {
                  const duration = Math.round(performance.now() - startTime);
                  window.parent.postMessage({
                    source: 'academic-iframe-network',
                    event: {
                      id: 'net-' + Date.now() + '-' + Math.random().toString(36).substring(2, 6),
                      method,
                      url,
                      status: 0,
                      statusText: err?.message || 'Network Error',
                      duration: duration || 20,
                      type: 'fetch',
                      timestamp: new Date().toLocaleTimeString('ar-SA', { hour12: false })
                    }
                  }, '*');
                  throw err;
                }
              };

              // Intercept real XMLHttpRequest calls
              const origXHROpen = XMLHttpRequest.prototype.open;
              const origXHRSend = XMLHttpRequest.prototype.send;
              XMLHttpRequest.prototype.open = function(method, url) {
                this._method = method;
                this._url = url;
                this._startTime = performance.now();
                return origXHROpen.apply(this, arguments);
              };
              XMLHttpRequest.prototype.send = function() {
                this.addEventListener('loadend', () => {
                  const duration = Math.round(performance.now() - (this._startTime || performance.now()));
                  window.parent.postMessage({
                    source: 'academic-iframe-network',
                    event: {
                      id: 'net-' + Date.now() + '-' + Math.random().toString(36).substring(2, 6),
                      method: (this._method || 'GET').toUpperCase(),
                      url: this._url,
                      status: this.status,
                      statusText: this.statusText || (this.status >= 200 && this.status < 300 ? 'OK' : 'Done'),
                      duration: duration || 12,
                      type: 'xhr',
                      timestamp: new Date().toLocaleTimeString('ar-SA', { hour12: false })
                    }
                  }, '*');
                });
                return origXHRSend.apply(this, arguments);
              };
            })();
          </script>
        </head>
        <body>
          ${currentCode.html}
          <script>
            try {
              ${currentCode.js}
            } catch(e) {
              console.error('خطأ تنفيذي في JavaScript:', e.message);
            }
          </script>
        </body>
      </html>
    `;
    setSrcDoc(combinedDoc);
    setLastRunTime(new Date().toLocaleTimeString('ar-SA'));
  };

  const handleRunCode = () => {
    setConsoleLogs([]);
    updatePreview(code);
    setRunSuccessToast('تم تشغيل الكود وتحديث شاشة المعاينة الحية بنجاح 🟢');
    setTimeout(() => setRunSuccessToast(''), 3000);
  };

  const handleResetCode = () => {
    const storageKey = `academic_editor_saved_${lessonId || 'default'}`;
    try {
      localStorage.removeItem(storageKey);
    } catch (e) {}
    setCode(initialCode);
    setConsoleLogs([]);
    setNetworkLogs([]);
    updatePreview(initialCode);
    if (onCodeChange) onCodeChange(initialCode);
    setRunSuccessToast('تمت إعادة ضبط الأكواد إلى الحالة الافتراضية 🔄');
    setTimeout(() => setRunSuccessToast(''), 3000);
  };

  const handleEditorChange = (value: string | undefined) => {
    const val = value || '';
    const updated = { ...code, [activeTab]: val };
    setCode(updated);
    if (onCodeChange) onCodeChange(updated);
    const storageKey = `academic_editor_saved_${lessonId || 'default'}`;
    try {
      localStorage.setItem(storageKey, JSON.stringify(updated));
    } catch (e) {}
  };

  // Natural Language to Code Generation
  const handleGenerateCode = async (promptText: string) => {
    if (!promptText.trim() || isGeneratingCode) return;
    setIsGeneratingCode(true);
    setRunSuccessToast('جاري استدعاء الذكاء الاصطناعي وبناء الأكواد...');

    try {
      const res = await fetch('/api/ai/generate-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: promptText,
          currentCode: code,
          action: 'generate',
          language: 'ar',
        }),
      });

      const data = await res.json();
      if (data.html !== undefined && data.css !== undefined && data.js !== undefined) {
        const newCode = {
          html: data.html,
          css: data.css,
          js: data.js,
        };
        setCode(newCode);
        updatePreview(newCode);
        if (onCodeChange) onCodeChange(newCode);

        const storageKey = `academic_editor_saved_${lessonId || 'default'}`;
        try {
          localStorage.setItem(storageKey, JSON.stringify(newCode));
        } catch (e) {}

        setRunSuccessToast(`✨ تم توليد وتطبيق: "${data.title || 'الواجهة'}" بنجاح 🟢`);
        setTimeout(() => setRunSuccessToast(''), 4000);

        setConsoleLogs((prev) => [
          ...prev,
          {
            type: 'log',
            text: `[توليد ذكاء اصطناعي]: ${data.explanation || 'تم توليد وتطبيق الأكواد في المحرر بنجاح.'}`,
            time: new Date().toLocaleTimeString('ar-SA', { hour12: false }),
          },
        ]);
        setPromptInput('');
      } else {
        throw new Error(data.error || 'استجابة غير صالحة من محرك الذكاء الاصطناعي');
      }
    } catch (err: any) {
      setConsoleLogs((prev) => [
        ...prev,
        {
          type: 'error',
          text: `[خطأ في توليد الكود]: ${err?.message || 'تعذر الاتصال بالخادم'}`,
          time: new Date().toLocaleTimeString('ar-SA', { hour12: false }),
        },
      ]);
      setRunSuccessToast('عذراً، حدث خطأ أثناء توليد الكود.');
      setTimeout(() => setRunSuccessToast(''), 3000);
    } finally {
      setIsGeneratingCode(false);
    }
  };

  // Real Test Network Request trigger
  const handleSendTestRequest = async () => {
    setIsSendingRequest(true);
    try {
      const startTime = performance.now();
      const res = await fetch('/api/mock/courses');
      const data = await res.json();
      const duration = Math.round(performance.now() - startTime);

      setNetworkLogs((prev) => [
        {
          id: 'req-' + Date.now(),
          method: 'GET',
          url: '/api/mock/courses',
          status: res.status,
          statusText: 'OK',
          duration,
          type: 'fetch',
          timestamp: new Date().toLocaleTimeString('ar-SA', { hour12: false }),
        },
        ...prev,
      ]);

      setConsoleLogs((prev) => [
        ...prev,
        {
          type: 'log',
          text: `[طلب شبكة حقيقي 200 OK]: تم استلام ${data.length} مقررات من خادم /api/mock/courses بنجاح.`,
          time: new Date().toLocaleTimeString('ar-SA', { hour12: false }),
        },
      ]);

      setActiveBottomTab('network');
      setIsConsoleOpen(true);
      setRunSuccessToast('تم إرسال طلب الشبكة وتوثيقه في السجل 🌐');
      setTimeout(() => setRunSuccessToast(''), 3000);
    } catch (err: any) {
      setConsoleLogs((prev) => [
        ...prev,
        {
          type: 'error',
          text: `فشل طلب الشبكة: ${err?.message || 'Network Error'}`,
          time: new Date().toLocaleTimeString('ar-SA', { hour12: false }),
        },
      ]);
    } finally {
      setIsSendingRequest(false);
    }
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(code[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getDeviceWidthClass = () => {
    switch (previewDevice) {
      case 'mobile':
        return 'w-[375px] max-w-full';
      case 'tablet':
        return 'w-[768px] max-w-full';
      case 'desktop':
      default:
        return 'w-full';
    }
  };

  return (
    <div className="flex flex-col h-full bg-[#1e2420] text-gray-200 rounded-xl overflow-hidden border border-[#176B45]/40 shadow-xl">
      {/* Top IDE Toolbar */}
      <div className="bg-[#151a17] border-b border-[#2a352e] px-4 py-2.5 flex flex-wrap items-center justify-between gap-3 select-none">
        {/* Editor Tabs */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setActiveTab('html')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'html'
                ? 'bg-[#176B45] text-white shadow-sm'
                : 'bg-[#212a24] text-gray-400 hover:text-white hover:bg-[#28342c]'
            }`}
          >
            <span className="text-[#e34c26] font-mono">&lt;/&gt;</span>
            <span>index.html</span>
          </button>

          <button
            onClick={() => setActiveTab('css')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'css'
                ? 'bg-[#176B45] text-white shadow-sm'
                : 'bg-[#212a24] text-gray-400 hover:text-white hover:bg-[#28342c]'
            }`}
          >
            <span className="text-[#2965f1] font-mono">#</span>
            <span>style.css</span>
          </button>

          <button
            onClick={() => setActiveTab('js')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'js'
                ? 'bg-[#176B45] text-white shadow-sm'
                : 'bg-[#212a24] text-gray-400 hover:text-white hover:bg-[#28342c]'
            }`}
          >
            <span className="text-[#f7df1e] font-mono">JS</span>
            <span>main.js</span>
          </button>
        </div>

        {/* Center / Actions */}
        <div className="flex items-center gap-2">
          {/* Run Code Button */}
          <button
            onClick={handleRunCode}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-[#176B45] hover:bg-[#1f8a5a] text-white text-xs font-bold shadow-md shadow-[#176B45]/30 cursor-pointer active:scale-95 transition-all"
            title="تشغيل الكود وتحديث المعاينة الحية فورياً (Ctrl + Enter)"
          >
            <Play className="w-3.5 h-3.5 fill-white" />
            <span>تشغيل الكود</span>
          </button>

          {/* Send Request Button */}
          <button
            onClick={handleSendTestRequest}
            disabled={isSendingRequest}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#212a24] hover:bg-[#2d3a31] text-[#C6A34A] hover:text-amber-300 text-xs font-bold border border-[#C6A34A]/30 cursor-pointer active:scale-95 transition-all disabled:opacity-50"
            title="إرسال طلب شبكة حقيقي وفحص الاستجابة في سجل الشبكة"
          >
            {isSendingRequest ? (
              <RefreshCw className="w-3.5 h-3.5 animate-spin" />
            ) : (
              <Globe className="w-3.5 h-3.5" />
            )}
            <span>إرسال طلب</span>
          </button>

          {/* Reset Code */}
          <button
            onClick={handleResetCode}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-[#212a24] hover:bg-[#2d3a31] text-gray-300 text-xs font-medium cursor-pointer transition-colors"
            title="إعادة ضبط الأكواد الافتراضية"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">إعادة ضبط</span>
          </button>

          {/* AI Helper trigger */}
          {onAskAiWithCode && (
            <button
              onClick={() => onAskAiWithCode(code)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#C6A34A] to-[#a88636] hover:brightness-110 text-white text-xs font-bold shadow-sm cursor-pointer transition-all"
              title="فحص الكود واكتشاف الأخطاء بالذكاء الاصطناعي"
            >
              <Sparkles className="w-3.5 h-3.5 text-yellow-200" />
              <span>مساعد الذكاء الاصطناعي</span>
            </button>
          )}
        </div>

        {/* Right Preview Controls */}
        <div className="flex items-center gap-2 text-xs">
          {/* Device switcher */}
          <div className="flex items-center bg-[#212a24] rounded-lg p-0.5 border border-[#2d3a31]">
            <button
              onClick={() => setPreviewDevice('desktop')}
              className={`p-1 rounded ${previewDevice === 'desktop' ? 'bg-[#176B45] text-white' : 'text-gray-400 hover:text-white'}`}
              title="شاشة حاسوب كاملة"
            >
              <Monitor className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setPreviewDevice('tablet')}
              className={`p-1 rounded ${previewDevice === 'tablet' ? 'bg-[#176B45] text-white' : 'text-gray-400 hover:text-white'}`}
              title="جهاز لوحي (768px)"
            >
              <Tablet className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setPreviewDevice('mobile')}
              className={`p-1 rounded ${previewDevice === 'mobile' ? 'bg-[#176B45] text-white' : 'text-gray-400 hover:text-white'}`}
              title="هاتف ذكي (375px)"
            >
              <Smartphone className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Split orientation */}
          <div className="hidden sm:flex items-center bg-[#212a24] rounded-lg p-0.5 border border-[#2d3a31]">
            <button
              onClick={() => setSplitOrientation('horizontal')}
              className={`p-1 rounded ${splitOrientation === 'horizontal' ? 'bg-[#176B45] text-white' : 'text-gray-400 hover:text-white'}`}
              title="تقسيم جانبي"
            >
              <Columns className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setSplitOrientation('vertical')}
              className={`p-1 rounded ${splitOrientation === 'vertical' ? 'bg-[#176B45] text-white' : 'text-gray-400 hover:text-white'}`}
              title="تقسيم رأسي"
            >
              <Rows className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Copy code */}
          <button
            onClick={handleCopyCode}
            className="p-1.5 rounded-lg bg-[#212a24] hover:bg-[#2d3a31] text-gray-400 hover:text-white transition-colors"
            title="نسخ الكود الحالي"
          >
            {copied ? <CheckCircle2 className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Natural Language Prompt to Code Bar (تنفيذ التعليمات) */}
      <div className="bg-[#18201b] border-b border-[#2a352e] px-4 py-2.5 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-2.5">
        <div className="flex-1 flex items-center gap-2 bg-[#121614] border border-[#2d3a31] focus-within:border-[#176B45] rounded-lg px-3 py-1.5 transition-colors">
          <Wand2 className="w-4 h-4 text-[#C6A34A] shrink-0" />
          <input
            type="text"
            value={promptInput}
            onChange={(e) => setPromptInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleGenerateCode(promptInput);
              }
            }}
            placeholder="اكتب تعليمة برمجية بلغة طبيعية (مثال: أنشئ صفحة تسجيل دخول تحتوي على اسم مستخدم وكلمة مرور وزر تسجيل)..."
            className="w-full bg-transparent border-0 text-xs text-gray-200 placeholder-gray-500 focus:outline-none"
            disabled={isGeneratingCode}
          />
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => handleGenerateCode(promptInput)}
            disabled={!promptInput.trim() || isGeneratingCode}
            className="flex items-center justify-center gap-1.5 px-4 py-1.5 rounded-lg bg-gradient-to-r from-[#176B45] to-[#125537] hover:brightness-110 text-white text-xs font-bold shadow-md shadow-[#176B45]/20 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            {isGeneratingCode ? (
              <RefreshCw className="w-3.5 h-3.5 animate-spin text-[#C6A34A]" />
            ) : (
              <Sparkles className="w-3.5 h-3.5 text-[#C6A34A]" />
            )}
            <span>{isGeneratingCode ? 'جاري البناء...' : 'توليد وتطبيق الكود'}</span>
          </button>
        </div>
      </div>

      {/* Quick prompt chips bar */}
      <div className="bg-[#141916] border-b border-[#242e27] px-4 py-1.5 flex items-center gap-2 overflow-x-auto text-[11px] text-gray-400 scrollbar-none">
        <span className="text-gray-500 shrink-0 font-medium">أمثلة سريعة:</span>
        <button
          onClick={() => handleGenerateCode('أنشئ صفحة تسجيل دخول عصرية تحتوي على اسم مستخدم وكلمة مرور وزر دخول وتنسيق متجاوب')}
          disabled={isGeneratingCode}
          className="px-2.5 py-0.5 rounded-full bg-[#1e2721] hover:bg-[#28352d] hover:text-white text-gray-300 border border-[#2a362f] cursor-pointer shrink-0 transition-colors"
        >
          🔐 صفحة تسجيل دخول
        </button>
        <button
          onClick={() => handleGenerateCode('أنشئ بطاقة منتج متجر إلكتروني مع صورة وسعر وزر إضافة للسلة وتقييم نجوم')}
          disabled={isGeneratingCode}
          className="px-2.5 py-0.5 rounded-full bg-[#1e2721] hover:bg-[#28352d] hover:text-white text-gray-300 border border-[#2a362f] cursor-pointer shrink-0 transition-colors"
        >
          🛒 بطاقة منتج متجر
        </button>
        <button
          onClick={() => handleGenerateCode('أنشئ قائمة مهام تفاعلية To-Do List مع إمكانية إضافة مهمة وحذفها وتعليمها كمكتملة')}
          disabled={isGeneratingCode}
          className="px-2.5 py-0.5 rounded-full bg-[#1e2721] hover:bg-[#28352d] hover:text-white text-gray-300 border border-[#2a362f] cursor-pointer shrink-0 transition-colors"
        >
          📝 قائمة مهام ToDo
        </button>
        <button
          onClick={() => handleGenerateCode('أنشئ مؤقت زمني وعداد رقمي تفاعلي مع أزرار تشغيل وإيقاف وإعادة تصفير')}
          disabled={isGeneratingCode}
          className="px-2.5 py-0.5 rounded-full bg-[#1e2721] hover:bg-[#28352d] hover:text-white text-gray-300 border border-[#2a362f] cursor-pointer shrink-0 transition-colors"
        >
          ⏱️ مؤقت وعداد تفاعلي
        </button>
        <button
          onClick={() => handleGenerateCode('أنشئ تطبيق استعلام وعرض بيانات يجلب المقررات عبر fetch من الرابط /api/mock/courses ويعرضها في شبكة بطاقات')}
          disabled={isGeneratingCode}
          className="px-2.5 py-0.5 rounded-full bg-[#1e2721] hover:bg-[#28352d] hover:text-white text-gray-300 border border-[#2a362f] cursor-pointer shrink-0 transition-colors"
        >
          🌐 تطبيق جلب بيانات API
        </button>
      </div>

      {/* Main Workspace (Split View) */}
      <div className={`flex-1 flex ${splitOrientation === 'vertical' ? 'flex-col' : 'flex-col lg:flex-row'} overflow-hidden min-h-[480px]`}>
        
        {/* Left/Top: Code Editor Panel */}
        <div className={`flex flex-col ${splitOrientation === 'vertical' ? 'h-1/2' : 'w-full lg:w-1/2'} border-b lg:border-b-0 lg:border-l border-[#2a352e] bg-[#1a1f1b]`}>
          <div className="flex-1 relative">
            <Editor
              height="100%"
              language={activeTab === 'js' ? 'javascript' : activeTab}
              theme="vs-dark"
              value={code[activeTab]}
              onChange={handleEditorChange}
              options={{
                fontSize: 14,
                fontFamily: "'JetBrains Mono', Consolas, Monaco, monospace",
                minimap: { enabled: false },
                scrollBeyondLastLine: false,
                wordWrap: 'on',
                lineNumbers: 'on',
                renderWhitespace: 'none',
                tabSize: 2,
                automaticLayout: true,
              }}
              loading={
                <div className="flex items-center justify-center h-full text-gray-400 gap-2">
                  <Code className="w-5 h-5 animate-spin text-[#176B45]" />
                  <span>جاري تحميل محرر الأكواد Monaco...</span>
                </div>
              }
            />
          </div>
        </div>

        {/* Right/Bottom: Preview & Console/Network Panel */}
        <div className={`flex flex-col ${splitOrientation === 'vertical' ? 'h-1/2' : 'w-full lg:w-1/2'} bg-[#0f1311]`}>
          
          {/* Preview Bar Header */}
          <div className="bg-[#151a17] border-b border-[#2a352e] px-4 py-2 flex items-center justify-between text-xs text-gray-400">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
              <span className="font-semibold text-gray-200">المعاينة الحية (Live Preview)</span>
              {lastRunTime && (
                <span className="text-[11px] text-gray-500">آخر تحديث: {lastRunTime}</span>
              )}
            </div>
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => {
                  setActiveBottomTab('console');
                  setIsConsoleOpen(true);
                }}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-bold cursor-pointer transition-colors ${
                  isConsoleOpen && activeBottomTab === 'console'
                    ? 'bg-[#176B45] text-white shadow-xs'
                    : 'bg-[#212a24] text-gray-400 hover:text-white'
                }`}
                title="عرض مخرجات الكونسول وسجل الأخطاء"
              >
                <Terminal className="w-3 h-3" />
                <span>الكونسول ({consoleLogs.length})</span>
              </button>

              <button
                onClick={() => {
                  setActiveBottomTab('network');
                  setIsConsoleOpen(true);
                }}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-bold cursor-pointer transition-colors ${
                  isConsoleOpen && activeBottomTab === 'network'
                    ? 'bg-[#176B45] text-white shadow-xs'
                    : 'bg-[#212a24] text-gray-400 hover:text-white'
                }`}
                title="عرض سجل أحداث الشبكة وطلبات HTTP"
              >
                <Globe className="w-3 h-3 text-[#C6A34A]" />
                <span>سجل الشبكة ({networkLogs.length})</span>
              </button>

              <button
                onClick={() => setIsConsoleOpen(!isConsoleOpen)}
                className="p-1 rounded bg-[#212a24] hover:bg-[#2d3a31] text-gray-400 hover:text-white transition-colors"
                title={isConsoleOpen ? 'إخفاء اللوحة السفلية' : 'إظهار اللوحة السفلية'}
              >
                <Maximize2 className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Iframe Preview Container */}
          <div className="flex-1 bg-[#ffffff] overflow-auto flex justify-center items-start p-2 relative">
            {runSuccessToast && (
              <div className="absolute top-4 z-20 bg-[#176B45] text-white px-4 py-2 rounded-xl text-xs font-bold shadow-lg flex items-center gap-2 animate-bounce border border-[#C6A34A]/50">
                <CheckCircle2 className="w-4 h-4 text-[#C6A34A]" />
                <span>{runSuccessToast}</span>
              </div>
            )}
            <iframe
              ref={iframeRef}
              srcDoc={srcDoc}
              title="Live Academic Preview"
              sandbox="allow-scripts allow-modals allow-same-origin allow-forms allow-popups"
              className={`h-full border-0 bg-white transition-all shadow-md ${getDeviceWidthClass()}`}
            />
          </div>

          {/* Bottom Drawer: Console & Network Events */}
          {isConsoleOpen && (
            <div className="h-44 bg-[#131714] border-t border-[#2a352e] flex flex-col text-xs font-mono">
              {/* Drawer Tab Headers */}
              <div className="bg-[#1a201c] px-3 py-1.5 border-b border-[#2a352e] flex items-center justify-between text-[11px] text-gray-400">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setActiveBottomTab('console')}
                    className={`flex items-center gap-1.5 font-sans font-bold cursor-pointer transition-colors ${
                      activeBottomTab === 'console' ? 'text-white border-b-2 border-[#176B45] pb-0.5' : 'text-gray-400 hover:text-gray-200'
                    }`}
                  >
                    <Terminal className="w-3.5 h-3.5 text-[#C6A34A]" />
                    <span>مخرجات الكونسول والأخطاء ({consoleLogs.length})</span>
                  </button>

                  <button
                    onClick={() => setActiveBottomTab('network')}
                    className={`flex items-center gap-1.5 font-sans font-bold cursor-pointer transition-colors ${
                      activeBottomTab === 'network' ? 'text-white border-b-2 border-[#176B45] pb-0.5' : 'text-gray-400 hover:text-gray-200'
                    }`}
                  >
                    <Globe className="w-3.5 h-3.5 text-blue-400" />
                    <span>سجل أحداث الشبكة وطلبات HTTP ({networkLogs.length})</span>
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  {activeBottomTab === 'network' && (
                    <button
                      onClick={handleSendTestRequest}
                      disabled={isSendingRequest}
                      className="text-[#C6A34A] hover:text-amber-300 font-sans text-[11px] font-bold flex items-center gap-1 cursor-pointer bg-[#222a24] px-2 py-0.5 rounded border border-[#C6A34A]/30"
                    >
                      <RefreshCw className={`w-3 h-3 ${isSendingRequest ? 'animate-spin' : ''}`} />
                      <span>تجربة طلب حقيقي</span>
                    </button>
                  )}
                  <button
                    onClick={() => {
                      if (activeBottomTab === 'console') setConsoleLogs([]);
                      else setNetworkLogs([]);
                    }}
                    className="hover:text-white text-gray-500 font-sans cursor-pointer text-[11px]"
                  >
                    مسح السجل
                  </button>
                </div>
              </div>

              {/* Drawer Content */}
              <div className="flex-1 overflow-y-auto p-2.5 space-y-1.5 text-left" dir="ltr">
                {activeBottomTab === 'console' ? (
                  consoleLogs.length === 0 ? (
                    <div className="text-gray-500 italic text-[11px] text-center pt-5 font-sans" dir="rtl">
                      لا توجد رسائل أخطاء أو مخرجات. الكود سليم وجاهز للتنفيذ عبر زر "تشغيل الكود".
                    </div>
                  ) : (
                    consoleLogs.map((log, index) => (
                      <div
                        key={index}
                        className={`flex items-start gap-2 py-0.5 text-xs ${
                          log.type === 'error'
                            ? 'text-red-400 bg-red-950/20 px-1 rounded'
                            : log.type === 'warn'
                            ? 'text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      >
                        <span className="text-gray-600 text-[10px] select-none font-mono">[{log.time}]</span>
                        {log.type === 'error' && <AlertCircle className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />}
                        <span className="break-all">{log.text}</span>
                      </div>
                    ))
                  )
                ) : (
                  networkLogs.length === 0 ? (
                    <div className="text-gray-500 italic text-[11px] text-center pt-5 font-sans" dir="rtl">
                      لم يتم تسجيل أي طلبات شبكة بعد. استخدم دالة <code className="text-[#C6A34A]">fetch()</code> أو <code className="text-[#C6A34A]">XMLHttpRequest</code> داخل كود JavaScript، أو اضغط زر "إرسال طلب".
                    </div>
                  ) : (
                    <div className="space-y-1">
                      <div className="grid grid-cols-12 text-[10px] text-gray-400 uppercase tracking-wider pb-1 border-b border-[#242e27] font-sans font-bold">
                        <span className="col-span-2">Method</span>
                        <span className="col-span-2">Status</span>
                        <span className="col-span-4">URL</span>
                        <span className="col-span-2">Time</span>
                        <span className="col-span-2 text-right">Timestamp</span>
                      </div>
                      {networkLogs.map((item) => (
                        <div
                          key={item.id}
                          className="grid grid-cols-12 items-center text-xs py-1 px-1 rounded hover:bg-[#1c241f] transition-colors font-mono"
                        >
                          <span className="col-span-2">
                            <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                              item.method === 'GET' ? 'bg-blue-900/60 text-blue-300' :
                              item.method === 'POST' ? 'bg-green-900/60 text-green-300' :
                              'bg-purple-900/60 text-purple-300'
                            }`}>
                              {item.method}
                            </span>
                          </span>

                          <span className="col-span-2">
                            <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                              item.status >= 200 && item.status < 300
                                ? 'bg-emerald-950 text-emerald-400 border border-emerald-800/40'
                                : 'bg-red-950 text-red-400 border border-red-800/40'
                            }`}>
                              {item.status || 'ERR'} {item.statusText}
                            </span>
                          </span>

                          <span className="col-span-4 truncate text-gray-200" title={item.url}>
                            {item.url}
                          </span>

                          <span className="col-span-2 text-gray-400 text-[11px]">
                            {item.duration} ms ({item.type})
                          </span>

                          <span className="col-span-2 text-right text-gray-500 text-[10px]">
                            {item.timestamp}
                          </span>
                        </div>
                      ))}
                    </div>
                  )
                )}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

