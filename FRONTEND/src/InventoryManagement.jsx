import React, { useState } from 'react';
import { 
  Package, 
  ShoppingCart, 
  Truck, 
  AlertTriangle, 
  Search, 
  Filter, 
  Plus, 
  MoreHorizontal, 
  ArrowDownLeft, 
  ArrowUpRight, 
  History, 
  Settings,
  Archive,
  ClipboardList,
  Calendar,
  Layers,
  Activity,
  FileText,
  ChevronRight
} from 'lucide-react';

const InventoryManagement = () => {
  const [activeTab, setActiveTab] = useState('stock');

  const stats = [
    { label: 'Total SKU items', value: '1,420', icon: Package, color: 'text-blue-600', bg: 'bg-blue-500/10', trend: '+4.5%' },
    { label: 'Pending POs', value: '12', icon: ShoppingCart, color: 'text-amber-600', bg: 'bg-amber-500/10', trend: '8 Active' },
    { label: 'Critical Stock', value: '4', icon: AlertTriangle, color: 'text-rose-600', bg: 'bg-rose-500/10', trend: 'Immediate' },
    { label: 'Asset Value', value: '₹12.4M', icon: Activity, color: 'text-emerald-600', bg: 'bg-emerald-500/10', trend: 'Fixed' },
  ];

  const inventoryItems = [
    { id: 'INV-001', name: 'N95 Masks (Pack of 50)', category: 'Consumables', stock: 450, unit: 'Boxes', status: 'In Stock', minLevel: 100 },
    { id: 'INV-002', name: 'Surgical Gloves (Size 7)', category: 'Consumables', stock: 1200, unit: 'Pairs', status: 'In Stock', minLevel: 500 },
    { id: 'INV-003', name: 'Dettol Antiseptic 5L', category: 'Medical Supplies', stock: 15, unit: 'Bottles', status: 'Low Stock', minLevel: 20 },
    { id: 'INV-004', name: 'Standard Syringe 5ml', category: 'Medical Supplies', stock: 85, unit: 'Units', status: 'Critical', minLevel: 200 },
    { id: 'INV-005', name: 'Saline Bag 500ml', category: 'Fluids', stock: 320, unit: 'Bags', status: 'In Stock', minLevel: 150 },
  ];

  const renderStockList = () => (
    <div className="premium-card overflow-hidden animate-fade-in bg-[var(--bg-card)]">
      <div className="p-6 border-b border-[var(--border-color)] flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" size={18} />
          <input type="text" placeholder="Search SKU, item name or category..." className="premium-input pl-12" />
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <button className="premium-button bg-[var(--bg-main)] text-[var(--text-muted)] hover:bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center gap-2 transition-all">
            <Filter size={18} /> Filter
          </button>
          <button className="premium-button-primary flex items-center gap-2 whitespace-nowrap">
            <Plus size={18} /> Add Item
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-[var(--bg-main)] text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-widest border-b border-[var(--border-color)]">
              <th className="px-8 py-5">Item Details</th>
              <th className="px-8 py-5">Category</th>
              <th className="px-8 py-5">Current Stock</th>
              <th className="px-8 py-5">Min. Level</th>
              <th className="px-8 py-5">Status</th>
              <th className="px-8 py-5 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--border-color)]">
            {inventoryItems.map((item) => (
              <tr key={item.id} className="hover:bg-[var(--bg-main)] transition-colors group">
                <td className="px-8 py-5">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[var(--bg-main)] flex items-center justify-center text-emerald-600 border border-[var(--border-color)] shadow-sm group-hover:scale-105 transition-all duration-300">
                      <Archive size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-[var(--text-main)] group-hover:text-emerald-600 transition-colors">{item.name}</p>
                      <p className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-tighter">{item.id}</p>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-5">
                  <span className="text-xs font-bold text-[var(--text-muted)]">{item.category}</span>
                </td>
                <td className="px-8 py-5">
                  <div className="flex flex-col">
                    <p className="text-[var(--text-main)] font-bold">{item.stock} {item.unit}</p>
                    <div className="w-24 h-1 bg-[var(--bg-main)] rounded-full mt-1 overflow-hidden">
                      <div 
                        className={`h-full rounded-full ${item.stock < item.minLevel ? 'bg-rose-500' : 'bg-emerald-500'}`} 
                        style={{ width: `${Math.min((item.stock / (item.minLevel * 2)) * 100, 100)}%` }}
                      ></div>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-5 text-[var(--text-main)] font-bold">
                  {item.minLevel} {item.unit}
                </td>
                <td className="px-8 py-5">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5 w-fit transition-all duration-300 ${
                    item.status === 'In Stock' ? 'bg-emerald-500/10 text-emerald-600 border border-emerald-500/20' :
                    item.status === 'Low Stock' ? 'bg-amber-500/10 text-amber-600 border border-amber-500/20' :
                    'bg-rose-500/10 text-rose-600 border border-rose-500/20'
                  }`}>
                    {item.status === 'Critical' && <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse transition-all"></span>}
                    {item.status}
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

  const renderPurchaseOrders = () => (
    <div className="premium-card overflow-hidden animate-fade-in bg-[var(--bg-card)]">
      <div className="p-6 border-b border-[var(--border-color)] flex items-center justify-between">
        <h4 className="text-xl font-bold text-[var(--text-main)]">Purchase Order Pipeline</h4>
        <button className="premium-button-primary flex items-center gap-2">
          <Plus size={18} /> Create Requisition
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-[var(--bg-main)] text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-widest border-b border-[var(--border-color)]">
              <th className="px-8 py-5">PO Number</th>
              <th className="px-8 py-5">Vendor</th>
              <th className="px-8 py-5">Items</th>
              <th className="px-8 py-5">Value</th>
              <th className="px-8 py-5">Status</th>
              <th className="px-8 py-5 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--border-color)]">
            {[
              { id: 'PO-2026-001', vendor: 'Reliance Medical', items: 5, value: '₹45,000', status: 'Sent' },
              { id: 'PO-2026-002', vendor: 'Apollo Supplies', items: 12, value: '₹1,20,000', status: 'Partially Received' },
              { id: 'PO-2026-003', vendor: 'Global Pharma', items: 3, value: '₹12,400', status: 'Pending Approval' },
            ].map((po) => (
              <tr key={po.id} className="hover:bg-[var(--bg-main)] transition-colors group">
                <td className="px-8 py-5 font-bold text-[var(--text-main)]">{po.id}</td>
                <td className="px-8 py-5 text-[var(--text-main)] font-medium">{po.vendor}</td>
                <td className="px-8 py-5 text-[var(--text-muted)] text-xs font-bold">{po.items} Items</td>
                <td className="px-8 py-5 text-[var(--text-main)] font-bold">{po.value}</td>
                <td className="px-8 py-5">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider border transition-all duration-300 ${
                    po.status === 'Sent' ? 'bg-blue-500/10 text-blue-600 border-blue-500/20' :
                    po.status === 'Partially Received' ? 'bg-amber-500/10 text-amber-600 border-amber-500/20' :
                    'bg-slate-500/10 text-slate-500 border-slate-500/20'
                  }`}>
                    {po.status}
                  </span>
                </td>
                <td className="px-8 py-5 text-right">
                  <button className="p-2 text-[var(--text-muted)] hover:text-emerald-600 transition-all"><MoreHorizontal size={18} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderAssets = () => (
    <div className="premium-card overflow-hidden animate-fade-in bg-[var(--bg-card)]">
      <div className="p-6 border-b border-[var(--border-color)] flex items-center justify-between">
        <h4 className="text-xl font-bold text-[var(--text-main)]">Biomedical Asset Register</h4>
        <button className="premium-button bg-[var(--bg-main)] text-[var(--text-muted)] border border-[var(--border-color)] flex items-center gap-2">
          <Settings size={18} /> Service Logs
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 lg:p-8">
        {[
          { name: 'MRI Machine - G3', id: 'AST-901', dept: 'Radiology', status: 'Operational', lastService: '2026-03-10' },
          { name: 'ICU Ventilator V12', id: 'AST-442', dept: 'ICU', status: 'Under Maintenance', lastService: '2026-05-01' },
          { name: 'Surgical Laser', id: 'AST-112', dept: 'OT-1', status: 'Operational', lastService: '2026-04-15' },
        ].map((asset) => (
          <div key={asset.id} className="premium-card p-6 bg-[var(--bg-main)]/50 border-[var(--border-color)] hover:border-emerald-500/30 transition-all group">
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 rounded-2xl bg-[var(--bg-card)] flex items-center justify-center text-emerald-500 shadow-sm transition-transform group-hover:scale-110">
                <Activity size={24} />
              </div>
              <span className={`px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${asset.status === 'Operational' ? 'bg-emerald-500/10 text-emerald-600' : 'bg-rose-500/10 text-rose-600'}`}>
                {asset.status}
              </span>
            </div>
            <h5 className="font-bold text-[var(--text-main)] mb-1">{asset.name}</h5>
            <p className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-tighter mb-4">Serial: {asset.id} • {asset.dept}</p>
            <div className="pt-4 border-t border-[var(--border-color)] flex items-center justify-between">
              <span className="text-[10px] font-bold text-[var(--text-muted)] uppercase">Last Service: {asset.lastService}</span>
              <button className="text-emerald-600"><ChevronRight size={16} /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl font-bold text-[var(--text-main)] tracking-tight mb-2">Inventory & Supply Chain</h2>
          <p className="text-[var(--text-muted)] font-medium max-w-xl">
            Enterprise-level tracking for clinical consumables, biomedical assets, and departmental supply logistics.
          </p>
        </div>
        <div className="flex gap-4">
          <div className="premium-card px-5 py-3 border-none bg-[var(--bg-card)] shadow-xl shadow-black/5 hover:-translate-y-1 transition-all">
            <p className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-widest mb-1">Active Vendors</p>
            <p className="text-2xl font-bold text-[var(--text-main)] leading-none">48</p>
          </div>
          <div className="premium-card px-5 py-3 border-none bg-emerald-600 text-white shadow-xl shadow-emerald-500/20 hover:-translate-y-1 transition-all">
            <p className="text-[10px] font-bold text-emerald-200 uppercase tracking-widest mb-1">PO Fulfilment</p>
            <p className="text-2xl font-bold leading-none">94%</p>
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
                  <span className={`text-[10px] font-bold ${stat.trend.includes('Immediate') || stat.trend.includes('Critical') ? 'text-rose-500' : stat.trend.startsWith('+') ? 'text-emerald-500' : 'text-blue-500'}`}>
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
          { id: 'stock', name: 'Stock Overview', icon: Layers },
          { id: 'purchase', name: 'Purchase & POs', icon: ShoppingCart },
          { id: 'assets', name: 'Equipment & Assets', icon: Activity },
          { id: 'vendors', name: 'Vendor Directory', icon: Truck },
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
        {activeTab === 'stock' ? renderStockList() : 
         activeTab === 'purchase' ? renderPurchaseOrders() : 
         activeTab === 'assets' ? renderAssets() : (
          <div className="premium-card p-20 flex flex-col items-center justify-center bg-[var(--bg-card)] border-dashed border-2 border-[var(--border-color)]">
            <div className="w-20 h-20 bg-[var(--bg-main)] rounded-3xl flex items-center justify-center text-[var(--text-muted)] mb-6 border border-[var(--border-color)]">
              <Truck size={40} />
            </div>
            <h3 className="text-2xl font-bold text-[var(--text-main)] mb-2 tracking-tight">Enterprise Vendor Engine</h3>
            <p className="text-[var(--text-muted)] font-medium max-w-sm text-center leading-relaxed">
              Managing supply chain logistics and partner relationships with real-time delivery synchronization.
            </p>
            <button className="mt-8 premium-button bg-[var(--bg-main)] text-[var(--text-main)] hover:bg-[var(--bg-card)] border border-[var(--border-color)]">
              Configure Directory
            </button>
          </div>
        )}
      </div>

      {/* Quick Action Footer */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-slate-900 rounded-[32px] p-10 text-white relative overflow-hidden group shadow-2xl shadow-slate-900/40">
          <div className="relative z-10">
            <div className="w-14 h-14 bg-emerald-500 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform duration-500">
              <ClipboardList size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-4 tracking-tight">Requisition Queue</h3>
            <p className="text-slate-400 font-medium leading-relaxed mb-10">
              Pending departmental requests for consumables and surgical supplies. Automate PO generation based on approved requisitions.
            </p>
            <div className="flex items-center justify-between p-6 bg-white/5 rounded-2xl border border-white/10 group-hover:border-emerald-500/30 transition-all">
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse shadow-lg shadow-emerald-500/50"></div>
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">8 Pending Approvals</span>
              </div>
              <ChevronRight size={20} className="text-slate-600" />
            </div>
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[100px] -mr-48 -mt-48 transition-all group-hover:bg-emerald-500/10"></div>
        </div>

        <div className="premium-card p-10 bg-[var(--bg-card)]/50 backdrop-blur-sm border-[var(--border-color)] group">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center">
              <Calendar size={24} />
            </div>
            <h3 className="text-xl font-bold text-[var(--text-main)] tracking-tight">Expiry & Maintenance</h3>
          </div>
          <p className="text-[var(--text-muted)] font-medium mb-10 leading-relaxed">
            Monitor medical supply shelf-life and schedule preventative maintenance for high-value biomedical equipment.
          </p>
          <div className="space-y-4">
            {[
              { label: 'Upcoming Expiries (30 Days)', count: '12 Items', color: 'text-amber-500' },
              { label: 'Equipment Servicing Due', count: '3 Assets', color: 'text-blue-500' }
            ].map((row, idx) => (
              <div key={idx} className="flex items-center justify-between p-5 bg-[var(--bg-card)] rounded-2xl border border-[var(--border-color)] hover:border-emerald-500/30 transition-all cursor-pointer group/row">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[var(--bg-main)] flex items-center justify-center text-[var(--text-main)] group-hover/row:text-emerald-500 transition-colors">
                    <FileText size={20} />
                  </div>
                  <span className="text-sm font-bold text-[var(--text-main)]">{row.label}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`text-[10px] font-black uppercase tracking-widest ${row.color}`}>{row.count}</span>
                  <ChevronRight size={18} className="text-slate-300 group-hover/row:text-emerald-500 group-hover/row:translate-x-1 transition-all" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryManagement;
