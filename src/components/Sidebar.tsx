import React, { useState, useEffect } from 'react';
import { LayoutDashboard, Users, MessageSquare, BarChart3, Settings, X } from 'lucide-react';
import mascotLogo from 'figma:asset/dc095bcc417ec24d19b20b70fd1794a5649d5791.png';
import svgPaths from "../imports/svg-n9ua2hc6ud";

// Hook to detect if we're on desktop (lg breakpoint = 1024px)
function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);
  
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return isDesktop;
}

interface SidebarProps {
  activeView: string;
  setActiveView: (view: string) => void;
  language: string;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const menuItems = {
  en: [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'students', icon: Users, label: 'Students' },
    { id: 'communication', icon: MessageSquare, label: 'Communication' },
    { id: 'analytics', icon: BarChart3, label: 'Analytics' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ],
  fr: [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Tableau de bord' },
    { id: 'students', icon: Users, label: 'Élèves' },
    { id: 'communication', icon: MessageSquare, label: 'Communication' },
    { id: 'analytics', icon: BarChart3, label: 'Analyses' },
    { id: 'settings', icon: Settings, label: 'Paramètres' },
  ],
  ar: [
    { id: 'dashboard', icon: LayoutDashboard, label: 'لوحة القيادة' },
    { id: 'students', icon: Users, label: 'الطلاب' },
    { id: 'communication', icon: MessageSquare, label: 'التواصل' },
    { id: 'analytics', icon: BarChart3, label: 'التحليلات' },
    { id: 'settings', icon: Settings, label: 'الإعدادات' },
  ],
};

function StarPattern() {
  return (
    <div className="absolute top-6 right-6 opacity-30">
      <svg className="w-8 h-8" fill="none" preserveAspectRatio="none" viewBox="0 0 13.148 13.148">
        <circle cx="6.574" cy="6.574" fill="#FFEDB2" fillOpacity="0.5" r="5.61" />
        <path clipRule="evenodd" d={svgPaths.p19c21480} fill="#FFEDB2" fillOpacity="0.6" fillRule="evenodd" />
      </svg>
    </div>
  );
}

function SidebarContent({ 
  items, 
  activeView, 
  onNavClick,
  showCloseButton = false,
  onClose
}: {
  items: typeof menuItems.fr;
  activeView: string;
  onNavClick: (id: string) => void;
  showCloseButton?: boolean;
  onClose?: () => void;
}) {
  return (
    <>
      <StarPattern />
      <div className="p-6 relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={mascotLogo} alt="Houd-Houd" className="w-12 h-12" />
            <div>
              <h1 className="font-bold text-xl text-white">Houd-Houd</h1>
              <p className="text-xs text-white opacity-80">École Connect</p>
            </div>
          </div>
          {showCloseButton && onClose && (
            <button 
              onClick={onClose}
              className="text-white p-2 hover:bg-white/10 rounded transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          )}
        </div>
      </div>
      <nav className="flex-1 px-4 space-y-1 relative z-10">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavClick(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all font-semibold ${
                isActive
                  ? 'bg-white text-[#2855AE] shadow-lg'
                  : 'text-white opacity-80 hover:bg-white/10'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-sm">{item.label}</span>
            </button>
          );
        })}
      </nav>
      <div className="p-4 relative z-10">
        <div className="bg-white rounded-lg p-4 border border-[#E1E3E8]">
          <p className="text-xs text-[#777]">École Privée</p>
          <p className="font-semibold mt-1 text-[#313131]">Les Hirondelles</p>
          <p className="text-xs text-[#777] mt-2">Alger, Algérie</p>
        </div>
      </div>
    </>
  );
}

export function Sidebar({ activeView, setActiveView, language, isOpen, setIsOpen }: SidebarProps) {
  const items = menuItems[language as keyof typeof menuItems] || menuItems.fr;
  const isDesktop = useIsDesktop();

  const handleNavClick = (viewId: string) => {
    setActiveView(viewId);
    setIsOpen(false);
  };

  const sidebarStyle = { 
    background: 'linear-gradient(-66.1555deg, rgb(40, 85, 174) 3.1469%, rgb(114, 146, 207) 100%)' 
  };

  // Desktop: show static sidebar
  // Mobile: show overlay + sliding sidebar
  if (isDesktop) {
    return (
      <aside 
        className="w-64 flex flex-col relative overflow-hidden flex-shrink-0"
        style={sidebarStyle}
      >
        <SidebarContent 
          items={items}
          activeView={activeView}
          onNavClick={handleNavClick}
        />
      </aside>
    );
  }

  // Mobile view
  return (
    <>
      {/* Mobile Overlay */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'black',
          zIndex: 40,
          transition: 'opacity 300ms',
          opacity: isOpen ? 0.5 : 0,
          pointerEvents: isOpen ? 'auto' : 'none'
        }}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Sidebar */}
      <aside 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          bottom: 0,
          width: '16rem',
          zIndex: 50,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          ...sidebarStyle,
          transition: 'transform 300ms ease-in-out, visibility 0ms',
          transitionDelay: isOpen ? '0ms' : '0ms, 300ms',
          transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
          visibility: isOpen ? 'visible' : 'hidden',
          boxShadow: isOpen ? '0 25px 50px -12px rgb(0 0 0 / 0.25)' : 'none'
        }}
      >
        <SidebarContent 
          items={items}
          activeView={activeView}
          onNavClick={handleNavClick}
          showCloseButton={true}
          onClose={() => setIsOpen(false)}
        />
      </aside>
    </>
  );
}