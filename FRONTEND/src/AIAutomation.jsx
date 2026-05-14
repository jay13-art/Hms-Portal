import React, { useState } from 'react';
import { 
  Brain, 
  Mic, 
  MessageSquare, 
  Bot, 
  Sparkles, 
  Search, 
  Zap, 
  Activity, 
  Calendar, 
  AlertCircle, 
  CheckCircle2, 
  RotateCcw, 
  BarChart3, 
  TrendingUp, 
  ShieldCheck,
  ChevronRight,
  Volume2,
  Database,
  SearchCode
} from 'lucide-react';

const AIAutomation = () => {
  const [activeTab, setActiveTab] = useState('insights');

  const stats = [
    { label: 'AI Scheduling Rate', value: '74%', icon: Mic, color: 'text-emerald-400', bg: 'bg-emerald-500/10', trend: '+12%' },
    { label: 'Predictions Active', value: '1,420', icon: Brain, color: 'text-purple-400', bg: 'bg-purple-500/10', trend: 'Real-time' },
    { label: 'Automated Notes', value: '284', icon: MessageSquare, color: 'text-blue-400', bg: 'bg-blue-500/10', trend: 'Today' },
    { label: 'Risk Flags', value: '12', icon: AlertCircle, color: 'text-rose-400', bg: 'bg-rose-500/10', trend: '-5%' },
  ];

  const aiInsights = [
    { id: 'INS-001', title: 'High No-Show Probability', description: 'Patient Arjun Mehta (P-1024) has a 85% probability of no-show for tomorrow\'s cardiology visit.', action: 'Automated Follow-up Sent', priority: 'High', type: 'Predictive' },
    { id: 'INS-002', title: 'Drug Interaction Detected', description: 'AI flagged potential interaction between Metformin and newly prescribed Warfarin for patient Priya Sharma.', action: 'Doctor Notified', priority: 'Critical', type: 'Clinical' },
    { id: 'INS-003', title: 'Anomaly in Lab Results', description: 'Machine Learning model detected unusual creatinine spikes in 5 patients in Ward B.', action: 'Review Required', priority: 'High', type: 'Diagnostic' },
    { id: 'INS-004', title: 'Optimal Slot Suggestion', description: 'AI suggests shifting Dr. Sameer\'s 2 PM slot to 4 PM to balance OPD load.', action: 'Applied', priority: 'Medium', type: 'Operational' },
  ];

  const renderInsights = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-fade-in">
      {aiInsights.map((insight) => (
        <div key={insight.id} className="premium-card p-6 bg-[var(--bg-card)] border-[var(--border-color)] hover:border-purple-500/30 transition-all group relative overflow-hidden">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                insight.priority === 'Critical' ? 'bg-rose-500/10 text-rose-500' :
                insight.priority === 'High' ? 'bg-amber-500/10 text-amber-500' :
                'bg-emerald-500/10 text-emerald-500'
              }`}>
                {insight.type === 'Predictive' ? <Brain size={20} /> : insight.type === 'Clinical' ? <Zap size={20} /> : <Activity size={20} />}
              </div>
              <div>
                <h5 className="font-bold text-[var(--text-main)] group-hover:text-purple-500 transition-colors">{insight.title}</h5>
                <span className="text-[10px] font-black uppercase tracking-widest text-[var(--text-muted)]">{insight.id} • {insight.type} Insight</span>
              </div>
            </div>
            <span className={`px-2 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest ${
              insight.priority === 'Critical' ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/20' :
              insight.priority === 'High' ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/20' :
              'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20'
            }`}>
              {insight.priority}
            </span>
          </div>
          <p className="text-sm text-[var(--text-muted)] font-medium leading-relaxed mb-6">
            {insight.description}
          </p>
          <div className="flex items-center justify-between pt-4 border-t border-[var(--border-color)]">
            <div className="flex items-center gap-2 text-emerald-500 text-xs font-bold">
              <CheckCircle2 size={14} /> {insight.action}
            </div>
            <button className="text-purple-500 hover:text-purple-600 transition-colors">
              <ChevronRight size={18} />
            </button>
          </div>
          {/* Subtle background decoration */}
          <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-purple-500/5 rounded-full blur-2xl group-hover:bg-purple-500/10 transition-colors"></div>
        </div>
      ))}
    </div>
  );

  const renderVoiceAI = () => (
    <div className="premium-card overflow-hidden animate-fade-in bg-[var(--bg-card)] border-none shadow-2xl shadow-purple-500/5">
      <div className="p-8 border-b border-[var(--border-color)] bg-gradient-to-r from-purple-500/5 to-blue-500/5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-purple-600 text-white flex items-center justify-center shadow-xl shadow-purple-600/20 animate-pulse">
            <Mic size={28} />
          </div>
          <div>
            <h4 className="text-xl font-bold text-[var(--text-main)]">VAPI Voice Scheduling Engine</h4>
            <p className="text-xs text-[var(--text-muted)] font-bold uppercase tracking-widest mt-1">Status: Active • 14 calls in progress</p>
          </div>
        </div>
        <button className="premium-button bg-white dark:bg-slate-900 text-[var(--text-main)] border border-[var(--border-color)] flex items-center gap-2 shadow-sm">
          <Settings size={18} /> Configure Agent
        </button>
      </div>
      <div className="p-8">
        <h5 className="text-[10px] font-black uppercase tracking-widest text-[var(--text-muted)] mb-6">Recent AI Voice Transactions</h5>
        <div className="space-y-4">
          {[
            { patient: 'Amit Patel', intent: 'Book Appointment', confidence: '98%', status: 'Success', duration: '1:42' },
            { patient: 'Neha Gupta', intent: 'Reschedule', confidence: '94%', status: 'Success', duration: '2:15' },
            { patient: 'Rajesh Varma', intent: 'Check Lab Status', confidence: '82%', status: 'Handoff to Reception', duration: '0:54' },
          ].map((call, i) => (
            <div key={i} className="flex items-center justify-between p-5 bg-[var(--bg-main)]/50 rounded-2xl border border-[var(--border-color)] hover:border-purple-500/20 transition-all cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--bg-card)] flex items-center justify-center text-purple-500 shadow-sm">
                  <Volume2 size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-[var(--text-main)] group-hover:text-purple-500 transition-colors">{call.patient}</p>
                  <p className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-tighter">{call.intent}</p>
                </div>
              </div>
              <div className="flex items-center gap-10">
                <div className="text-right hidden sm:block">
                  <p className="text-xs font-bold text-[var(--text-main)]">{call.confidence}</p>
                  <p className="text-[9px] font-black text-[var(--text-muted)] uppercase tracking-widest">Confidence</p>
                </div>
                <div className="text-right">
                  <span className={`px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-widest ${
                    call.status === 'Success' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-amber-500/10 text-amber-500'
                  }`}>
                    {call.status}
                  </span>
                  <p className="text-[9px] font-black text-[var(--text-muted)] uppercase tracking-widest mt-1">{call.duration}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-8 animate-fade-in relative">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 relative z-10">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Sparkles size={20} className="text-purple-500 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-purple-600">Enterprise AI Layer</span>
          </div>
          <h2 className="text-4xl font-black text-[var(--text-main)] tracking-tight mb-2">AI & Automation Hub</h2>
          <p className="text-[var(--text-muted)] font-medium max-w-xl text-lg leading-relaxed">
            Integrating deep-learning models and automated workflows to revolutionize clinical accuracy and operational velocity.
          </p>
        </div>
        <div className="flex gap-4">
          <button className="p-4 bg-purple-600 text-white rounded-[24px] shadow-2xl shadow-purple-600/30 hover:scale-105 active:scale-95 transition-all flex items-center gap-3 font-bold group">
            <RotateCcw size={20} className="group-hover:rotate-180 transition-transform duration-700" />
            Refresh Intelligence
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {stats.map((stat, i) => (
          <div key={i} className="premium-card p-6 group hover:border-purple-500/30 transition-all bg-[var(--bg-card)]/80 backdrop-blur-md">
            <div className="flex items-center gap-4">
              <div className={`w-14 h-14 rounded-[22px] ${stat.bg} ${stat.color} flex items-center justify-center transition-transform group-hover:scale-110 duration-500 shadow-inner`}>
                <stat.icon size={26} />
              </div>
              <div className="flex-1">
                <p className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-widest mb-1.5">{stat.label}</p>
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-black text-[var(--text-main)] tracking-tighter">{stat.value}</p>
                  <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${stat.trend.startsWith('+') ? 'bg-emerald-500/10 text-emerald-500' : 'bg-purple-500/10 text-purple-500'}`}>
                    {stat.trend}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* AI Mode Tabs */}
      <div className="flex items-center gap-1 bg-[var(--bg-main)]/50 p-1.5 rounded-[22px] border border-[var(--border-color)] overflow-x-auto no-scrollbar max-w-full w-fit relative z-10 backdrop-blur-sm">
        {[
          { id: 'insights', name: 'Predictive Insights', icon: Brain },
          { id: 'voice', name: 'Voice AI (VAPI)', icon: Mic },
          { id: 'triage', name: 'AI Triage Bot', icon: Bot },
          { id: 'search', name: 'NLP Search', icon: SearchCode },
          { id: 'analytics', name: 'Intelligence Analytics', icon: BarChart3 },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-8 py-3.5 rounded-[18px] text-xs font-bold transition-all duration-500 whitespace-nowrap ${
              activeTab === tab.id 
                ? 'bg-purple-600 text-white shadow-xl shadow-purple-600/20 translate-y-[-2px]' 
                : 'text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-purple-500/5'
            }`}
          >
            <tab.icon size={18} /> {tab.name}
          </button>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="min-h-[500px] relative z-10">
        {activeTab === 'insights' ? renderInsights() : 
         activeTab === 'voice' ? renderVoiceAI() : (
          <div className="premium-card p-24 flex flex-col items-center justify-center bg-[var(--bg-card)] border-dashed border-2 border-purple-500/20 group">
            <div className="w-24 h-24 bg-purple-500/10 rounded-[32px] flex items-center justify-center text-purple-500 mb-8 border border-purple-500/20 group-hover:scale-110 transition-transform duration-700">
              {activeTab === 'triage' ? <Bot size={48} className="animate-bounce" /> : activeTab === 'search' ? <SearchCode size={48} /> : <BarChart3 size={48} />}
            </div>
            <h3 className="text-3xl font-black text-[var(--text-main)] mb-3 tracking-tight">AI {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Orchestrator</h3>
            <p className="text-[var(--text-muted)] font-medium max-w-md text-center leading-relaxed text-lg">
              The HMS Intelligence layer is currently calibrating models for <span className="text-purple-500 font-black">{activeTab}</span> services. Real-time data synthesis active.
            </p>
            <div className="mt-10 flex gap-4">
              <button className="premium-button bg-white dark:bg-slate-900 text-[var(--text-main)] border border-[var(--border-color)] px-10 py-4 font-bold shadow-lg">
                View Model Metrics
              </button>
              <button className="premium-button-primary bg-purple-600 hover:bg-purple-700 px-10 py-4 font-bold shadow-xl shadow-purple-600/20">
                Activate Phase 2
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Advanced AI Footer */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
        <div className="lg:col-span-2 bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 rounded-[40px] p-12 text-white relative overflow-hidden group shadow-2xl shadow-purple-900/30 border border-purple-500/10">
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-purple-400 backdrop-blur-md">
                <Database size={24} />
              </div>
              <h3 className="text-2xl font-black tracking-tight">Clinical Knowledge Synthesis</h3>
            </div>
            <p className="text-slate-300 font-medium leading-relaxed mb-10 max-w-2xl text-lg">
              Our proprietary LLM is trained on 2M+ anonymous clinical records, providing real-time drug interaction checking, allergy cross-verification, and automated ICD-11 coding suggestions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { label: 'Drug Safety', val: 'Verified', icon: ShieldCheck },
                { label: 'Auto Coding', val: 'Active', icon: SearchCode },
                { label: 'Latency', val: '42ms', icon: Zap }
              ].map((item, i) => (
                <div key={i} className="bg-white/5 p-4 rounded-2xl border border-white/5 flex items-center gap-4 group-hover:border-purple-500/30 transition-all">
                  <item.icon size={18} className="text-purple-400" />
                  <div>
                    <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">{item.label}</p>
                    <p className="text-xs font-bold">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Animated background glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] -mr-48 -mt-48 animate-pulse"></div>
        </div>

        <div className="premium-card p-12 bg-gradient-to-tr from-purple-600 to-blue-600 text-white border-none shadow-2xl shadow-purple-600/30 relative overflow-hidden group cursor-pointer">
          <div className="relative z-10">
            <TrendingUp size={48} className="mb-6 text-white/50 group-hover:scale-125 group-hover:text-white transition-all duration-700" />
            <h3 className="text-2xl font-black mb-4">Phase 2: Voice Dictation</h3>
            <p className="text-purple-100 font-medium mb-10 leading-relaxed text-sm">
              Unlock real-time voice-to-text dictation for surgical notes and clinical summaries with 99.4% accuracy in medical terminology.
            </p>
            <button className="w-full py-4 bg-white text-purple-600 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl hover:bg-purple-50 transition-all">
              Request Early Access
            </button>
          </div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all"></div>
        </div>
      </div>

      {/* Global AI Glow decoration */}
      <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[150px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[150px] -z-10 pointer-events-none"></div>
    </div>
  );
};

export default AIAutomation;
