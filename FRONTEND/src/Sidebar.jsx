import React from 'react';
import { MODULES } from './constants';
import * as LucideIcons from 'lucide-react';
import { LogOut, Activity, ChevronRight, User, X } from 'lucide-react';

const Sidebar = ({ user, activeModule, onModuleChange, onLogout, isOpen, onClose }) => {
  const filteredModules = MODULES.filter(module => module.roles.includes(user.role));

  const categories = [
    { 
      name: 'General', 
      items: filteredModules.filter(m => ['dashboard', 'communication'].includes(m.id)) 
    },
    { 
      name: 'Clinical Services', 
      items: filteredModules.filter(m => ['emr', 'patients', 'laboratory', 'pharmacy', 'bed_mgmt', 'cases'].includes(m.id)) 
    },
    { 
      name: 'Front Office', 
      items: filteredModules.filter(m => ['appointments', 'reception', 'people_mgmt', 'org_mgmt', 'representative'].includes(m.id)) 
    },
    { 
      name: 'Enterprise Hub', 
      items: filteredModules.filter(m => ['insurance', 'inventory', 'ai_automation', 'reports'].includes(m.id)) 
    },
    { 
      name: 'Self Service', 
      items: filteredModules.filter(m => ['patient_portal'].includes(m.id)) 
    }
  ].filter(cat => cat.items.length > 0);

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
          onClick={onClose}
        />
      )}

      <div className={`
        fixed inset-y-0 left-0 w-72 bg-slate-900 flex flex-col z-50 shadow-2xl border-r border-slate-800 transition-all duration-300 ease-in-out
        lg:static lg:translate-x-0 h-screen
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {/* Branding & Close Button */}
        <div className="flex items-center justify-between p-6 lg:p-8 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <Activity className="text-white" size={24} />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-white leading-none">HMS System</span>
              <span className="text-[10px] font-bold text-emerald-500 tracking-[0.2em] uppercase mt-1">Portal</span>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-slate-500 hover:text-white lg:hidden transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation */}
        <div className="flex-1 px-4 py-2 overflow-y-auto custom-scrollbar space-y-6">
          {categories.map((category, catIdx) => (
            <div key={catIdx} className="space-y-1">
              <p className="px-4 py-2 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">{category.name}</p>
              {category.items.map((module) => {
                const Icon = LucideIcons[module.icon] || LucideIcons.HelpCircle;
                const isActive = activeModule === module.id;
                
                return (
                  <button
                    key={module.id}
                    onClick={() => onModuleChange(module.id)}
                    className={`
                      w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all duration-300 group
                      ${isActive 
                        ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/20' 
                        : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'}
                    `}
                  >
                    <div className={`transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`}>
                      <Icon size={18} strokeWidth={isActive ? 2.5 : 2} />
                    </div>
                    <span className="flex-1 text-left">{module.name}</span>
                    {isActive ? (
                      <ChevronRight size={14} className="opacity-50" />
                    ) : (
                      <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-all translate-x-[-4px] group-hover:translate-x-0" />
                    )}
                  </button>
                );
              })}
            </div>
          ))}
        </div>

        {/* User Info & Logout */}
        <div className="p-4 mt-auto shrink-0 border-t border-slate-800 bg-slate-900/50 backdrop-blur-md">
          <div className="bg-slate-800/50 rounded-2xl p-4 border border-slate-800 mb-2 group hover:border-emerald-500/30 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-slate-700 flex items-center justify-center text-emerald-500 border border-slate-600 group-hover:scale-110 transition-transform">
                <User size={20} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-white truncate">{user.email.split('@')[0]}</p>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest truncate">{user.role}</p>
              </div>
            </div>
            
            <button
              onClick={onLogout}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs text-rose-400 font-bold hover:bg-rose-500 hover:text-white rounded-xl transition-all border border-rose-500/10 hover:border-transparent shadow-lg hover:shadow-rose-500/20"
            >
              <LogOut size={14} />
              <span>Sign Out</span>
            </button>
          </div>
          
          <p className="text-[9px] text-center text-slate-600 font-black uppercase tracking-[0.2em] py-2">
            v2.4.0 • Enterprise Edition
          </p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;


