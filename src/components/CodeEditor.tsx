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
  Code
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
}

export const CodeEditor: React.FC<CodeEditorProps> = ({
  initialCode,
  onCodeChange,
  onAskAiWithCode,
  lessonObjective,
}) => {
  const [activeTab, setActiveTab] = useState<'html' | 'css' | 'js'>('html');
  const [code, setCode] = useState(initialCode);
  const [srcDoc, setSrcDoc] = useState('');
  const [previewDevice, setPreviewDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [splitOrientation, setSplitOrientation] = useState<'horizontal' | 'vertical'>('horizontal');
  const [consoleLogs, setConsoleLogs] = useState<Array<{ type: 'log' | 'error' | 'warn'; text: string; time: string }>>([]);
  const [isConsoleOpen, setIsConsoleOpen] = useState(true);
  const [copied, setCopied] = useState(false);
  const [lastRunTime, setLastRunTime] = useState<string>('');
  const [runSuccessToast, setRunSuccessToast] = useState<string>('');

  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Sync when initialCode changes (e.g., navigating between lessons)
  useEffect(() => {
    setCode(initialCode);
    updatePreview(initialCode);
  }, [initialCode]);

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

  // Listen to messages from the sandbox iframe
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data && event.data.source === 'academic-iframe-console') {
        const now = new Date().toLocaleTimeString('ar-SA', { hour12: false });
        setConsoleLogs((prev) => [
          ...prev,
          {
            type: event.data.type || 'log',
            text: String(event.data.message),
            time: now,
          },
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
            // Intercept console messages and send to parent
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
    setCode(initialCode);
    setConsoleLogs([]);
    updatePreview(initialCode);
    if (onCodeChange) onCodeChange(initialCode);
  };

  const handleEditorChange = (value: string | undefined) => {
    const val = value || '';
    const updated = { ...code, [activeTab]: val };
    setCode(updated);
    if (onCodeChange) onCodeChange(updated);
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
            title="تشغيل الكود وتحديث المعاينة (Ctrl + Enter)"
          >
            <Play className="w-3.5 h-3.5 fill-white" />
            <span>تشغيل الكود</span>
          </button>

          {/* Reset Code */}
          <button
            onClick={handleResetCode}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-[#212a24] hover:bg-[#2d3a31] text-gray-300 text-xs font-medium cursor-pointer transition-colors"
            title="إعادة تعيين الكود الأصلي"
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
              title="شاشة حاسوب"
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

        {/* Right/Bottom: Preview & Console Panel */}
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
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsConsoleOpen(!isConsoleOpen)}
                className={`flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium transition-colors ${
                  isConsoleOpen ? 'bg-[#176B45] text-white' : 'bg-[#212a24] text-gray-400 hover:text-white'
                }`}
              >
                <Terminal className="w-3 h-3" />
                <span>الكونسول ({consoleLogs.length})</span>
              </button>
            </div>
          </div>

          {/* Iframe Preview Container */}
          <div className="flex-1 bg-[#ffffff] overflow-auto flex justify-center items-start p-2 relative">
            {runSuccessToast && (
              <div className="absolute top-4 z-20 bg-[#176B45] text-white px-4 py-2 rounded-xl text-xs font-bold shadow-lg flex items-center gap-2 animate-bounce">
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

          {/* Console / Error Messages Section */}
          {isConsoleOpen && (
            <div className="h-36 bg-[#131714] border-t border-[#2a352e] flex flex-col text-xs font-mono">
              <div className="bg-[#1a201c] px-3 py-1.5 border-b border-[#2a352e] flex items-center justify-between text-[11px] text-gray-400">
                <span className="flex items-center gap-1.5 text-gray-300 font-sans font-bold">
                  <Terminal className="w-3.5 h-3.5 text-[#C6A34A]" />
                  <span>مخرجات الكونسول وسجل الأخطاء</span>
                </span>
                <button
                  onClick={() => setConsoleLogs([])}
                  className="hover:text-white text-gray-500 cursor-pointer"
                >
                  مسح السجل
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-2.5 space-y-1.5 text-left" dir="ltr">
                {consoleLogs.length === 0 ? (
                  <div className="text-gray-500 italic text-[11px] text-center pt-3 font-sans">
                    لا توجد رسائل أخطاء. الكود سليم وجاهز للتنفيذ.
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
                      <span className="text-gray-600 text-[10px] select-none">[{log.time}]</span>
                      {log.type === 'error' && <AlertCircle className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />}
                      <span className="break-all">{log.text}</span>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
