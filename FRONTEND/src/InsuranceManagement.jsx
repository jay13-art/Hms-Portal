import React, { useState } from 'react';
import { 
  Shield, 
  FileCheck, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  Search, 
  Filter, 
  Plus, 
  MoreHorizontal, 
  DollarSign, 
  ArrowUpRight, 
  CreditCard, 
  Briefcase, 
  History, 
  FileText,
  AlertCircle,
  Download,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

const InsuranceManagement = () => {
  const [activeTab, setActiveTab] = useState('claims');

  const stats = [
    { label: 'Active Claims', value: '154', icon: FileText, color: 'text-blue-600', bg: 'bg-blue-500/10', trend: '+12%' },
    { label: 'Pre-Auth Pending', value: '38', icon: Clock, color: 'text-amber-600', bg: 'bg-amber-500/10', trend: '+5%' },
    { label: 'Total Approved', value: '$842k', icon: DollarSign, color: 'text-emerald-600', bg: 'bg-emerald-500/10', trend: '+18%' },
    { label: 'Rejection Rate', value: '4.2%', icon: AlertCircle, color: 'text-rose-600', bg: 'bg-rose-500/10', trend: '-2%' },
  ];

  const claims = [
    { id: 'CLM-9901', patient: 'Arjun Mehta', provider: 'Star Health', tpa: 'MediAssist', amount: 12500, status: 'Approved', type: 'Cashless', date: '2026-05-12' },
    { id: 'CLM-9902', patient: 'Priya Sharma', provider: 'HDFC Ergo', tpa: 'Vidal Health', amount: 45000, status: 'Pending', type: 'Reimbursement', date: '2026-05-13' },
    { id: 'CLM-9903', patient: 'Rajesh Varma', provider: 'ICICI Lombard', tpa: 'Paramount', amount: 8200, status: 'Settled', type: 'Cashless', date: '2026-05-10' },
    { id: 'CLM-9904', patient: 'Neha Gupta', provider: 'Niva Bupa', tpa: 'Raksha', amount: 15000, status: 'Rejected', type: 'Cashless', date: '2026-05-11' },
    { id: 'CLM-9905', patient: 'Amit Patel', provider: 'United India', tpa: 'Heritage', amount: 28000, status: 'Pre-Auth', type: 'Cashless', date: '2026-05-14' },
  ];

  const renderClaimsList = () => (
    <div className="premium-card overflow-hidden animate-fade-in bg-[var(--bg-card)]">
      <div className="p-6 border-b border-[var(--border-color)] flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" size={18} />
          <input type="text" placeholder="Search by Claim ID, Patient or TPA..." className="premium-input pl-12" />
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <button className="premium-button bg-[var(--bg-main)] text-[var(--text-muted)] hover:bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center gap-2 transition-all">
            <Filter size={18} /> Filter
          </button>
          <button className="premium-button-primary flex items-center gap-2 whitespace-nowrap">
            <Plus size={18} /> New Claim
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-[var(--bg-main)] text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-widest border-b border-[var(--border-color)]">
              <th className="px-8 py-5">Claim Details</th>
              <th className="px-8 py-5">Patient & Policy</th>
              <th className="px-8 py-5">Provider / TPA</th>
              <th className="px-8 py-5">Amount</th>
              <th className="px-8 py-5">Workflow Status</th>
              <th className="px-8 py-5 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--border-color)]">
            {claims.map((claim) => (
              <tr key={claim.id} className="hover:bg-[var(--bg-main)] transition-colors group">
                <td className="px-8 py-5">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[var(--bg-main)] flex items-center justify-center text-emerald-600 border border-[var(--border-color)] shadow-sm group-hover:scale-105 transition-all duration-300">
                      <FileCheck size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-[var(--text-main)] group-hover:text-emerald-600 transition-colors">{claim.id}</p>
                      <p className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-tighter">{claim.date}</p>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-5">
                  <div>
                    <p className="text-[var(--text-main)] font-bold">{claim.patient}</p>
                    <p className="text-[10px] text-emerald-600 font-bold uppercase tracking-widest">{claim.type}</p>
                  </div>
                </td>
                <td className="px-8 py-5">
                  <div>
                    <p className="text-[var(--text-main)] font-bold">{claim.provider}</p>
                    <p className="text-xs text-[var(--text-muted)] font-medium">TPA: {claim.tpa}</p>
                  </div>
                </td>
                <td className="px-8 py-5 text-[var(--text-main)] font-bold">
                  ₹{claim.amount.toLocaleString()}
                </td>
                <td className="px-8 py-5">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5 w-fit transition-all duration-300 ${
                    claim.status === 'Approved' || claim.status === 'Settled' ? 'bg-emerald-500/10 text-emerald-600 border border-emerald-500/20' :
                    claim.status === 'Pending' || claim.status === 'Pre-Auth' ? 'bg-amber-500/10 text-amber-600 border border-amber-500/20' :
                    'bg-rose-500/10 text-rose-600 border border-rose-500/20'
                  }`}>
                    {claim.status === 'Pending' && <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse transition-all"></span>}
                    {claim.status}
                  </span>
                </td>
                <td className="px-8 py-5 text-right">
                  <button className="p-2.5 text-[var(--text-muted)] hover:text-emerald-600 hover:bg-emerald-500/10 rounded-xl transition-all">
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

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl font-bold text-[var(--text-main)] tracking-tight mb-2">Insurance & TPA Management</h2>
          <p className="text-[var(--text-muted)] font-medium max-w-xl">
            End-to-end insurance claim lifecycle management with automated TPA workflows and real-time reimbursement tracking.
          </p>
        </div>
        <div className="flex gap-4">
          <div className="premium-card px-5 py-3 border-none bg-[var(--bg-card)] shadow-xl shadow-black/5 hover:-translate-y-1 transition-all">
            <p className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-widest mb-1">Empaneled TPAs</p>
            <p className="text-2xl font-bold text-[var(--text-main)] leading-none">24</p>
          </div>
          <div className="premium-card px-5 py-3 border-none bg-emerald-600 text-white shadow-xl shadow-emerald-500/20 hover:-translate-y-1 transition-all">
            <p className="text-[10px] font-bold text-emerald-200 uppercase tracking-widest mb-1">Settled This Month</p>
            <p className="text-2xl font-bold leading-none">₹2.4M</p>
          </div>
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
                  <span className={`text-[10px] font-bold flex items-center gap-1 ${stat.trend.startsWith('+') ? 'text-emerald-500' : 'text-rose-500'}`}>
                    <ArrowUpRight size={10} /> {stat.trend}
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
          { id: 'claims', name: 'Claims Tracker', icon: Shield },
          { id: 'preauth', name: 'Pre-Authorization', icon: Clock },
          { id: 'providers', name: 'Providers & TPAs', icon: Briefcase },
          { id: 'reports', name: 'Revenue & Reports', icon: History },
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

      {/* Main Content */}
      <div className="min-h-[500px]">
        {activeTab === 'claims' ? renderClaimsList() : (
          <div className="premium-card p-20 flex flex-col items-center justify-center bg-[var(--bg-card)] border-dashed border-2 border-[var(--border-color)]">
            <div className="w-20 h-20 bg-[var(--bg-main)] rounded-3xl flex items-center justify-center text-[var(--text-muted)] mb-6 border border-[var(--border-color)]">
              {activeTab === 'preauth' ? <Clock size={40} /> : activeTab === 'providers' ? <Briefcase size={40} /> : <History size={40} />}
            </div>
            <h3 className="text-2xl font-bold text-[var(--text-main)] mb-2 tracking-tight">Enterprise {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Engine</h3>
            <p className="text-[var(--text-muted)] font-medium max-w-sm text-center leading-relaxed">
              Managing complex clinical and financial data for <span className="text-emerald-600 font-bold">{activeTab}</span> workflows with real-time TPA synchronization.
            </p>
            <button className="mt-8 premium-button bg-[var(--bg-main)] text-[var(--text-main)] hover:bg-[var(--bg-card)] border border-[var(--border-color)]">
              Configure Module
            </button>
          </div>
        )}
      </div>

      {/* Quick Action Footer */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-slate-900 rounded-[32px] p-10 text-white relative overflow-hidden group shadow-2xl shadow-slate-900/40">
          <div className="relative z-10">
            <div className="w-14 h-14 bg-emerald-500 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform duration-500">
              <FileText size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-4 tracking-tight">TPA Communication Log</h3>
            <p className="text-slate-400 font-medium leading-relaxed mb-10">
              Direct API-level integration with MediAssist, Star Health, and other major TPAs for instant document submission and verification.
            </p>
            <div className="flex items-center justify-between p-6 bg-white/5 rounded-2xl border border-white/10 group-hover:border-emerald-500/30 transition-all">
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse shadow-lg shadow-emerald-500/50"></div>
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">TPA Sync: Active</span>
              </div>
              <Download size={20} className="text-slate-600" />
            </div>
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[100px] -mr-48 -mt-48 transition-all group-hover:bg-emerald-500/10"></div>
        </div>

        <div className="premium-card p-10 bg-[var(--bg-card)]/50 backdrop-blur-sm border-[var(--border-color)] group">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center">
              <CreditCard size={24} />
            </div>
            <h3 className="text-xl font-bold text-[var(--text-main)] tracking-tight">Policy Verification</h3>
          </div>
          <p className="text-[var(--text-muted)] font-medium mb-10 leading-relaxed">
            Instantly verify patient insurance coverage and co-pay requirements using centralized IRDAI gateways.
          </p>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-5 bg-[var(--bg-card)] rounded-2xl border border-[var(--border-color)] hover:border-emerald-500/30 transition-all cursor-pointer group/row">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--bg-main)] flex items-center justify-center text-[var(--text-main)] group-hover/row:text-emerald-500 transition-colors">
                  <Shield size={20} />
                </div>
                <span className="text-sm font-bold text-[var(--text-main)]">Quick Eligibility Check</span>
              </div>
              <ChevronRight size={18} className="text-slate-300 group-hover/row:text-emerald-500 group-hover/row:translate-x-1 transition-all" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsuranceManagement;
