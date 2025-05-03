import styles from "./Kanban.module.css";
import img from "../assets/addTask.svg";
import KanbanColumn from "./KanbanColumn";

function Kanban({ titulo, showButton = false }) {
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
      <KanbanColumn />
    </div>
  );
}

export default Kanban;
