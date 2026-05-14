import React, { useState } from 'react';
import { 
  Bell, 
  Mail, 
  MessageSquare, 
  Send, 
  Megaphone, 
  Settings, 
  Search, 
  Filter, 
  Plus, 
  MoreHorizontal, 
  Smartphone, 
  Globe, 
  CheckCheck, 
  Clock, 
  AlertCircle,
  FileText,
  User,
  ChevronRight,
  ShieldCheck,
  Zap,
  Download,
  History
} from 'lucide-react';

const CommunicationManagement = () => {
  const [activeTab, setActiveTab] = useState('inbox');

  const stats = [
    { label: 'Total Delivered', value: '12,840', icon: Send, color: 'text-blue-600', bg: 'bg-blue-500/10', trend: '+15%' },
    { label: 'Pending SMS', value: '42', icon: Smartphone, color: 'text-amber-600', bg: 'bg-amber-500/10', trend: 'Queueing' },
    { label: 'Read Rate', value: '92%', icon: CheckCheck, color: 'text-emerald-600', bg: 'bg-emerald-500/10', trend: 'Excellent' },
    { label: 'System Alerts', value: '5', icon: AlertCircle, color: 'text-rose-600', bg: 'bg-rose-500/10', trend: 'Action Req' },
  ];

  const recentAlerts = [
    { id: 'ALT-101', recipient: 'Arjun Mehta', channel: 'SMS', type: 'Appointment Reminder', status: 'Delivered', time: '10m ago' },
    { id: 'ALT-102', recipient: 'Dr. Sameer Shah', channel: 'In-App', type: 'Lab Result Ready', status: 'Read', time: '45m ago' },
    { id: 'ALT-103', recipient: 'Priya Sharma', channel: 'Email', type: 'Prescription Alert', status: 'Failed', time: '1h ago' },
    { id: 'ALT-104', recipient: 'Rajesh Varma', channel: 'WhatsApp', type: 'Discharge Summary', status: 'Delivered', time: '2h ago' },
  ];

  const renderInbox = () => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-fade-in h-[600px]">
      {/* Sidebar: Message List */}
      <div className="lg:col-span-1 premium-card flex flex-col bg-[var(--bg-card)] overflow-hidden">
        <div className="p-6 border-b border-[var(--border-color)]">
          <div className="relative mb-4">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" size={16} />
            <input type="text" placeholder="Search conversations..." className="premium-input pl-10 py-2.5 text-sm" />
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-600 text-xs font-bold border border-emerald-500/20">All</button>
            <button className="px-4 py-1.5 rounded-lg text-[var(--text-muted)] text-xs font-bold hover:bg-[var(--bg-main)] transition-all">Unread</button>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto no-scrollbar">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className={`p-5 border-b border-[var(--border-color)] cursor-pointer hover:bg-[var(--bg-main)] transition-all group ${i === 1 ? 'bg-[var(--bg-main)] border-l-4 border-l-emerald-500' : ''}`}>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-200 flex items-center justify-center text-slate-600 font-bold shrink-0">
                  {i % 2 === 0 ? 'PS' : 'AD'}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center mb-1">
                    <p className="text-sm font-bold text-[var(--text-main)] truncate">{i % 2 === 0 ? 'Priya Sharma' : 'Dr. Anjali Desai'}</p>
                    <span className="text-[10px] text-[var(--text-muted)] font-bold">12:30 PM</span>
                  </div>
                  <p className="text-xs text-[var(--text-muted)] truncate group-hover:text-[var(--text-main)] transition-colors">Hello, can we reschedule my appointment to tomorrow?</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="lg:col-span-2 premium-card flex flex-col bg-[var(--bg-card)] overflow-hidden relative">
        {/* Chat Header */}
        <div className="p-6 border-b border-[var(--border-color)] flex items-center justify-between bg-[var(--bg-main)]/50">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center font-bold text-lg">PS</div>
            <div>
              <p className="text-lg font-bold text-[var(--text-main)] leading-none">Priya Sharma</p>
              <p className="text-xs text-emerald-500 font-bold mt-1.5 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> Patient Portal • Online
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="p-2.5 bg-[var(--bg-main)] text-[var(--text-muted)] border border-[var(--border-color)] rounded-xl hover:bg-[var(--bg-card)] transition-all">
              <Smartphone size={20} />
            </button>
            <button className="p-2.5 bg-[var(--bg-main)] text-[var(--text-muted)] border border-[var(--border-color)] rounded-xl hover:bg-[var(--bg-card)] transition-all">
              <MoreHorizontal size={20} />
            </button>
          </div>
        </div>

        {/* Messages Content */}
        <div className="flex-1 p-8 overflow-y-auto no-scrollbar space-y-8 bg-[var(--bg-main)]/20">
          <div className="flex justify-center">
            <span className="px-4 py-1.5 bg-[var(--bg-main)] text-[var(--text-muted)] text-[10px] font-black uppercase tracking-[0.2em] rounded-full border border-[var(--border-color)]">Today</span>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-lg bg-slate-200 flex items-center justify-center text-slate-600 font-bold text-xs shrink-0">PS</div>
            <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl rounded-tl-none shadow-sm border border-[var(--border-color)] max-w-md">
              <p className="text-sm text-[var(--text-main)] font-medium leading-relaxed">
                Hello, I received the lab results. Can we reschedule my follow-up appointment to tomorrow morning?
              </p>
              <p className="text-[10px] text-[var(--text-muted)] font-bold mt-2">12:30 PM</p>
            </div>
          </div>

          <div className="flex items-start gap-4 flex-row-reverse">
            <div className="w-8 h-8 rounded-lg bg-emerald-500 text-white flex items-center justify-center font-bold text-xs shrink-0">CS</div>
            <div className="bg-emerald-600 text-white p-4 rounded-2xl rounded-tr-none shadow-md max-w-md">
              <p className="text-sm font-medium leading-relaxed">
                Certainly, Priya. We have an opening at 10:15 AM tomorrow with Dr. Anjali. Would that work for you?
              </p>
              <p className="text-[10px] text-emerald-200 font-bold mt-2">12:34 PM • Delivered</p>
            </div>
          </div>
        </div>

        {/* Chat Input */}
        <div className="p-6 border-t border-[var(--border-color)] bg-[var(--bg-card)]">
          <div className="flex items-center gap-4 bg-[var(--bg-main)] p-2 rounded-2xl border border-[var(--border-color)] focus-within:border-emerald-500/50 transition-all shadow-inner">
            <button className="p-2.5 text-[var(--text-muted)] hover:text-emerald-600 hover:bg-emerald-500/10 rounded-xl transition-all"><Plus size={20} /></button>
            <input type="text" placeholder="Type your message here..." className="flex-1 bg-transparent border-none outline-none text-sm font-medium px-2 py-2 text-[var(--text-main)]" />
            <button className="p-2.5 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/20">
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAlerts = () => (
    <div className="premium-card overflow-hidden animate-fade-in bg-[var(--bg-card)]">
      <div className="p-6 border-b border-[var(--border-color)] flex flex-col md:flex-row items-center justify-between gap-6">
        <h4 className="text-xl font-bold text-[var(--text-main)]">Automated Notification Log</h4>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <button className="premium-button bg-[var(--bg-main)] text-[var(--text-muted)] border border-[var(--border-color)] flex items-center gap-2">
            <Filter size={18} /> Filter Status
          </button>
          <button className="premium-button bg-[var(--bg-main)] text-[var(--text-muted)] border border-[var(--border-color)] flex items-center gap-2">
            <Download size={18} /> Export Log
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-[var(--bg-main)] text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-widest border-b border-[var(--border-color)]">
              <th className="px-8 py-5">Event ID</th>
              <th className="px-8 py-5">Recipient</th>
              <th className="px-8 py-5">Channel</th>
              <th className="px-8 py-5">Notification Type</th>
              <th className="px-8 py-5">Delivery Status</th>
              <th className="px-8 py-5 text-right">Time</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--border-color)]">
            {recentAlerts.map((alert) => (
              <tr key={alert.id} className="hover:bg-[var(--bg-main)] transition-colors group">
                <td className="px-8 py-5 font-bold text-[var(--text-main)]">{alert.id}</td>
                <td className="px-8 py-5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[var(--bg-main)] flex items-center justify-center text-[var(--text-muted)] border border-[var(--border-color)] group-hover:text-emerald-500 transition-colors">
                      <User size={16} />
                    </div>
                    <span className="text-[var(--text-main)] font-medium">{alert.recipient}</span>
                  </div>
                </td>
                <td className="px-8 py-5">
                  <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border ${
                    alert.channel === 'SMS' ? 'bg-blue-500/10 text-blue-600 border-blue-500/20' :
                    alert.channel === 'WhatsApp' ? 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20' :
                    'bg-slate-500/10 text-slate-500 border-slate-500/20'
                  }`}>
                    {alert.channel}
                  </span>
                </td>
                <td className="px-8 py-5 text-sm text-[var(--text-main)] font-bold">{alert.type}</td>
                <td className="px-8 py-5">
                  <div className="flex items-center gap-2">
                    <CheckCheck size={16} className={alert.status === 'Read' ? 'text-emerald-500' : 'text-[var(--text-muted)]'} />
                    <span className={`text-xs font-bold ${alert.status === 'Failed' ? 'text-rose-500' : 'text-[var(--text-main)]'}`}>{alert.status}</span>
                  </div>
                </td>
                <td className="px-8 py-5 text-right text-xs font-bold text-[var(--text-muted)] uppercase">{alert.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl font-bold text-[var(--text-main)] tracking-tight mb-2">Communication & Notifications</h2>
          <p className="text-[var(--text-muted)] font-medium max-w-xl">
            Unified omnichannel messaging hub for patient alerts, clinical broadcasts, and inter-departmental synchronization.
          </p>
        </div>
        <div className="flex gap-4">
          <div className="premium-card px-5 py-3 border-none bg-[var(--bg-card)] shadow-xl shadow-black/5 hover:-translate-y-1 transition-all">
            <p className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-widest mb-1">Queue Status</p>
            <p className="text-xl font-bold text-emerald-500 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> Healthy
            </p>
          </div>
          <button className="premium-button-primary flex items-center gap-2 px-8">
            <Megaphone size={18} /> New Broadcast
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="premium-card p-6 group hover:border-emerald-500/20 transition-all">
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center transition-transform group-hover:scale-110 duration-500`}>
                <stat.icon size={24} />
              </div>
              <div className="flex-1">
                <p className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-widest mb-1">{stat.label}</p>
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-bold text-[var(--text-main)] tracking-tight">{stat.value}</p>
                  <span className={`text-[10px] font-bold ${stat.trend === 'Excellent' ? 'text-emerald-500' : 'text-blue-500'}`}>
                    {stat.trend}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Workflow Tabs */}
      <div className="flex items-center gap-1 bg-[var(--bg-main)] p-1 rounded-2xl border border-[var(--border-color)] overflow-x-auto no-scrollbar max-w-full w-fit">
        {[
          { id: 'inbox', name: 'Messaging & Portal', icon: MessageSquare },
          { id: 'alerts', name: 'Notification Log', icon: Bell },
          { id: 'broadcasts', name: 'Broadcasts', icon: Megaphone },
          { id: 'templates', name: 'Template Manager', icon: FileText },
          { id: 'settings', name: 'Delivery Settings', icon: Settings },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold transition-all duration-300 whitespace-nowrap ${
              activeTab === tab.id 
                ? 'bg-[var(--bg-card)] text-emerald-600 shadow-sm border border-[var(--border-color)]' 
                : 'text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--bg-card)]/50'
            }`}
          >
            <tab.icon size={18} /> {tab.name}
          </button>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="min-h-[500px]">
        {activeTab === 'inbox' ? renderInbox() : 
         activeTab === 'alerts' ? renderAlerts() : (
          <div className="premium-card p-20 flex flex-col items-center justify-center bg-[var(--bg-card)] border-dashed border-2 border-[var(--border-color)]">
            <div className="w-20 h-20 bg-[var(--bg-main)] rounded-3xl flex items-center justify-center text-[var(--text-muted)] mb-6 border border-[var(--border-color)]">
              {activeTab === 'broadcasts' ? <Megaphone size={40} /> : activeTab === 'templates' ? <FileText size={40} /> : <Settings size={40} />}
            </div>
            <h3 className="text-2xl font-bold text-[var(--text-main)] mb-2 tracking-tight">Enterprise {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Hub</h3>
            <p className="text-[var(--text-muted)] font-medium max-w-sm text-center leading-relaxed">
              Configuring omnichannel clinical communication for <span className="text-emerald-600 font-bold">{activeTab}</span> services.
            </p>
            <button className="mt-8 premium-button bg-[var(--bg-main)] text-[var(--text-main)] hover:bg-[var(--bg-card)] border border-[var(--border-color)]">
              Initialize Component
            </button>
          </div>
        )}
      </div>

      {/* Security & Integrity Footer */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-slate-900 rounded-[32px] p-10 text-white relative overflow-hidden group shadow-2xl shadow-slate-900/40">
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
            <div className="w-20 h-20 bg-emerald-500 rounded-3xl flex items-center justify-center shadow-2xl shadow-emerald-500/20 shrink-0">
              <ShieldCheck size={40} />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-3 tracking-tight">HIPAA Compliant Messaging</h3>
              <p className="text-slate-400 font-medium leading-relaxed mb-6 max-w-2xl">
                All patient-portal and inter-department communications are end-to-end encrypted and audited for clinical compliance. Secure file sharing for lab results and discharge summaries is active.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-6">
                <div className="flex items-center gap-3">
                  <Zap size={16} className="text-emerald-400" />
                  <span className="text-xs font-bold text-slate-200 uppercase tracking-widest">AES-256 Encryption Active</span>
                </div>
                <div className="flex items-center gap-3">
                  <History size={16} className="text-blue-400" />
                  <span className="text-xs font-bold text-slate-200 uppercase tracking-widest">Full Audit Logs Persistence</span>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[100px] -mr-48 -mt-48 transition-all group-hover:bg-emerald-500/10"></div>
        </div>

        <div className="premium-card p-10 bg-[var(--bg-card)]/50 backdrop-blur-sm border-[var(--border-color)] group flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center">
              <Globe size={24} />
            </div>
            <h3 className="text-xl font-bold text-[var(--text-main)] tracking-tight">Omnichannel Gateway</h3>
          </div>
          <p className="text-[var(--text-muted)] font-medium mb-8 leading-relaxed">
            Configure primary and failover delivery channels for critical patient notifications.
          </p>
          <div className="space-y-4">
            {[
              { label: 'WhatsApp API', status: 'Active', color: 'text-emerald-500' },
              { label: 'SendGrid Email', status: 'Active', color: 'text-blue-500' },
              { label: 'Twilio SMS', status: 'Healthy', color: 'text-indigo-500' }
            ].map((gate, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 bg-[var(--bg-card)] rounded-2xl border border-[var(--border-color)] hover:border-emerald-500/30 transition-all cursor-pointer group/row">
                <span className="text-sm font-bold text-[var(--text-main)]">{gate.label}</span>
                <span className={`text-[10px] font-black uppercase tracking-widest ${gate.color}`}>{gate.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunicationManagement;
