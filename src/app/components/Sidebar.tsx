import { LayoutDashboard, CreditCard, Receipt, Coins, ArrowRightLeft, BarChart3, Bot, Settings } from "lucide-react";
import { motion } from "motion/react";
import type { PageType } from "../App";

interface SidebarProps {
  currentPage: PageType;
  onPageChange: (page: PageType) => void;
}

const navigation = [
  { id: 'dashboard' as const, label: 'Dashboard', icon: LayoutDashboard },
  { id: 'cards' as const, label: 'Cards', icon: CreditCard },
  { id: 'expenses' as const, label: 'Expenses', icon: Receipt },
  { id: 'tokens' as const, label: 'Tokens', icon: Coins },
  { id: 'settlements' as const, label: 'Settlements', icon: ArrowRightLeft },
  { id: 'analytics' as const, label: 'Analytics', icon: BarChart3 },
  { id: 'ai-cfo' as const, label: 'AI CFO', icon: Bot },
  { id: 'settings' as const, label: 'Settings', icon: Settings },
];

export function Sidebar({ currentPage, onPageChange }: SidebarProps) {
  return (
    <aside className="w-64 flex flex-col backdrop-blur-md" style={{
      background: "rgba(15, 18, 35, 0.8)",
      borderRight: "1px solid rgba(0, 212, 255, 0.15)"
    }}>
      {/* Logo */}
      <div className="h-16 flex items-center px-6" style={{
        borderBottom: "1px solid rgba(0, 212, 255, 0.15)"
      }}>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center" style={{
            boxShadow: "0 0 15px rgba(0, 212, 255, 0.5)"
          }}>
            <span className="text-white font-bold">C</span>
          </div>
          <span className="text-xl font-semibold text-white">CORPAY</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {navigation.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onPageChange(item.id)}
              className={`
                relative w-full flex items-center gap-3 px-3 py-2.5 rounded-lg
                transition-all duration-200
                ${isActive 
                  ? 'text-cyan-300' 
                  : 'text-cyan-300/60 hover:text-cyan-300'
                }
              `}
            >
              {isActive && (
                <motion.div
                  layoutId="sidebar-active"
                  className="absolute inset-0 rounded-lg"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  style={{
                    background: "rgba(0, 212, 255, 0.15)",
                    border: "1px solid rgba(0, 212, 255, 0.3)",
                    boxShadow: "0 0 15px rgba(0, 212, 255, 0.2)"
                  }}
                />
              )}
              <Icon className="w-5 h-5 relative z-10" />
              <span className="relative z-10 font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4" style={{
        borderTop: "1px solid rgba(0, 212, 255, 0.15)"
      }}>
        <div className="rounded-lg p-4 backdrop-blur-sm" style={{
          background: "rgba(0, 212, 255, 0.1)",
          border: "1px solid rgba(0, 212, 255, 0.3)"
        }}>
          <div className="flex items-start gap-2 mb-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-lime-400 to-lime-600 flex items-center justify-center flex-shrink-0 mt-0.5" style={{
              boxShadow: "0 0 10px rgba(132, 204, 22, 0.5)"
            }}>
              <span className="text-white text-xs font-bold">✓</span>
            </div>
            <div>
              <p className="text-sm font-medium text-white">Settlement Assured</p>
              <p className="text-xs text-cyan-300/70 mt-1">
                Every token is company-backed and guaranteed
              </p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
