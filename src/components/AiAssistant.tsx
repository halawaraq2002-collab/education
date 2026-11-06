import React, { useState, useRef, useEffect } from 'react';
import { 
  Sparkles, 
  Send, 
  HelpCircle, 
  AlertTriangle, 
  Lightbulb, 
  Wrench, 
  BookOpen, 
  X, 
  RotateCcw,
  Bot,
  User,
  Copy,
  Check
} from 'lucide-react';

interface AiAssistantProps {
  currentCode: {
    html: string;
    css: string;
    js: string;
  };
  lessonContext?: {
    courseTitle?: string;
    lessonTitle?: string;
    objective?: string;
  };
  onClose?: () => void;
}

interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  timestamp: string;
}

export const AiAssistant: React.FC<AiAssistantProps> = ({
  currentCode,
  lessonContext,
  onClose,
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'ai',
      text: `أهلاً بك يا بطل! 👋 أنا مرشدك الأكاديمي الذكي في تطوير الويب.
سواء كنت تبحث عن تلميح للحل دون حرق التمرين، أو تواجه خطأ برمجياً محيراً، أو تود فهم كود معين بالتفصيل، أنا هنا لمساعدتك خطوة بخطوة.`,
      timestamp: new Date().toLocaleTimeString('ar-SA', { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const sendQuery = async (mode: 'analyze' | 'explain' | 'hint' | 'debug' | 'chat', promptText?: string) => {
    const textToSend = promptText || inputText;
    if (!textToSend.trim() && mode === 'chat') return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: textToSend || getModeLabel(mode),
      timestamp: new Date().toLocaleTimeString('ar-SA', { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!promptText) setInputText('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/ai/assist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          code: currentCode,
          mode,
          prompt: textToSend,
          lessonContext,
        }),
      });

      const data = await response.json();
      const aiReply = data.reply || data.error || 'عذراً، حدث خطأ أثناء معالجة الرد البرمجي.';

      setMessages((prev) => [
        ...prev,
        {
          id: `ai-${Date.now()}`,
          sender: 'ai',
          text: aiReply,
          timestamp: new Date().toLocaleTimeString('ar-SA', { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } catch (err: unknown) {
      const error = err as Error;
      setMessages((prev) => [
        ...prev,
        {
          id: `ai-err-${Date.now()}`,
          sender: 'ai',
          text: `عذراً، تعذر الاتصال بمحرك الذكاء الاصطناعي الأكاديمي: ${error?.message || 'يرجى التحقق من الاتصال بالشبكة'}.`,
          timestamp: new Date().toLocaleTimeString('ar-SA', { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const getModeLabel = (mode: string) => {
    switch (mode) {
      case 'analyze':
        return '🔍 فحص الكود واكتشاف الأخطاء البرمجية';
      case 'hint':
        return '💡 أحتاج تلميحاً ذكياً لمساعدتي في الحل';
      case 'debug':
        return '🛠️ كيف أصلح الكود خطوة بخطوة؟';
      case 'explain':
        return '📖 اشرح لي طريقة عمل هذا الكود ببساطة';
      default:
        return '';
    }
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="flex flex-col h-full bg-white rounded-xl border border-[#dbe6df] shadow-2xl overflow-hidden">
      {/* Top Header */}
      <div className="bg-gradient-to-r from-[#176B45] to-[#125537] text-white p-4 flex items-center justify-between shadow-xs">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#C6A34A] text-white flex items-center justify-center shadow-inner">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-sm flex items-center gap-2">
              المرشد الأكاديمي الذكي
              <span className="text-[10px] bg-white/20 text-white px-1.5 py-0.5 rounded font-normal">
                Gemini AI
              </span>
            </h3>
            <p className="text-[11px] text-white/80">تحليل الأخطاء، تلميحات توجيهية، وشروحات مبسطة</p>
          </div>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Quick Action Suggestion Buttons */}
      <div className="bg-[#FAF8F2] border-b border-[#E8F2EC] p-2.5 flex flex-wrap gap-1.5 select-none text-xs">
        <button
          onClick={() => sendQuery('analyze')}
          disabled={isLoading}
          className="px-2.5 py-1 rounded-full bg-white border border-[#C6A34A]/40 text-[#252B27] hover:bg-[#C6A34A] hover:text-white transition-all font-medium flex items-center gap-1 cursor-pointer disabled:opacity-50"
        >
          <AlertTriangle className="w-3.5 h-3.5 text-[#C6A34A]" />
          <span>فحص الأخطاء</span>
        </button>

        <button
          onClick={() => sendQuery('hint')}
          disabled={isLoading}
          className="px-2.5 py-1 rounded-full bg-white border border-[#176B45]/30 text-[#176B45] hover:bg-[#176B45] hover:text-white transition-all font-medium flex items-center gap-1 cursor-pointer disabled:opacity-50"
        >
          <Lightbulb className="w-3.5 h-3.5 text-yellow-600" />
          <span>تلميح ذكي</span>
        </button>

        <button
          onClick={() => sendQuery('debug')}
          disabled={isLoading}
          className="px-2.5 py-1 rounded-full bg-white border border-gray-300 text-gray-700 hover:bg-[#176B45] hover:text-white transition-all font-medium flex items-center gap-1 cursor-pointer disabled:opacity-50"
        >
          <Wrench className="w-3.5 h-3.5" />
          <span>إصلاح خطوة بخطوة</span>
        </button>

        <button
          onClick={() => sendQuery('explain')}
          disabled={isLoading}
          className="px-2.5 py-1 rounded-full bg-white border border-gray-300 text-gray-700 hover:bg-[#176B45] hover:text-white transition-all font-medium flex items-center gap-1 cursor-pointer disabled:opacity-50"
        >
          <BookOpen className="w-3.5 h-3.5 text-blue-600" />
          <span>شرح المفهوم</span>
        </button>
      </div>

      {/* Chat Messages Body */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#F9FAF9]">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-start gap-2.5 ${
              msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
            }`}
          >
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-white text-xs ${
                msg.sender === 'user' ? 'bg-[#176B45]' : 'bg-[#C6A34A]'
              }`}
            >
              {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
            </div>

            <div
              className={`max-w-[85%] rounded-2xl p-3.5 text-sm shadow-xs ${
                msg.sender === 'user'
                  ? 'bg-[#176B45] text-white rounded-tr-none'
                  : 'bg-white text-[#252B27] border border-[#dbe6df] rounded-tl-none'
              }`}
            >
              <div className="whitespace-pre-wrap leading-relaxed font-sans select-text">
                {msg.text}
              </div>
              <div
                className={`flex items-center justify-between mt-2 pt-1 border-t text-[10px] ${
                  msg.sender === 'user' ? 'border-white/10 text-white/70' : 'border-gray-100 text-gray-400'
                }`}
              >
                <span>{msg.timestamp}</span>
                {msg.sender === 'ai' && (
                  <button
                    onClick={() => copyToClipboard(msg.text, msg.id)}
                    className="hover:text-[#176B45] flex items-center gap-1 cursor-pointer"
                    title="نسخ الرد"
                  >
                    {copiedId === msg.id ? (
                      <Check className="w-3 h-3 text-green-600" />
                    ) : (
                      <Copy className="w-3 h-3" />
                    )}
                    <span>{copiedId === msg.id ? 'تم النسخ' : 'نسخ'}</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-[#C6A34A] text-white flex items-center justify-center">
              <Bot className="w-4 h-4" />
            </div>
            <div className="bg-white border border-[#dbe6df] rounded-2xl rounded-tl-none p-3 shadow-xs flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#176B45] animate-bounce"></span>
              <span className="w-2 h-2 rounded-full bg-[#176B45] animate-bounce [animation-delay:0.2s]"></span>
              <span className="w-2 h-2 rounded-full bg-[#176B45] animate-bounce [animation-delay:0.4s]"></span>
              <span className="text-xs text-gray-500 font-medium mr-2">جاري فحص الكود والتفكير الأكاديمي...</span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Chat Input Bar */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendQuery('chat');
        }}
        className="p-3 bg-white border-t border-[#E8F2EC] flex items-center gap-2"
      >
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="اسأل المرشد الأكاديمي عن أي سطر برمجي أو مفهوم..."
          disabled={isLoading}
          className="flex-1 px-3.5 py-2.5 rounded-xl border border-[#dbe6df] focus:outline-hidden focus:border-[#176B45] text-sm text-[#252B27] placeholder:text-gray-400"
        />
        <button
          type="submit"
          disabled={isLoading || !inputText.trim()}
          className="p-2.5 rounded-xl bg-[#176B45] hover:bg-[#0f482e] text-white disabled:opacity-40 transition-colors shadow-xs cursor-pointer"
          title="إرسال"
        >
          <Send className="w-4 h-4 rtl:rotate-180" />
        </button>
      </form>
    </div>
  );
};
