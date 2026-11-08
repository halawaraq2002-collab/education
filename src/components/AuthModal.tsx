import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { 
  X, 
  BookOpen, 
  GraduationCap, 
  Lock, 
  Mail, 
  User as UserIcon, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: 'login' | 'register' | 'forgot';
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  defaultTab = 'login',
}) => {
  const { signInWithGoogle, loginAsDemoStudent, loginAsDemoAdmin } = useAuth();
  const [tab, setTab] = useState<'login' | 'register' | 'forgot'>(defaultTab);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [academicId, setAcademicId] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (tab === 'forgot') {
      setSuccessMsg('تم إرسال رابط استعادة كلمة المرور إلى بريدك الجامعي بنجاح.');
      setTimeout(() => {
        setSuccessMsg('');
        setTab('login');
      }, 2500);
      return;
    }

    // Default academic sign in
    loginAsDemoStudent();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl border border-[#dbe6df] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Top Header */}
        <div className="bg-gradient-to-r from-[#176B45] to-[#115234] text-white p-6 text-center relative border-b-4 border-[#C6A34A]">
          <button
            onClick={onClose}
            className="absolute left-4 top-4 text-white/80 hover:text-white p-1 rounded-lg hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="w-12 h-12 mx-auto rounded-xl bg-white/10 flex items-center justify-center relative mb-3">
            <BookOpen className="w-6 h-6 text-white" />
            <GraduationCap className="w-4 h-4 text-[#C6A34A] absolute -top-1 -right-1" />
          </div>

          <h3 className="text-xl font-bold font-['Cairo']">
            {tab === 'login' && 'تسجيل الدخول الأكاديمي'}
            {tab === 'register' && 'إنشاء ملف طالب جديد'}
            {tab === 'forgot' && 'استعادة كلمة المرور'}
          </h3>
          <p className="text-xs text-white/80 mt-1">
            بوابة الطلاب والمشرفين — الجامعة الوطنية الخاصة
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-[#E8F2EC] bg-[#FAF8F2] text-xs font-bold text-center">
          <button
            onClick={() => setTab('login')}
            className={`flex-1 py-3 transition-colors ${
              tab === 'login'
                ? 'border-b-2 border-[#176B45] text-[#176B45] bg-white'
                : 'text-[#747C76] hover:text-[#176B45]'
            }`}
          >
            دخول طالب
          </button>
          <button
            onClick={() => setTab('register')}
            className={`flex-1 py-3 transition-colors ${
              tab === 'register'
                ? 'border-b-2 border-[#176B45] text-[#176B45] bg-white'
                : 'text-[#747C76] hover:text-[#176B45]'
            }`}
          >
            تسجيل جديد
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6">
          {successMsg && (
            <div className="mb-4 p-3 rounded-lg bg-green-50 border border-green-200 text-green-800 text-xs flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
              <span>{successMsg}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {tab === 'register' && (
              <>
                <div>
                  <label className="block text-xs font-bold text-[#252B27] mb-1">الاسم الثلاثي:</label>
                  <div className="relative">
                    <UserIcon className="w-4 h-4 text-gray-400 absolute right-3 top-3" />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="محمد بن عبد الله آل سعود"
                      className="w-full pr-9 pl-3 py-2 border border-gray-200 rounded-lg text-xs sm:text-sm focus:border-[#176B45] outline-hidden"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#252B27] mb-1">الرقم الجامعي (Academic ID):</label>
                  <input
                    type="text"
                    required
                    value={academicId}
                    onChange={(e) => setAcademicId(e.target.value)}
                    placeholder="441008920"
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs sm:text-sm font-mono focus:border-[#176B45] outline-hidden"
                  />
                </div>
              </>
            )}

            <div>
              <label className="block text-xs font-bold text-[#252B27] mb-1">البريد الأكاديمي أو الشخصي:</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-gray-400 absolute right-3 top-3" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="student@university.edu.sa"
                  className="w-full pr-9 pl-3 py-2 border border-gray-200 rounded-lg text-xs sm:text-sm focus:border-[#176B45] outline-hidden"
                />
              </div>
            </div>

            {tab !== 'forgot' && (
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="block text-xs font-bold text-[#252B27]">كلمة المرور:</label>
                  {tab === 'login' && (
                    <button
                      type="button"
                      onClick={() => setTab('forgot')}
                      className="text-[11px] text-[#176B45] hover:underline"
                    >
                      نسيت كلمة المرور؟
                    </button>
                  )}
                </div>
                <div className="relative">
                  <Lock className="w-4 h-4 text-gray-400 absolute right-3 top-3" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pr-9 pl-3 py-2 border border-gray-200 rounded-lg text-xs sm:text-sm focus:border-[#176B45] outline-hidden"
                  />
                </div>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-2.5 rounded-lg bg-[#176B45] hover:bg-[#0f482e] text-white text-sm font-bold shadow-md shadow-[#176B45]/20 transition-all cursor-pointer"
            >
              {tab === 'login' && 'تسجيل الدخول'}
              {tab === 'register' && 'إنشاء الحساب والبدء'}
              {tab === 'forgot' && 'إرسال رابط الاستعادة'}
            </button>
          </form>

          {/* Social / Google Sign-in */}
          <div className="my-5 flex items-center">
            <div className="flex-1 border-t border-gray-200"></div>
            <span className="px-3 text-[11px] text-[#747C76]">أو عبر حساب Google الموثق</span>
            <div className="flex-1 border-t border-gray-200"></div>
          </div>

          <button
            onClick={async () => {
              await signInWithGoogle();
              onClose();
            }}
            className="w-full py-2.5 px-4 rounded-lg border border-gray-300 hover:border-[#176B45] bg-white hover:bg-gray-50 text-xs font-semibold text-gray-700 flex items-center justify-center gap-2 shadow-2xs transition-all cursor-pointer"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
            </svg>
            <span>تسجيل الدخول الفوري بحساب Google (Firebase)</span>
          </button>

          {/* Quick Demo Evaluation Buttons */}
          <div className="mt-5 p-3 rounded-xl bg-[#FAF8F2] border border-[#C6A34A]/30 text-center">
            <span className="text-[11px] font-bold text-[#176B45] block mb-2">
              تقييم فوري لمشروع التخرج:
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  loginAsDemoStudent();
                  onClose();
                }}
                className="flex-1 py-1.5 px-2 rounded-lg bg-[#176B45] text-white text-xs font-semibold hover:bg-[#0f482e]"
              >
                دخول كطالب متفوق
              </button>
              <button
                onClick={() => {
                  loginAsDemoAdmin();
                  onClose();
                }}
                className="flex-1 py-1.5 px-2 rounded-lg bg-[#C6A34A] text-white text-xs font-semibold hover:bg-[#a88636]"
              >
                دخول كمشرف أكاديمي
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
