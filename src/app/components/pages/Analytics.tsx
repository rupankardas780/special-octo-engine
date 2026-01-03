import { TrendingUp, Target, Shield, AlertCircle, CheckCircle } from "lucide-react";
import { motion } from "motion/react";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

// Spend Control Data
const spendControlData = [
  { month: "Oct", budget: 450000, actual: 398000 },
  { month: "Nov", budget: 450000, actual: 425000 },
  { month: "Dec", budget: 450000, actual: 412000 },
  { month: "Jan", budget: 450000, actual: 187000 },
];

// Policy Adherence Data
const policyAdherenceData = [
  { week: "Week 1", approved: 45, flagged: 3 },
  { week: "Week 2", approved: 52, flagged: 2 },
  { week: "Week 3", approved: 48, flagged: 1 },
  { week: "Week 4", approved: 38, flagged: 2 },
];

// Category Distribution
const categoryData = [
  { name: "Marketing", value: 145000, color: "#84cc16" },
  { name: "Travel", value: 98000, color: "#65a30d" },
  { name: "Software", value: 67000, color: "#4d7c0f" },
  { name: "Supplies", value: 34000, color: "#a3e635" },
  { name: "Other", value: 24000, color: "#d9f99d" },
];

// Cash Flow Impact
const cashFlowData = [
  { date: "Jan 1", traditional: 180000, corpay: 0 },
  { date: "Jan 5", traditional: 180000, corpay: 0 },
  { date: "Jan 10", traditional: 180000, corpay: 124800 },
  { date: "Jan 15", traditional: 180000, corpay: 124800 },
  { date: "Jan 20", traditional: 180000, corpay: 213000 },
];

export function Analytics() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-semibold text-gray-900">Analytics</h1>
        <p className="text-gray-600 mt-1">
          Executive-friendly insights focused on control, compliance, and cash protection
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl p-6 border border-gray-200"
          style={{ boxShadow: "var(--shadow-md)" }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#84cc16] to-[#65a30d] flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Budget Utilization</p>
              <p className="text-2xl font-semibold text-gray-900">41.6%</p>
            </div>
          </div>
          <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "41.6%" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-[#84cc16] to-[#65a30d] rounded-full"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-xl p-6 border border-gray-200"
          style={{ boxShadow: "var(--shadow-md)" }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Policy Adherence</p>
              <p className="text-2xl font-semibold text-gray-900">96.2%</p>
            </div>
          </div>
          <p className="text-sm text-gray-600">183/190 auto-approved</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl p-6 border border-gray-200"
          style={{ boxShadow: "var(--shadow-md)" }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
              <Target className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Avg Settlement Time</p>
              <p className="text-2xl font-semibold text-gray-900">4.2 days</p>
            </div>
          </div>
          <p className="text-sm text-gray-600">vs 14 days traditional</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-[#f7fee7] to-[#ecfccb] rounded-xl p-6 border border-[#d9f99d]"
          style={{ boxShadow: "var(--shadow-lime)" }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
              <Shield className="w-5 h-5 text-[#4d7c0f]" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Losses Avoided</p>
              <p className="text-2xl font-semibold text-[#4d7c0f]">₹34,200</p>
            </div>
          </div>
          <p className="text-sm text-[#4d7c0f]">via policy enforcement</p>
        </motion.div>
      </div>

      {/* Main Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Spend Control Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-xl p-6 border border-gray-200"
          style={{ boxShadow: "var(--shadow-lg)" }}
        >
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Spend Control</h3>
            <p className="text-sm text-gray-600 mt-1">Monthly budget vs actual spend</p>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={spendControlData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#888888" fontSize={12} />
              <YAxis stroke="#888888" fontSize={12} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                }}
              />
              <Legend />
              <Bar dataKey="budget" fill="#e5e7eb" name="Budget" radius={[4, 4, 0, 0]} />
              <Bar dataKey="actual" fill="#84cc16" name="Actual Spend" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
            <p className="text-sm text-green-700">
              <strong>Under budget by ₹61,000</strong> this month. Token-based limits preventing overspend.
            </p>
          </div>
        </motion.div>

        {/* Policy Adherence Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-xl p-6 border border-gray-200"
          style={{ boxShadow: "var(--shadow-lg)" }}
        >
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Policy Adherence</h3>
            <p className="text-sm text-gray-600 mt-1">Auto-approved vs flagged expenses</p>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={policyAdherenceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="week" stroke="#888888" fontSize={12} />
              <YAxis stroke="#888888" fontSize={12} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                }}
              />
              <Legend />
              <Bar dataKey="approved" stackId="a" fill="#84cc16" name="Auto-Approved" radius={[4, 4, 0, 0]} />
              <Bar dataKey="flagged" stackId="a" fill="#ef4444" name="Flagged" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-4 p-3 bg-[#f7fee7] rounded-lg border border-[#d9f99d]">
            <p className="text-sm text-[#4d7c0f]">
              <strong>96.2% approval rate</strong> with AI CFO enforcement reducing manual reviews.
            </p>
          </div>
        </motion.div>

        {/* Category Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-xl p-6 border border-gray-200"
          style={{ boxShadow: "var(--shadow-lg)" }}
        >
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Spend by Category</h3>
            <p className="text-sm text-gray-600 mt-1">January 2026 distribution</p>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-4 space-y-2">
            {categoryData.map((cat) => (
              <div key={cat.name} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: cat.color }}></div>
                  <span className="text-gray-700">{cat.name}</span>
                </div>
                <span className="font-semibold text-gray-900">₹{cat.value.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Cash Flow Impact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-white rounded-xl p-6 border border-gray-200"
          style={{ boxShadow: "var(--shadow-lg)" }}
        >
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Cash Flow Impact</h3>
            <p className="text-sm text-gray-600 mt-1">Comparison: Traditional vs CORPAY</p>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={cashFlowData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="date" stroke="#888888" fontSize={12} />
              <YAxis stroke="#888888" fontSize={12} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="traditional"
                stroke="#94a3b8"
                strokeWidth={2}
                name="Traditional Reimbursement"
                dot={{ r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="corpay"
                stroke="#84cc16"
                strokeWidth={2}
                name="CORPAY Batched Settlement"
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
          <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm text-blue-700">
              <strong>Better cash flow control:</strong> Batched settlements allow predictable cash planning vs continuous drip.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Insights Panel */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="bg-white rounded-xl p-6 border border-gray-200"
        style={{ boxShadow: "var(--shadow-lg)" }}
      >
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center flex-shrink-0">
            <AlertCircle className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 mb-2">Key Insights</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Policy Enforcement Success</p>
                    <p className="text-xs text-gray-600">96.2% of expenses auto-approved, saving 12+ hours/week in manual reviews</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Budget Adherence</p>
                    <p className="text-xs text-gray-600">Token limits preventing overspend, currently ₹61,000 under budget</p>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Cash Flow Optimization</p>
                    <p className="text-xs text-gray-600">Batched settlements provide predictable cash requirements vs unpredictable reimbursements</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Employee Satisfaction</p>
                    <p className="text-xs text-gray-600">4.2 day avg settlement vs 14 days traditional, with guaranteed timelines</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
