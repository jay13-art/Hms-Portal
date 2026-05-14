import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import ModuleContainer from './ModuleContainer';

const Dashboard = ({ user, onLogout, darkMode, onToggleDarkMode }) => {
  const [activeModule, setActiveModule] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex bg-slate-50 min-h-screen overflow-hidden font-['Outfit']">
      <Sidebar 
        user={user} 
        activeModule={activeModule} 
        onModuleChange={(id) => {
          setActiveModule(id);
          setIsSidebarOpen(false); // Close on selection on mobile
        }} 
        onLogout={onLogout} 
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
      <div className="flex-1 flex flex-col relative overflow-hidden">
        <Header 
          user={user} 
          activeModule={activeModule} 
          onMenuClick={() => setIsSidebarOpen(true)}
          darkMode={darkMode}
          onToggleDarkMode={onToggleDarkMode}
        />
        <main className="flex-1 overflow-y-auto no-scrollbar p-4 lg:p-8 animate-fade-in">
          <ModuleContainer moduleId={activeModule} user={user} />
        </main>
        
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
      </div>
    </div>
  );
};

export default Dashboard;

