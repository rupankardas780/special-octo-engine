import { ChevronDown, ChevronRight, Eye, Download, Search, Filter, CheckCircle, Clock, Coins, ArrowRightLeft } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

interface Expense {
  id: string;
  date: string;
  employee: string;
  category: string;
  merchant: string;
  amount: number;
  status: "submitted" | "verified" | "tokenized" | "settled";
  receipt: string;
  description: string;
  tokenId?: string;
  policyFeedback: string;
  settlementDate?: string;
}

const mockExpenses: Expense[] = [
  {
    id: "EXP-001",
    date: "2026-01-02",
    employee: "Priya Patel",
    category: "Advertising",
    merchant: "Google Ads",
    amount: 15000,
    status: "tokenized",
    receipt: "receipt-001.pdf",
    description: "Q1 Marketing Campaign",
    tokenId: "TKN-2456",
    policyFeedback: "Auto-approved: Within policy limits",
    settlementDate: "Jan 10, 2026",
  },
  {
    id: "EXP-002",
    date: "2026-01-03",
    employee: "Amit Kumar",
    category: "Travel",
    merchant: "IndiGo Airlines",
    amount: 8500,
    status: "settled",
    receipt: "receipt-002.pdf",
    description: "Client meeting - Mumbai",
    tokenId: "TKN-2457",
    policyFeedback: "Auto-approved: Pre-approved travel",
    settlementDate: "Jan 03, 2026",
  },
  {
    id: "EXP-003",
    date: "2026-01-03",
    employee: "Sneha Desai",
    category: "Supplies",
    merchant: "Amazon Business",
    amount: 3200,
    status: "verified",
    receipt: "receipt-003.pdf",
    description: "Office supplies - Q1",
    policyFeedback: "Pending final approval",
  },
  {
    id: "EXP-004",
    date: "2026-01-03",
    employee: "Rahul Sharma",
    category: "Software",
    merchant: "Adobe Creative Cloud",
    amount: 4800,
    status: "submitted",
    receipt: "receipt-004.pdf",
    description: "Annual subscription renewal",
    policyFeedback: "Awaiting manager review",
  },
];

const statusConfig = {
  submitted: { label: "Submitted", color: "bg-blue-100 text-blue-700", icon: Clock },
  verified: { label: "Verified", color: "bg-purple-100 text-purple-700", icon: CheckCircle },
  tokenized: { label: "Tokenized", color: "bg-[#ecfccb] text-[#4d7c0f]", icon: Coins },
  settled: { label: "Settled", color: "bg-green-100 text-green-700", icon: ArrowRightLeft },
};

export function Expenses() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredExpenses = mockExpenses.filter(
    (expense) =>
      expense.employee.toLowerCase().includes(searchQuery.toLowerCase()) ||
      expense.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      expense.merchant.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-gray-900">Expenses</h1>
          <p className="text-gray-600 mt-1">Track expense submissions and settlement status</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#84cc16] to-[#65a30d] text-white rounded-lg hover:from-[#65a30d] hover:to-[#4d7c0f] transition-all"
        >
          <Download className="w-4 h-4" />
          Export Report
        </motion.button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl p-4 border border-gray-200" style={{ boxShadow: "var(--shadow-sm)" }}>
        <div className="flex items-center gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search expenses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#84cc16] focus:border-transparent"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <Filter className="w-4 h-4 text-gray-600" />
            <span className="text-gray-700">Filters</span>
          </button>
        </div>
      </div>

      {/* Status Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {Object.entries(statusConfig).map(([status, config], index) => {
          const count = mockExpenses.filter((e) => e.status === status).length;
          return (
            <motion.div
              key={status}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-4 border border-gray-200"
              style={{ boxShadow: "var(--shadow-sm)" }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">{config.label}</p>
                  <p className="text-2xl font-semibold text-gray-900 mt-1">{count}</p>
                </div>
                <div className={`w-10 h-10 rounded-lg ${config.color} flex items-center justify-center`}>
                  <config.icon className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Expenses Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-xl border border-gray-200 overflow-hidden"
        style={{ boxShadow: "var(--shadow-lg)" }}
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                  Expense
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                  Employee
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredExpenses.map((expense) => {
                const isExpanded = expandedId === expense.id;
                const config = statusConfig[expense.status];
                const StatusIcon = config.icon;

                return (
                  <>
                    <motion.tr
                      key={expense.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="hover:bg-gray-50 transition-colors cursor-pointer"
                      onClick={() => setExpandedId(isExpanded ? null : expense.id)}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <motion.div
                            animate={{ rotate: isExpanded ? 90 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronRight className="w-4 h-4 text-gray-400" />
                          </motion.div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">{expense.id}</div>
                            <div className="text-xs text-gray-500">{expense.date}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#84cc16] to-[#65a30d] flex items-center justify-center">
                            <span className="text-white text-xs font-medium">
                              {expense.employee.split(" ").map((n) => n[0]).join("")}
                            </span>
                          </div>
                          <span className="text-sm text-gray-900">{expense.employee}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-gray-900">{expense.category}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm font-semibold text-gray-900">₹{expense.amount.toLocaleString()}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <motion.div
                          initial={{ scale: 0.9 }}
                          animate={{ scale: 1 }}
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${config.color}`}
                        >
                          <StatusIcon className="w-3.5 h-3.5" />
                          {config.label}
                        </motion.div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                          }}
                          className="text-[#84cc16] hover:text-[#65a30d] font-medium flex items-center gap-1"
                        >
                          <Eye className="w-4 h-4" />
                          View
                        </button>
                      </td>
                    </motion.tr>

                    {/* Expanded Row */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.tr
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          <td colSpan={6} className="px-6 py-4 bg-gray-50">
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="grid grid-cols-1 md:grid-cols-2 gap-4"
                            >
                              {/* Left Column */}
                              <div className="space-y-3">
                                <div>
                                  <label className="text-xs text-gray-600 uppercase tracking-wide">Description</label>
                                  <p className="text-sm text-gray-900 mt-1">{expense.description}</p>
                                </div>
                                <div>
                                  <label className="text-xs text-gray-600 uppercase tracking-wide">Merchant</label>
                                  <p className="text-sm text-gray-900 mt-1">{expense.merchant}</p>
                                </div>
                                <div>
                                  <label className="text-xs text-gray-600 uppercase tracking-wide">Receipt</label>
                                  <button className="flex items-center gap-2 text-sm text-[#84cc16] hover:text-[#65a30d] font-medium mt-1">
                                    <Download className="w-4 h-4" />
                                    {expense.receipt}
                                  </button>
                                </div>
                              </div>

                              {/* Right Column */}
                              <div className="space-y-3">
                                <div>
                                  <label className="text-xs text-gray-600 uppercase tracking-wide">Policy Feedback</label>
                                  <div className="mt-1 p-3 bg-white rounded-lg border border-gray-200">
                                    <p className="text-sm text-gray-900">{expense.policyFeedback}</p>
                                  </div>
                                </div>
                                {expense.tokenId && (
                                  <div>
                                    <label className="text-xs text-gray-600 uppercase tracking-wide">Token ID</label>
                                    <p className="text-sm font-mono text-gray-900 mt-1">{expense.tokenId}</p>
                                  </div>
                                )}
                                {expense.settlementDate && (
                                  <div>
                                    <label className="text-xs text-gray-600 uppercase tracking-wide">Settlement Date</label>
                                    <p className="text-sm text-gray-900 mt-1">{expense.settlementDate}</p>
                                  </div>
                                )}
                              </div>
                            </motion.div>
                          </td>
                        </motion.tr>
                      )}
                    </AnimatePresence>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
