import { TrendingUp, Coins, Clock, Shield, AlertCircle, CheckCircle, ArrowRightLeft, Zap, Receipt } from "lucide-react";
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
        <h1 className="text-3xl font-semibold text-white drop-shadow-lg">Dashboard</h1>
        <p className="text-cyan-300/70 mt-1">
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
            whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.2 } }}
            className="relative overflow-hidden"
          >
            <div
              className="relative rounded-xl p-6 border backdrop-blur-sm transition-all"
              style={{ 
                background: "rgba(26, 31, 58, 0.4)",
                borderColor: "rgba(0, 212, 255, 0.2)",
                boxShadow: "var(--shadow-md)"
              }}
            >
              {/* Icon Background with glow */}
              <div className="absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-20" style={{
                background: `linear-gradient(135deg, ${kpi.color.includes('blue') ? '#00d4ff' : kpi.color.includes('84cc16') ? '#84cc16' : kpi.color.includes('amber') ? '#f59e0b' : '#7c3aed'} 0%, transparent 100%)`
              }} />
              
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${kpi.color} flex items-center justify-center`} style={{
                    boxShadow: kpi.color.includes('84cc16') ? '0 0 15px rgba(132, 204, 22, 0.3)' : '0 0 15px rgba(0, 212, 255, 0.3)'
                  }}>
                    <kpi.icon className="w-6 h-6 text-white" />
                  </div>
                  {kpi.trend === "up" && (
                    <span className="text-sm font-medium text-lime-400">{kpi.change}</span>
                  )}
                  {kpi.trend === "protected" && (
                    <span className="text-xs font-medium text-lime-400 px-2 py-1 rounded backdrop-blur-sm" style={{
                      background: "rgba(132, 204, 22, 0.15)",
                      border: "1px solid rgba(132, 204, 22, 0.3)"
                    }}>
                      {kpi.change}
                    </span>
                  )}
                  {kpi.trend === "neutral" && (
                    <span className="text-sm font-medium text-amber-400">{kpi.change}</span>
                  )}
                </div>
                <div className="text-2xl font-semibold text-white mb-1 drop-shadow-lg">{kpi.value}</div>
                <div className="text-sm text-cyan-300/70">{kpi.title}</div>
              </div>

              {/* Animated shimmer effect with neon */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-300/10 to-transparent"
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
            className="rounded-xl p-6 border backdrop-blur-sm"
            style={{ 
              background: "rgba(26, 31, 58, 0.4)",
              borderColor: "rgba(0, 212, 255, 0.2)",
              boxShadow: "var(--shadow-lg)"
            }}
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold text-white">Obligation Flow</h3>
                <p className="text-sm text-cyan-300/70 mt-1">Expense → Token → Settlement lifecycle</p>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#84cc16]" style={{ boxShadow: "0 0 8px rgba(132, 204, 22, 0.5)" }}></div>
                  <span className="text-cyan-300/70">Expenses</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#7c3aed]" style={{ boxShadow: "0 0 8px rgba(124, 58, 237, 0.5)" }}></div>
                  <span className="text-cyan-300/70">Settled</span>
                </div>
              </div>
            </div>

            <ResponsiveContainer width="100%" height={280}>
              <AreaChart data={flowData}>
                <defs>
                  <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#84cc16" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#84cc16" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorSettled" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#7c3aed" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#7c3aed" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(0, 212, 255, 0.1)" />
                <XAxis dataKey="name" stroke="#8b92a8" fontSize={12} />
                <YAxis stroke="#8b92a8" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(26, 31, 58, 0.95)",
                    border: "1px solid rgba(0, 212, 255, 0.3)",
                    borderRadius: "12px",
                    color: "#e8eaf0",
                    backdropFilter: "blur(10px)"
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="expenses"
                  stroke="#84cc16"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#colorExpenses)"
                />
                <Area
                  type="monotone"
                  dataKey="settled"
                  stroke="#7c3aed"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#colorSettled)"
                />
              </AreaChart>
            </ResponsiveContainer>

            {/* Flow Steps */}
            <div className="mt-6 grid grid-cols-3 gap-4">
              {[
                { label: "Expense Submitted", icon: Receipt, color: "from-cyan-400 to-cyan-600" },
                { label: "Token Issued", icon: Coins, color: "from-lime-400 to-lime-600" },
                { label: "Settlement Guaranteed", icon: CheckCircle, color: "from-purple-500 to-purple-700" },
              ].map((step, i) => (
                <div key={step.label} className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0`} style={{
                    boxShadow: "0 0 10px rgba(0, 212, 255, 0.3)"
                  }}>
                    <step.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm text-white">{step.label}</span>
                  {i < 2 && <ArrowRightLeft className="w-4 h-4 text-cyan-300/50 ml-auto" />}
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
            className="rounded-xl p-6 border backdrop-blur-sm h-full"
            style={{ 
              background: "rgba(26, 31, 58, 0.4)",
              borderColor: "rgba(124, 58, 237, 0.3)",
              boxShadow: "var(--shadow-neon-purple)"
            }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center" style={{
                boxShadow: "0 0 15px rgba(124, 58, 237, 0.5)"
              }}>
                <Zap className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white">AI CFO Alerts</h3>
            </div>

            <div className="space-y-3">
              {aiAlerts.map((alert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="p-3 rounded-lg border backdrop-blur-sm transition-all hover:scale-102"
                  style={{
                    background: "rgba(26, 31, 58, 0.5)",
                    borderColor: "rgba(0, 212, 255, 0.2)"
                  }}
                >
                  <div className="flex items-start gap-2">
                    {alert.type === "info" && (
                      <AlertCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    )}
                    {alert.type === "success" && (
                      <CheckCircle className="w-4 h-4 text-lime-400 flex-shrink-0 mt-0.5" />
                    )}
                    {alert.type === "warning" && (
                      <AlertCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-white">{alert.title}</p>
                      <p className="text-xs text-cyan-300/70 mt-1">{alert.message}</p>
                      <p className="text-xs text-cyan-300/50 mt-1">{alert.time}</p>
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
        className="rounded-xl p-6 border backdrop-blur-sm"
        style={{ 
          background: "rgba(26, 31, 58, 0.4)",
          borderColor: "rgba(0, 212, 255, 0.2)",
          boxShadow: "var(--shadow-lg)"
        }}
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-white">Upcoming Settlement Dates</h3>
            <p className="text-sm text-cyan-300/70 mt-1">Guaranteed weekly settlements via UPI Circle</p>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            className="px-4 py-2 rounded-lg text-white font-semibold transition-all"
            style={{
              background: "linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%)",
              boxShadow: "0 0 15px rgba(0, 212, 255, 0.3)"
            }}
          >
            View All
          </motion.button>
        </div>

        <div className="relative">
          {/* Timeline line with neon glow */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5" style={{
            background: "linear-gradient(180deg, #00d4ff 0%, #7c3aed 50%, rgba(0, 212, 255, 0.2) 100%)",
            boxShadow: "0 0 10px rgba(0, 212, 255, 0.5)"
          }}></div>

          <div className="space-y-6">
            {upcomingSettlements.map((settlement, index) => (
              <motion.div
                key={settlement.date}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="relative flex items-center gap-6 pl-14"
              >
                {/* Timeline dot with glow */}
                <div
                  className={`absolute left-4 w-5 h-5 rounded-full border-2 flex items-center justify-center
                    ${settlement.status === "pending" ? "bg-cyan-400 border-cyan-300" : "bg-purple-500/50 border-purple-400/50"}
                  `}
                  style={{ 
                    boxShadow: settlement.status === "pending" 
                      ? "0 0 15px rgba(0, 212, 255, 0.8)" 
                      : "0 0 10px rgba(124, 58, 237, 0.5)"
                  }}
                >
                  {settlement.status === "pending" && (
                    <motion.div
                      className="w-2 h-2 rounded-full bg-white"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                </div>

                <div className="flex-1 flex items-center justify-between p-4 rounded-lg border backdrop-blur-sm transition-all hover:scale-102" style={{
                  background: settlement.status === "pending" 
                    ? "rgba(0, 212, 255, 0.1)" 
                    : "rgba(26, 31, 58, 0.5)",
                  borderColor: settlement.status === "pending"
                    ? "rgba(0, 212, 255, 0.3)"
                    : "rgba(124, 58, 237, 0.2)"
                }}>
                  <div>
                    <div className="font-medium text-white">{settlement.date}</div>
                    <div className="text-sm text-cyan-300/70">{settlement.day}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-white">{settlement.amount}</div>
                    <div
                      className={`text-xs font-medium mt-1 ${
                        settlement.status === "pending"
                          ? "text-cyan-400"
                          : "text-purple-400"
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
