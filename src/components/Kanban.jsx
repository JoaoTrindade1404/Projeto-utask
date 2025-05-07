import styles from "./Kanban.module.css";
import img from "../assets/addTask.svg";
import KanbanColumn from "./KanbanColumn";

function Kanban({ titulo, showButton = false, columnId, cards, moveCard}) {
  return (
    <div className={styles.kanban}>
      <span className={styles.title}>
        <h1>{titulo}</h1>
        {showButton && (
          <button>
            <img src={img} />
          </button>
        )}
      </span>
      <KanbanColumn columnId={columnId} cards = {cards} moveCard={moveCard}/>
    </div>
  );
}

export default Kanban;
