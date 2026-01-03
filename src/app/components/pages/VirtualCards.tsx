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
          <h1 className="text-3xl font-semibold text-white drop-shadow-lg">Virtual Cards</h1>
          <p className="text-cyan-300/70 mt-1">
            Company-backed commitment cards with guaranteed settlement
          </p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "var(--shadow-neon-cyan)" }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-white font-semibold transition-all"
          style={{
            background: "linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%)",
            boxShadow: "0 0 20px rgba(0, 212, 255, 0.3)"
          }}
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
              whileHover={{ scale: 1.02, x: 5 }}
              className={`w-full p-4 rounded-xl text-left transition-all backdrop-blur-sm ${
                selectedCard.id === card.id
                  ? "border-2"
                  : "border hover:border-cyan-300/50"
              }`}
              style={{ 
                background: selectedCard.id === card.id 
                  ? "rgba(0, 212, 255, 0.15)" 
                  : "rgba(26, 31, 58, 0.4)",
                borderColor: selectedCard.id === card.id 
                  ? "rgba(0, 212, 255, 0.5)" 
                  : "rgba(0, 212, 255, 0.2)",
                boxShadow: selectedCard.id === card.id ? "var(--shadow-neon-cyan)" : "var(--shadow-sm)" 
              }}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <h3 className="font-semibold text-white">{card.name}</h3>
                  <p className="text-sm text-cyan-300/70 mt-1">{card.holder}</p>
                </div>
                {card.status === "active" ? (
                  <Unlock className="w-4 h-4 text-lime-400" />
                ) : (
                  <Lock className="w-4 h-4 text-gray-400" />
                )}
              </div>
              <div className="flex items-center justify-between mt-3 text-sm">
                <span className="text-cyan-300/70">Tokens</span>
                <span className="font-semibold text-white">
                  {card.tokenUsed}/{card.tokenLimit}
                </span>
              </div>
              <div className="w-full h-1.5 rounded-full mt-2 overflow-hidden" style={{ background: "rgba(0, 0, 0, 0.3)" }}>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(card.tokenUsed / card.tokenLimit) * 100}%` }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className={`h-full rounded-full ${
                    card.tokenUsed / card.tokenLimit > 0.9
                      ? "bg-red-500"
                      : "bg-gradient-to-r from-cyan-400 to-purple-500"
                  }`}
                  style={{ 
                    boxShadow: card.tokenUsed / card.tokenLimit > 0.9 
                      ? "0 0 10px rgba(239, 68, 68, 0.5)"
                      : "0 0 10px rgba(0, 212, 255, 0.5)"
                  }}
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
            {/* Glass Card - Helena Banking Inspired */}
            <motion.div
              whileHover={{ 
                rotateY: 8, 
                rotateX: -5,
                scale: 1.02,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
              transition={{ duration: 0.3 }}
              className="relative w-full aspect-[1.6/1] rounded-3xl overflow-hidden"
              style={{
                transformStyle: "preserve-3d",
                boxShadow: "var(--shadow-neon-cyan), var(--shadow-xl)",
              }}
            >
              {/* Fully Transparent Glassmorphism background */}
              <div
                className="absolute inset-0"
                style={{
                  background: "rgba(26, 31, 58, 0.25)",
                  backdropFilter: "blur(30px)",
                  WebkitBackdropFilter: "blur(30px)",
                }}
              />

              {/* Animated gradient overlay with neon colors */}
              <motion.div
                className="absolute inset-0 opacity-20"
                style={{
                  background: "linear-gradient(135deg, #00d4ff 0%, #7c3aed 50%, #84cc16 100%)",
                  backgroundSize: "200% 200%",
                }}
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Neon border with glow */}
              <div className="absolute inset-0 rounded-3xl" style={{
                border: "1px solid rgba(0, 212, 255, 0.3)",
                boxShadow: "inset 0 0 20px rgba(0, 212, 255, 0.1)",
              }} />

              {/* Card Content */}
              <div className="relative h-full p-8 flex flex-col justify-between">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-sm text-cyan-300/70 mb-1 tracking-wider">CORPAY VIRTUAL CARD</div>
                    <h2 className="text-2xl font-semibold text-white drop-shadow-lg">{selectedCard.name}</h2>
                  </div>
                  {selectedCard.trustBadge && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3, type: "spring" }}
                      className="flex flex-col items-center gap-1 px-3 py-2 rounded-lg backdrop-blur-sm"
                      style={{ 
                        background: "rgba(0, 212, 255, 0.15)",
                        border: "1px solid rgba(0, 212, 255, 0.3)",
                        boxShadow: "0 0 15px rgba(0, 212, 255, 0.2)"
                      }}
                    >
                      <Shield className="w-5 h-5 text-cyan-300" />
                      <span className="text-xs font-bold text-cyan-300">ASSURED</span>
                    </motion.div>
                  )}
                </div>

                {/* Card Number */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm text-cyan-300/70">Card Reference</span>
                    <button
                      onClick={() => setShowCardNumber(!showCardNumber)}
                      className="p-1 hover:bg-white/10 rounded transition-colors"
                    >
                      <Eye className="w-4 h-4 text-cyan-300" />
                    </button>
                  </div>
                  <div className="text-2xl font-mono tracking-wider text-white drop-shadow-lg">
                    {showCardNumber ? "CORP-" + selectedCard.id.padStart(12, "0") : "CORP-••••-••••"}
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-sm text-cyan-300/70 mb-1">Card Holder</div>
                    <div className="font-semibold text-white drop-shadow-lg">{selectedCard.holder}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-cyan-300/70 mb-1">Status</div>
                    <div className="flex items-center gap-2">
                      {selectedCard.status === "active" ? (
                        <>
                          <CheckCircle className="w-4 h-4 text-lime-400" />
                          <span className="font-semibold text-lime-400 drop-shadow-lg">Active</span>
                        </>
                      ) : (
                        <>
                          <Lock className="w-4 h-4 text-gray-400" />
                          <span className="font-semibold text-gray-400">Locked</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Shimmer effect with neon glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent"
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
              className="rounded-xl p-6 border backdrop-blur-sm"
              style={{ 
                background: "rgba(26, 31, 58, 0.4)",
                borderColor: "rgba(0, 212, 255, 0.2)",
                boxShadow: "var(--shadow-md)" 
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center" style={{ boxShadow: "0 0 15px rgba(0, 212, 255, 0.3)" }}>
                  <Coins className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-semibold text-white">Token Limit</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-cyan-300/70">Used</span>
                  <span className="font-semibold text-white">{selectedCard.tokenUsed} tokens</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-cyan-300/70">Available</span>
                  <span className="font-semibold text-lime-400">
                    {selectedCard.tokenLimit - selectedCard.tokenUsed} tokens
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-cyan-300/70">Total Limit</span>
                  <span className="font-semibold text-white">{selectedCard.tokenLimit} tokens</span>
                </div>
                <div className="w-full h-2 rounded-full overflow-hidden mt-3" style={{ background: "rgba(0, 0, 0, 0.3)" }}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${tokenPercentage}%` }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className={`h-full rounded-full ${
                      tokenPercentage > 90
                        ? "bg-gradient-to-r from-red-500 to-red-600"
                        : "bg-gradient-to-r from-cyan-400 to-purple-500"
                    }`}
                    style={{ 
                      boxShadow: tokenPercentage > 90 
                        ? "0 0 10px rgba(239, 68, 68, 0.5)"
                        : "0 0 10px rgba(0, 212, 255, 0.5)"
                    }}
                  />
                </div>
              </div>
            </motion.div>

            {/* Settlement Window */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="rounded-xl p-6 border backdrop-blur-sm"
              style={{ 
                background: "rgba(26, 31, 58, 0.4)",
                borderColor: "rgba(124, 58, 237, 0.3)",
                boxShadow: "var(--shadow-md)" 
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center" style={{ boxShadow: "0 0 15px rgba(124, 58, 237, 0.3)" }}>
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-semibold text-white">Settlement Window</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-cyan-300/70">Frequency</span>
                  <span className="font-semibold text-white">{selectedCard.settlementWindow}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-cyan-300/70">Next Settlement</span>
                  <span className="font-semibold text-white">Jan 10, 2026</span>
                </div>
                <div className="mt-3 p-3 rounded-lg backdrop-blur-sm" style={{
                  background: "rgba(132, 204, 22, 0.15)",
                  border: "1px solid rgba(132, 204, 22, 0.3)"
                }}>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-lime-400" />
                    <span className="text-sm font-medium text-lime-400">
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
              className="md:col-span-2 rounded-xl p-6 border backdrop-blur-sm"
              style={{ 
                background: "rgba(26, 31, 58, 0.4)",
                borderColor: "rgba(0, 212, 255, 0.2)",
                boxShadow: "var(--shadow-md)" 
              }}
            >
              <h3 className="font-semibold text-white mb-4">Allowed Categories</h3>
              <div className="flex flex-wrap gap-2">
                {selectedCard.categories.map((category) => (
                  <span
                    key={category}
                    className="px-3 py-1.5 rounded-lg text-sm font-medium backdrop-blur-sm"
                    style={{
                      background: "rgba(0, 212, 255, 0.15)",
                      color: "#00d4ff",
                      border: "1px solid rgba(0, 212, 255, 0.3)"
                    }}
                  >
                    {category}
                  </span>
                ))}
              </div>
              <p className="text-sm text-cyan-300/70 mt-4">
                This is a <strong className="text-white">commitment card</strong>, not a payment card. Expenses are tokenized immediately
                and settled via company-backed UPI Circle transfers on the scheduled date.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
