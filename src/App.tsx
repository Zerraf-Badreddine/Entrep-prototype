import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { DashboardOverview } from './components/DashboardOverview';
import { StudentsView } from './components/StudentsView';
import { CommunicationView } from './components/CommunicationView';
import { AnalyticsView } from './components/AnalyticsView';
import { SettingsView } from './components/SettingsView';

export default function App() {
  const [activeView, setActiveView] = useState('dashboard');
  const [language, setLanguage] = useState('fr');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderView = () => {
    switch (activeView) {
      case 'dashboard':
        return <DashboardOverview language={language} setActiveView={setActiveView} />;
      case 'students':
        return <StudentsView language={language} />;
      case 'communication':
        return <CommunicationView language={language} />;
      case 'analytics':
        return <AnalyticsView language={language} />;
      case 'settings':
        return <SettingsView language={language} />;
      default:
        return <DashboardOverview language={language} />;
    }
  };

  return (
    <div className="flex h-screen bg-[#F5F7FA]">
      <Sidebar 
        activeView={activeView} 
        setActiveView={setActiveView} 
        language={language}
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header 
          language={language} 
          setLanguage={setLanguage}
          onMenuClick={() => setSidebarOpen(!sidebarOpen)}
        />
        <main className="flex-1 overflow-y-auto">
          {renderView()}
        </main>
      </div>
    </div>
  );
}
