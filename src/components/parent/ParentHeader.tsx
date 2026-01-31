import React, { useState, useEffect } from 'react';
import { Bell, Search, Globe, User, Menu } from 'lucide-react';

interface ParentHeaderProps {
  language: string;
  setLanguage: (lang: string) => void;
  onMenuClick: () => void;
}

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

export function ParentHeader({ language, setLanguage, onMenuClick }: ParentHeaderProps) {
  const isDesktop = useIsDesktop();
  
  return (
    <header className="bg-white border-b border-[#E1E3E8] px-3 sm:px-4 md:px-6 py-3 sm:py-4 shadow-sm" style={{ paddingLeft: isDesktop ? '2rem' : undefined, paddingRight: isDesktop ? '2rem' : undefined }}>
      <div className="flex items-center justify-between gap-2 sm:gap-4">
        <div className="flex items-center gap-4 flex-1">
          {!isDesktop && (
            <button 
              onClick={onMenuClick}
              className="p-2 hover:bg-[#F5F7FA] rounded-lg transition-colors"
            >
              <Menu className="w-5 h-5 text-[#777]" />
            </button>
          )}
          
          <div className="flex-1 max-w-xl hidden md:block">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#B8B8B8]" />
              <input
                type="text"
                placeholder="Rechercher..."
                className="w-full pl-10 pr-4 py-2.5 border border-[#E1E3E8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6789CA] text-sm"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-4 ml-2 md:ml-6">
          <div className="relative hidden sm:block">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="appearance-none bg-[#F5F7FA] border border-[#E1E3E8] rounded-lg px-3 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-[#6789CA] cursor-pointer"
            >
              <option value="fr">Français</option>
              <option value="ar">العربية</option>
              <option value="en">English</option>
              <option value="am">Tamazight</option>
            </select>
            <Globe className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-[#B8B8B8] pointer-events-none" />
          </div>

          <button className="relative p-2 hover:bg-[#F5F7FA] rounded-lg transition-colors">
            <Bell className="w-5 h-5 text-[#777]" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-[#E92E30] rounded-full"></span>
          </button>

          <div className="flex items-center gap-2 md:gap-3 pl-2 md:pl-4 border-l border-[#E1E3E8]">
            <div className="text-right hidden md:block">
              <p className="text-sm font-semibold text-[#313131]">M. Karim Mansouri</p>
              <p className="text-xs text-[#777]">Parent</p>
            </div>
            <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(-66.1555deg, rgb(40, 85, 174) 3.1469%, rgb(114, 146, 207) 100%)' }}>
              <User className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
