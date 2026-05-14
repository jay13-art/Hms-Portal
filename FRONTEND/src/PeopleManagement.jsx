import React, { useState } from 'react';
import { User, Users, Stethoscope, Briefcase, Plus, Search, Filter, MoreHorizontal, Mail, Phone, ExternalLink, Activity, BadgeCheck } from 'lucide-react';

const PeopleManagement = () => {
  const [activeTab, setActiveTab] = useState('patients');
  const [searchQuery, setSearchQuery] = useState('');

  const tabs = [
    { id: 'patients', name: 'Patients', icon: User },
    { id: 'doctors', name: 'Doctors & Staff', icon: Stethoscope },
    { id: 'admin', name: 'Administrative', icon: Briefcase },
    { id: 'external', name: 'External Contacts', icon: Users },
  ];

  const peopleData = {
    patients: [
      { id: 'P-1001', name: 'Arjun Mehta', age: 45, gender: 'Male', contact: '+91 98250 12345', lastVisit: '2026-05-10', status: 'Active', avatar: 'AM' },
      { id: 'P-1002', name: 'Priya Sharma', age: 32, gender: 'Female', contact: '+91 99000 54321', lastVisit: '2026-05-12', status: 'Active', avatar: 'PS' },
      { id: 'P-1003', name: 'Rajesh Varma', age: 60, gender: 'Male', contact: '+91 94260 98765', lastVisit: '2026-04-28', status: 'Inactive', avatar: 'RV' },
    ],
    doctors: [
      { id: 'D-501', name: 'Dr. Sameer Shah', role: 'Cardiologist', qualification: 'MD, DM', regNo: 'G-12345', status: 'On Duty', avatar: 'SS' },
      { id: 'D-502', name: 'Dr. Anjali Desai', role: 'Neurologist', qualification: 'MBBS, MD', regNo: 'G-67890', status: 'Available', avatar: 'AD' },
    ],
    admin: [
      { id: 'ST-01', name: 'Vikram Singh', role: 'Hospital Admin', dept: 'Operations', contact: 'ext. 101', status: 'Active', avatar: 'VS' },
      { id: 'ST-02', name: 'Meera Kapur', role: 'Accountant', dept: 'Finance', contact: 'ext. 105', status: 'Active', avatar: 'MK' },
    ]
  };

  const renderPeopleList = (type) => {
    const list = peopleData[type] || [];
    return (
      <div className="premium-card overflow-hidden animate-fade-in">
        <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder={`Search ${type}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="premium-input pl-12"
            />
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <button className="premium-button bg-slate-100 text-slate-600 hover:bg-slate-200 flex items-center gap-2">
              <Filter size={18} /> Filter
            </button>
            <button className="premium-button-primary flex items-center gap-2 whitespace-nowrap">
              <Plus size={18} /> Add {type.slice(0, -1)}
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50 text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100">
                <th className="px-8 py-5">Profile & ID</th>
                <th className="px-8 py-5">
                  {type === 'patients' ? 'Demographics' : type === 'doctors' ? 'Clinical Profile' : 'Role & Operations'}
                </th>
                <th className="px-8 py-5">Communication</th>
                <th className="px-8 py-5">Live Status</th>
                <th className="px-8 py-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {list.map((person) => (
                <tr key={person.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center text-slate-700 font-bold text-lg border border-white shadow-sm group-hover:scale-105 transition-transform duration-300">
                        {person.avatar}
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">{person.name}</p>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{person.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    {type === 'patients' ? (
                      <div>
                        <p className="text-slate-700 font-semibold">{person.age} Years • {person.gender}</p>
                        <p className="text-xs text-slate-400 font-medium">Last Visit: {person.lastVisit}</p>
                      </div>
                    ) : (
                      <div>
                        <p className="text-slate-900 font-bold">{person.role}</p>
                        <p className="text-xs text-emerald-600 font-bold flex items-center gap-1">
                          <BadgeCheck size={12} /> {person.qualification || person.dept}
                        </p>
                      </div>
                    )}
                  </td>
                  <td className="px-8 py-5">
                    <div className="space-y-1.5">
                      <p className="text-sm text-slate-600 flex items-center gap-2 font-medium">
                        <Phone size={14} className="text-emerald-500" /> {person.contact}
                      </p>
                      <p className="text-xs text-slate-400 flex items-center gap-2">
                        <Mail size={14} className="text-slate-300" /> {person.name.toLowerCase().replace(' ', '.')}@carestream.com
                      </p>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5 w-fit ${
                      person.status === 'Active' || person.status === 'On Duty' || person.status === 'Available'
                        ? 'bg-emerald-50 text-emerald-600 border border-emerald-100'
                        : 'bg-slate-100 text-slate-500 border border-slate-200'
                    }`}>
                      {(person.status === 'Active' || person.status === 'On Duty' || person.status === 'Available') && (
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      )}
                      {person.status}
                    </span>
                  </td>
                  <td className="px-8 py-5 text-right">
                    <button className="p-2.5 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition-all">
                      <MoreHorizontal size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-2">People & Identity</h2>
          <p className="text-slate-500 font-medium max-w-xl">
            Centralized ecosystem for managing patient records, clinical staff availability, and organizational administrative hierarchy.
          </p>
        </div>
        <div className="flex gap-4">
          <div className="premium-card px-5 py-3 border-none bg-white shadow-xl shadow-slate-200/50">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Total Population</p>
            <p className="text-2xl font-bold text-slate-900 leading-none">1,254</p>
          </div>
          <div className="premium-card px-5 py-3 border-none bg-emerald-600 text-white shadow-xl shadow-emerald-500/20">
            <p className="text-[10px] font-bold text-emerald-200 uppercase tracking-widest mb-1">On-Duty Staff</p>
            <p className="text-2xl font-bold leading-none">86</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-1 bg-slate-100/50 p-1 rounded-2xl w-fit border border-slate-200/50">
        {tabs.map(tab => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                isActive 
                  ? 'bg-white text-emerald-600 shadow-sm border border-slate-200/50' 
                  : 'text-slate-500 hover:text-slate-900 hover:bg-white/50'
              }`}
            >
              <Icon size={18} className={isActive ? 'text-emerald-500' : 'text-slate-400'} /> 
              {tab.name}
            </button>
          );
        })}
      </div>

      {/* Main Content */}
      <div className="space-y-6">
        {renderPeopleList(activeTab)}
      </div>

      {/* Analytics/External Section */}
      {activeTab === 'external' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
          <div className="bg-slate-900 rounded-[32px] p-10 text-white relative overflow-hidden group">
            <div className="relative z-10">
              <div className="w-14 h-14 bg-emerald-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform duration-500">
                <ExternalLink size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Referral Network</h3>
              <p className="text-slate-400 font-medium leading-relaxed mb-8">
                Manage your hospital's ecosystem of external consultants and referring clinics. Track patient inflow and synchronize clinical documentation securely.
              </p>
              <button className="premium-button bg-white text-slate-900 font-bold hover:bg-emerald-50 transition-colors">
                Open Directory
              </button>
            </div>
            {/* Decorative background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] -mr-32 -mt-32 transition-all group-hover:bg-emerald-500/20"></div>
          </div>
          
          <div className="premium-card p-10 flex flex-col justify-center border-slate-200/50 bg-white/50 backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Activity size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Emergency Protocol</h3>
            </div>
            <p className="text-slate-500 font-medium mb-8">
              Configure automated notification systems for primary and secondary patient guardians during critical clinical events.
            </p>
            <div className="space-y-4">
              {[
                { name: 'Primary Guardian Contact', status: 'Verified', color: 'text-emerald-600' },
                { name: 'Secondary Caregiver SMS', status: 'Active', color: 'text-blue-600' }
              ].map((p, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all cursor-pointer">
                  <span className="text-sm font-bold text-slate-700">{p.name}</span>
                  <span className={`text-[10px] font-black uppercase tracking-widest ${p.color}`}>{p.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PeopleManagement;

