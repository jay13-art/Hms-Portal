import React from 'react';
import { MODULES } from './constants';
import * as LucideIcons from 'lucide-react';
import OrganizationManagement from './OrganizationManagement';
import PeopleManagement from './PeopleManagement';
import BedManagement from './BedManagement';
import AppointmentManagement from './AppointmentManagement';
import EMRManagement from './EMRManagement';

const ModuleContainer = ({ moduleId, user }) => {
  const module = MODULES.find(m => m.id === moduleId);
  const Icon = module ? (LucideIcons[module.icon] || LucideIcons.Package) : LucideIcons.Package;

  // Render specific module component if it exists
  if (moduleId === 'org_mgmt') return <OrganizationManagement />;
  if (moduleId === 'people_mgmt') return <PeopleManagement />;
  if (moduleId === 'bed_mgmt') return <BedManagement />;
  if (moduleId === 'appointments') return <AppointmentManagement />;
  if (moduleId === 'emr') return <EMRManagement />;

  return (
    <div className="max-w-7xl mx-auto space-y-6 lg:space-y-10">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div className="flex items-center gap-4 lg:gap-6">
          <div className="w-14 h-14 lg:w-20 lg:h-20 rounded-2xl lg:rounded-[28px] bg-emerald-500/10 flex items-center justify-center text-emerald-600 border border-emerald-500/20 shadow-sm shadow-emerald-500/10 shrink-0">
            <Icon size={32} className="lg:hidden" strokeWidth={2.5} />
            <Icon size={40} className="hidden lg:block" strokeWidth={2.5} />
          </div>
          <div>
            <h3 className="text-2xl lg:text-4xl font-bold text-slate-900 tracking-tight">{module?.name || 'Enterprise Module'}</h3>
            <p className="text-sm lg:text-base text-slate-500 font-medium mt-1">
              Infrastructure control for <span className="text-emerald-600 font-bold">{module?.name || 'System'}</span> services.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button className="premium-button bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 flex-1 sm:flex-none">
            Export Data
          </button>
          <button className="premium-button-primary flex-1 sm:flex-none">
            New Entry
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {[
          { label: 'Active Records', value: '1,284', icon: 'Layers', color: 'text-blue-600', bg: 'bg-blue-50' },
          { label: 'Pending Reviews', value: '42', icon: 'Clock', color: 'text-amber-600', bg: 'bg-amber-50' },
          { label: 'Total Volume', value: '$84.2k', icon: 'TrendingUp', color: 'text-emerald-600', bg: 'bg-emerald-50' },
          { label: 'System Health', value: '99.9%', icon: 'ShieldCheck', color: 'text-indigo-600', bg: 'bg-indigo-50' },
        ].map((stat, i) => {
          const StatIcon = LucideIcons[stat.icon] || LucideIcons.Activity;
          return (
            <div key={i} className="premium-card p-5 lg:p-6 flex items-center gap-4 hover:border-emerald-500/20 transition-all group">
              <div className={`w-12 h-12 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center transition-transform group-hover:scale-110 duration-500`}>
                <StatIcon size={24} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1.5">{stat.label}</p>
                <p className="text-xl font-bold text-slate-900 tracking-tight">{stat.value}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="premium-card overflow-hidden bg-white">
            <div className="p-5 lg:p-6 border-b border-slate-100 flex items-center justify-between">
              <h5 className="font-bold text-slate-900 flex items-center gap-2">
                <LucideIcons.History size={18} className="text-emerald-500" />
                Recent System Activity
              </h5>
              <div className="flex gap-1.5">
                <button className="p-2 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition-all">
                  <LucideIcons.Filter size={18} />
                </button>
                <button className="p-2 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition-all">
                  <LucideIcons.RotateCcw size={18} />
                </button>
              </div>
            </div>
            <div className="divide-y divide-slate-50">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="p-5 lg:p-6 flex items-center justify-between hover:bg-slate-50/50 transition-colors cursor-pointer group">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-white group-hover:shadow-md group-hover:text-emerald-500 transition-all duration-300">
                      <LucideIcons.FileText size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">Resource Entry #{1024 + i}</p>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter mt-0.5">Modified by {user.email.split('@')[0]} • 2h ago</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-black uppercase tracking-wider border border-emerald-100">
                      Verified
                    </span>
                    <LucideIcons.ChevronRight size={18} className="text-slate-300 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="premium-card p-6 lg:p-8 bg-slate-900 text-white border-none shadow-2xl shadow-slate-900/20 relative overflow-hidden group">
            <h5 className="font-bold mb-6 flex items-center gap-2">
              <LucideIcons.ShieldCheck size={20} className="text-emerald-500" />
              Access Governance
            </h5>
            <p className="text-sm text-slate-400 mb-8 leading-relaxed font-medium">
              Verified account <span className="text-emerald-400 font-bold">{user.email.split('@')[0]}</span> with <span className="text-emerald-400 font-bold">{user.role}</span> privileges.
            </p>
            <div className="space-y-6 relative z-10">
              {[
                { label: 'Security Level', val: 'Enterprise', color: 'bg-emerald-500', pct: '100%' },
                { label: 'Sync Integrity', val: 'Real-time', color: 'bg-blue-500', pct: '98%' },
                { label: 'Audit Trail', val: 'Verified', color: 'bg-amber-500', pct: '100%' }
              ].map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">
                    <span>{item.label}</span>
                    <span className="text-white">{item.val}</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div className={`h-full ${item.color} rounded-full transition-all duration-1000 group-hover:opacity-100 opacity-80`} style={{ width: item.pct }}></div>
                  </div>
                </div>
              ))}
            </div>
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-emerald-500/10 transition-colors"></div>
          </div>

          <div className="premium-card p-8 bg-gradient-to-br from-emerald-600 to-emerald-800 text-white border-none shadow-xl shadow-emerald-600/20 group cursor-pointer relative overflow-hidden">
            <div className="relative z-10">
              <LucideIcons.Zap className="mb-4 text-emerald-200 group-hover:scale-125 transition-transform duration-500" size={28} />
              <h5 className="text-xl font-bold mb-2">Enterprise Update</h5>
              <p className="text-xs text-emerald-100/90 mb-6 font-bold uppercase tracking-widest">Version 2.4.0 Live</p>
              <button className="w-full py-3 bg-white text-emerald-700 rounded-2xl text-sm font-bold hover:bg-emerald-50 transition-all shadow-lg">
                Review Changelog
              </button>
            </div>
            {/* Background glow */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModuleContainer;


