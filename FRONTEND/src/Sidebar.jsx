import React from 'react';
import { MODULES } from './constants';
import * as LucideIcons from 'lucide-react';
import { LogOut, Activity, ChevronRight, User, X } from 'lucide-react';

const Sidebar = ({ user, activeModule, onModuleChange, onLogout, isOpen, onClose }) => {
  const filteredModules = MODULES.filter(module => module.roles.includes(user.role));

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <div className={`
        fixed inset-y-0 left-0 w-72 bg-slate-900 flex flex-col z-50 shadow-2xl border-r border-slate-800 transition-transform duration-300 ease-in-out
        lg:static lg:translate-x-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {/* Branding & Close Button */}
        <div className="flex items-center justify-between p-6 lg:p-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <Activity className="text-white" size={24} />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-white">CareStream</span>
              <span className="text-[10px] font-bold text-emerald-500 tracking-[0.2em] uppercase">Intelligence</span>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-slate-500 hover:text-white lg:hidden"
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation */}
        <div className="flex-1 px-4 py-2 overflow-y-auto no-scrollbar">
          <div className="space-y-1">
            <p className="px-4 py-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Main Menu</p>
            {filteredModules.map((module) => {
              const Icon = LucideIcons[module.icon] || LucideIcons.HelpCircle;
              const isActive = activeModule === module.id;
              
              return (
                <button
                  key={module.id}
                  onClick={() => onModuleChange(module.id)}
                  className={`w-full sidebar-link ${isActive ? 'sidebar-link-active' : ''} group`}
                >
                  <div className={`transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`}>
                    <Icon size={20} />
                  </div>
                  <span className="flex-1 text-left">{module.name}</span>
                  {isActive && (
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500/50"></div>
                  )}
                  {!isActive && (
                    <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-4px] group-hover:translate-x-0" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* User Info & Logout */}
        <div className="p-4 mt-auto">
          <div className="bg-slate-800/50 rounded-2xl p-4 border border-slate-800 mb-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-slate-700 flex items-center justify-center text-emerald-500 border border-slate-600">
                <User size={20} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-white truncate">{user.email.split('@')[0]}</p>
                <p className="text-[10px] text-slate-400 font-medium uppercase tracking-tight truncate">{user.role}</p>
              </div>
            </div>
            
            <button
              onClick={onLogout}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs text-red-400 font-bold hover:bg-red-500/10 hover:text-red-300 rounded-xl transition-all border border-transparent hover:border-red-500/20"
            >
              <LogOut size={14} />
              <span>Sign Out</span>
            </button>
          </div>
          
          <p className="text-[10px] text-center text-slate-600 font-medium py-2">
            v2.4.0 • Enterprise Edition
          </p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;


