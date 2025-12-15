import React, { useState, useEffect } from 'react';
import { ViewState } from './types';
import { Layout } from './components/Layout';
import { Onboarding } from './components/Onboarding';
import { Home } from './components/Home';
import { Discovery } from './components/Discovery';
import { Wallet } from './components/Wallet';
import { ScanPay } from './components/ScanPay';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('onboarding');
  const [showScanner, setShowScanner] = useState(false);

  // Check if user has seen onboarding (mock logic)
  useEffect(() => {
    // In a real app, check localStorage
    // setCurrentView('onboarding'); 
  }, []);

  const handleViewChange = (view: ViewState) => {
    if (view === 'scan') {
      setShowScanner(true);
    } else {
      setCurrentView(view);
    }
  };

  const renderContent = () => {
    switch (currentView) {
      case 'onboarding':
        return <Onboarding onComplete={() => setCurrentView('home')} />;
      case 'home':
        return <Home />;
      case 'discovery':
        return <Discovery />;
      case 'wallet':
        return <Wallet />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      <Layout currentView={currentView} setView={handleViewChange}>
        {renderContent()}
      </Layout>

      {/* Overlay Scanner */}
      {showScanner && (
        <ScanPay onClose={() => setShowScanner(false)} />
      )}
    </>
  );
};

export default App;
