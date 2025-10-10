import FeatureCard from "./FeatureCard";

export default function FeaturesGrid() {
  return (
    <div className="grid md:grid-cols-3 gap-8 mt-10 max-w-6xl mx-auto px-4">
      <FeatureCard
        emoji="🧠"
        title="Cognitive Mastery"
        description="Challenge your mind with unique cards that test your memory and adaptability in dynamic arenas."
        gradient="bg-gradient-to-br from-indigo-600/20 via-purple-700/10 to-violet-800/10"
        hoverShadow="hover:shadow-purple-600/30"
      />
      <FeatureCard
        emoji="⚡"
        title="Lightning Reflexes"
        description="Race against the clock to secure leaderboard glory with pixel-perfect precision and speed."
        gradient="bg-gradient-to-br from-yellow-700/20 via-orange-800/10 to-red-900/10"
        hoverShadow="hover:shadow-yellow-400/20"
      />
      <FeatureCard
        emoji="🏆"
        title="On-Chain Champions"
        description="Connect your wallet and etch your name in memory history—secured on-chain for all to admire."
        gradient="bg-gradient-to-br from-teal-400/20 via-emerald-500/10 to-green-600/10"
        hoverShadow="hover:shadow-emerald-400/20"
      />
    </div>
  );
}
