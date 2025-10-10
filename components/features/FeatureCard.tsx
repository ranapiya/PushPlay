import { Card } from "@/components/ui/card"

interface FeatureCardProps {
  emoji: string
  title: string
  description: string
  gradient: string
  hoverShadow: string
}

export default function FeatureCard({
  emoji,
  title,
  description,
  gradient,
  hoverShadow,
}: FeatureCardProps) {
  return (
<Card
  className={`group relative overflow-hidden ${gradient} backdrop-blur-md bg-black/30 border border-white/10 p-8 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl ${hoverShadow} rounded-2xl hover:border-white/20`}
>
      {/* Optional glowing layer */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl scale-105"></div>
      
      <div className="relative z-10">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
          <span className="text-2xl">{emoji}</span>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2 text-center">{title}</h3>
        <p className="text-white/60 text-sm text-center leading-relaxed">{description}</p>
      </div>
    </Card>
  )
}
