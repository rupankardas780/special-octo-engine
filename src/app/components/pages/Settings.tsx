import { Shield, Users, Calendar, ArrowRightLeft, Lock, CheckCircle, AlertCircle, Eye } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

type SettingsTab = "policies" | "approvals" | "settlement" | "delegation" | "trust";

export function Settings() {
  const [activeTab, setActiveTab] = useState<SettingsTab>("policies");

  const tabs = [
    { id: "policies" as const, label: "Policies", icon: Shield },
    { id: "approvals" as const, label: "Approval Rules", icon: CheckCircle },
    { id: "settlement" as const, label: "Settlement Windows", icon: Calendar },
    { id: "delegation" as const, label: "UPI Delegation", icon: ArrowRightLeft },
    { id: "trust" as const, label: "Trust Controls", icon: Lock },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-semibold text-gray-900">Settings</h1>
        <p className="text-gray-600 mt-1">
          Configure policies, approval rules, settlement windows, and trust controls
        </p>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden" style={{ boxShadow: "var(--shadow-sm)" }}>
        <div className="flex border-b border-gray-200 overflow-x-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-4 whitespace-nowrap transition-colors relative ${
                  activeTab === tab.id
                    ? "text-[#4d7c0f]"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="font-medium">{tab.label}</span>
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#84cc16]"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        <div className="p-6">
          {activeTab === "policies" && <PoliciesTab />}
          {activeTab === "approvals" && <ApprovalsTab />}
          {activeTab === "settlement" && <SettlementTab />}
          {activeTab === "delegation" && <DelegationTab />}
          {activeTab === "trust" && <TrustTab />}
        </div>
      </div>
    </div>
  );
}

function PoliciesTab() {
  const policies = [
    {
      id: "POL-001",
      name: "Marketing Expense Policy",
      description: "Advertising, events, and design expenses",
      rules: ["Max ₹20,000 auto-approval", "Requires receipt", "Pre-approval for >₹50,000"],
      status: "active",
      appliedTo: 3,
    },
    {
      id: "POL-002",
      name: "Travel Policy",
      description: "Business travel and accommodation",
      rules: ["Flight: Economy class only", "Hotel: ₹5,000/night max", "Pre-approval required"],
      status: "active",
      appliedTo: 5,
    },
    {
      id: "POL-003",
      name: "Software Subscription Policy",
      description: "SaaS tools and licenses",
      rules: ["Annual subscriptions only", "Manager approval >₹30,000", "IT verification required"],
      status: "active",
      appliedTo: 2,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-600">Define expense policies with automatic enforcement</p>
        <button className="px-4 py-2 bg-gradient-to-r from-[#84cc16] to-[#65a30d] text-white rounded-lg hover:from-[#65a30d] hover:to-[#4d7c0f] transition-all">
          Create Policy
        </button>
      </div>

      <div className="space-y-4">
        {policies.map((policy, index) => (
          <motion.div
            key={policy.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-semibold text-gray-900">{policy.name}</h3>
                  <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded text-xs font-medium">
                    {policy.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{policy.description}</p>
                <p className="text-xs text-gray-500 mt-1">Applied to {policy.appliedTo} virtual cards</p>
              </div>
              <button className="text-sm text-[#84cc16] hover:text-[#65a30d] font-medium">
                Edit
              </button>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-gray-900 mb-2">Policy Rules:</h4>
              <ul className="space-y-1">
                {policy.rules.map((rule, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-[#84cc16] mt-0.5 flex-shrink-0" />
                    {rule}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-[#f7fee7] to-[#ecfccb] rounded-lg p-4 border border-[#d9f99d]">
        <div className="flex items-start gap-3">
          <Shield className="w-5 h-5 text-[#4d7c0f] mt-0.5" />
          <div>
            <h4 className="font-semibold text-[#4d7c0f] mb-1">Policy Enforcement Guardrails</h4>
            <p className="text-sm text-[#4d7c0f]">
              All policies are enforced automatically by AI CFO. Employees cannot submit expenses that violate policy rules.
              Changes to policies apply immediately to all future submissions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ApprovalsTab() {
  const approvalRules = [
    {
      id: "APPR-001",
      condition: "Amount ≤ ₹20,000",
      action: "Auto-approve (AI CFO)",
      approver: "System",
      active: true,
    },
    {
      id: "APPR-002",
      condition: "Amount > ₹20,000 and ≤ ₹50,000",
      action: "Manager approval required",
      approver: "Direct Manager",
      active: true,
    },
    {
      id: "APPR-003",
      condition: "Amount > ₹50,000",
      action: "Finance team + Manager approval",
      approver: "CFO + Manager",
      active: true,
    },
    {
      id: "APPR-004",
      condition: "Missing receipt",
      action: "Block submission",
      approver: "System",
      active: true,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-600">Configure approval workflows and thresholds</p>
        <button className="px-4 py-2 bg-gradient-to-r from-[#84cc16] to-[#65a30d] text-white rounded-lg hover:from-[#65a30d] hover:to-[#4d7c0f] transition-all">
          Add Rule
        </button>
      </div>

      <div className="space-y-3">
        {approvalRules.map((rule, index) => (
          <motion.div
            key={rule.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-all"
          >
            <div className="flex items-center gap-4 flex-1">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <span className="text-blue-600 font-semibold text-sm">{index + 1}</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">IF {rule.condition}</p>
                <p className="text-xs text-gray-600 mt-1">THEN {rule.action}</p>
              </div>
              <div className="text-right mr-4">
                <p className="text-sm font-medium text-gray-900">{rule.approver}</p>
                <p className="text-xs text-gray-500">Approver</p>
              </div>
              <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                rule.active ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"
              }`}>
                {rule.active ? "Active" : "Inactive"}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
        <div className="flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
          <div>
            <h4 className="font-semibold text-blue-900 mb-1">Approval Flow Preview</h4>
            <p className="text-sm text-blue-800">
              Rules are evaluated in order. First matching rule determines the approval workflow.
              AI CFO handles auto-approvals instantly, while manual approvals are routed to designated approvers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SettlementTab() {
  return (
    <div className="space-y-6">
      <p className="text-sm text-gray-600">Configure when settlements are executed</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="border border-gray-200 rounded-lg p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#84cc16] to-[#65a30d] flex items-center justify-center">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900">Settlement Frequency</h3>
          </div>
          <div className="space-y-3">
            <label className="flex items-center gap-3 p-3 border-2 border-[#84cc16] rounded-lg bg-[#f7fee7]">
              <input type="radio" name="frequency" defaultChecked className="w-4 h-4 text-[#84cc16]" />
              <div>
                <p className="font-medium text-gray-900">Weekly (Fridays)</p>
                <p className="text-xs text-gray-600">Recommended for most companies</p>
              </div>
            </label>
            <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
              <input type="radio" name="frequency" className="w-4 h-4 text-[#84cc16]" />
              <div>
                <p className="font-medium text-gray-900">Bi-weekly (1st & 15th)</p>
                <p className="text-xs text-gray-600">Better cash flow control</p>
              </div>
            </label>
            <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
              <input type="radio" name="frequency" className="w-4 h-4 text-[#84cc16]" />
              <div>
                <p className="font-medium text-gray-900">Monthly (Last Friday)</p>
                <p className="text-xs text-gray-600">Maximum cash optimization</p>
              </div>
            </label>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="border border-gray-200 rounded-lg p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
              <Clock className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900">Execution Time</h3>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Settlement Time</label>
              <select className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#84cc16]">
                <option>2:30 PM IST</option>
                <option>12:00 PM IST</option>
                <option>4:00 PM IST</option>
                <option>5:00 PM IST</option>
              </select>
              <p className="text-xs text-gray-500 mt-1">UPI Circle transfers initiated at this time</p>
            </div>
            <div className="bg-[#f7fee7] rounded-lg p-3 border border-[#d9f99d]">
              <p className="text-sm text-[#4d7c0f]">
                <strong>Next settlement:</strong> Friday, Jan 10, 2026 at 2:30 PM
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5" />
          <div>
            <h4 className="font-semibold text-amber-900 mb-1">Settlement Window Changes</h4>
            <p className="text-sm text-amber-800">
              Changes to settlement windows take effect from the next scheduled settlement.
              All pending tokens will be settled according to the current schedule.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DelegationTab() {
  return (
    <div className="space-y-6">
      <p className="text-sm text-gray-600">Configure UPI Circle delegation for automated settlements</p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="border border-gray-200 rounded-lg p-6"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
            <ArrowRightLeft className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">UPI Circle Integration</h3>
            <p className="text-sm text-gray-600">Automated settlement execution via delegated UPI transfers</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <div>
                <p className="font-medium text-gray-900">UPI Circle Connected</p>
                <p className="text-sm text-gray-600">Primary Account: corp@oksbi</p>
              </div>
            </div>
            <button className="text-sm text-[#84cc16] hover:text-[#65a30d] font-medium">
              Update
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border border-gray-200 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Daily Limit</h4>
              <p className="text-2xl font-semibold text-gray-900 mb-1">₹5,00,000</p>
              <p className="text-sm text-gray-600">Per settlement batch</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Monthly Limit</h4>
              <p className="text-2xl font-semibold text-gray-900 mb-1">₹20,00,000</p>
              <p className="text-sm text-gray-600">Total settlements</p>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
        <div className="flex items-start gap-3">
          <Eye className="w-5 h-5 text-blue-600 mt-0.5" />
          <div>
            <h4 className="font-semibold text-blue-900 mb-1">How UPI Circle Delegation Works</h4>
            <p className="text-sm text-blue-800 mb-2">
              UPI Circle allows CORPAY to execute settlements on your behalf with your consent:
            </p>
            <ul className="space-y-1 text-sm text-blue-800 ml-4">
              <li>• You maintain full control and can revoke delegation anytime</li>
              <li>• All transfers are logged and auditable in real-time</li>
              <li>• Settlement limits protect against unauthorized transfers</li>
              <li>• AI CFO validates every batch before execution</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function TrustTab() {
  return (
    <div className="space-y-6">
      <p className="text-sm text-gray-600">Configure trust controls and security settings</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="border border-gray-200 rounded-lg p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#84cc16] to-[#65a30d] flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900">Trust Score</h3>
          </div>
          <div className="mb-4">
            <div className="text-4xl font-semibold text-gray-900 mb-1">98</div>
            <div className="text-sm text-[#4d7c0f] font-medium">Excellent</div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Policy Compliance</span>
              <span className="font-semibold text-gray-900">100%</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">On-time Settlements</span>
              <span className="font-semibold text-gray-900">100%</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Receipt Quality</span>
              <span className="font-semibold text-gray-900">94%</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="border border-gray-200 rounded-lg p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
              <Lock className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900">Security Controls</h3>
          </div>
          <div className="space-y-3">
            <label className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
              <span className="text-sm text-gray-700">Require receipt for all expenses</span>
              <input type="checkbox" defaultChecked className="w-4 h-4 text-[#84cc16]" />
            </label>
            <label className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
              <span className="text-sm text-gray-700">Enforce category restrictions</span>
              <input type="checkbox" defaultChecked className="w-4 h-4 text-[#84cc16]" />
            </label>
            <label className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
              <span className="text-sm text-gray-700">Block duplicate submissions</span>
              <input type="checkbox" defaultChecked className="w-4 h-4 text-[#84cc16]" />
            </label>
          </div>
        </motion.div>
      </div>

      <div className="bg-gradient-to-r from-[#f7fee7] to-[#ecfccb] rounded-lg p-6 border border-[#d9f99d]">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
            <Shield className="w-6 h-6 text-[#4d7c0f]" />
          </div>
          <div>
            <h3 className="font-semibold text-[#4d7c0f] mb-2">Trust & Safety Commitment</h3>
            <p className="text-sm text-[#4d7c0f] mb-3">
              CORPAY is built on a foundation of guaranteed settlements and transparent operations:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#4d7c0f] mt-0.5 flex-shrink-0" />
                <p className="text-sm text-[#4d7c0f]">Every token is immutable and company-backed</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#4d7c0f] mt-0.5 flex-shrink-0" />
                <p className="text-sm text-[#4d7c0f]">Settlement dates are guaranteed, not estimates</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#4d7c0f] mt-0.5 flex-shrink-0" />
                <p className="text-sm text-[#4d7c0f]">Full audit trail for compliance and transparency</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#4d7c0f] mt-0.5 flex-shrink-0" />
                <p className="text-sm text-[#4d7c0f]">No PII collection, no wallet, no credit risk</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
