import React, { useState } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  PieChart, 
  Download, 
  Calendar, 
  Filter, 
  Plus, 
  MoreHorizontal, 
  Users, 
  Activity, 
  DollarSign, 
  Bed, 
  Clock, 
  Search, 
  FileText, 
  ChevronRight, 
  Mail, 
  Settings, 
  Layout, 
  ArrowUpRight,
  ArrowDownRight,
  Layers,
  Printer
} from 'lucide-react';

const ReportsAnalytics = () => {
  const [activeTab, setActiveTab] = useState('executive');

  const kpis = [
    { label: 'Monthly Revenue', value: '₹42,85,400', icon: DollarSign, trend: '+14.2%', status: 'up', color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
    { label: 'Patient Occupancy', value: '88.4%', icon: Bed, trend: '+5.1%', status: 'up', color: 'text-blue-500', bg: 'bg-blue-500/10' },
    { label: 'Avg. Appointments', value: '142/day', icon: Calendar, trend: '-2.4%', status: 'down', color: 'text-amber-500', bg: 'bg-amber-500/10' },
    { label: 'Pharmacy Sales', value: '₹12,14,200', icon: Activity, trend: '+18.8%', status: 'up', color: 'text-purple-500', bg: 'bg-purple-500/10' },
  ];

  const reportsList = [
    { name: 'Monthly Revenue Summary', type: 'Financial', lastRun: '2 hours ago', format: 'PDF, CSV' },
    { name: 'Doctor Performance Matrix', type: 'Clinical', lastRun: 'Today, 9:00 AM', format: 'PDF' },
    { name: 'Bed Census Report', type: 'Operational', lastRun: '1 hour ago', format: 'CSV' },
    { name: 'Pharmacy Stock Movement', type: 'Inventory', lastRun: 'Yesterday', format: 'Excel' },
    { name: 'Lab Turnaround Time Analysis', type: 'Diagnostic', lastRun: '2 days ago', format: 'PDF' },
  ];

  const renderExecutive = () => (
    <div className="space-y-8 animate-fade-in">
      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Revenue Trend - Custom SVG Visualization */}
        <div className="premium-card p-8 bg-[var(--bg-card)]">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h4 className="text-xl font-bold text-[var(--text-main)]">Revenue Growth</h4>
              <p className="text-xs text-[var(--text-muted)] font-bold uppercase tracking-widest mt-1">Last 6 Months • INR</p>
            </div>
            <select className="bg-[var(--bg-main)] border border-[var(--border-color)] text-[var(--text-muted)] text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-xl outline-none">
              <option>Monthly</option>
              <option>Weekly</option>
            </select>
          </div>
          <div className="h-64 flex items-end justify-between gap-2 relative">
            {/* Grid Lines */}
            {[0, 25, 50, 75, 100].map(val => (
              <div key={val} className="absolute w-full h-[1px] bg-[var(--border-color)]/30" style={{ bottom: `${val}%` }}></div>
            ))}
            {/* Bars */}
            {[45, 62, 58, 85, 75, 92].map((height, i) => (
              <div key={i} className="flex-1 flex flex-col items-center group relative">
                <div className="w-full max-w-[40px] bg-emerald-500/10 rounded-t-xl hover:bg-emerald-500/40 transition-all duration-500 relative" style={{ height: `${height}%` }}>
                  <div className="absolute top-[-30px] left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    ₹{(height * 10).toFixed(1)}L
                  </div>
                </div>
                <span className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-tighter mt-4">Month {i+1}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Occupancy Distribution - Custom Visualization */}
        <div className="premium-card p-8 bg-[var(--bg-card)]">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h4 className="text-xl font-bold text-[var(--text-main)]">Departmental Load</h4>
              <p className="text-xs text-[var(--text-muted)] font-bold uppercase tracking-widest mt-1">Current Census Distribution</p>
            </div>
            <button className="p-2 bg-[var(--bg-main)] text-[var(--text-muted)] border border-[var(--border-color)] rounded-xl"><MoreHorizontal size={20} /></button>
          </div>
          <div className="space-y-6">
            {[
              { dept: 'General Ward', val: 92, color: 'bg-emerald-500' },
              { dept: 'ICU / Critical Care', val: 78, color: 'bg-rose-500' },
              { dept: 'Radiology / Diagnostics', val: 45, color: 'bg-blue-500' },
              { dept: 'Outpatient (OPD)', val: 64, color: 'bg-purple-500' },
            ].map((dept, i) => (
              <div key={i}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-bold text-[var(--text-main)]">{dept.dept}</span>
                  <span className="text-xs font-bold text-[var(--text-muted)]">{dept.val}%</span>
                </div>
                <div className="h-3 bg-[var(--bg-main)] rounded-full overflow-hidden border border-[var(--border-color)]">
                  <div className={`h-full ${dept.color} transition-all duration-1000 ease-out shadow-lg`} style={{ width: `${dept.val}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reports Library Table */}
      <div className="premium-card overflow-hidden bg-[var(--bg-card)]">
        <div className="p-6 border-b border-[var(--border-color)] flex items-center justify-between">
          <h4 className="text-xl font-bold text-[var(--text-main)]">Recent Enterprise Reports</h4>
          <div className="flex gap-3">
            <button className="premium-button bg-[var(--bg-main)] text-[var(--text-muted)] border border-[var(--border-color)] flex items-center gap-2">
              <Download size={18} /> Export All
            </button>
            <button className="premium-button-primary flex items-center gap-2">
              <Plus size={18} /> Create Report
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-[var(--bg-main)] text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-widest border-b border-[var(--border-color)]">
                <th className="px-8 py-5">Report Name</th>
                <th className="px-8 py-5">Classification</th>
                <th className="px-8 py-5">Last Generated</th>
                <th className="px-8 py-5">Export Formats</th>
                <th className="px-8 py-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-color)]">
              {reportsList.map((report, i) => (
                <tr key={i} className="hover:bg-[var(--bg-main)] transition-colors group">
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[var(--bg-main)] flex items-center justify-center text-[var(--text-muted)] border border-[var(--border-color)] group-hover:text-emerald-500 transition-colors">
                        <FileText size={20} />
                      </div>
                      <span className="text-[var(--text-main)] font-bold">{report.name}</span>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <span className="text-xs font-bold text-[var(--text-muted)]">{report.type}</span>
                  </td>
                  <td className="px-8 py-5 text-[var(--text-main)] font-medium">{report.lastRun}</td>
                  <td className="px-8 py-5">
                    <div className="flex gap-1">
                      {report.format.split(', ').map((f, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded bg-[var(--bg-main)] border border-[var(--border-color)] text-[9px] font-black uppercase text-[var(--text-muted)]">{f}</span>
                      ))}
                    </div>
                  </td>
                  <td className="px-8 py-5 text-right">
                    <button className="p-2 text-[var(--text-muted)] hover:text-emerald-600 transition-all"><Download size={18} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl font-bold text-[var(--text-main)] tracking-tight mb-2">Reports & Analytics</h2>
          <p className="text-[var(--text-muted)] font-medium max-w-xl">
            Enterprise intelligence suite providing deep visibility into clinical, operational, and financial performance.
          </p>
        </div>
        <div className="flex gap-4">
          <div className="premium-card px-5 py-3 border-none bg-[var(--bg-card)] shadow-xl shadow-black/5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center">
              <Calendar size={20} />
            </div>
            <div>
              <p className="text-[9px] font-bold text-[var(--text-muted)] uppercase tracking-widest mb-1">Fiscal Period</p>
              <p className="text-sm font-bold text-[var(--text-main)]">May 2026</p>
            </div>
          </div>
          <button className="premium-button-primary flex items-center gap-2 px-8">
            <Layout size={18} /> Report Builder
          </button>
        </div>
      </div>

      {/* KPI Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi, i) => (
          <div key={i} className="premium-card p-6 group hover:border-emerald-500/20 transition-all bg-[var(--bg-card)]">
            <div className="flex items-center gap-4 mb-4">
              <div className={`w-12 h-12 rounded-2xl ${kpi.bg} ${kpi.color} flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform`}>
                <kpi.icon size={24} />
              </div>
              <div className="flex-1">
                <p className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-widest mb-1">{kpi.label}</p>
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-bold text-[var(--text-main)] tracking-tight">{kpi.value}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 pt-4 border-t border-[var(--border-color)]">
              {kpi.status === 'up' ? <ArrowUpRight size={14} className="text-emerald-500" /> : <ArrowDownRight size={14} className="text-rose-500" />}
              <span className={`text-[10px] font-bold ${kpi.status === 'up' ? 'text-emerald-500' : 'text-rose-500'}`}>{kpi.trend} vs last month</span>
            </div>
          </div>
        ))}
      </div>

      {/* Workflow Tabs */}
      <div className="flex items-center gap-1 bg-[var(--bg-main)] p-1.5 rounded-2xl border border-[var(--border-color)] overflow-x-auto no-scrollbar max-w-full w-fit">
        {[
          { id: 'executive', name: 'Executive Dashboard', icon: BarChart3 },
          { id: 'clinical', name: 'Clinical Analytics', icon: Activity },
          { id: 'finance', name: 'Revenue & Finance', icon: DollarSign },
          { id: 'operational', name: 'Operational Insights', icon: Layers },
          { id: 'custom', name: 'Custom Builder', icon: Settings },
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
      <div className="min-h-[600px]">
        {activeTab === 'executive' ? renderExecutive() : (
          <div className="premium-card p-24 flex flex-col items-center justify-center bg-[var(--bg-card)] border-dashed border-2 border-[var(--border-color)]">
            <div className="w-24 h-24 bg-[var(--bg-main)] rounded-[32px] flex items-center justify-center text-[var(--text-muted)] mb-8 border border-[var(--border-color)]">
              {activeTab === 'clinical' ? <Activity size={48} /> : activeTab === 'finance' ? <DollarSign size={48} /> : <Settings size={48} />}
            </div>
            <h3 className="text-3xl font-bold text-[var(--text-main)] mb-3 tracking-tight">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Analytics Engine</h3>
            <p className="text-[var(--text-muted)] font-medium max-w-md text-center leading-relaxed text-lg">
              Synthesizing enterprise data to provide multidimensional <span className="text-emerald-500 font-bold">{activeTab}</span> intelligence.
            </p>
            <div className="mt-10 flex gap-4">
              <button className="premium-button bg-[var(--bg-main)] text-[var(--text-main)] border border-[var(--border-color)] px-10 py-4 font-bold">
                Configure Parameters
              </button>
              <button className="premium-button-primary px-10 py-4 font-bold shadow-xl shadow-emerald-600/20">
                Generate View
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Footer Tools */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="premium-card p-8 bg-[var(--bg-card)] border-[var(--border-color)] flex items-center justify-between group cursor-pointer hover:-translate-y-1 transition-all">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-emerald-500/10 text-emerald-600 rounded-2xl flex items-center justify-center">
              <Mail size={24} />
            </div>
            <div>
              <h5 className="font-bold text-[var(--text-main)]">Schedule Reports</h5>
              <p className="text-xs text-[var(--text-muted)] font-medium">Automated email delivery</p>
            </div>
          </div>
          <ChevronRight size={20} className="text-[var(--text-muted)] group-hover:text-emerald-500 transition-colors" />
        </div>
        <div className="premium-card p-8 bg-[var(--bg-card)] border-[var(--border-color)] flex items-center justify-between group cursor-pointer hover:-translate-y-1 transition-all">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-500/10 text-blue-600 rounded-2xl flex items-center justify-center">
              <Download size={24} />
            </div>
            <div>
              <h5 className="font-bold text-[var(--text-main)]">Batch Export</h5>
              <p className="text-xs text-[var(--text-muted)] font-medium">Bulk PDF/CSV generation</p>
            </div>
          </div>
          <ChevronRight size={20} className="text-[var(--text-muted)] group-hover:text-blue-500 transition-colors" />
        </div>
        <div className="premium-card p-8 bg-[var(--bg-card)] border-[var(--border-color)] flex items-center justify-between group cursor-pointer hover:-translate-y-1 transition-all">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-slate-500/10 text-slate-500 rounded-2xl flex items-center justify-center">
              <Printer size={24} />
            </div>
            <div>
              <h5 className="font-bold text-[var(--text-main)]">Print Ready</h5>
              <p className="text-xs text-[var(--text-muted)] font-medium">Optimized paper layouts</p>
            </div>
          </div>
          <ChevronRight size={20} className="text-[var(--text-muted)] group-hover:text-slate-500 transition-colors" />
        </div>
      </div>
    </div>
  );
};

export default ReportsAnalytics;
