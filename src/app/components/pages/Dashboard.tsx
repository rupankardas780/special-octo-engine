import { TrendingUp, Coins, Clock, Shield, AlertCircle, CheckCircle, ArrowRightLeft, Zap } from "lucide-react";
import { motion } from "motion/react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const kpiData = [
  {
    title: "Total Obligations",
    value: "₹4,32,450",
    change: "+12.5%",
    trend: "up",
    icon: TrendingUp,
    color: "from-blue-500 to-blue-600",
    bgColor: "from-blue-50 to-blue-100",
  },
  {
    title: "Tokens Issued",
    value: "1,847",
    change: "+8.2%",
    trend: "up",
    icon: Coins,
    color: "from-[#84cc16] to-[#65a30d]",
    bgColor: "from-[#f7fee7] to-[#ecfccb]",
  },
  {
    title: "Pending Settlements",
    value: "₹1,24,800",
    change: "Due in 3 days",
    trend: "neutral",
    icon: Clock,
    color: "from-amber-500 to-amber-600",
    bgColor: "from-amber-50 to-amber-100",
  },
  {
    title: "Cash-Safe Exposure",
    value: "₹3,07,650",
    change: "Protected",
    trend: "protected",
    icon: Shield,
    color: "from-[#4d7c0f] to-[#365314]",
    bgColor: "from-[#f7fee7] to-[#d9f99d]",
  },
];

const upcomingSettlements = [
  { date: "Jan 10, 2026", amount: "₹1,24,800", status: "pending", day: "Friday" },
  { date: "Jan 17, 2026", amount: "₹89,200", status: "scheduled", day: "Friday" },
  { date: "Jan 24, 2026", amount: "₹1,45,600", status: "scheduled", day: "Friday" },
  { date: "Jan 31, 2026", amount: "₹98,400", status: "scheduled", day: "Friday" },
];

const aiAlerts = [
  {
    type: "info",
    title: "Settlement batch ready for execution",
    message: "₹1,24,800 will be processed via UPI Circle on Jan 10",
    time: "2 hours ago",
  },
  {
    type: "success",
    title: "Policy compliance achieved",
    message: "All expenses this week met approval criteria",
    time: "5 hours ago",
  },
  {
    type: "warning",
    title: "Token threshold approaching",
    message: "Marketing team at 85% of monthly token limit",
    time: "1 day ago",
  },
];

const flowData = [
  { name: "Mon", expenses: 12, tokens: 12, settled: 0 },
  { name: "Tue", expenses: 8, tokens: 20, settled: 0 },
  { name: "Wed", expenses: 15, tokens: 35, settled: 0 },
  { name: "Thu", expenses: 10, tokens: 45, settled: 0 },
  { name: "Fri", expenses: 18, tokens: 63, settled: 45 },
  { name: "Sat", expenses: 0, tokens: 63, settled: 63 },
  { name: "Sun", expenses: 0, tokens: 63, settled: 63 },
];

export function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-semibold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">
          Token-based expense management with guaranteed settlements
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiData.map((kpi, index) => (
          <motion.div
            key={kpi.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="relative overflow-hidden"
          >
            <div
              className="relative bg-white rounded-xl p-6 border border-gray-200 hover:border-gray-300 transition-all"
              style={{ boxShadow: "var(--shadow-md)" }}
            >
              {/* Icon Background */}
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${kpi.bgColor} rounded-bl-full opacity-50`} />
              
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${kpi.color} flex items-center justify-center`}>
                    <kpi.icon className="w-6 h-6 text-white" />
                  </div>
                  {kpi.trend === "up" && (
                    <span className="text-sm font-medium text-green-600">{kpi.change}</span>
                  )}
                  {kpi.trend === "protected" && (
                    <span className="text-xs font-medium text-[#4d7c0f] bg-[#f7fee7] px-2 py-1 rounded">
                      {kpi.change}
                    </span>
                  )}
                  {kpi.trend === "neutral" && (
                    <span className="text-sm font-medium text-amber-600">{kpi.change}</span>
                  )}
                </div>
                <div className="text-2xl font-semibold text-gray-900 mb-1">{kpi.value}</div>
                <div className="text-sm text-gray-600">{kpi.title}</div>
              </div>

              {/* Animated shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%" }}
                animate={{ x: "200%" }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Obligation Flow Visualization */}
        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-xl p-6 border border-gray-200"
            style={{ boxShadow: "var(--shadow-lg)" }}
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Obligation Flow</h3>
                <p className="text-sm text-gray-600 mt-1">Expense → Token → Settlement lifecycle</p>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#84cc16]"></div>
                  <span className="text-gray-600">Expenses</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#3f6212]"></div>
                  <span className="text-gray-600">Settled</span>
                </div>
              </div>
            </div>

            <ResponsiveContainer width="100%" height={280}>
              <AreaChart data={flowData}>
                <defs>
                  <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#84cc16" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#84cc16" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorSettled" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3f6212" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#3f6212" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" stroke="#888888" fontSize={12} />
                <YAxis stroke="#888888" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "white",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="expenses"
                  stroke="#84cc16"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorExpenses)"
                />
                <Area
                  type="monotone"
                  dataKey="settled"
                  stroke="#3f6212"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorSettled)"
                />
              </AreaChart>
            </ResponsiveContainer>

            {/* Flow Steps */}
            <div className="mt-6 grid grid-cols-3 gap-4">
              {[
                { label: "Expense Submitted", icon: Receipt, color: "bg-blue-100 text-blue-600" },
                { label: "Token Issued", icon: Coins, color: "bg-[#f7fee7] text-[#4d7c0f]" },
                { label: "Settlement Guaranteed", icon: CheckCircle, color: "bg-green-100 text-green-600" },
              ].map((step, i) => (
                <div key={step.label} className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-lg ${step.color} flex items-center justify-center flex-shrink-0`}>
                    <step.icon className="w-4 h-4" />
                  </div>
                  <span className="text-sm text-gray-700">{step.label}</span>
                  {i < 2 && <ArrowRightLeft className="w-4 h-4 text-gray-300 ml-auto" />}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* AI CFO Alerts */}
        <div className="lg:col-span-1">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-xl p-6 border border-gray-200 h-full"
            style={{ boxShadow: "var(--shadow-lg)" }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">AI CFO Alerts</h3>
            </div>

            <div className="space-y-3">
              {aiAlerts.map((alert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="p-3 rounded-lg border border-gray-200 hover:border-gray-300 transition-all"
                >
                  <div className="flex items-start gap-2">
                    {alert.type === "info" && (
                      <AlertCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                    )}
                    {alert.type === "success" && (
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    )}
                    {alert.type === "warning" && (
                      <AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">{alert.title}</p>
                      <p className="text-xs text-gray-600 mt-1">{alert.message}</p>
                      <p className="text-xs text-gray-400 mt-1">{alert.time}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Upcoming Settlements Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="bg-white rounded-xl p-6 border border-gray-200"
        style={{ boxShadow: "var(--shadow-lg)" }}
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Upcoming Settlement Dates</h3>
            <p className="text-sm text-gray-600 mt-1">Guaranteed weekly settlements via UPI Circle</p>
          </div>
          <button className="px-4 py-2 bg-gradient-to-r from-[#84cc16] to-[#65a30d] text-white rounded-lg hover:from-[#65a30d] hover:to-[#4d7c0f] transition-all">
            View All
          </button>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#84cc16] via-[#a3e635] to-gray-200"></div>

          <div className="space-y-6">
            {upcomingSettlements.map((settlement, index) => (
              <motion.div
                key={settlement.date}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="relative flex items-center gap-6 pl-14"
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-4 w-5 h-5 rounded-full border-2 border-white flex items-center justify-center
                    ${settlement.status === "pending" ? "bg-[#84cc16]" : "bg-gray-300"}
                  `}
                  style={{ boxShadow: settlement.status === "pending" ? "var(--shadow-lime)" : "none" }}
                >
                  {settlement.status === "pending" && (
                    <motion.div
                      className="w-2 h-2 rounded-full bg-white"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                </div>

                <div className="flex-1 flex items-center justify-between p-4 rounded-lg border border-gray-200 bg-gradient-to-r from-white to-gray-50 hover:border-gray-300 transition-all">
                  <div>
                    <div className="font-medium text-gray-900">{settlement.date}</div>
                    <div className="text-sm text-gray-600">{settlement.day}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-gray-900">{settlement.amount}</div>
                    <div
                      className={`text-xs font-medium mt-1 ${
                        settlement.status === "pending"
                          ? "text-[#4d7c0f]"
                          : "text-gray-500"
                      }`}
                    >
                      {settlement.status === "pending" ? "Processing" : "Scheduled"}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
