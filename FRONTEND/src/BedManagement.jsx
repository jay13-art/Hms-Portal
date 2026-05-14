import React, { useState } from 'react';
import { Bed, Home, AlertCircle, CheckCircle2, Hammer, Search, Filter, Plus, ArrowRightLeft, TrendingUp } from 'lucide-react';

const BedManagement = () => {
  const [activeWard, setActiveWard] = useState('All');

  const wards = ['All', 'General Ward', 'ICU', 'Emergency', 'Semi-Private', 'Private'];

  const beds = [
    { id: 'G-101', type: 'General', ward: 'General Ward', status: 'Available', patient: null },
    { id: 'G-102', type: 'General', ward: 'General Ward', status: 'Occupied', patient: 'Arjun Mehta' },
    { id: 'I-201', type: 'ICU', ward: 'ICU', status: 'Cleaning', patient: null },
    { id: 'I-202', type: 'ICU', ward: 'ICU', status: 'Occupied', patient: 'Priya Sharma' },
    { id: 'E-301', type: 'Emergency', ward: 'Emergency', status: 'Available', patient: null },
    { id: 'E-302', type: 'Emergency', ward: 'Emergency', status: 'Maintenance', patient: null },
    { id: 'P-401', type: 'Private', ward: 'Private', status: 'Occupied', patient: 'Rajesh Varma' },
    { id: 'S-501', type: 'Semi-Private', ward: 'Semi-Private', status: 'Available', patient: null },
  ];

  const filteredBeds = activeWard === 'All' ? beds : beds.filter(b => b.ward === activeWard);

  const stats = [
    { label: 'Total Beds', value: 120, icon: Bed, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Occupied', value: 84, icon: AlertCircle, color: 'text-orange-600', bg: 'bg-orange-50' },
    { label: 'Available', value: 32, icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { label: 'Maintenance', value: 4, icon: Hammer, color: 'text-rose-600', bg: 'bg-rose-50' },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-2">Rooms & Beds</h2>
          <p className="text-slate-500 font-medium max-w-xl">
            Real-time infrastructure tracking and bed availability management for seamless patient admission workflows.
          </p>
        </div>
        <div className="flex gap-3 w-full sm:w-auto">
          <button className="premium-button bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 flex items-center justify-center gap-2 flex-1 sm:flex-none">
            <ArrowRightLeft size={18} /> Bed Transfer
          </button>
          <button className="premium-button-primary flex items-center justify-center gap-2 flex-1 sm:flex-none">
            <Plus size={18} /> Add Bed
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="premium-card p-6 group">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-xl ${stat.bg} ${stat.color} transition-transform duration-300 group-hover:scale-110`}>
                <stat.icon size={24} />
              </div>
              <div className="text-right">
                <span className="text-2xl font-bold text-slate-900 leading-none">{stat.value}</span>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">{stat.label}</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-500 bg-emerald-50 px-2 py-0.5 rounded-full w-fit">
              <TrendingUp size={10} /> +2% vs yesterday
            </div>
          </div>
        ))}
      </div>

      {/* Main Grid Section */}
      <div className="premium-card p-6 lg:p-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-10">
          <div className="flex items-center gap-1 bg-slate-100/50 p-1 rounded-2xl border border-slate-200/50 overflow-x-auto no-scrollbar w-full lg:w-auto">
            {wards.map(ward => (
              <button
                key={ward}
                onClick={() => setActiveWard(ward)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 whitespace-nowrap ${
                  activeWard === ward 
                    ? 'bg-white text-emerald-600 shadow-sm border border-slate-200/50' 
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {ward}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3 w-full lg:w-auto">
            <div className="relative flex-1 lg:w-64">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Search bed ID..." 
                className="premium-input pl-12" 
              />
            </div>
            <button className="p-2.5 bg-slate-100 text-slate-600 rounded-xl hover:bg-slate-200 transition-all">
              <Filter size={20} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {filteredBeds.map(bed => (
            <div key={bed.id} className={`relative p-6 rounded-[24px] border-2 transition-all duration-300 group ${
              bed.status === 'Occupied' ? 'bg-orange-50/50 border-orange-100' : 
              bed.status === 'Cleaning' ? 'bg-blue-50/50 border-blue-100' :
              bed.status === 'Maintenance' ? 'bg-rose-50/50 border-rose-100' :
              'bg-white border-slate-100 hover:border-emerald-500 hover:shadow-xl hover:shadow-emerald-500/10'
            }`}>
              <div className="flex flex-col items-center gap-4">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                  bed.status === 'Occupied' ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20' : 
                  bed.status === 'Cleaning' ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/20' :
                  bed.status === 'Maintenance' ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/20' :
                  'bg-slate-100 text-slate-400 group-hover:bg-emerald-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-emerald-500/20'
                }`}>
                  <Bed size={28} />
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold text-slate-900 tracking-tight">{bed.id}</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{bed.type}</p>
                </div>
                <div className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5 ${
                  bed.status === 'Occupied' ? 'bg-orange-100 text-orange-700' : 
                  bed.status === 'Cleaning' ? 'bg-blue-100 text-blue-700' :
                  bed.status === 'Maintenance' ? 'bg-rose-100 text-rose-700' :
                  'bg-emerald-100 text-emerald-700'
                }`}>
                  {bed.status === 'Available' && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>}
                  {bed.status}
                </div>
              </div>
              
              {bed.patient && (
                <div className="mt-4 pt-3 border-t border-orange-200/50">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter mb-1 text-center">Assigned Patient</p>
                  <p className="text-xs font-bold text-slate-800 text-center truncate">{bed.patient}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Maintenance Section */}
      <div className="bg-slate-900 rounded-[32px] p-10 text-white relative overflow-hidden group">
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
          <div className="w-20 h-20 bg-emerald-500 rounded-3xl flex items-center justify-center shadow-2xl shadow-emerald-500/20 shrink-0">
            <Home size={40} />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-bold mb-3">Facility Maintenance & Housekeeping</h3>
            <p className="text-slate-400 font-medium leading-relaxed max-w-2xl mb-6">
              Tracks real-time status of room sterilization and maintenance logs. Integrated with the nursing dashboard to ensure fast turnarounds for emergency admissions.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-6">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span className="text-xs font-bold text-slate-200 uppercase tracking-widest">2 Rooms Cleaning</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-rose-400 rounded-full animate-pulse"></div>
                <span className="text-xs font-bold text-slate-200 uppercase tracking-widest">1 Maintenance Flag</span>
              </div>
            </div>
          </div>
          <button className="premium-button bg-white text-slate-900 font-bold hover:bg-emerald-50 shrink-0">
            View Schedule
          </button>
        </div>
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] -mr-48 -mt-48 transition-all group-hover:bg-emerald-500/15"></div>
      </div>
    </div>
  );
};

export default BedManagement;

