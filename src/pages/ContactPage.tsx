import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare } from 'lucide-react';

export const ContactPage: React.FC = () => {
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
          <span className="text-xs font-bold text-[#C6A34A] tracking-wider uppercase px-3 py-1 rounded-full bg-white border border-[#C6A34A]/30">
            لجنة الإشراف الأكاديمي
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-[#252B27] font-['Cairo']">
            تواصل مع المشرفين والعمادة
          </h1>
          <p className="text-xs sm:text-sm text-[#747C76]">
            نرحب بملاحظات أساتذة الكلية واستفسارات الطلاب بخصوص مشاريع التخرج.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          <div className="md:col-span-5 bg-white p-6 rounded-3xl border border-[#dbe6df] shadow-xs space-y-5">
            <h3 className="font-bold text-base text-[#176B45]">
              معلومات الاتصال الأكاديمية
            </h3>

            <div className="space-y-4 text-xs text-[#252B27]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C6A34A] shrink-0 mt-0.5" />
                <span>المملكة العربية السعودية، جامعة المستقبل الأهلية، مبنى كلية علوم الحاسب</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#C6A34A] shrink-0" />
                <span className="font-mono">cs-graduation@future-university.edu.sa</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#C6A34A] shrink-0" />
                <span className="font-mono">+966 11 456 7890</span>
              </div>
            </div>

            <div className="p-4 bg-[#E8F2EC] rounded-2xl text-xs text-[#176B45] space-y-1">
              <span className="font-bold block">ساعات استقبال الطلاب:</span>
              <span>الأحد إلى الخميس: 09:00 ص - 02:00 م</span>
            </div>
          </div>

          <div className="md:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-[#dbe6df] shadow-xs">
            {submitted ? (
              <div className="p-8 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-[#176B45] mx-auto" />
                <h4 className="font-bold text-lg text-[#176B45]">تم استلام رسالتك الأكاديمية بنجاح</h4>
                <p className="text-xs text-[#747C76]">سيقوم المشرف الأكاديمي بالرد على بريدك خلال 24 ساعة عمل.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-[#252B27] mb-1">الاسم الكامل:</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="م. أحمد محمد"
                    className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-xs sm:text-sm focus:border-[#176B45] outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#252B27] mb-1">البريد الإلكتروني:</label>
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
                  <label className="block text-xs font-bold text-[#252B27] mb-1">موضوع الرسالة:</label>
                  <input
                    type="text"
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    placeholder="استفسار بخصوص مشروع التخرج أو التكليف"
                    className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-xs sm:text-sm focus:border-[#176B45] outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#252B27] mb-1">نص الرسالة:</label>
                  <textarea
                    rows={4}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="اكتب استفسارك بالتفصيل..."
                    className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-xs sm:text-sm focus:border-[#176B45] outline-hidden"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#176B45] hover:bg-[#0f482e] text-white font-bold text-xs sm:text-sm shadow-md shadow-[#176B45]/20 flex items-center justify-center gap-2 cursor-pointer transition-all"
                >
                  <Send className="w-4 h-4 rtl:rotate-180" />
                  <span>إرسال الرسالة إلى العمادة الأكاديمية</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
