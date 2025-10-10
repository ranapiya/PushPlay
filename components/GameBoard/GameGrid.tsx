// components/GameBoard/GameGrid.tsx
import GameCard from "./GameCard";

export default function GameGrid({
  cards,
  onCardClick,
  CardComponent = GameCard
}: {
  cards: any[];
  onCardClick: (id: number) => void;
  CardComponent?: any;
}) {
  return (
    <div className="grid grid-cols-4 gap-4">
      {cards.map((card) => (
        <CardComponent key={card.id} card={card} onClick={() => onCardClick(card.id)} />
      ))}
    </div>
  );
}
