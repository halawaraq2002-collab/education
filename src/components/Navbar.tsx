import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { 
  BookOpen, 
  GraduationCap, 
  Code2, 
  User as UserIcon, 
  LogOut, 
  ShieldCheck, 
  Menu, 
  X,
  Globe,
  Award,
  ChevronDown,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';

interface NavbarProps {
  currentView: string;
  setCurrentView: (view: string) => void;
  openAuthModal: () => void;
  onGoBack?: () => void;
  canGoBack?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, setCurrentView, openAuthModal, onGoBack, canGoBack }) => {
  const { userProfile, signOutUser, language, setLanguage, loginAsDemoStudent, loginAsDemoAdmin, isAdmin, t } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const isAr = language === 'ar';

  const navLinks = [
    { id: 'home', label: t('navHome') },
    { id: 'courses', label: t('navCourses') },
    { id: 'paths', label: t('navPaths') },
    { id: 'about', label: t('navAbout') },
    { id: 'contact', label: t('navContact') },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-[#E8F2EC] shadow-xs">
      {/* Top Academic Sub-bar */}
      <div className="bg-[#176B45] text-white text-xs py-1.5 px-4 sm:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#C6A34A] animate-pulse"></span>
          <span>{t('universityTitle')}</span>
        </div>
        <div className="flex items-center gap-4">
          {/* Language Switcher */}
          <button 
            onClick={() => setLanguage(isAr ? 'en' : 'ar')}
            className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 hover:bg-[#C6A34A] text-white transition-colors cursor-pointer text-[11px] font-bold"
            title={isAr ? 'Switch to English' : 'التحويل إلى اللغة العربية'}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{isAr ? 'English 🇺🇸' : 'العربية 🇸🇦'}</span>
          </button>
          
          <div className="h-3 w-px bg-white/20"></div>

          {/* Demo Role Switcher */}
          <div className="flex items-center gap-2">
            <span className="text-white/80 hidden sm:inline">{t('demoMode')}</span>
            <button 
              onClick={loginAsDemoStudent}
              className={`px-2 py-0.5 rounded text-[11px] font-medium transition-all ${userProfile?.role === 'student' ? 'bg-[#C6A34A] text-white font-bold' : 'hover:bg-white/10 text-white/90'}`}
            >
              {t('demoStudent')}
            </button>
            <button 
              onClick={loginAsDemoAdmin}
              className={`px-2 py-0.5 rounded text-[11px] font-medium transition-all ${userProfile?.role === 'admin' ? 'bg-[#C6A34A] text-white font-bold' : 'hover:bg-white/10 text-white/90'}`}
            >
              {t('demoAdmin')}
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo & Back Button */}
          <div className="flex items-center gap-3">
            <div 
              onClick={() => setCurrentView('home')} 
              className="flex items-center gap-3.5 cursor-pointer group select-none"
            >
              <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-[#176B45] to-[#0f482e] flex items-center justify-center shadow-md shadow-[#176B45]/20 group-hover:scale-105 transition-transform shrink-0">
                <BookOpen className="w-6 h-6 text-white absolute" />
                <GraduationCap className="w-4 h-4 text-[#C6A34A] absolute -top-1.5 -right-1.5 transform rotate-12 drop-shadow" />
                <Code2 className="w-3.5 h-3.5 text-[#C6A34A] absolute -bottom-1 -left-1" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-[#176B45] font-['Cairo'] flex items-center gap-1.5">
                  {t('brandName')}
                  <span className="text-[#C6A34A] text-[10px] font-semibold px-1.5 py-0.2 rounded bg-[#FAF8F2] border border-[#C6A34A]/30">
                    {t('brandTag')}
                  </span>
                </span>
                <span className="text-[10px] tracking-widest text-[#747C76] font-semibold uppercase">
                  {t('brandSubtitle')}
                </span>
              </div>
            </div>

            {/* Prominent Back to Previous Page Button */}
            {canGoBack && onGoBack && (
              <button
                onClick={onGoBack}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-[#dbe6df] bg-[#FAF8F2] hover:bg-[#E8F2EC] hover:border-[#176B45] text-[#176B45] text-xs font-bold transition-all cursor-pointer shadow-2xs group shrink-0"
                title={isAr ? "الرجوع إلى الصفحة السابقة" : "Go back to previous page"}
              >
                {isAr ? (
                  <ArrowRight className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-[#176B45]" />
                ) : (
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-[#176B45]" />
                )}
                <span className="hidden sm:inline">{isAr ? "رجوع للصفحة السابقة" : "Back"}</span>
                <span className="sm:hidden">{isAr ? "رجوع" : "Back"}</span>
              </button>
            )}
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
                  {link.label}
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
              <span>{t('navEditor')}</span>
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
                  <div className={isAr ? 'text-right' : 'text-left'}>
                    <div className="text-xs font-bold text-[#252B27] leading-tight flex items-center gap-1">
                      {userProfile.displayName}
                      {isAdmin && (
                        <ShieldCheck className="w-3.5 h-3.5 text-[#C6A34A]" />
                      )}
                    </div>
                    <div className="text-[10px] text-[#747C76] flex items-center gap-1">
                      <Award className="w-3 h-3 text-[#C6A34A]" />
                      <span>{userProfile.points} {t('pointsCount')}</span>
                    </div>
                  </div>
                  <ChevronDown className="w-3.5 h-3.5 text-[#747C76]" />
                </button>

                {/* Profile Dropdown */}
                {profileDropdownOpen && (
                  <div className={`absolute ${isAr ? 'right-0' : 'left-0'} mt-2 w-60 bg-white rounded-xl shadow-xl border border-[#E8F2EC] py-2 z-50`}>
                    <div className="px-4 py-2 border-b border-[#f1f4f2]">
                      <div className="text-xs text-[#747C76]">{t('academicId')}</div>
                      <div className="text-xs font-bold text-[#176B45] font-mono">{userProfile.academicId || 'CS-2026'}</div>
                      <div className="text-[11px] text-[#252B27] mt-0.5 truncate">{userProfile.email}</div>
                    </div>

                    <button
                      onClick={() => {
                        setCurrentView('dashboard');
                        setProfileDropdownOpen(false);
                      }}
                      className={`w-full ${isAr ? 'text-right' : 'text-left'} px-4 py-2 text-sm text-[#252B27] hover:bg-[#E8F2EC] hover:text-[#176B45] flex items-center gap-2 cursor-pointer`}
                    >
                      <UserIcon className="w-4 h-4 text-[#176B45]" />
                      <span>{t('studentDashboard')}</span>
                    </button>

                    {isAdmin && (
                      <button
                        onClick={() => {
                          setCurrentView('admin');
                          setProfileDropdownOpen(false);
                        }}
                        className={`w-full ${isAr ? 'text-right' : 'text-left'} px-4 py-2 text-sm text-[#C6A34A] hover:bg-[#FAF8F2] font-semibold flex items-center gap-2 cursor-pointer`}
                      >
                        <ShieldCheck className="w-4 h-4 text-[#C6A34A]" />
                        <span>{t('adminPortal')}</span>
                      </button>
                    )}

                    <div className="border-t border-[#f1f4f2] my-1"></div>

                    <button
                      onClick={() => {
                        signOutUser();
                        setProfileDropdownOpen(false);
                      }}
                      className={`w-full ${isAr ? 'text-right' : 'text-left'} px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center gap-2 cursor-pointer`}
                    >
                      <LogOut className="w-4 h-4" />
                      <span>{t('signOut')}</span>
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
                  {t('signIn')}
                </button>
                <button
                  onClick={openAuthModal}
                  className="px-5 py-2 rounded-lg text-sm font-bold bg-[#176B45] text-white hover:bg-[#0f482e] shadow-sm hover:shadow-md transition-all cursor-pointer"
                >
                  {t('register')}
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
          {canGoBack && onGoBack && (
            <button
              onClick={() => {
                onGoBack();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-[#FAF8F2] text-[#176B45] font-bold text-xs border border-[#176B45]/30 mb-2"
            >
              <div className="flex items-center gap-2">
                {isAr ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
                <span>{isAr ? "الرجوع إلى الصفحة السابقة" : "Back to Previous Page"}</span>
              </div>
            </button>
          )}
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                setCurrentView(link.id);
                setMobileMenuOpen(false);
              }}
              className={`w-full ${isAr ? 'text-right' : 'text-left'} px-3 py-2.5 rounded-lg text-sm font-semibold text-[#252B27] hover:bg-[#E8F2EC] hover:text-[#176B45]`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => {
              setCurrentView('workspace');
              setMobileMenuOpen(false);
            }}
            className="w-full px-3 py-2.5 rounded-lg text-sm font-bold text-[#176B45] bg-[#E8F2EC] flex items-center justify-between"
          >
            <span>{t('navEditor')}</span>
            <Code2 className="w-4 h-4 text-[#176B45]" />
          </button>

          {userProfile && (
            <button
              onClick={() => {
                setCurrentView('dashboard');
                setMobileMenuOpen(false);
              }}
              className="w-full px-3 py-2.5 rounded-lg text-sm font-bold text-[#176B45] border border-[#176B45] flex items-center justify-between"
            >
              <span>{t('studentDashboard')}</span>
              <UserIcon className="w-4 h-4" />
            </button>
          )}

          {isAdmin && (
            <button
              onClick={() => {
                setCurrentView('admin');
                setMobileMenuOpen(false);
              }}
              className="w-full px-3 py-2.5 rounded-lg text-sm font-bold text-[#C6A34A] bg-[#FAF8F2] border border-[#C6A34A]/30 flex items-center justify-between"
            >
              <span>{t('adminPortal')}</span>
              <ShieldCheck className="w-4 h-4" />
            </button>
          )}
        </div>
      )}
    </header>
  );
};
