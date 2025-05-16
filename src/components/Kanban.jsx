import styles from "./Kanban.module.css";
import img from "../assets/addTask.svg";
import KanbanColumn from "./KanbanColumn";
import { useState } from "react";
import api from "../api"
import AddTask from "./AddTask";

function Kanban({
  titulo,
  showButton = false,
  columnId,
  cards,
  moveCard,
  user,
  createTask,
  deleteTask,
  darkMode
}) {
  const [overlay, setOverlay] = useState(false);

  return (
    <div className={styles.kanban}>
      <span className={styles.title}>
        <h1>{titulo}</h1>
        {showButton && (
          <button
            className={styles.overlayBttn}
            onClick={() => setOverlay(true)}
          >
            <img src={img} />
          </button>
        )}
        {overlay && ( <AddTask darkMode={darkMode} createTask={createTask} setOverlay={setOverlay}/>)}
      </span>
      <KanbanColumn  darkMode={darkMode} user={user} deleteTask={deleteTask} columnId={columnId} cards={cards} moveCard={moveCard} />
    </div>
  );
}

export default Kanban;
