import React, { useState } from 'react';
import { CalendarDays, Clock, Plus, Search, Filter, Mic, User, Phone, CheckCircle2, XCircle, AlertCircle, Calendar as CalendarIcon, List, ChevronRight, TrendingUp } from 'lucide-react';

const AppointmentManagement = () => {
  const [view, setView] = useState('list'); // 'list' or 'calendar'
  
  const appointments = [
    { id: 'APP-001', patient: 'Arjun Mehta', doctor: 'Dr. Sameer Shah', time: '09:30 AM', date: '2026-05-13', type: 'Consultation', status: 'Checked In' },
    { id: 'APP-002', patient: 'Priya Sharma', doctor: 'Dr. Anjali Desai', time: '10:15 AM', date: '2026-05-13', type: 'Follow-up', status: 'Confirmed' },
    { id: 'APP-003', patient: 'Rajesh Varma', doctor: 'Dr. Sameer Shah', time: '11:00 AM', date: '2026-05-13', type: 'Report Review', status: 'Waitlist' },
    { id: 'APP-004', patient: 'Neha Gupta', doctor: 'Dr. Anjali Desai', time: '11:45 AM', date: '2026-05-13', type: 'Consultation', status: 'Pending' },
    { id: 'APP-005', patient: 'Amit Patel', doctor: 'Dr. Sameer Shah', time: '12:30 PM', date: '2026-05-13', type: 'Emergency', status: 'In Progress' },
  ];

  const stats = [
    { label: 'Today Total', value: 24, icon: CalendarDays, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Checked In', value: 12, icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { label: 'Waitlist', value: 3, icon: Clock, color: 'text-amber-600', bg: 'bg-amber-50' },
    { label: 'No Show', value: 2, icon: XCircle, color: 'text-rose-600', bg: 'bg-rose-50' },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-2">Appointments & Scheduling</h2>
          <p className="text-slate-500 font-medium max-w-xl">
            Unified healthcare scheduling engine powered by real-time resource availability and AI-voice integration.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="premium-button bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 flex items-center gap-2">
            <Mic size={18} className="text-blue-500" /> AI Booking
          </button>
          <button className="premium-button-primary flex items-center gap-2">
            <Plus size={18} /> New Appointment
          </button>
        </div>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="premium-card p-6 group">
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-xl ${stat.bg} ${stat.color} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                <stat.icon size={24} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">{stat.label}</p>
                <div className="flex items-center gap-2">
                  <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                  <span className="flex items-center text-[10px] font-bold text-emerald-500 bg-emerald-50 px-1 rounded">
                    <TrendingUp size={10} /> +4%
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Table Container */}
      <div className="premium-card overflow-hidden">
        {/* Toolbar */}
        <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6 bg-white">
          <div className="flex items-center gap-1 bg-slate-100/50 p-1 rounded-xl border border-slate-200/50">
            <button 
              onClick={() => setView('list')}
              className={`px-5 py-2 rounded-lg text-xs font-bold flex items-center gap-2 transition-all duration-300 ${view === 'list' ? 'bg-white text-emerald-600 shadow-sm border border-slate-200/50' : 'text-slate-500 hover:text-slate-700'}`}
            >
              <List size={16} /> List
            </button>
            <button 
              onClick={() => setView('calendar')}
              className={`px-5 py-2 rounded-lg text-xs font-bold flex items-center gap-2 transition-all duration-300 ${view === 'calendar' ? 'bg-white text-emerald-600 shadow-sm border border-slate-200/50' : 'text-slate-500 hover:text-slate-700'}`}
            >
              <CalendarIcon size={16} /> Calendar
            </button>
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Search by patient name, ID or doctor..." 
                className="premium-input pl-12"
              />
            </div>
            <button className="p-2.5 bg-slate-100 text-slate-600 rounded-xl hover:bg-slate-200 transition-all">
              <Filter size={20} />
            </button>
          </div>
        </div>

        {/* Content Area */}
        {view === 'list' ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50/50 text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100">
                  <th className="px-8 py-5">Scheduled Slot</th>
                  <th className="px-8 py-5">Patient & Case ID</th>
                  <th className="px-8 py-5">Assigned Consultant</th>
                  <th className="px-8 py-5">Session Type</th>
                  <th className="px-8 py-5">Workflow Status</th>
                  <th className="px-8 py-5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {appointments.map((app) => (
                  <tr key={app.id} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-3 text-slate-900 font-bold">
                        <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-white group-hover:text-emerald-500 transition-all shadow-sm">
                          <Clock size={16} />
                        </div>
                        {app.time}
                      </div>
                    </td>
                    <td className="px-8 py-5">
                      <div>
                        <p className="font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">{app.patient}</p>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{app.id}</p>
                      </div>
                    </td>
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 text-[10px] font-bold">
                          {app.doctor.split(' ')[1][0]}
                        </div>
                        <p className="text-slate-600 font-medium">{app.doctor}</p>
                      </div>
                    </td>
                    <td className="px-8 py-5">
                      <span className="px-3 py-1 bg-slate-100 text-slate-500 text-[10px] font-bold rounded-full uppercase tracking-wider">
                        {app.type}
                      </span>
                    </td>
                    <td className="px-8 py-5">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5 w-fit ${
                        app.status === 'Checked In' ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' :
                        app.status === 'In Progress' ? 'bg-blue-50 text-blue-600 border border-blue-100' :
                        app.status === 'Waitlist' ? 'bg-amber-50 text-amber-600 border border-amber-100' :
                        'bg-slate-100 text-slate-500 border border-slate-200'
                      }`}>
                        {app.status}
                      </span>
                    </td>
                    <td className="px-8 py-5 text-right">
                      <div className="flex justify-end gap-1">
                        <button className="p-2 text-slate-300 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all" title="Confirm Check-in"><CheckCircle2 size={18} /></button>
                        <button className="p-2 text-slate-300 hover:text-rose-500 hover:bg-rose-50 rounded-lg transition-all" title="Cancel/No Show"><XCircle size={18} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="p-20 text-center flex flex-col items-center animate-fade-in">
            <div className="w-24 h-24 bg-slate-50 rounded-3xl flex items-center justify-center text-slate-300 mb-8 border border-slate-100 shadow-inner">
              <CalendarIcon size={48} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Enterprise Calendar Module</h3>
            <p className="text-slate-500 font-medium max-w-sm mx-auto mb-10">
              Interactive provider-level scheduling with drag-and-drop optimization and multi-facility synchronization.
            </p>
            <button className="premium-button bg-slate-900 text-white hover:bg-slate-800 shadow-xl shadow-slate-900/20">
              Configure Advanced View
            </button>
          </div>
        )}
      </div>

      {/* Footer Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-slate-900 rounded-[32px] p-10 text-white relative overflow-hidden group">
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/20 transition-transform duration-500 group-hover:scale-110">
                <Mic size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold">VAPI AI Booking</h3>
            </div>
            <p className="text-slate-400 font-medium leading-relaxed mb-8">
              Enable the automated voice scheduler. The AI agent synchronizes with these slots to handle patient calls 24/7.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Total Bookings</span>
                <span className="text-xl font-bold text-emerald-400">1,248</span>
              </div>
              <div className="w-px h-10 bg-slate-800"></div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Status</span>
                <span className="text-xl font-bold text-blue-400 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                  Active
                </span>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-[100px] -mr-40 -mt-40 transition-all group-hover:bg-emerald-500/10"></div>
        </div>

        <div className="premium-card p-10 bg-white/50 backdrop-blur-sm border-slate-200/50">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                <List size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Walk-in Queue</h3>
            </div>
            <span className="px-3 py-1 bg-emerald-50 text-emerald-600 text-[10px] font-bold rounded-full uppercase tracking-widest border border-emerald-100">
              Live Feed
            </span>
          </div>
          <div className="space-y-4">
            {[1, 2].map(i => (
              <div key={i} className="flex items-center justify-between p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all group cursor-pointer">
                <div className="flex items-center gap-5">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-sm">
                    #{i}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">Token ID: TK-29{i}</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Est. Wait Time: {5 * i} Minutes</p>
                  </div>
                </div>
                <ChevronRight size={18} className="text-slate-300 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentManagement;

