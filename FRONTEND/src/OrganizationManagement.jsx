import React, { useState } from 'react';
import { Building2, MapPin, Clock, Layers, Settings, Plus, Edit3, Trash2, Globe, Check, ChevronRight, Activity, ShieldCheck } from 'lucide-react';

const OrganizationManagement = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', name: 'Profile & Branches', icon: Building2 },
    { id: 'departments', name: 'Departments', icon: MapPin },
    { id: 'hours', name: 'Operating Hours', icon: Clock },
    { id: 'facility', name: 'Zones & Floors', icon: Layers },
    { id: 'settings', name: 'Regional Settings', icon: Globe },
  ];

  const branches = [
    { id: 1, name: 'Main Hospital', location: 'City Center', type: 'Hospital', status: 'Active', rooms: 45, staff: 120 },
    { id: 2, name: 'North Clinic', location: 'Northern Suburbs', type: 'Clinic', status: 'Active', rooms: 12, staff: 24 },
    { id: 3, name: 'East Side Diagnostics', location: 'East Plaza', type: 'Lab', status: 'Active', rooms: 8, staff: 15 },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div className="space-y-8 animate-fade-in">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <h3 className="text-xl font-bold text-[var(--text-main)] tracking-tight">Organization Network</h3>
              <button className="premium-button-primary flex items-center gap-2 w-full sm:w-auto justify-center">
                <Plus size={18} /> New Branch
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {branches.map(branch => (
                <div key={branch.id} className="premium-card p-8 group hover:border-emerald-500/30 transition-all bg-[var(--bg-card)]">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-14 h-14 bg-[var(--bg-main)] rounded-2xl flex items-center justify-center text-[var(--text-muted)] group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500 shadow-sm">
                      <Building2 size={28} />
                    </div>
                    <span className="px-3 py-1 bg-emerald-500/10 text-emerald-600 text-[10px] font-black uppercase tracking-widest rounded-full border border-emerald-500/20 transition-all duration-300">
                      {branch.status}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-[var(--text-main)] mb-1 group-hover:text-emerald-600 transition-colors">{branch.name}</h4>
                  <p className="text-xs text-slate-400 font-bold flex items-center gap-1.5 mb-6">
                    <MapPin size={14} className="text-emerald-500" /> {branch.location}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="p-3 bg-[var(--bg-main)] rounded-xl border border-[var(--border-color)]">
                      <p className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-widest mb-0.5">Rooms</p>
                      <p className="text-lg font-bold text-[var(--text-main)]">{branch.rooms}</p>
                    </div>
                    <div className="p-3 bg-[var(--bg-main)] rounded-xl border border-[var(--border-color)]">
                      <p className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-widest mb-0.5">Staff</p>
                      <p className="text-lg font-bold text-[var(--text-main)]">{branch.staff}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                    <div className="flex gap-2">
                      <button className="p-2.5 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition-all" title="Edit"><Edit3 size={18} /></button>
                      <button className="p-2.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-all" title="Delete"><Trash2 size={18} /></button>
                    </div>
                    <button className="text-emerald-600 font-bold text-xs flex items-center gap-1 group/btn">
                      Configure <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'departments':
        return (
          <div className="premium-card overflow-hidden animate-fade-in bg-[var(--bg-card)]">
            <div className="p-6 lg:p-8 border-b border-[var(--border-color)] flex flex-col sm:flex-row justify-between items-center gap-6">
              <h3 className="text-xl font-bold text-[var(--text-main)] tracking-tight">Clinical Departments</h3>
              <button className="text-emerald-600 text-sm font-bold hover:bg-emerald-500/10 px-4 py-2 rounded-xl transition-all flex items-center gap-2">
                <Plus size={16} /> Setup Department
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-[var(--bg-main)] text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-widest border-b border-[var(--border-color)]">
                    <th className="px-8 py-5">Floor & ID</th>
                    <th className="px-8 py-5">Specialty Name</th>
                    <th className="px-8 py-5">Human Resources</th>
                    <th className="px-8 py-5">Operational Units</th>
                    <th className="px-8 py-5 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border-color)]">
                  {['Cardiology', 'Neurology', 'Pediatrics', 'Radiology', 'Emergency'].map((dept, i) => (
                    <tr key={i} className="hover:bg-[var(--bg-main)] transition-colors group">
                      <td className="px-8 py-5">
                        <div className="w-10 h-10 rounded-xl bg-[var(--bg-main)] flex items-center justify-center text-[var(--text-muted)] font-bold text-xs border border-[var(--border-color)] shadow-sm">
                          {i + 1}F
                        </div>
                      </td>
                      <td className="px-8 py-5">
                        <p className="text-sm font-bold text-[var(--text-main)] group-hover:text-emerald-600 transition-colors">{dept}</p>
                        <p className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-widest">Zone B-{i + 1}</p>
                      </td>
                      <td className="px-8 py-5">
                        <div className="flex -space-x-2">
                          {[1, 2, 3].map(j => (
                            <div key={j} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[8px] font-bold text-slate-600">
                              US
                            </div>
                          ))}
                          <div className="w-8 h-8 rounded-full border-2 border-white bg-emerald-500 flex items-center justify-center text-[8px] font-bold text-white">
                            +{10 + i}
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-5">
                        <span className="px-3 py-1 bg-[var(--bg-main)] text-[var(--text-muted)] text-[10px] font-black uppercase tracking-widest rounded-full border border-[var(--border-color)] transition-all duration-300">
                          {i % 2 === 0 ? '2 Main Units' : '1 Unit'}
                        </span>
                      </td>
                      <td className="px-8 py-5 text-right">
                        <button className="p-2 text-slate-300 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition-all">
                          <Edit3 size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      case 'hours':
        return (
          <div className="premium-card p-8 lg:p-10 animate-fade-in bg-[var(--bg-card)]">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--text-main)]">Standard Operating Hours</h3>
                  <p className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-widest">Global Organization Defaults</p>
                </div>
              </div>
              <div className="space-y-4">
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
                  <div key={day} className="flex flex-col sm:flex-row items-center justify-between py-4 border-b border-[var(--border-color)] last:border-none gap-4">
                    <span className="text-sm font-bold text-[var(--text-main)] w-32">{day}</span>
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-3">
                        <input type="time" defaultValue="09:00" className="premium-input py-2 text-xs" />
                        <span className="text-[var(--text-muted)] font-bold text-xs uppercase tracking-widest">to</span>
                        <input type="time" defaultValue="18:00" className="premium-input py-2 text-xs" />
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer group">
                        <input type="checkbox" defaultChecked={day !== 'Sunday'} className="sr-only peer" />
                        <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500 shadow-inner"></div>
                      </label>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10 flex justify-end">
                <button className="premium-button-primary px-8 py-3 shadow-xl shadow-emerald-600/20">Save Global Schedule</button>
              </div>
            </div>
          </div>
        );
      case 'settings':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-fade-in">
            <div className="premium-card p-10 bg-[var(--bg-card)]">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                  <Globe size={24} />
                </div>
                <h3 className="text-xl font-bold text-[var(--text-main)] tracking-tight">Regional Preferences</h3>
              </div>
              <div className="space-y-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-widest ml-1">Base Timezone</label>
                  <select className="premium-input appearance-none bg-[var(--bg-main)] border-[var(--border-color)]">
                    <option>(GMT+05:30) India Standard Time</option>
                    <option>(GMT+00:00) UTC</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-widest ml-1">Currency Unit</label>
                  <select className="premium-input appearance-none bg-[var(--bg-main)] border-[var(--border-color)]">
                    <option>INR (₹) - Indian Rupee</option>
                    <option>USD ($) - US Dollar</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-widest ml-1">System Language</label>
                  <select className="premium-input appearance-none bg-[var(--bg-main)] border-[var(--border-color)]">
                    <option>English (International)</option>
                    <option>Gujarati (ભારતીય)</option>
                    <option>Hindi (हिन्दी)</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="bg-slate-900 rounded-[32px] p-10 text-white relative overflow-hidden group">
              <div className="relative z-10">
                <div className="w-16 h-16 bg-emerald-500 rounded-3xl flex items-center justify-center mb-8 shadow-2xl shadow-emerald-500/20 group-hover:scale-110 transition-transform duration-500">
                  <ShieldCheck size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-6 tracking-tight">Configuration Governance</h3>
                <p className="text-slate-400 font-medium leading-relaxed mb-10">
                  All branch-level settings automatically inherit these global defaults unless explicitly overridden by authorized facility administrators.
                </p>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse shadow-lg shadow-emerald-500/50"></div>
                    <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Policy Synchronization: Active</span>
                  </div>
                  <Activity size={20} className="text-slate-600" />
                </div>
              </div>
              <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[100px] -mr-48 -mt-48 transition-all group-hover:bg-emerald-500/10"></div>
            </div>
          </div>
        );
      default:
        return (
          <div className="premium-card p-20 flex flex-col items-center justify-center bg-[var(--bg-card)] border-dashed border-2 border-[var(--border-color)]">
            <Layers size={64} className="text-[var(--border-color)] mb-6" />
            <h3 className="text-2xl font-bold text-[var(--text-main)] mb-2">Zone Mapping Engine</h3>
            <p className="text-[var(--text-muted)] font-medium max-w-sm text-center">
              Configure floor-level zones, sterile areas, and facility layouts for real-time asset tracking.
            </p>
            <button className="mt-8 premium-button bg-[var(--bg-main)] text-[var(--text-muted)] hover:bg-[var(--bg-card)]">Initialize Layer</button>
          </div>
        );
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl font-bold text-[var(--text-main)] tracking-tight mb-2">Organization & Facility</h2>
          <p className="text-[var(--text-muted)] font-medium max-w-2xl">
            Hierarchical governance layer for enterprise-wide hospital networks, multi-specialty clinics, and laboratory branches.
          </p>
        </div>
        <div className="hidden lg:flex gap-4">
          <div className="premium-card px-5 py-3 border-none bg-emerald-500/10 text-emerald-600 shadow-sm transition-all duration-300 hover:scale-105">
            <p className="text-[10px] font-black uppercase tracking-widest mb-1 opacity-60">System Uptime</p>
            <p className="text-xl font-bold leading-none">99.9%</p>
          </div>
        </div>
      </div>

      {/* Tabs: Responsive Scrollable */}
      <div className="flex items-center gap-1 bg-[var(--bg-main)] p-1 rounded-2xl border border-[var(--border-color)] overflow-x-auto no-scrollbar max-w-full">
        {tabs.map(tab => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold transition-all duration-300 whitespace-nowrap ${
                isActive 
                  ? 'bg-[var(--bg-card)] text-emerald-600 shadow-sm border border-[var(--border-color)]' 
                  : 'text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--bg-card)]/50'
              }`}
            >
              <Icon size={18} /> {tab.name}
            </button>
          );
        })}
      </div>

      {/* Dynamic Content */}
      <div className="min-h-[500px]">
        {renderContent()}
      </div>
    </div>
  );
};

export default OrganizationManagement;

