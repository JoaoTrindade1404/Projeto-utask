import KanbanCard from "./KanbanCard";
import styles from "./KanbanColumn.module.css";

function KanbanColumn({ columnId, cards, moveCard, title, description }) {
  const cardsFiltro = cards.filter((card) => card.column === columnId);
  return (
    <div className={styles.column}>
      {cardsFiltro.map((card) => (
        <KanbanCard
          onMoveLeft={() => moveCard(card.id, "esquerda")}
          onMoveRight={() => moveCard(card.id, "direita")}
          key={card.id}
          title={card.title}
          description={card.description}
          columnId={columnId}
        />
      ))}
    </div>
  );
}

export default KanbanColumn;
