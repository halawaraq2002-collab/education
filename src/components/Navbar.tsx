import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { 
  BookOpen, 
  GraduationCap, 
  Code2, 
  User as UserIcon, 
  LogOut, 
  ShieldCheck, 
  Sparkles, 
  Menu, 
  X,
  Globe,
  Award,
  ChevronDown
} from 'lucide-react';

interface NavbarProps {
  currentView: string;
  setCurrentView: (view: string) => void;
  openAuthModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, setCurrentView, openAuthModal }) => {
  const { userProfile, signOutUser, language, setLanguage, loginAsDemoStudent, loginAsDemoAdmin, isAdmin } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const isAr = language === 'ar';

  const navLinks = [
    { id: 'home', labelAr: 'الرئيسية', labelEn: 'Home' },
    { id: 'courses', labelAr: 'المقررات الأكاديمية', labelEn: 'Courses' },
    { id: 'paths', labelAr: 'المسارات التعليمية', labelEn: 'Learning Paths' },
    { id: 'about', labelAr: 'عن المنصة', labelEn: 'About' },
    { id: 'contact', labelAr: 'تواصل معنا', labelEn: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-[#E8F2EC] shadow-xs">
      {/* Top Academic Sub-bar */}
      <div className="bg-[#176B45] text-white text-xs py-1.5 px-4 sm:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#C6A34A] animate-pulse"></span>
          <span>{isAr ? 'جامعة المستقبل الأهلية — مشروع تخرج معتمد' : 'Future University — Certified Capstone Project'}</span>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setLanguage(isAr ? 'en' : 'ar')}
            className="flex items-center gap-1 hover:text-[#C6A34A] transition-colors cursor-pointer"
            title="تبديل اللغة / Switch Language"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{isAr ? 'English' : 'العربية'}</span>
          </button>
          <div className="h-3 w-px bg-white/20"></div>
          <div className="flex items-center gap-2">
            <span className="text-white/80">{isAr ? 'الوضع التجريبي:' : 'Demo Mode:'}</span>
            <button 
              onClick={loginAsDemoStudent}
              className={`px-1.5 py-0.5 rounded text-[11px] font-medium transition-all ${userProfile?.role === 'student' ? 'bg-[#C6A34A] text-white font-bold' : 'hover:bg-white/10 text-white/90'}`}
            >
              {isAr ? 'طالب' : 'Student'}
            </button>
            <button 
              onClick={loginAsDemoAdmin}
              className={`px-1.5 py-0.5 rounded text-[11px] font-medium transition-all ${userProfile?.role === 'admin' ? 'bg-[#C6A34A] text-white font-bold' : 'hover:bg-white/10 text-white/90'}`}
            >
              {isAr ? 'مشرف أكاديمي' : 'Admin'}
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div 
            onClick={() => setCurrentView('home')} 
            className="flex items-center gap-3.5 cursor-pointer group select-none"
          >
            <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-[#176B45] to-[#0f482e] flex items-center justify-center shadow-md shadow-[#176B45]/20 group-hover:scale-105 transition-transform">
              <BookOpen className="w-6 h-6 text-white absolute" />
              <GraduationCap className="w-4 h-4 text-[#C6A34A] absolute -top-1.5 -right-1.5 transform rotate-12 drop-shadow" />
              <Code2 className="w-3.5 h-3.5 text-[#C6A34A] absolute -bottom-1 -left-1" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-[#176B45] font-['Cairo'] flex items-center gap-1.5">
                منصة تعليمية
                <span className="text-[#C6A34A] text-xs font-semibold px-1.5 py-0.5 rounded bg-[#FAF8F2] border border-[#C6A34A]/30">
                  جامعية
                </span>
              </span>
              <span className="text-[10px] tracking-widest text-[#747C76] font-semibold uppercase">
                EDUCATIONAL PLATFORM
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const active = currentView === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => setCurrentView(link.id)}
                  className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                    active
                      ? 'text-[#176B45] bg-[#E8F2EC] font-bold shadow-2xs'
                      : 'text-[#252B27] hover:text-[#176B45] hover:bg-[#F9FAF9]'
                  }`}
                >
                  {isAr ? link.labelAr : link.labelEn}
                </button>
              );
            })}

            {/* Quick Link to Interactive IDE */}
            <button
              onClick={() => setCurrentView('workspace')}
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                currentView === 'workspace'
                  ? 'text-[#176B45] bg-[#E8F2EC] font-bold'
                  : 'text-[#C6A34A] hover:bg-[#FAF8F2]'
              }`}
            >
              <Code2 className="w-4 h-4" />
              <span>{isAr ? 'محرر الأكواد' : 'Code Editor'}</span>
            </button>
          </nav>

          {/* Right Action Buttons & User Menu */}
          <div className="hidden md:flex items-center gap-3">
            {userProfile ? (
              <div className="relative">
                <button
                  onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                  className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl border border-[#dbe6df] hover:border-[#176B45] bg-[#F9FAF9] transition-all cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-full bg-[#176B45] text-white flex items-center justify-center font-bold text-sm">
                    {userProfile.displayName ? userProfile.displayName.charAt(0) : 'ط'}
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-bold text-[#252B27] leading-tight flex items-center gap-1">
                      {userProfile.displayName}
                      {isAdmin && (
                        <ShieldCheck className="w-3.5 h-3.5 text-[#C6A34A]" />
                      )}
                    </div>
                    <div className="text-[10px] text-[#747C76] flex items-center gap-1">
                      <Award className="w-3 h-3 text-[#C6A34A]" />
                      <span>{userProfile.points} نقطة</span>
                    </div>
                  </div>
                  <ChevronDown className="w-3.5 h-3.5 text-[#747C76]" />
                </button>

                {/* Profile Dropdown */}
                {profileDropdownOpen && (
                  <div className="absolute left-0 rtl:right-0 rtl:left-auto mt-2 w-56 bg-white rounded-xl shadow-xl border border-[#E8F2EC] py-2 z-50">
                    <div className="px-4 py-2 border-b border-[#f1f4f2]">
                      <div className="text-xs text-[#747C76]">{isAr ? 'الرقم الأكاديمي' : 'Academic ID'}</div>
                      <div className="text-xs font-bold text-[#176B45] font-mono">{userProfile.academicId || 'CS-2026'}</div>
                      <div className="text-[11px] text-[#252B27] mt-0.5 truncate">{userProfile.email}</div>
                    </div>

                    <button
                      onClick={() => {
                        setCurrentView('dashboard');
                        setProfileDropdownOpen(false);
                      }}
                      className="w-full text-right px-4 py-2 text-sm text-[#252B27] hover:bg-[#E8F2EC] hover:text-[#176B45] flex items-center gap-2"
                    >
                      <UserIcon className="w-4 h-4 text-[#176B45]" />
                      <span>{isAr ? 'لوحة تحكم الطالب' : 'Student Dashboard'}</span>
                    </button>

                    {isAdmin && (
                      <button
                        onClick={() => {
                          setCurrentView('admin');
                          setProfileDropdownOpen(false);
                        }}
                        className="w-full text-right px-4 py-2 text-sm text-[#C6A34A] hover:bg-[#FAF8F2] font-semibold flex items-center gap-2"
                      >
                        <ShieldCheck className="w-4 h-4 text-[#C6A34A]" />
                        <span>{isAr ? 'لوحة المشرف الأكاديمي' : 'Admin Portal'}</span>
                      </button>
                    )}

                    <div className="border-t border-[#f1f4f2] my-1"></div>

                    <button
                      onClick={() => {
                        signOutUser();
                        setProfileDropdownOpen(false);
                      }}
                      className="w-full text-right px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center gap-2"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>{isAr ? 'تسجيل الخروج' : 'Sign Out'}</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <button
                  onClick={openAuthModal}
                  className="px-4 py-2 rounded-lg text-sm font-semibold text-[#176B45] hover:bg-[#E8F2EC] transition-all cursor-pointer"
                >
                  {isAr ? 'تسجيل الدخول' : 'Sign In'}
                </button>
                <button
                  onClick={openAuthModal}
                  className="px-5 py-2 rounded-lg text-sm font-bold bg-[#176B45] text-white hover:bg-[#0f482e] shadow-sm hover:shadow-md transition-all cursor-pointer"
                >
                  {isAr ? 'إنشاء حساب جديد' : 'Register'}
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#252B27] hover:bg-[#E8F2EC] transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E8F2EC] bg-white px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                setCurrentView(link.id);
                setMobileMenuOpen(false);
              }}
              className="w-full text-right px-3 py-2.5 rounded-lg text-sm font-semibold text-[#252B27] hover:bg-[#E8F2EC] hover:text-[#176B45]"
            >
              {isAr ? link.labelAr : link.labelEn}
            </button>
          ))}
          <button
            onClick={() => {
              setCurrentView('workspace');
              setMobileMenuOpen(false);
            }}
            className="w-full text-right px-3 py-2.5 rounded-lg text-sm font-bold text-[#176B45] bg-[#E8F2EC] flex items-center justify-between"
          >
            <span>{isAr ? 'محرر الأكواد التفاعلي' : 'Interactive IDE'}</span>
            <Code2 className="w-4 h-4 text-[#176B45]" />
          </button>

          {userProfile && (
            <button
              onClick={() => {
                setCurrentView('dashboard');
                setMobileMenuOpen(false);
              }}
              className="w-full text-right px-3 py-2.5 rounded-lg text-sm font-bold text-[#176B45] border border-[#176B45] flex items-center justify-between"
            >
              <span>{isAr ? 'لوحة تحكم الطالب' : 'Student Dashboard'}</span>
              <UserIcon className="w-4 h-4" />
            </button>
          )}

          {isAdmin && (
            <button
              onClick={() => {
                setCurrentView('admin');
                setMobileMenuOpen(false);
              }}
              className="w-full text-right px-3 py-2.5 rounded-lg text-sm font-bold text-[#C6A34A] bg-[#FAF8F2] border border-[#C6A34A]/30 flex items-center justify-between"
            >
              <span>{isAr ? 'لوحة المشرف الأكاديمي' : 'Admin Portal'}</span>
              <ShieldCheck className="w-4 h-4" />
            </button>
          )}
        </div>
      )}
    </header>
  );
};
