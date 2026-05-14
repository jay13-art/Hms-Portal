import React, { useState } from 'react';
import { ROLES } from './constants';
import { Mail, Lock, UserCircle, ChevronRight, Activity, Sun, Moon } from 'lucide-react';

const demoCredentials = [
  { email: 'admin@demo.com', pass: '12345', role: 'Admin' },
  { email: 'doctor@demo.com', pass: '12345', role: 'Doctor' },
  { email: 'accountant@demo.com', pass: '12345', role: 'Accountant' },
  { email: 'laboratorist@demo.com', pass: '12345', role: 'Laboratorist' },
  { email: 'nurse@demo.com', pass: '12345', role: 'Nurse' },
  { email: 'pharmacist@demo.com', pass: '12345', role: 'Pharmacist' },
  { email: 'receptionist@demo.com', pass: '12345', role: 'Receptionist' },
  { email: 'representative@demo.com', pass: '12345', role: 'Representative' },
  { email: 'case@demo.com', pass: '12345', role: 'Case Manager' },
  { email: 'patient@demo.com', pass: '12345', role: 'Patient' },
];

const Login = ({ onLogin, darkMode, onToggleDarkMode }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [activeTab, setActiveTab] = useState('login');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password || !role) return;
    onLogin({ email, role });
  };

  const selectCredential = (cred) => {
    setEmail(cred.email);
    setPassword(cred.pass);
    setRole(cred.role);
    setActiveTab('login');
  };

  return (
    <div className="min-h-screen bg-[var(--bg-main)] flex items-center justify-center p-6 sm:p-12 font-['Outfit'] transition-colors duration-300 relative overflow-hidden">
      {/* Theme Toggle */}
      <div className="absolute top-8 right-8">
        <button 
          onClick={onToggleDarkMode}
          className="p-3 bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-main)] rounded-2xl shadow-xl hover:shadow-2xl transition-all"
        >
          {darkMode ? <Sun size={20} className="text-amber-400" /> : <Moon size={20} />}
        </button>
      </div>

      <div className="w-full max-w-md animate-fade-in relative z-10">
        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/20">
            <Activity className="text-white" size={28} />
          </div>
          <h1 className="text-2xl font-bold text-[var(--text-main)] tracking-tight">HMS <span className="text-emerald-500">System</span></h1>
        </div>

        <div className="bg-[var(--bg-card)] rounded-[32px] shadow-xl shadow-slate-200/60 dark:shadow-slate-900/60 border border-[var(--border-color)] overflow-hidden">
          {/* Tabs */}
          <div className="flex p-2 bg-[var(--bg-main)] border-b border-[var(--border-color)]">
            <button 
              onClick={() => setActiveTab('login')}
              className={`flex-1 py-3 text-sm font-bold rounded-2xl transition-all ${activeTab === 'login' ? 'bg-[var(--bg-card)] text-emerald-600 shadow-sm border border-[var(--border-color)]' : 'text-[var(--text-muted)] hover:text-[var(--text-main)]'}`}
            >
              Sign In
            </button>
            <button 
              onClick={() => setActiveTab('demo')}
              className={`flex-1 py-3 text-sm font-bold rounded-2xl transition-all ${activeTab === 'demo' ? 'bg-[var(--bg-card)] text-emerald-600 shadow-sm border border-[var(--border-color)]' : 'text-[var(--text-muted)] hover:text-[var(--text-main)]'}`}
            >
              Demo Access
            </button>
          </div>

          <div className="p-8 sm:p-10">
            {activeTab === 'login' ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[var(--text-main)] flex items-center gap-2">
                    <Mail size={16} className="text-slate-400" /> Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="premium-input"
                    placeholder="name@hospital.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-[var(--text-main)] flex items-center gap-2">
                    <Lock size={16} className="text-slate-400" /> Password
                  </label>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="premium-input"
                    placeholder="••••••••"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-[var(--text-main)] flex items-center gap-2">
                    <UserCircle size={16} className="text-slate-400" /> User Role
                  </label>
                  <select
                    required
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="premium-input appearance-none"
                    style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%2364748b\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'/%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1rem' }}
                  >
                    <option value="">Select your role</option>
                    {Object.values(ROLES).map((r) => (
                      <option key={r} value={r}>{r}</option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  className="premium-button-primary w-full flex items-center justify-center gap-2 group py-4 mt-2"
                >
                  Log In <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            ) : (
              <div className="space-y-3 max-h-[400px] overflow-y-auto no-scrollbar pr-1">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Quick Preview Accounts</p>
                {demoCredentials.map((cred, idx) => (
                  <button
                    key={idx}
                    onClick={() => selectCredential(cred)}
                    className="w-full flex items-center justify-between p-4 rounded-2xl border border-[var(--border-color)] hover:border-emerald-500/30 hover:bg-emerald-50/30 dark:hover:bg-emerald-900/20 transition-all group text-left"
                  >
                    <div>
                      <p className="font-bold text-[var(--text-main)] group-hover:text-emerald-700 transition-colors">{cred.role}</p>
                      <p className="text-xs text-[var(--text-muted)]">{cred.email}</p>
                    </div>
                    <ChevronRight size={16} className="text-slate-300 group-hover:text-emerald-500" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <p className="mt-10 text-center text-[var(--text-muted)] text-sm">
          Protected by Enterprise Grade Security • v2.4.0
        </p>
      </div>
    </div>
  );
};

export default Login;


