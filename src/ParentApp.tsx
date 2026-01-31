import React, { useState } from 'react';
import { ParentSidebar } from './components/parent/ParentSidebar';
import { ParentHeader } from './components/parent/ParentHeader';
import { ParentDashboard } from './components/parent/ParentDashboard';
import { ChildrenView } from './components/parent/ChildrenView';
import { MessagesView } from './components/parent/MessagesView';
import { CalendarView } from './components/parent/CalendarView';
import { ParentSettingsView } from './components/parent/ParentSettingsView';

export default function ParentApp() {
  const [activeView, setActiveView] = useState('dashboard');
  const [language, setLanguage] = useState('fr');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderView = () => {
    switch (activeView) {
      case 'dashboard':
        return <ParentDashboard language={language} setActiveView={setActiveView} />;
      case 'children':
        return <ChildrenView language={language} />;
      case 'messages':
        return <MessagesView language={language} />;
      case 'calendar':
        return <CalendarView language={language} />;
      case 'settings':
        return <ParentSettingsView language={language} />;
      default:
        return <ParentDashboard language={language} />;
    }
  };

  return (
    <div className="flex h-screen bg-[#F5F7FA]">
      <ParentSidebar 
        activeView={activeView} 
        setActiveView={setActiveView} 
        language={language}
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <ParentHeader 
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
