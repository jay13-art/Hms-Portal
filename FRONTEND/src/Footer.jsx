import React from 'react';
import { Shield, Globe, MessageCircle, Heart, Zap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mt-auto pt-16 pb-8 border-t border-[var(--border-color)]">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
              <Zap className="text-white" size={18} />
            </div>
            <span className="text-xl font-bold text-[var(--text-main)] tracking-tight">HMS System</span>
          </div>
          <p className="text-sm text-[var(--text-muted)] font-medium leading-relaxed max-w-sm">
            Empowering healthcare providers with next-generation clinical intelligence, automated workflows, and empathetic patient engagement tools.
          </p>
        </div>
        
        <div>
          <h5 className="text-[10px] font-black text-[var(--text-main)] uppercase tracking-[0.2em] mb-6">Quick Resources</h5>
          <ul className="space-y-4">
            {['Clinical Support', 'Patient Guide', 'API Documentation', 'System Status'].map((link) => (
              <li key={link}>
                <a href="#" className="text-sm text-[var(--text-muted)] hover:text-emerald-500 font-bold transition-colors">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="text-[10px] font-black text-[var(--text-main)] uppercase tracking-[0.2em] mb-6">Privacy & Safety</h5>
          <div className="flex items-center gap-2 mb-4 text-sm text-emerald-600 font-bold">
            <Shield size={16} />
            <span>HIPAA Compliant</span>
          </div>
          <p className="text-xs text-[var(--text-muted)] font-medium leading-relaxed">
            Your data is protected with enterprise-grade AES-256 encryption and strictly audited clinical standards.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-[var(--border-color)]/50 gap-6">
        <p className="text-xs text-[var(--text-muted)] font-bold uppercase tracking-widest">
          © 2026 SIT Solutions. All rights reserved.
        </p>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 text-xs text-[var(--text-muted)] font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Server: Mumbai-01
          </div>
          <div className="flex items-center gap-4 text-[var(--text-muted)]">
            <Globe size={18} className="hover:text-emerald-500 cursor-pointer transition-colors" />
            <MessageCircle size={18} className="hover:text-emerald-500 cursor-pointer transition-colors" />
            <Heart size={18} className="hover:text-rose-500 cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
