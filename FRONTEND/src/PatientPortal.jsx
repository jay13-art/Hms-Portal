import React, { useState } from 'react';
import { 
  Calendar, 
  FileText, 
  CreditCard, 
  MessageSquare, 
  User, 
  History, 
  Download, 
  Plus, 
  ChevronRight, 
  Bell, 
  Shield, 
  Activity, 
  Thermometer, 
  Stethoscope, 
  Upload, 
  Clock, 
  CheckCircle2,
  AlertCircle,
  Smartphone,
  ExternalLink
} from 'lucide-react';

const PatientPortal = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const upcomingAppointments = [
    { id: 'APP-9921', doctor: 'Dr. Anjali Desai', specialty: 'General Physician', date: 'May 16, 2026', time: '10:30 AM', status: 'Confirmed' },
  ];

  const medicalRecords = [
    { id: 'REC-101', type: 'Lab Report', name: 'Complete Blood Count', date: 'May 10, 2026', status: 'Ready' },
    { id: 'REC-102', type: 'Prescription', name: 'Post-OP Care Plan', date: 'May 08, 2026', status: 'Ready' },
    { id: 'REC-103', type: 'Imaging', name: 'Chest X-Ray', date: 'May 05, 2026', status: 'Processing' },
  ];

  const renderDashboard = () => (
    <div className="space-y-8 animate-fade-in">
      {/* Quick Action Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <button className="premium-card p-8 bg-emerald-600 text-white border-none shadow-2xl shadow-emerald-600/20 hover:-translate-y-1 transition-all text-left group">
          <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <Plus size={24} />
          </div>
          <h3 className="text-xl font-bold mb-2 tracking-tight">Book Appointment</h3>
          <p className="text-emerald-100 text-xs font-medium">Schedule a new visit or consultation</p>
        </button>
        <button className="premium-card p-8 bg-blue-600 text-white border-none shadow-2xl shadow-blue-600/20 hover:-translate-y-1 transition-all text-left group">
          <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <CreditCard size={24} />
          </div>
          <h3 className="text-xl font-bold mb-2 tracking-tight">Pay Invoices</h3>
          <p className="text-blue-100 text-xs font-medium">View pending bills and payments</p>
        </button>
        <button className="premium-card p-8 bg-purple-600 text-white border-none shadow-2xl shadow-purple-600/20 hover:-translate-y-1 transition-all text-left group">
          <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <FileText size={24} />
          </div>
          <h3 className="text-xl font-bold mb-2 tracking-tight">Medical Records</h3>
          <p className="text-purple-100 text-xs font-medium">Lab reports and prescriptions</p>
        </button>
        <button className="premium-card p-8 bg-slate-900 text-white border-none shadow-2xl shadow-slate-900/20 hover:-translate-y-1 transition-all text-left group">
          <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <MessageSquare size={24} />
          </div>
          <h3 className="text-xl font-bold mb-2 tracking-tight">Chat with Care</h3>
          <p className="text-slate-400 text-xs font-medium">Message your medical team</p>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Appointments & Vitals */}
        <div className="lg:col-span-2 space-y-8">
          <div className="premium-card p-8 bg-[var(--bg-card)] border-[var(--border-color)]">
            <div className="flex items-center justify-between mb-8">
              <h4 className="text-xl font-bold text-[var(--text-main)]">Upcoming Appointments</h4>
              <button className="text-xs font-bold text-emerald-600 hover:underline">View All</button>
            </div>
            {upcomingAppointments.map((app) => (
              <div key={app.id} className="p-6 bg-[var(--bg-main)] rounded-3xl border border-[var(--border-color)] flex flex-col md:flex-row items-center gap-6 group hover:border-emerald-500/30 transition-all">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500 text-white flex items-center justify-center font-black text-xl shadow-lg shadow-emerald-500/20">
                  {app.doctor.split(' ').pop().charAt(0)}
                </div>
                <div className="flex-1 text-center md:text-left">
                  <p className="text-lg font-bold text-[var(--text-main)] group-hover:text-emerald-600 transition-colors">{app.doctor}</p>
                  <p className="text-xs text-[var(--text-muted)] font-bold uppercase tracking-widest">{app.specialty}</p>
                </div>
                <div className="px-6 py-2 bg-[var(--bg-card)] rounded-2xl border border-[var(--border-color)] text-center">
                  <p className="text-sm font-bold text-[var(--text-main)]">{app.date}</p>
                  <p className="text-[10px] text-[var(--text-muted)] font-bold uppercase">{app.time}</p>
                </div>
                <button className="premium-button bg-emerald-500 text-white border-none px-6 py-3 shadow-lg shadow-emerald-500/20">Check-in</button>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: 'Weight', value: '72', unit: 'kg', icon: Activity, color: 'text-blue-500', bg: 'bg-blue-500/10' },
              { label: 'Blood Pressure', value: '120/80', unit: 'mmHg', icon: Thermometer, color: 'text-rose-500', bg: 'bg-rose-500/10' },
              { label: 'Heart Rate', value: '72', unit: 'bpm', icon: Activity, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
            ].map((vital, i) => (
              <div key={i} className="premium-card p-6 bg-[var(--bg-card)] border-[var(--border-color)] group hover:-translate-y-1 transition-all">
                <div className={`w-10 h-10 rounded-xl ${vital.bg} ${vital.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <vital.icon size={20} />
                </div>
                <p className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-widest mb-1">{vital.label}</p>
                <p className="text-2xl font-black text-[var(--text-main)] tracking-tight">{vital.value} <span className="text-xs font-medium text-[var(--text-muted)]">{vital.unit}</span></p>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar: Records & Insurance */}
        <div className="space-y-8">
          <div className="premium-card p-8 bg-[var(--bg-card)] border-[var(--border-color)]">
            <h4 className="text-lg font-bold text-[var(--text-main)] mb-6">Recent Records</h4>
            <div className="space-y-4">
              {medicalRecords.map((record) => (
                <div key={record.id} className="flex items-center justify-between p-4 bg-[var(--bg-main)] rounded-2xl border border-[var(--border-color)] hover:border-purple-500/20 transition-all cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[var(--bg-card)] text-[var(--text-muted)] flex items-center justify-center group-hover:text-purple-500 transition-colors">
                      {record.type === 'Lab Report' ? <Activity size={16} /> : <FileText size={16} />}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[var(--text-main)] truncate max-w-[120px]">{record.name}</p>
                      <p className="text-[9px] text-[var(--text-muted)] font-black uppercase tracking-tighter">{record.date}</p>
                    </div>
                  </div>
                  {record.status === 'Ready' ? (
                    <button className="text-emerald-600"><Download size={18} /></button>
                  ) : (
                    <span className="text-[9px] font-black text-amber-500 uppercase tracking-widest animate-pulse">Wait</span>
                  )}
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-3 border border-dashed border-[var(--border-color)] rounded-2xl text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-widest hover:bg-[var(--bg-main)] transition-all">View All Records</button>
          </div>

          <div className="premium-card p-8 bg-gradient-to-br from-slate-900 to-slate-800 text-white border-none shadow-2xl shadow-slate-900/40 relative overflow-hidden group">
            <div className="relative z-10">
              <Shield className="text-blue-400 mb-4" size={32} />
              <h4 className="text-xl font-bold mb-2 tracking-tight">Insurance Portal</h4>
              <p className="text-slate-400 text-xs font-medium mb-6 leading-relaxed">Ensure your claims are processed faster by keeping your insurance documents updated.</p>
              <button className="w-full py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl text-[10px] font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2">
                <Upload size={14} /> Upload Card
              </button>
            </div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl transition-all group-hover:bg-blue-500/10"></div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAppointments = () => (
    <div className="premium-card overflow-hidden animate-fade-in bg-[var(--bg-card)] border-none shadow-2xl shadow-black/5">
      <div className="p-10 border-b border-[var(--border-color)] flex flex-col md:flex-row items-center justify-between gap-8 bg-gradient-to-r from-emerald-500/5 to-transparent">
        <div>
          <h4 className="text-3xl font-black text-[var(--text-main)] tracking-tight mb-2">My Appointments</h4>
          <p className="text-[var(--text-muted)] font-medium">View and manage your clinical consultations and lab visits.</p>
        </div>
        <button className="premium-button-primary bg-emerald-600 hover:bg-emerald-700 px-10 py-4 font-bold shadow-xl shadow-emerald-600/20 flex items-center gap-3">
          <Plus size={20} /> New Appointment
        </button>
      </div>
      <div className="p-10 space-y-6">
        {[1, 2].map((i) => (
          <div key={i} className="p-8 bg-[var(--bg-main)] rounded-[32px] border border-[var(--border-color)] hover:border-emerald-500/20 transition-all group">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center justify-center overflow-hidden shadow-sm group-hover:scale-105 transition-all">
                  <User className="text-[var(--text-muted)]" size={40} />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h5 className="text-2xl font-black text-[var(--text-main)]">Dr. Sameer Shah</h5>
                    <span className="px-3 py-1 bg-emerald-500/10 text-emerald-600 text-[10px] font-black uppercase tracking-widest rounded-full">Confirmed</span>
                  </div>
                  <p className="text-sm font-bold text-[var(--text-muted)] uppercase tracking-[0.2em]">Consultant Cardiologist</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="px-8 py-4 bg-[var(--bg-card)] rounded-[24px] border border-[var(--border-color)] text-center min-w-[140px]">
                  <p className="text-[10px] font-black text-[var(--text-muted)] uppercase tracking-widest mb-1">Date & Time</p>
                  <p className="text-lg font-bold text-[var(--text-main)]">16 May, 10:30 AM</p>
                </div>
                <div className="flex flex-col gap-2">
                  <button className="p-4 bg-[var(--bg-card)] text-[var(--text-muted)] hover:text-emerald-600 border border-[var(--border-color)] rounded-2xl transition-all hover:bg-white shadow-sm">
                    <Clock size={20} />
                  </button>
                  <button className="p-4 bg-[var(--bg-card)] text-[var(--text-muted)] hover:text-rose-500 border border-[var(--border-color)] rounded-2xl transition-all hover:bg-white shadow-sm">
                    <AlertCircle size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto space-y-10 py-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-600">Patient Journey Portal</span>
          </div>
          <h2 className="text-4xl font-black text-[var(--text-main)] tracking-tight mb-2">Welcome Back, Arjun</h2>
          <p className="text-[var(--text-muted)] font-medium max-w-xl text-lg">Manage your health journey, view reports, and connect with your care team in one secure place.</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="w-14 h-14 bg-[var(--bg-card)] rounded-2xl border border-[var(--border-color)] flex items-center justify-center text-[var(--text-muted)] hover:text-emerald-500 transition-all relative">
            <Bell size={24} />
            <span className="absolute top-4 right-4 w-2 h-2 bg-rose-500 rounded-full border-2 border-[var(--bg-card)]"></span>
          </button>
          <button className="flex items-center gap-4 bg-[var(--bg-card)] p-2 pr-6 rounded-2xl border border-[var(--border-color)] hover:border-emerald-500/20 transition-all">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold">AM</div>
            <div className="hidden sm:block text-left">
              <p className="text-xs font-bold text-[var(--text-main)]">Arjun Mehta</p>
              <p className="text-[9px] font-black text-[var(--text-muted)] uppercase tracking-tighter">P-1024 • Verified</p>
            </div>
          </button>
        </div>
      </div>

      {/* Portal Tabs */}
      <div className="flex items-center gap-1 bg-[var(--bg-main)]/50 p-1.5 rounded-[22px] border border-[var(--border-color)] overflow-x-auto no-scrollbar w-fit backdrop-blur-sm">
        {[
          { id: 'dashboard', name: 'Overview', icon: History },
          { id: 'appointments', name: 'Appointments', icon: Calendar },
          { id: 'records', name: 'Medical Records', icon: Stethoscope },
          { id: 'billing', name: 'Billing & Receipts', icon: CreditCard },
          { id: 'messages', name: 'Secure Messages', icon: MessageSquare },
          { id: 'profile', name: 'My Profile', icon: User },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-3 px-8 py-3.5 rounded-[18px] text-xs font-bold transition-all duration-500 whitespace-nowrap ${
              activeTab === tab.id 
                ? 'bg-emerald-600 text-white shadow-xl shadow-emerald-600/20 translate-y-[-2px]' 
                : 'text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-emerald-500/5'
            }`}
          >
            <tab.icon size={18} /> {tab.name}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="min-h-[600px]">
        {activeTab === 'dashboard' ? renderDashboard() : 
         activeTab === 'appointments' ? renderAppointments() : (
          <div className="premium-card p-24 flex flex-col items-center justify-center bg-[var(--bg-card)] border-dashed border-2 border-[var(--border-color)]">
            <div className="w-24 h-24 bg-[var(--bg-main)] rounded-[32px] flex items-center justify-center text-[var(--text-muted)] mb-8 border border-[var(--border-color)]">
              {activeTab === 'records' ? <Stethoscope size={48} /> : activeTab === 'billing' ? <CreditCard size={48} /> : activeTab === 'messages' ? <MessageSquare size={48} /> : <User size={48} />}
            </div>
            <h3 className="text-3xl font-black text-[var(--text-main)] mb-3 tracking-tight">Your Digital {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h3>
            <p className="text-[var(--text-muted)] font-medium max-w-md text-center leading-relaxed text-lg">
              Access your personal <span className="text-emerald-600 font-black">{activeTab}</span> data securely from any device.
            </p>
            <div className="mt-10 flex gap-4">
              <button className="premium-button bg-[var(--bg-main)] text-[var(--text-main)] border border-[var(--border-color)] px-10 py-4 font-bold">
                Update Info
              </button>
              <button className="premium-button-primary bg-emerald-600 hover:bg-emerald-700 px-10 py-4 font-bold shadow-xl shadow-emerald-600/20">
                View Detailed View
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Safety & App Footer */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8">
        <div className="premium-card p-10 bg-slate-900 rounded-[40px] text-white flex items-center gap-10 overflow-hidden relative group">
          <div className="relative z-10 shrink-0">
            <Smartphone size={64} className="text-emerald-500 animate-bounce" />
          </div>
          <div className="relative z-10">
            <h4 className="text-2xl font-black mb-2 tracking-tight">Download Mobile App</h4>
            <p className="text-slate-400 font-medium mb-6 leading-relaxed">Book appointments, view reports, and pay bills on the go. Available for iOS and Android.</p>
            <div className="flex gap-4">
              <button className="px-6 py-2 bg-white/10 hover:bg-white/20 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all">App Store</button>
              <button className="px-6 py-2 bg-white/10 hover:bg-white/20 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all">Play Store</button>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-[100px] -mr-32 -mt-32"></div>
        </div>
        <div className="premium-card p-10 bg-[var(--bg-card)] border-[var(--border-color)] flex items-center gap-10 group">
          <div className="w-20 h-20 bg-emerald-500/10 text-emerald-600 rounded-[32px] flex items-center justify-center shrink-0 group-hover:scale-110 transition-all duration-700">
            <Shield size={40} />
          </div>
          <div>
            <h4 className="text-2xl font-black text-[var(--text-main)] mb-2 tracking-tight">Data Privacy & Security</h4>
            <p className="text-[var(--text-muted)] font-medium leading-relaxed">Your medical records are encrypted and protected under strict healthcare privacy standards. Only you and your authorized care team can access this data.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientPortal;
