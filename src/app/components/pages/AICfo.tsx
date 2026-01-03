import { Bot, Zap, CheckCircle, AlertCircle, Clock, ArrowRightLeft, FileText, Shield } from "lucide-react";
import { motion } from "motion/react";

interface Decision {
  id: string;
  timestamp: string;
  type: "approval" | "execution" | "escalation" | "enforcement";
  action: string;
  rationale: string;
  outcome: string;
  confidence: number;
  impactedItems: number;
}

const mockDecisions: Decision[] = [
  {
    id: "DEC-001",
    timestamp: "2026-01-03 14:32",
    type: "execution",
    action: "Initiated settlement batch SETTLE-001",
    rationale: "Settlement window reached (Friday 2:30 PM). 12 tokens validated and ready for UPI Circle execution. All policy checks passed.",
    outcome: "₹1,24,800 transferred to 8 employees via UPI Circle",
    confidence: 99,
    impactedItems: 12,
  },
  {
    id: "DEC-002",
    timestamp: "2026-01-03 11:15",
    type: "approval",
    action: "Auto-approved EXP-001",
    rationale: "Expense within token limit (342/500). Category 'Advertising' allowed on card. Amount ₹15,000 below auto-approval threshold of ₹20,000.",
    outcome: "Token TKN-2456 issued, settlement scheduled Jan 10",
    confidence: 98,
    impactedItems: 1,
  },
  {
    id: "DEC-003",
    timestamp: "2026-01-03 09:47",
    type: "escalation",
    action: "Escalated EXP-012 to manager",
    rationale: "Amount ₹45,000 exceeds auto-approval limit. Category 'Software' requires manual review for purchases above ₹30,000 per policy CORP-SW-01.",
    outcome: "Pending manager approval from Rahul Sharma",
    confidence: 100,
    impactedItems: 1,
  },
  {
    id: "DEC-004",
    timestamp: "2026-01-02 16:20",
    type: "enforcement",
    action: "Blocked expense submission",
    rationale: "Employee attempted to submit 'Entertainment' expense, but category not allowed on assigned card. Policy CORP-ENT-02 prevents entertainment expenses without pre-approval.",
    outcome: "Expense rejected, employee notified of policy violation",
    confidence: 100,
    impactedItems: 1,
  },
  {
    id: "DEC-005",
    timestamp: "2026-01-02 10:15",
    type: "approval",
    action: "Batch-approved 8 travel expenses",
    rationale: "All expenses submitted by Amit Kumar for Mumbai client trip. Pre-approved travel authorization TRAV-2026-001 exists. Total ₹34,200 within travel budget.",
    outcome: "8 tokens issued (TKN-2440 to TKN-2447)",
    confidence: 97,
    impactedItems: 8,
  },
];

const typeConfig = {
  approval: { label: "Approval", color: "bg-green-100 text-green-700 border-green-200", icon: CheckCircle },
  execution: { label: "Execution", color: "bg-blue-100 text-blue-700 border-blue-200", icon: Zap },
  escalation: { label: "Escalation", color: "bg-amber-100 text-amber-700 border-amber-200", icon: AlertCircle },
  enforcement: { label: "Enforcement", color: "bg-red-100 text-red-700 border-red-200", icon: Shield },
};

export function AICfo() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-gray-900">AI CFO</h1>
          <p className="text-gray-600 mt-1">
            Automated decision-making with full transparency and explainability
          </p>
        </div>
        <motion.div
          animate={{
            boxShadow: [
              "0 0 0 0 rgba(132, 204, 22, 0.4)",
              "0 0 0 10px rgba(132, 204, 22, 0)",
              "0 0 0 0 rgba(132, 204, 22, 0)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#84cc16] to-[#65a30d] text-white rounded-lg"
        >
          <Bot className="w-5 h-5" />
          <div>
            <div className="text-sm font-semibold">AI CFO Active</div>
            <div className="text-xs opacity-90">Monitoring 24/7</div>
          </div>
        </motion.div>
      </div>

      {/* AI CFO Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl p-6 border border-gray-200"
          style={{ boxShadow: "var(--shadow-md)" }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Auto-Approvals</p>
              <p className="text-2xl font-semibold text-gray-900">183</p>
            </div>
          </div>
          <p className="text-sm text-gray-600">This month</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-xl p-6 border border-gray-200"
          style={{ boxShadow: "var(--shadow-md)" }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Settlements Executed</p>
              <p className="text-2xl font-semibold text-gray-900">12</p>
            </div>
          </div>
          <p className="text-sm text-gray-600">100% on-time</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl p-6 border border-gray-200"
          style={{ boxShadow: "var(--shadow-md)" }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center">
              <AlertCircle className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Escalations</p>
              <p className="text-2xl font-semibold text-gray-900">7</p>
            </div>
          </div>
          <p className="text-sm text-gray-600">Requiring human review</p>
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
              <p className="text-sm text-gray-600">Policy Violations</p>
              <p className="text-2xl font-semibold text-[#4d7c0f]">3</p>
            </div>
          </div>
          <p className="text-sm text-[#4d7c0f]">Blocked automatically</p>
        </motion.div>
      </div>

      {/* Decision Log */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-xl p-6 border border-gray-200"
        style={{ boxShadow: "var(--shadow-lg)" }}
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Decision Log</h2>
            <p className="text-sm text-gray-600 mt-1">Real-time AI CFO actions with full explainability</p>
          </div>
          <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
            Filter Decisions
          </button>
        </div>

        <div className="space-y-4">
          {mockDecisions.map((decision, index) => {
            const config = typeConfig[decision.type];
            const TypeIcon = config.icon;

            return (
              <motion.div
                key={decision.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="border border-gray-200 rounded-xl p-6 hover:border-gray-300 transition-all"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4 flex-1">
                    <div className={`w-12 h-12 rounded-lg ${config.color.split(" ")[0]} flex items-center justify-center flex-shrink-0 border ${config.color.split(" ")[2]}`}>
                      <TypeIcon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-gray-900">{decision.action}</h3>
                        <span className={`px-2 py-0.5 rounded text-xs font-medium border ${config.color}`}>
                          {config.label}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {decision.timestamp}
                        </span>
                        <span>{decision.id}</span>
                        {decision.impactedItems > 1 && (
                          <span className="flex items-center gap-1">
                            <FileText className="w-3.5 h-3.5" />
                            {decision.impactedItems} items
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Confidence Score */}
                  <div className="text-right ml-4">
                    <div className="text-sm text-gray-600 mb-1">Confidence</div>
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${decision.confidence}%` }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          className={`h-full rounded-full ${
                            decision.confidence >= 98
                              ? "bg-gradient-to-r from-[#84cc16] to-[#65a30d]"
                              : "bg-gradient-to-r from-blue-500 to-blue-600"
                          }`}
                        />
                      </div>
                      <span className="text-sm font-semibold text-gray-900">{decision.confidence}%</span>
                    </div>
                  </div>
                </div>

                {/* Rationale - Explainability Panel */}
                <div className="bg-gradient-to-r from-gray-50 to-white rounded-lg p-4 border border-gray-200 mb-4">
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-purple-600 text-xs font-semibold">?</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold text-gray-900 mb-1">Why this decision was made:</h4>
                      <p className="text-sm text-gray-700 leading-relaxed">{decision.rationale}</p>
                    </div>
                  </div>
                </div>

                {/* Outcome */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ArrowRightLeft className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">Outcome:</span>
                    <span className="text-sm font-medium text-gray-900">{decision.outcome}</span>
                  </div>
                  <button className="text-sm text-[#84cc16] hover:text-[#65a30d] font-medium">
                    View Details
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* AI CFO Principles */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="bg-white rounded-xl p-6 border border-gray-200"
        style={{ boxShadow: "var(--shadow-md)" }}
      >
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center flex-shrink-0">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 mb-3">AI CFO Operating Principles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#84cc16] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Transparency First</p>
                    <p className="text-xs text-gray-600">Every decision includes full rationale and explainability</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#84cc16] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Policy Enforcement</p>
                    <p className="text-xs text-gray-600">Automated enforcement of company policies without exceptions</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#84cc16] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Human Escalation</p>
                    <p className="text-xs text-gray-600">Complex cases automatically escalated to appropriate managers</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#84cc16] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Guaranteed Execution</p>
                    <p className="text-xs text-gray-600">Settlement batches executed on schedule, every time</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#84cc16] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Audit Trail</p>
                    <p className="text-xs text-gray-600">Complete decision log maintained for compliance and audits</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#84cc16] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Continuous Learning</p>
                    <p className="text-xs text-gray-600">Adapts to company patterns while maintaining policy compliance</p>
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
