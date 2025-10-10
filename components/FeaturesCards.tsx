import { motion } from "framer-motion";

const features = [
  "Real-Time Gameplay",
  "On-Chain Scoring",
  "Wallet-Based Identity",
  "Skill-Based Progression",
  "Dynamic Arenas",
  "Leaderboard Ranking",
  "Gasless Matches",
  "Secure Matchmaking",
];

export default function FeaturesCards() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: index * 0.1,
            type: "spring",
            stiffness: 80,
          }}
          whileHover={{
            scale: 1.08,
            rotate: 0.5, // ✅ Only one target value now
            boxShadow: "0 10px 30px rgba(236,72,153,0.3)",
            transition: { type: "tween", duration: 0.2 }, // ✅ Smooth hover effect
          }}
          whileTap={{ scale: 0.97 }}
          className="relative bg-gradient-to-br from-white/10 via-white/5 to-transparent 
                     backdrop-blur-md border border-white/10 
                     rounded-2xl p-4 text-white text-center text-sm sm:text-base
                     shadow-lg hover:border-white/20 transition-all duration-300 cursor-pointer"
        >
          {/* Glow effect on hover */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-pink-500/10 to-purple-500/10 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
          <span className="relative z-10 font-medium">{feature}</span>
        </motion.div>
      ))}
    </div>
  );
}
