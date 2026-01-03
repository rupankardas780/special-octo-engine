import { Bell, Building2, ChevronDown, Shield } from "lucide-react";
import { motion } from "motion/react";

export function TopBar() {
  return (
    <header className="h-16 flex items-center justify-between px-6 backdrop-blur-md" style={{
      background: "rgba(26, 31, 58, 0.4)",
      borderBottom: "1px solid rgba(0, 212, 255, 0.15)"
    }}>
      {/* Company Switcher */}
      <button className="flex items-center gap-3 px-4 py-2 rounded-lg transition-colors backdrop-blur-sm" style={{
        background: "rgba(0, 212, 255, 0.05)",
        border: "1px solid rgba(0, 212, 255, 0.2)"
      }}>
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center" style={{
          boxShadow: "0 0 10px rgba(0, 212, 255, 0.3)"
        }}>
          <Building2 className="w-4 h-4 text-white" />
        </div>
        <div className="text-left">
          <div className="text-sm font-medium text-white">Acme Solutions Pvt Ltd</div>
          <div className="text-xs text-cyan-300/70">4 team members</div>
        </div>
        <ChevronDown className="w-4 h-4 text-cyan-300/70" />
      </button>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Trust Score */}
        <motion.div 
          className="flex items-center gap-2 px-4 py-2 rounded-lg backdrop-blur-sm"
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(132, 204, 22, 0.4)" }}
          style={{
            background: "rgba(132, 204, 22, 0.15)",
            border: "1px solid rgba(132, 204, 22, 0.3)"
          }}
        >
          <Shield className="w-4 h-4 text-lime-400" />
          <div>
            <div className="text-xs text-cyan-300/70">Trust Score</div>
            <div className="text-sm font-semibold text-lime-400">Excellent (98)</div>
          </div>
        </motion.div>

        {/* Notifications */}
        <button className="relative p-2 rounded-lg transition-colors backdrop-blur-sm" style={{
          background: "rgba(0, 212, 255, 0.05)",
          border: "1px solid rgba(0, 212, 255, 0.2)"
        }}>
          <Bell className="w-5 h-5 text-cyan-300" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-lime-400 rounded-full" style={{
            boxShadow: "0 0 8px rgba(132, 204, 22, 0.8)"
          }}></span>
        </button>

        {/* Profile */}
        <button className="flex items-center gap-2 pl-3 pr-2 py-1 rounded-lg transition-colors backdrop-blur-sm" style={{
          background: "rgba(0, 212, 255, 0.05)",
          border: "1px solid rgba(0, 212, 255, 0.2)"
        }}>
          <div>
            <div className="text-sm font-medium text-right text-white">Rahul Sharma</div>
            <div className="text-xs text-cyan-300/70 text-right">Admin</div>
          </div>
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center" style={{
            boxShadow: "0 0 15px rgba(0, 212, 255, 0.5)"
          }}>
            <span className="text-white text-sm font-medium">RS</span>
          </div>
        </button>
      </div>
    </header>
  );
}
