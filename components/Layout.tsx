import React, { ReactNode } from 'react';
import { Home, Map, ScanLine, Wallet, Menu } from 'lucide-react';
import { ViewState } from '../types';

interface LayoutProps {
  children: ReactNode;
  currentView: ViewState;
  setView: (view: ViewState) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, currentView, setView }) => {
  if (currentView === 'onboarding') return <>{children}</>;

  const NavItem = ({ view, icon: Icon, label }: { view: ViewState | 'menu', icon: any, label: string }) => {
    const isActive = currentView === view;
    return (
      <button 
        onClick={() => view !== 'menu' && setView(view as ViewState)}
        className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${isActive ? 'text-savanna-accent' : 'text-gray-400'}`}
      >
        <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
        <span className="text-[10px] font-medium">{label}</span>
      </button>
    );
  };

  return (
    <div className="flex flex-col h-screen bg-savanna-900 text-white max-w-md mx-auto relative overflow-hidden shadow-2xl">
      {/* Content Area */}
      <div className="flex-1 overflow-y-auto no-scrollbar pb-24">
        {children}
      </div>

      {/* Floating Action Button for SCAN */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <button 
          onClick={() => setView('scan')}
          className="flex items-center justify-center w-16 h-16 bg-savanna-accent rounded-full shadow-lg border-4 border-savanna-800 hover:scale-105 transition-transform"
        >
          <ScanLine size={32} color="white" />
        </button>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 w-full h-20 bg-savanna-800/90 backdrop-blur-lg border-t border-white/5 flex justify-between items-center px-2 z-10 pb-2">
        <div className="flex-1 h-full flex items-center">
          <NavItem view="home" icon={Home} label="Home" />
          <NavItem view="discovery" icon={Map} label="Explore" />
        </div>
        <div className="w-16"></div> {/* Spacer for FAB */}
        <div className="flex-1 h-full flex items-center">
          <NavItem view="wallet" icon={Wallet} label="Wallet" />
          <NavItem view="menu" icon={Menu} label="More" />
        </div>
      </div>
    </div>
  );
};
