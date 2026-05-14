import React, { useState, useRef, useEffect } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import ModuleContainer from './ModuleContainer';
import Footer from './Footer';

const Dashboard = ({ user, onLogout, darkMode, onToggleDarkMode }) => {
  const [activeModule, setActiveModule] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const mainRef = useRef(null);

  // Scroll to top on every module change — keeps the page feeling "fresh"
  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [activeModule]);

  return (
    <div className="flex bg-[var(--bg-main)] h-screen overflow-hidden font-['Outfit'] transition-colors duration-300">
      <Sidebar
        user={user}
        activeModule={activeModule}
        onModuleChange={(id) => {
          setActiveModule(id);
          setIsSidebarOpen(false);
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
        <main ref={mainRef} className="flex-1 overflow-y-auto p-4 lg:p-8 animate-fade-in scroll-smooth custom-scrollbar">
          <div className="max-w-[1600px] mx-auto w-full flex flex-col min-h-[calc(100vh-theme(spacing.24))] lg:min-h-[calc(100vh-theme(spacing.28))]">
            <div className="flex-1">
              <ModuleContainer moduleId={activeModule} user={user} />
            </div>
            <Footer />
          </div>
        </main>

        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] -z-10 pointer-events-none transition-all duration-1000"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] -z-10 pointer-events-none transition-all duration-1000"></div>
      </div>
    </div>
  );
};

export default Dashboard;

