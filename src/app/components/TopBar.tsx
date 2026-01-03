import { Bell, Building2, ChevronDown, Shield } from "lucide-react";
import { motion } from "motion/react";

export function TopBar() {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
      {/* Company Switcher */}
      <button className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
          <Building2 className="w-4 h-4 text-gray-600" />
        </div>
        <div className="text-left">
          <div className="text-sm font-medium">Acme Solutions Pvt Ltd</div>
          <div className="text-xs text-gray-500">4 team members</div>
        </div>
        <ChevronDown className="w-4 h-4 text-gray-400" />
      </button>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Trust Score */}
        <motion.div 
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-[#f7fee7] to-[#ecfccb] border border-[#d9f99d]"
          whileHover={{ scale: 1.02 }}
        >
          <Shield className="w-4 h-4 text-[#4d7c0f]" />
          <div>
            <div className="text-xs text-gray-600">Trust Score</div>
            <div className="text-sm font-semibold text-[#4d7c0f]">Excellent (98)</div>
          </div>
        </motion.div>

        {/* Notifications */}
        <button className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors">
          <Bell className="w-5 h-5 text-gray-600" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-[#84cc16] rounded-full"></span>
        </button>

        {/* Profile */}
        <button className="flex items-center gap-2 pl-3 pr-2 py-1 rounded-lg hover:bg-gray-100 transition-colors">
          <div>
            <div className="text-sm font-medium text-right">Rahul Sharma</div>
            <div className="text-xs text-gray-500 text-right">Admin</div>
          </div>
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#84cc16] to-[#65a30d] flex items-center justify-center">
            <span className="text-white text-sm font-medium">RS</span>
          </div>
        </button>
      </div>
    </header>
  );
}
