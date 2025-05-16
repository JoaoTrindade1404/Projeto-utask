import { useState } from "react";
import styles from './AddTask.module.css'

function AddTask({darkMode, createTask, setOverlay}){
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
    return(
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
                            height="2dvh"
                            viewBox="0 0 24 24"
                            width="11dvw"
                            fill="#3867D6"
                          >
                            <path d="M0 0h24v24H0V0z" fill="none" />
                            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
                          </svg>
                        </button>
                      </div>
                      <span className={styles.inputs}>
                        <span className={styles.input}>
                            <label htmlFor="title">
                          <strong>Titulo *</strong>
                        </label>
                        <input className={styles.inputTitle} type="text"  id="title" onChange={(e) => setTitle(e.target.value)}/>
                        </span>
                        <span className={styles.input}>
                        <label htmlFor="desc">
                        <strong>Descrição</strong>
                        </label>
                        <input className={styles.inputDesc} type="text" id="desc" onChange={(e) => setDesc(e.target.value)} />
                        </span>
                      </span>
                      <button className={styles.createTask} onClick={handleCreateTask}>Criar task</button>
                    </div>
                  </div>
    )
}

export default AddTask