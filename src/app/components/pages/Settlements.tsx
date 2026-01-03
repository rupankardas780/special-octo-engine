import { Calendar, CheckCircle, Clock, ArrowRightLeft, Zap, AlertCircle } from "lucide-react";
import { motion } from "motion/react";

interface Settlement {
  id: string;
  date: string;
  amount: number;
  tokenCount: number;
  status: "completed" | "processing" | "scheduled" | "pending";
  aiCfoState: string;
  upiCircleStatus: string;
  executionTime?: string;
  employees: number;
}

const mockSettlements: Settlement[] = [
  {
    id: "SETTLE-001",
    date: "Jan 10, 2026",
    amount: 124800,
    tokenCount: 12,
    status: "processing",
    aiCfoState: "Batch validated, executing via UPI Circle",
    upiCircleStatus: "Initiating transfers",
    employees: 8,
  },
  {
    id: "SETTLE-002",
    date: "Jan 17, 2026",
    amount: 89200,
    tokenCount: 8,
    status: "scheduled",
    aiCfoState: "Waiting for settlement window",
    upiCircleStatus: "Scheduled",
    employees: 5,
  },
  {
    id: "SETTLE-003",
    date: "Jan 24, 2026",
    amount: 145600,
    tokenCount: 15,
    status: "scheduled",
    aiCfoState: "Accumulating tokens",
    upiCircleStatus: "Scheduled",
    employees: 10,
  },
  {
    id: "SETTLE-004",
    date: "Jan 03, 2026",
    amount: 98400,
    tokenCount: 10,
    status: "completed",
    aiCfoState: "Successfully executed",
    upiCircleStatus: "All transfers completed",
    executionTime: "2:34 PM",
    employees: 7,
  },
  {
    id: "SETTLE-005",
    date: "Dec 27, 2025",
    amount: 112300,
    tokenCount: 11,
    status: "completed",
    aiCfoState: "Successfully executed",
    upiCircleStatus: "All transfers completed",
    executionTime: "2:15 PM",
    employees: 9,
  },
];

const statusConfig = {
  completed: { 
    label: "Completed", 
    color: "bg-green-100 text-green-700 border-green-200", 
    icon: CheckCircle,
    dotColor: "bg-green-500"
  },
  processing: { 
    label: "Processing", 
    color: "bg-blue-100 text-blue-700 border-blue-200", 
    icon: Zap,
    dotColor: "bg-blue-500"
  },
  scheduled: { 
    label: "Scheduled", 
    color: "bg-[#ecfccb] text-[#4d7c0f] border-[#d9f99d]", 
    icon: Calendar,
    dotColor: "bg-[#84cc16]"
  },
  pending: { 
    label: "Pending", 
    color: "bg-gray-100 text-gray-700 border-gray-200", 
    icon: Clock,
    dotColor: "bg-gray-400"
  },
};

export function Settlements() {
  const upcomingSettlements = mockSettlements.filter(s => s.status !== "completed");
  const completedSettlements = mockSettlements.filter(s => s.status === "completed");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-semibold text-gray-900">Settlements</h1>
        <p className="text-gray-600 mt-1">
          Queue-based settlement batches with AI CFO execution and UPI Circle status
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl p-6 border border-gray-200"
          style={{ boxShadow: "var(--shadow-md)" }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Next Settlement</p>
              <p className="text-2xl font-semibold text-gray-900">Jan 10</p>
            </div>
          </div>
          <p className="text-sm text-gray-600">Processing ₹1,24,800 for 8 employees</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-xl p-6 border border-gray-200"
          style={{ boxShadow: "var(--shadow-md)" }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#84cc16] to-[#65a30d] flex items-center justify-center">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Upcoming Batches</p>
              <p className="text-2xl font-semibold text-gray-900">{upcomingSettlements.length}</p>
            </div>
          </div>
          <p className="text-sm text-gray-600">Total value: ₹{upcomingSettlements.reduce((sum, s) => sum + s.amount, 0).toLocaleString()}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-[#f7fee7] to-[#ecfccb] rounded-xl p-6 border border-[#d9f99d]"
          style={{ boxShadow: "var(--shadow-lime)" }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-[#4d7c0f]" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Settlement Rate</p>
              <p className="text-2xl font-semibold text-[#4d7c0f]">100%</p>
            </div>
          </div>
          <p className="text-sm text-[#4d7c0f]">All settlements executed on time</p>
        </motion.div>
      </div>

      {/* Upcoming Settlements Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-xl p-6 border border-gray-200"
        style={{ boxShadow: "var(--shadow-lg)" }}
      >
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Upcoming Settlements</h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-[#84cc16] to-gray-200"></div>

          <div className="space-y-6">
            {upcomingSettlements.map((settlement, index) => {
              const config = statusConfig[settlement.status];
              const StatusIcon = config.icon;

              return (
                <motion.div
                  key={settlement.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="relative pl-14"
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-4 w-5 h-5 rounded-full ${config.dotColor} border-4 border-white flex items-center justify-center`}
                    style={{ boxShadow: "var(--shadow-md)" }}
                  >
                    {settlement.status === "processing" && (
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        style={{ backgroundColor: config.dotColor.replace('bg-', '') }}
                        animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}
                  </div>

                  {/* Settlement Card */}
                  <div className="bg-gradient-to-r from-white to-gray-50 rounded-xl p-6 border border-gray-200 hover:border-gray-300 transition-all">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{settlement.date}</h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${config.color} flex items-center gap-1`}>
                            <StatusIcon className="w-3 h-3" />
                            {config.label}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">{settlement.id}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-semibold text-gray-900">₹{settlement.amount.toLocaleString()}</p>
                        <p className="text-sm text-gray-600 mt-1">{settlement.tokenCount} tokens</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                      {/* AI CFO State */}
                      <div>
                        <label className="text-xs text-gray-600 uppercase tracking-wide flex items-center gap-1 mb-2">
                          <Zap className="w-3 h-3" />
                          AI CFO State
                        </label>
                        <p className="text-sm text-gray-900">{settlement.aiCfoState}</p>
                      </div>

                      {/* UPI Circle Status */}
                      <div>
                        <label className="text-xs text-gray-600 uppercase tracking-wide flex items-center gap-1 mb-2">
                          <ArrowRightLeft className="w-3 h-3" />
                          UPI Circle Status
                        </label>
                        <p className="text-sm text-gray-900">{settlement.upiCircleStatus}</p>
                      </div>

                      {/* Employees */}
                      <div>
                        <label className="text-xs text-gray-600 uppercase tracking-wide mb-2 block">
                          Employees
                        </label>
                        <p className="text-sm text-gray-900">{settlement.employees} team members</p>
                      </div>

                      {/* Execution Time */}
                      {settlement.executionTime && (
                        <div>
                          <label className="text-xs text-gray-600 uppercase tracking-wide mb-2 block">
                            Execution Time
                          </label>
                          <p className="text-sm text-gray-900">{settlement.executionTime}</p>
                        </div>
                      )}
                    </div>

                    {settlement.status === "processing" && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200"
                      >
                        <div className="flex items-center gap-2">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          >
                            <Zap className="w-4 h-4 text-blue-600" />
                          </motion.div>
                          <span className="text-sm font-medium text-blue-700">
                            AI CFO is executing UPI Circle transfers...
                          </span>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Completed Settlements */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="bg-white rounded-xl p-6 border border-gray-200"
        style={{ boxShadow: "var(--shadow-lg)" }}
      >
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Completed Settlements</h2>
        
        <div className="space-y-4">
          {completedSettlements.map((settlement, index) => (
            <motion.div
              key={settlement.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              className="flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:border-gray-300 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{settlement.date}</h3>
                  <p className="text-sm text-gray-600">{settlement.employees} employees • {settlement.tokenCount} tokens</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-900">₹{settlement.amount.toLocaleString()}</p>
                <p className="text-sm text-gray-600">{settlement.executionTime}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Information Panel */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="bg-white rounded-xl p-6 border border-gray-200"
        style={{ boxShadow: "var(--shadow-md)" }}
      >
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center flex-shrink-0">
            <AlertCircle className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 mb-2">How Settlement Batches Work</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>
                Settlements are executed in <strong>weekly batches</strong> to optimize UPI Circle transfers and provide predictable cash flow management:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Tokens accumulate throughout the week in an immutable queue</li>
                <li>AI CFO validates the batch and initiates UPI Circle transfers on settlement day</li>
                <li>All transfers are executed simultaneously for efficiency</li>
                <li>Employees receive guaranteed payment directly to their UPI accounts</li>
                <li>Settlement status is tracked in real-time with full transparency</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
