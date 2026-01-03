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
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="h-16 flex items-center px-6 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#84cc16] to-[#65a30d] flex items-center justify-center">
            <span className="text-white font-bold">C</span>
          </div>
          <span className="text-xl font-semibold">CORPAY</span>
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
                  ? 'text-[#4d7c0f]' 
                  : 'text-gray-700 hover:bg-gray-100'
                }
              `}
            >
              {isActive && (
                <motion.div
                  layoutId="sidebar-active"
                  className="absolute inset-0 bg-[#f7fee7] rounded-lg"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              <Icon className="w-5 h-5 relative z-10" />
              <span className="relative z-10">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200">
        <div className="bg-gradient-to-br from-[#f7fee7] to-[#ecfccb] rounded-lg p-4">
          <div className="flex items-start gap-2 mb-2">
            <div className="w-6 h-6 rounded-full bg-[#84cc16] flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-white text-xs">✓</span>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">Settlement Assured</p>
              <p className="text-xs text-gray-600 mt-1">
                Every token is company-backed and guaranteed
              </p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
