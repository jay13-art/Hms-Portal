import React, { useState } from 'react';
import { FileText, Activity, Pill, FlaskConical, Clock, Plus, Search, AlertTriangle, ChevronRight, Save, History, ClipboardList, Thermometer, User, Download, ExternalLink, ShieldCheck } from 'lucide-react';

const EMRManagement = () => {
  const [activeTab, setActiveTab] = useState('timeline');
  const [selectedPatient] = useState({
    id: 'P-1024',
    name: 'Arjun Mehta',
    age: 45,
    gender: 'Male',
    bloodGroup: 'B+',
    allergies: ['Penicillin', 'Peanuts'],
    conditions: ['Hypertension', 'Type 2 Diabetes'],
  });

  const timeline = [
    { date: '2026-05-13', type: 'Consultation', doctor: 'Dr. Sameer Shah', summary: 'Patient complained of mild chest pain and dizziness. BP recorded 140/90.' },
    { date: '2026-04-15', type: 'Lab Test', doctor: 'Dr. Anjali Desai', summary: 'Lipid profile and HbA1c screening. Results show elevated cholesterol.' },
    { date: '2026-03-20', type: 'Follow-up', doctor: 'Dr. Sameer Shah', summary: 'Blood pressure stable, continuing existing medication. Weight down by 2kg.' },
  ];

  const vitals = [
    { label: 'BP', value: '130/85', unit: 'mmHg', status: 'Elevated', color: 'text-amber-500', bg: 'bg-amber-50' },
    { label: 'Pulse', value: '78', unit: 'bpm', status: 'Normal', color: 'text-emerald-500', bg: 'bg-emerald-50' },
    { label: 'Temp', value: '98.6', unit: '°F', status: 'Normal', color: 'text-emerald-500', bg: 'bg-emerald-50' },
    { label: 'SpO2', value: '98', unit: '%', status: 'Normal', color: 'text-emerald-500', bg: 'bg-emerald-50' },
    { label: 'Weight', value: '74', unit: 'kg', status: '-', color: 'text-slate-500', bg: 'bg-slate-50' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'timeline':
        return (
          <div className="space-y-8 animate-fade-in">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <h4 className="text-xl font-bold text-slate-900 tracking-tight">Longitudinal Clinical History</h4>
              <button className="text-emerald-600 text-xs font-bold hover:bg-emerald-50 px-4 py-2 rounded-xl transition-all flex items-center gap-2">
                <Download size={14} /> Export Patient Summary
              </button>
            </div>
            <div className="relative">
              <div className="absolute left-6 lg:left-8 top-0 bottom-0 w-px bg-slate-200"></div>
              {timeline.map((item, i) => (
                <div key={i} className="relative pl-14 lg:pl-20 pb-10 group">
                  <div className="absolute left-[20px] lg:left-[28px] top-1.5 w-3 h-3 bg-white border-4 border-emerald-500 rounded-full z-10 group-hover:scale-125 transition-transform duration-300 ring-4 ring-emerald-50"></div>
                  <div className="premium-card p-6 lg:p-8 hover:border-emerald-500/30 transition-all">
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
                      <div>
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 block">{item.date}</span>
                        <h5 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">{item.type}</h5>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1 bg-slate-50 rounded-lg border border-slate-100">
                        <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 text-[10px] font-bold">
                          {item.doctor.split(' ')[1][0]}
                        </div>
                        <span className="text-xs font-bold text-slate-600">by {item.doctor}</span>
                      </div>
                    </div>
                    <p className="text-sm text-slate-500 leading-relaxed font-medium mb-6">{item.summary}</p>
                    <button className="text-xs font-bold text-emerald-600 flex items-center gap-1.5 hover:underline group/btn">
                      Access SOAP Notes <ExternalLink size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'vitals':
        return (
          <div className="space-y-8 animate-fade-in">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <h4 className="text-xl font-bold text-slate-900 tracking-tight">Real-time Vitals Monitoring</h4>
              <button className="premium-button-primary px-5 py-2.5 flex items-center gap-2">
                <Plus size={18} /> Record New Vitals
              </button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {vitals.map((v, i) => (
                <div key={i} className="premium-card p-6 hover:shadow-xl hover:shadow-slate-200/50 transition-all border-none group bg-white">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">{v.label}</p>
                  <div className="flex items-baseline gap-1 mb-3">
                    <p className="text-3xl font-bold text-slate-900 tracking-tighter group-hover:text-emerald-600 transition-colors">{v.value}</p>
                    <span className="text-xs font-bold text-slate-400">{v.unit}</span>
                  </div>
                  <span className={`text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider ${v.bg} ${v.color}`}>
                    {v.status}
                  </span>
                </div>
              ))}
            </div>
            <div className="premium-card p-10 h-64 flex flex-col items-center justify-center border-dashed border-2 bg-slate-50/50">
              <Activity size={48} className="text-slate-200 mb-4" />
              <p className="text-slate-400 font-bold uppercase tracking-widest text-xs italic">Historical Trend Visualization</p>
            </div>
          </div>
        );
      case 'notes':
        return (
          <div className="animate-fade-in">
            <div className="premium-card overflow-hidden">
              <div className="p-6 lg:p-8 border-b border-slate-100 flex items-center justify-between bg-white">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <ClipboardList size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900">Current Visit SOAP Notes</h4>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-0.5">Encounter ID: ENC-2026-9901</p>
                  </div>
                </div>
                <div className="hidden sm:flex items-center gap-2 text-[10px] font-bold text-emerald-600 uppercase tracking-widest px-3 py-1 bg-emerald-50 rounded-full border border-emerald-100">
                  <ShieldCheck size={14} /> Auto-Saving
                </div>
              </div>
              <div className="p-6 lg:p-10 bg-slate-50/30">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Subjective (S)</label>
                      <textarea className="premium-input min-h-[160px] resize-none" placeholder="Chief complaints and patient perspective..."></textarea>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Objective (O)</label>
                      <textarea className="premium-input min-h-[160px] resize-none" placeholder="Examination findings and diagnostic results..."></textarea>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Assessment (A)</label>
                      <div className="relative group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-500 transition-colors" size={18} />
                        <input type="text" className="premium-input pl-12" placeholder="Search ICD-10 Diagnoses..." />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-1">Plan (P)</label>
                      <textarea className="premium-input min-h-[160px] resize-none" placeholder="Medications, tests, and follow-up strategy..."></textarea>
                    </div>
                  </div>
                </div>
                <div className="mt-10 flex flex-col sm:flex-row justify-between items-center gap-6 pt-8 border-t border-slate-100">
                  <p className="text-xs text-slate-400 font-medium max-w-sm text-center sm:text-left">
                    By finalizing this note, you confirm that all recorded clinical information is accurate as of the encounter time.
                  </p>
                  <button className="premium-button-primary px-10 py-4 flex items-center gap-3 w-full sm:w-auto shadow-xl shadow-emerald-600/20">
                    <Save size={20} /> Finalize EMR Entry
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="premium-card p-20 flex flex-col items-center justify-center bg-white">
            <FlaskConical size={64} className="text-slate-200 mb-6" />
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Module Under Optimization</h3>
            <p className="text-slate-500 font-medium max-w-sm text-center">
              The {activeTab} clinical component is being upgraded to support enterprise-grade diagnostic integration.
            </p>
            <button 
              onClick={() => setActiveTab('timeline')}
              className="mt-8 text-emerald-600 font-bold text-sm hover:underline"
            >
              Back to Timeline
            </button>
          </div>
        );
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Patient Header: Fully Responsive */}
      <div className="bg-slate-900 rounded-[32px] p-6 lg:p-10 text-white relative overflow-hidden shadow-2xl shadow-slate-900/20">
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="flex items-center gap-6 lg:gap-8">
            <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-[32px] bg-gradient-to-br from-slate-800 to-slate-700 flex items-center justify-center border-4 border-slate-800 shadow-xl group cursor-pointer overflow-hidden">
              <User size={48} className="text-slate-400 group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h2 className="text-3xl font-bold tracking-tight">{selectedPatient.name}</h2>
                <span className="px-3 py-1 bg-emerald-500 text-white text-[10px] font-black rounded-full uppercase tracking-widest shadow-lg shadow-emerald-500/20">
                  Verified Record
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-bold text-slate-400">
                <span className="flex items-center gap-2"><Activity size={14} className="text-emerald-500" /> {selectedPatient.id}</span>
                <span className="flex items-center gap-2"><Clock size={14} className="text-slate-500" /> {selectedPatient.age} Yrs / {selectedPatient.gender}</span>
                <span className="flex items-center gap-2"><Thermometer size={14} className="text-rose-500" /> Blood: {selectedPatient.bloodGroup}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-4">
            <div className="bg-rose-500/10 border border-rose-500/20 px-5 py-3 rounded-2xl flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-rose-500/20 flex items-center justify-center text-rose-500">
                <AlertTriangle size={20} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-rose-400 uppercase tracking-widest mb-0.5">Critical Allergies</p>
                <p className="text-sm font-bold text-white">{selectedPatient.allergies.join(', ')}</p>
              </div>
            </div>
          </div>
        </div>
        {/* Abstract design elements */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px] -mr-40 -mt-40"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px]"></div>
      </div>

      {/* Responsive Navigation Tabs */}
      <div className="flex items-center gap-1 bg-slate-100/50 p-1 rounded-2xl border border-slate-200/50 overflow-x-auto no-scrollbar max-w-full">
        {[
          { id: 'timeline', name: 'Clinical History', icon: History },
          { id: 'vitals', name: 'Vital Signs', icon: Thermometer },
          { id: 'notes', name: 'SOAP Notes', icon: FileText },
          { id: 'prescriptions', name: 'Prescriptions', icon: Pill },
          { id: 'orders', name: 'Lab Orders', icon: FlaskConical },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold transition-all duration-300 whitespace-nowrap ${
              activeTab === tab.id 
                ? 'bg-white text-emerald-600 shadow-sm border border-slate-200/50' 
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            <tab.icon size={16} /> {tab.name}
          </button>
        ))}
      </div>

      {/* Dynamic Content Area */}
      <div className="min-h-[600px]">
        {renderContent()}
      </div>
    </div>
  );
};

export default EMRManagement;

