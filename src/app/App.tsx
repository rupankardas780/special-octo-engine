import { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { TopBar } from "./components/TopBar";
import { Dashboard } from "./components/pages/Dashboard";
import { VirtualCards } from "./components/pages/VirtualCards";
import { Expenses } from "./components/pages/Expenses";
import { Tokens } from "./components/pages/Tokens";
import { Settlements } from "./components/pages/Settlements";
import { Analytics } from "./components/pages/Analytics";
import { AICfo } from "./components/pages/AICfo";
import { Settings } from "./components/pages/Settings";

export type PageType = 'dashboard' | 'cards' | 'expenses' | 'tokens' | 'settlements' | 'analytics' | 'ai-cfo' | 'settings';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('dashboard');

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'cards':
        return <VirtualCards />;
      case 'expenses':
        return <Expenses />;
      case 'tokens':
        return <Tokens />;
      case 'settlements':
        return <Settlements />;
      case 'analytics':
        return <Analytics />;
      case 'ai-cfo':
        return <AICfo />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden" style={{ background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%)' }}>
      <Sidebar currentPage={currentPage} onPageChange={setCurrentPage} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar />
        
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-[1600px] mx-auto p-6 lg:p-8">
            {renderPage()}
          </div>
        </main>
      </div>
    </div>
  );
}
