import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Club} from "lucide-react";

export default function GameCard({ card, onClick }: { card: any; onClick: () => void }) {
  return (
    <Card
      className={`
        aspect-square cursor-pointer transition-all duration-500 transform hover:scale-105 rounded-2xl overflow-hidden border
        ${
          card.isMatched
            ? "bg-gradient-to-br bg-emerald-600 to-teal-400/30 border-emerald-500 shadow-emerald-600 shadow-lg"
            : card.isFlipped
            ? "bg-gradient-to-br from-purple-300/20 to-indigo-400/30 border-purple-300/40"
            : "bg-gradient-to-br hover:border-indigo-300/30"
        }
      `}
      onClick={onClick}
    >
      <div className="w-full h-full flex items-center justify-center relative overflow-hidden rounded-2xl">
        {card.isFlipped || card.isMatched ? (
          <Image
            src={card.symbol}
            alt={card.name || "Card"}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center  rounded-xl">
            <Club className="w-5 h-5 text-cyan-500" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 hover:opacity-100 rounded-2xl pointer-events-none" />
      </div>
    </Card>
  );
}
