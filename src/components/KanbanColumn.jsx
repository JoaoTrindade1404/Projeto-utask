import KanbanCard from "./KanbanCard";
import styles from "./KanbanColumn.module.css";

function KanbanColumn({ columnId, cards, moveCard, deleteTask, user, darkMode }) {
  console.log(user)
  const cardsFiltro = cards.filter((card) => card.column === columnId);
  return (
    <div className={`${styles.column} ${darkMode ? styles.dark : styles.light}`}>
      {cardsFiltro.map((card) => (
        <KanbanCard
          onMoveLeft={() => moveCard(card.id, "esquerda")}
          onMoveRight={() => moveCard(card.id, "direita")}
          key={card.id}
          title={card.title}
          description={card.description}
          columnId={columnId}
          deleteTask={(deleteTask)}
          cardId={card.id}
          user = {user}
          darkMode={darkMode}
        />
      ))}
    </div>
  );
}

export default KanbanColumn;
