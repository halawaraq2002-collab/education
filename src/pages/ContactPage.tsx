import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

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
          <p className="text-xs sm:text-sm text-[#747C76]">
            {t('contactSub')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          <div className="md:col-span-5 bg-white p-6 rounded-3xl border border-[#dbe6df] shadow-xs space-y-5">
            <h3 className="font-bold text-base text-[#176B45]">
              {t('contactInfoTitle')}
            </h3>

            <div className="space-y-4 text-xs text-[#252B27]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C6A34A] shrink-0 mt-0.5" />
                <span>
                  {language === 'ar'
                    ? 'المملكة العربية السعودية، جامعة المستقبل الأهلية، مبنى كلية علوم الحاسب'
                    : 'Kingdom of Saudi Arabia, Future University, Faculty of Computer Science Building'}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#C6A34A] shrink-0" />
                <span className="font-mono">cs-graduation@future-university.edu.sa</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#C6A34A] shrink-0" />
                <span className="font-mono" dir="ltr">+966 11 456 7890</span>
              </div>
            </div>

            <div className="p-4 bg-[#E8F2EC] rounded-2xl text-xs text-[#176B45] space-y-1">
              <span className="font-bold block">{t('officeHoursTitle')}</span>
              <span>{t('officeHoursDesc')}</span>
            </div>
          </div>

          <div className="md:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-[#dbe6df] shadow-xs">
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
                    placeholder={language === 'ar' ? 'استفسار بخصوص مشروع التخرج أو التكليف' : 'Capstone project or lab assignment inquiry'}
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
                    placeholder={language === 'ar' ? 'اكتب استفسارك بالتفصيل...' : 'Write your detailed academic question...'}
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
    </div>
  );
};
