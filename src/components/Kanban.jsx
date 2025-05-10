import styles from "./Kanban.module.css";
import img from "../assets/addTask.svg";
import KanbanColumn from "./KanbanColumn";
import { useState } from "react";
import api from "../api"

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
  console.log(user)
  const [overlay, setOverlay] = useState(false);
  const [taskTitle, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleCreateTask = async () => {
    const taskData = {
      title: taskTitle,
      description: desc,
      column: "todo"
    };

    await createTask(taskData);
    setOverlay(false);

  };

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
        {overlay && (
          <div className={`${styles.overlay} ${darkMode ? styles.dark : styles.light}`}>
            <div className={styles.modal}>
              <div className={styles.header}>
                <span>
                  <h1>Nova Task</h1>
                  <div className={styles.underline}></div>
                </span>
                <button
                  onClick={() => setOverlay(false)}
                  className={styles.close}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="2vh"
                    viewBox="0 0 24 24"
                    width="1vw"
                    fill="#3867D6"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
                  </svg>
                </button>
              </div>
              <span className={styles.inputs}>
                <label htmlFor="title">
                  <strong>Titulo *</strong>
                </label>
                <input type="text"  id="title" onChange={(e) => setTitle(e.target.value)}/>
                <label htmlFor="desc">
                  <strong>Descrição</strong>
                </label>
                <input type="text" id="desc" onChange={(e) => setDesc(e.target.value)} />
              </span>
              <button className={styles.createTask} onClick={handleCreateTask}>Criar task</button>
            </div>
          </div>
        )}
      </span>
      <KanbanColumn  darkMode={darkMode} user={user} deleteTask={deleteTask} columnId={columnId} cards={cards} moveCard={moveCard} />
    </div>
  );
}

export default Kanban;
