import { Coins, Clock, Lock, CheckCircle, AlertCircle, Calendar } from "lucide-react";
import { motion } from "motion/react";

interface Token {
  id: string;
  employee: string;
  expenseId: string;
  amount: number;
  createdDate: string;
  settlementDate: string;
  status: "active" | "locked" | "settled";
  daysUntilSettlement: number;
  category: string;
}

const mockTokens: Token[] = [
  {
    id: "TKN-2456",
    employee: "Priya Patel",
    expenseId: "EXP-001",
    amount: 15000,
    createdDate: "Jan 02, 2026",
    settlementDate: "Jan 10, 2026",
    status: "locked",
    daysUntilSettlement: 7,
    category: "Advertising",
  },
  {
    id: "TKN-2457",
    employee: "Amit Kumar",
    expenseId: "EXP-002",
    amount: 8500,
    createdDate: "Jan 03, 2026",
    settlementDate: "Jan 03, 2026",
    status: "settled",
    daysUntilSettlement: 0,
    category: "Travel",
  },
  {
    id: "TKN-2458",
    employee: "Sneha Desai",
    expenseId: "EXP-005",
    amount: 4200,
    createdDate: "Jan 03, 2026",
    settlementDate: "Jan 10, 2026",
    status: "locked",
    daysUntilSettlement: 7,
    category: "Supplies",
  },
  {
    id: "TKN-2459",
    employee: "Rahul Sharma",
    expenseId: "EXP-006",
    amount: 12000,
    createdDate: "Jan 03, 2026",
    settlementDate: "Jan 10, 2026",
    status: "locked",
    daysUntilSettlement: 7,
    category: "Software",
  },
];

const statusConfig = {
  active: { label: "Active", color: "bg-blue-100 text-blue-700", icon: Clock },
  locked: { label: "Locked", color: "bg-[#ecfccb] text-[#4d7c0f]", icon: Lock },
  settled: { label: "Settled", color: "bg-green-100 text-green-700", icon: CheckCircle },
};

function ProgressRing({ progress, size = 120, strokeWidth = 8 }: { progress: number; size?: number; strokeWidth?: number }) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <svg width={size} height={size} className="transform -rotate-90">
      {/* Background circle */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="#e5e7eb"
        strokeWidth={strokeWidth}
        fill="none"
      />
      {/* Progress circle */}
      <motion.circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="url(#gradient)"
        strokeWidth={strokeWidth}
        fill="none"
        strokeLinecap="round"
        initial={{ strokeDashoffset: circumference }}
        animate={{ strokeDashoffset: offset }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{
          strokeDasharray: circumference,
        }}
      />
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#84cc16" />
          <stop offset="100%" stopColor="#65a30d" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function Tokens() {
  const activeTokens = mockTokens.filter((t) => t.status === "locked").length;
  const totalValue = mockTokens.filter((t) => t.status === "locked").reduce((sum, t) => sum + t.amount, 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-semibold text-gray-900">Tokens</h1>
        <p className="text-gray-600 mt-1">
          Non-monetary commitment units with guaranteed settlement timelines
        </p>
      </div>

      {/* Token Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl p-6 border border-gray-200"
          style={{ boxShadow: "var(--shadow-md)" }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#84cc16] to-[#65a30d] flex items-center justify-center">
              <Coins className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Active Tokens</p>
              <p className="text-2xl font-semibold text-gray-900">{activeTokens}</p>
            </div>
          </div>
          <p className="text-sm text-gray-600">
            Representing guaranteed obligations to employees
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-xl p-6 border border-gray-200"
          style={{ boxShadow: "var(--shadow-md)" }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
              <Lock className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Value</p>
              <p className="text-2xl font-semibold text-gray-900">₹{totalValue.toLocaleString()}</p>
            </div>
          </div>
          <p className="text-sm text-gray-600">
            Locked and immutable until settlement
          </p>
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
              <Calendar className="w-6 h-6 text-[#4d7c0f]" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Next Settlement</p>
              <p className="text-2xl font-semibold text-[#4d7c0f]">Jan 10</p>
            </div>
          </div>
          <p className="text-sm text-[#4d7c0f]">
            7 days remaining until batch execution
          </p>
        </motion.div>
      </div>

      {/* Token Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockTokens.map((token, index) => {
          const config = statusConfig[token.status];
          const StatusIcon = config.icon;
          const progress = token.status === "settled" ? 100 : ((7 - token.daysUntilSettlement) / 7) * 100;

          return (
            <motion.div
              key={token.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white rounded-xl p-6 border border-gray-200"
              style={{ boxShadow: "var(--shadow-md)" }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm font-mono text-gray-600">{token.id}</p>
                  <p className="text-xs text-gray-500 mt-1">{token.category}</p>
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${config.color} flex items-center gap-1`}>
                  <StatusIcon className="w-3 h-3" />
                  {config.label}
                </div>
              </div>

              {/* Progress Ring */}
              <div className="flex items-center justify-center mb-4">
                <div className="relative">
                  <ProgressRing progress={progress} />
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    {token.status === "settled" ? (
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    ) : (
                      <>
                        <span className="text-2xl font-semibold text-gray-900">{token.daysUntilSettlement}</span>
                        <span className="text-xs text-gray-600">days left</span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Token Details */}
              <div className="space-y-3 border-t border-gray-200 pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Amount</span>
                  <span className="font-semibold text-gray-900">₹{token.amount.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Employee</span>
                  <span className="text-sm text-gray-900">{token.employee.split(" ")[0]}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Created</span>
                  <span className="text-sm text-gray-900">{token.createdDate}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Settlement</span>
                  <span className="text-sm text-gray-900">{token.settlementDate}</span>
                </div>
              </div>

              {/* Immutability Badge */}
              {token.status === "locked" && (
                <div className="mt-4 p-3 bg-gradient-to-r from-[#f7fee7] to-[#ecfccb] rounded-lg border border-[#d9f99d]">
                  <div className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-[#4d7c0f]" />
                    <span className="text-xs font-medium text-[#4d7c0f]">
                      Immutable until settlement
                    </span>
                  </div>
                </div>
              )}

              {token.status === "settled" && (
                <div className="mt-4 p-3 bg-gradient-to-r from-green-50 to-green-100 rounded-lg border border-green-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-700" />
                    <span className="text-xs font-medium text-green-700">
                      Successfully settled
                    </span>
                  </div>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Information Panel */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="bg-white rounded-xl p-6 border border-gray-200"
        style={{ boxShadow: "var(--shadow-md)" }}
      >
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
            <AlertCircle className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 mb-2">What are Tokens?</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>
                Tokens are <strong>non-monetary commitment units</strong> that represent your company's guaranteed
                obligation to settle an employee's expense on a specific date.
              </p>
              <p>
                Unlike traditional reimbursement systems, tokens provide <strong>certainty and transparency</strong>:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Each token is immutable once issued - it cannot be modified or revoked</li>
                <li>Settlement dates are fixed and guaranteed by your company</li>
                <li>Tokens are executed automatically via UPI Circle on the settlement date</li>
                <li>Employees can track their tokens in real-time</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
