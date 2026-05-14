import React from 'react';
import { Bell, Search, User, Menu, Settings, HelpCircle, Command, Sun, Moon } from 'lucide-react';

const Header = ({ user, activeModule, onMenuClick, darkMode, onToggleDarkMode }) => {
  return (
    <header className="sticky top-0 z-30 bg-[var(--bg-card)]/80 backdrop-blur-md border-b border-[var(--border-color)] px-4 lg:px-8 py-4 transition-all duration-300">
      <div className="flex items-center justify-between gap-4">
        {/* Left: Mobile Menu & Module Name */}
        <div className="flex items-center gap-4">
          <button 
            onClick={onMenuClick}
            className="lg:hidden p-2 text-[var(--text-main)] hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors"
          >
            <Menu size={24} />
          </button>
          <div>
            <h1 className="text-xl font-bold text-[var(--text-main)] tracking-tight capitalize">
              {activeModule.replace(/([A-Z])/g, ' $1').trim()}
            </h1>
            <p className="hidden sm:block text-[10px] font-bold text-emerald-600 uppercase tracking-widest mt-0.5">
              CareStream HMS Portal
            </p>
          </div>
        </div>

        {/* Center: Search */}
        <div className="hidden md:flex flex-1 max-w-md relative group">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-500 transition-colors">
            <Search size={18} />
          </div>
          <input 
            type="text" 
            placeholder="Search clinical records... (Cmd+K)" 
            className="premium-input pl-12 pr-12 py-2.5"
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden lg:flex items-center gap-1 px-1.5 py-1 bg-[var(--bg-card)] rounded-lg border border-[var(--border-color)] shadow-sm">
            <Command size={10} className="text-slate-400" />
            <span className="text-[10px] font-black text-slate-400">K</span>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2 lg:gap-4">
          <button 
            onClick={onToggleDarkMode}
            className="p-2.5 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-2xl transition-all group"
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {darkMode ? <Sun size={20} className="text-amber-400" /> : <Moon size={20} />}
          </button>
          <button className="relative p-2.5 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-2xl transition-all group">
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-white dark:border-slate-900 animate-pulse"></span>
          </button>
          <button className="hidden sm:flex p-2.5 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-2xl transition-all">
            <Settings size={20} />
          </button>
          <div className="w-px h-8 bg-[var(--border-color)] mx-1 hidden sm:block"></div>
          <div className="flex items-center gap-3 pl-1">
            <div className="hidden lg:block text-right">
              <p className="text-sm font-bold text-[var(--text-main)] leading-tight">{user.email.split('@')[0]}</p>
              <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-tighter">Verified User</p>
            </div>
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center text-white font-bold shadow-lg shadow-emerald-500/20 border-2 border-white dark:border-slate-800 group cursor-pointer hover:scale-105 transition-transform">
              {user.email[0].toUpperCase()}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
