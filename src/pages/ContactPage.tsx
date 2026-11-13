import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Send, CheckCircle2 } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { language, t } = useAuth();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div className="bg-[#FAF8F2] min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-[#C6A34A] tracking-wider uppercase px-3 py-1 rounded-full bg-white border border-[#C6A34A]/30 inline-block">
            {t('contactDeanshipBadge')}
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-[#252B27] font-['Cairo']">
            {t('contactTitle')}
          </h1>
        </div>

        <div className="max-w-2xl mx-auto bg-white p-6 sm:p-8 rounded-3xl border border-[#dbe6df] shadow-xs">
          {submitted ? (
            <div className="p-8 text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-[#176B45] mx-auto" />
              <h4 className="font-bold text-lg text-[#176B45]">{t('messageSuccessTitle')}</h4>
              <p className="text-xs text-[#747C76]">{t('messageSuccessDesc')}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-start">
              <div>
                <label className="block text-xs font-bold text-[#252B27] mb-1">{t('fullNameLabel')}</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder={language === 'ar' ? 'م. أحمد محمد' : 'Eng. Alex Smith'}
                  className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-xs sm:text-sm focus:border-[#176B45] outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#252B27] mb-1">{t('emailLabel')}</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="student@university.edu"
                  className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-xs sm:text-sm focus:border-[#176B45] outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#252B27] mb-1">{t('subjectLabel')}</label>
                <input
                  type="text"
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder={language === 'ar' ? 'استفسار بخصوص الدروس أو التطبيق العملي' : 'Course or lab assignment inquiry'}
                  className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-xs sm:text-sm focus:border-[#176B45] outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#252B27] mb-1">{t('messageLabel')}</label>
                <textarea
                  rows={4}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder={language === 'ar' ? 'اكتب استفسارك بالتفصيل...' : 'Write your detailed question...'}
                  className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-xs sm:text-sm focus:border-[#176B45] outline-hidden"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-[#176B45] hover:bg-[#0f482e] text-white font-bold text-xs sm:text-sm shadow-md shadow-[#176B45]/20 flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                <Send className="w-4 h-4 rtl:rotate-180" />
                <span>{t('sendMessageBtn')}</span>
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
