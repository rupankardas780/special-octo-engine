import { Shield, Lock, Unlock, Eye, Calendar, Coins, CheckCircle, Plus } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

interface Card {
  id: string;
  name: string;
  holder: string;
  tokenLimit: number;
  tokenUsed: number;
  categories: string[];
  settlementWindow: string;
  status: "active" | "locked";
  trustBadge: boolean;
}

const mockCards: Card[] = [
  {
    id: "1",
    name: "Marketing Expenses",
    holder: "Priya Patel",
    tokenLimit: 500,
    tokenUsed: 342,
    categories: ["Advertising", "Events", "Design"],
    settlementWindow: "Weekly - Fridays",
    status: "active",
    trustBadge: true,
  },
  {
    id: "2",
    name: "Travel & Transport",
    holder: "Amit Kumar",
    tokenLimit: 300,
    tokenUsed: 156,
    categories: ["Travel", "Accommodation", "Fuel"],
    settlementWindow: "Weekly - Fridays",
    status: "active",
    trustBadge: true,
  },
  {
    id: "3",
    name: "Office Supplies",
    holder: "Sneha Desai",
    tokenLimit: 200,
    tokenUsed: 198,
    categories: ["Supplies", "Equipment"],
    settlementWindow: "Bi-weekly - Fridays",
    status: "locked",
    trustBadge: true,
  },
];

export function VirtualCards() {
  const [selectedCard, setSelectedCard] = useState<Card>(mockCards[0]);
  const [showCardNumber, setShowCardNumber] = useState(false);

  const tokenPercentage = (selectedCard.tokenUsed / selectedCard.tokenLimit) * 100;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-gray-900">Virtual Cards</h1>
          <p className="text-gray-600 mt-1">
            Company-backed commitment cards with guaranteed settlement
          </p>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#84cc16] to-[#65a30d] text-white rounded-lg hover:from-[#65a30d] hover:to-[#4d7c0f] transition-all"
        >
          <Plus className="w-4 h-4" />
          Create New Card
        </motion.button>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Card List */}
        <div className="space-y-3">
          {mockCards.map((card) => (
            <motion.button
              key={card.id}
              onClick={() => setSelectedCard(card)}
              whileHover={{ scale: 1.02 }}
              className={`w-full p-4 rounded-xl text-left transition-all ${
                selectedCard.id === card.id
                  ? "bg-gradient-to-br from-[#f7fee7] to-[#ecfccb] border-2 border-[#84cc16]"
                  : "bg-white border border-gray-200 hover:border-gray-300"
              }`}
              style={{ boxShadow: selectedCard.id === card.id ? "var(--shadow-lime)" : "var(--shadow-sm)" }}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{card.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{card.holder}</p>
                </div>
                {card.status === "active" ? (
                  <Unlock className="w-4 h-4 text-[#84cc16]" />
                ) : (
                  <Lock className="w-4 h-4 text-gray-400" />
                )}
              </div>
              <div className="flex items-center justify-between mt-3 text-sm">
                <span className="text-gray-600">Tokens</span>
                <span className="font-semibold text-gray-900">
                  {card.tokenUsed}/{card.tokenLimit}
                </span>
              </div>
              <div className="w-full h-1.5 bg-gray-200 rounded-full mt-2 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(card.tokenUsed / card.tokenLimit) * 100}%` }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className={`h-full rounded-full ${
                    card.tokenUsed / card.tokenLimit > 0.9
                      ? "bg-red-500"
                      : "bg-gradient-to-r from-[#84cc16] to-[#65a30d]"
                  }`}
                />
              </div>
            </motion.button>
          ))}
        </div>

        {/* 3D Card Display */}
        <div className="lg:col-span-2">
          <motion.div
            key={selectedCard.id}
            initial={{ opacity: 0, rotateY: -20 }}
            animate={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
            style={{ perspective: "1000px" }}
          >
            {/* Glass Card */}
            <motion.div
              whileHover={{ rotateY: 5, rotateX: -5 }}
              transition={{ duration: 0.3 }}
              className="relative w-full aspect-[1.6/1] rounded-2xl overflow-hidden"
              style={{
                transformStyle: "preserve-3d",
                boxShadow: "var(--shadow-xl), var(--shadow-lime)",
              }}
            >
              {/* Glassmorphism background */}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(247,254,231,0.95) 100%)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                }}
              />

              {/* Animated gradient overlay */}
              <motion.div
                className="absolute inset-0 opacity-30"
                style={{
                  background: "linear-gradient(135deg, #84cc16 0%, #65a30d 50%, #4d7c0f 100%)",
                }}
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />

              {/* Border */}
              <div className="absolute inset-0 rounded-2xl border border-[#84cc16]/30" />

              {/* Card Content */}
              <div className="relative h-full p-8 flex flex-col justify-between">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">CORPAY Virtual Card</div>
                    <h2 className="text-2xl font-semibold text-gray-900">{selectedCard.name}</h2>
                  </div>
                  {selectedCard.trustBadge && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3, type: "spring" }}
                      className="flex flex-col items-center gap-1 px-3 py-2 bg-white/80 rounded-lg backdrop-blur-sm"
                      style={{ boxShadow: "var(--shadow-sm)" }}
                    >
                      <Shield className="w-5 h-5 text-[#84cc16]" />
                      <span className="text-xs font-semibold text-[#4d7c0f]">ASSURED</span>
                    </motion.div>
                  )}
                </div>

                {/* Card Number */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm text-gray-600">Card Reference</span>
                    <button
                      onClick={() => setShowCardNumber(!showCardNumber)}
                      className="p-1 hover:bg-white/50 rounded transition-colors"
                    >
                      <Eye className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                  <div className="text-2xl font-mono tracking-wider text-gray-900">
                    {showCardNumber ? "CORP-" + selectedCard.id.padStart(12, "0") : "CORP-••••-••••"}
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Card Holder</div>
                    <div className="font-semibold text-gray-900">{selectedCard.holder}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600 mb-1">Status</div>
                    <div className="flex items-center gap-2">
                      {selectedCard.status === "active" ? (
                        <>
                          <CheckCircle className="w-4 h-4 text-[#84cc16]" />
                          <span className="font-semibold text-[#4d7c0f]">Active</span>
                        </>
                      ) : (
                        <>
                          <Lock className="w-4 h-4 text-gray-400" />
                          <span className="font-semibold text-gray-600">Locked</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                initial={{ x: "-100%" }}
                animate={{ x: "200%" }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
              />
            </motion.div>
          </motion.div>

          {/* Card Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            {/* Token Limit */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl p-6 border border-gray-200"
              style={{ boxShadow: "var(--shadow-md)" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#84cc16] to-[#65a30d] flex items-center justify-center">
                  <Coins className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900">Token Limit</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Used</span>
                  <span className="font-semibold text-gray-900">{selectedCard.tokenUsed} tokens</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Available</span>
                  <span className="font-semibold text-[#84cc16]">
                    {selectedCard.tokenLimit - selectedCard.tokenUsed} tokens
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Total Limit</span>
                  <span className="font-semibold text-gray-900">{selectedCard.tokenLimit} tokens</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mt-3">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${tokenPercentage}%` }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className={`h-full rounded-full ${
                      tokenPercentage > 90
                        ? "bg-gradient-to-r from-red-500 to-red-600"
                        : "bg-gradient-to-r from-[#84cc16] to-[#65a30d]"
                    }`}
                  />
                </div>
              </div>
            </motion.div>

            {/* Settlement Window */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl p-6 border border-gray-200"
              style={{ boxShadow: "var(--shadow-md)" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900">Settlement Window</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Frequency</span>
                  <span className="font-semibold text-gray-900">{selectedCard.settlementWindow}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Next Settlement</span>
                  <span className="font-semibold text-gray-900">Jan 10, 2026</span>
                </div>
                <div className="mt-3 p-3 bg-gradient-to-r from-[#f7fee7] to-[#ecfccb] rounded-lg border border-[#d9f99d]">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#4d7c0f]" />
                    <span className="text-sm font-medium text-[#4d7c0f]">
                      Settlement Guaranteed by Company
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Allowed Categories */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="md:col-span-2 bg-white rounded-xl p-6 border border-gray-200"
              style={{ boxShadow: "var(--shadow-md)" }}
            >
              <h3 className="font-semibold text-gray-900 mb-4">Allowed Categories</h3>
              <div className="flex flex-wrap gap-2">
                {selectedCard.categories.map((category) => (
                  <span
                    key={category}
                    className="px-3 py-1.5 bg-gradient-to-r from-[#f7fee7] to-[#ecfccb] text-[#4d7c0f] rounded-lg text-sm font-medium border border-[#d9f99d]"
                  >
                    {category}
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-4">
                This is a <strong>commitment card</strong>, not a payment card. Expenses are tokenized immediately
                and settled via company-backed UPI Circle transfers on the scheduled date.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
