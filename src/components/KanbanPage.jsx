import Header from "./Header";
import logo from "../assets/Logo branca.svg";
import utask from "../assets/uTask 3.0.svg";
import styles from "./KanbanPage.module.css";
import KanbanApi from "./KanbanApi";
import KanbanFooter from "./KanbanFooter";
import Kanban from "./Kanban";
import lampada from "../assets/lampada.svg";
import lampada2 from "../assets/lampada_dark.svg";
import { useEffect, useState } from "react";
import api from "../api";
import arrow from "../assets/navigate_before.svg";
import arrow2 from "../assets/navigate_next_azul.svg";
import elipse from "../assets/elipse.svg";
import elipse2 from "../assets/elipse2.svg";

function KanbanPage({ darkMode, toggleTheme, user }) {
  const [overlayApi, setOverlayApi] = useState(false);
  const [cards, setCard] = useState([]);
  const [index, setIndex] = useState(0);
  function moveCard(id, direcao) {
    setCard((prevCards) =>
      prevCards.map((card) => {
        if (card.id === id) {
          let novaColuna;

          if (card.column === "todo" && direcao === "direita")
            novaColuna = "doing";
          else if (card.column === "doing" && direcao === "direita")
            novaColuna = "done";
          else if (card.column === "doing" && direcao === "esquerda")
            novaColuna = "todo";
          else if (card.column === "done" && direcao === "esquerda")
            novaColuna = "doing";
          else if (card.column === "done" && direcao === "direita")
            novaColuna = "todo";
          else novaColuna = card.column;

          return { ...card, column: novaColuna };
        }
        return card;
      })
    );
  }
  const createTask = async (task) => {
    const userResponse = await api.get(`/users/${user.id}`);

    const tasks = userResponse.data.tasks || [];

    const newTask = {
      id: tasks.length + 1,
      ...task,
    };

    tasks.push(newTask);
    await api.put(`/users/${user.id}`, { ...userResponse.data, tasks });

    setCard((prevCard) => [...prevCard, newTask]);
  };

  const deleteTask = async (userId, taskId) => {
    try {
      const response = await api.get(`/users/${userId.id}`);
      const user = response.data;

      const updatedTasks = user.tasks.filter((task) => task.id !== taskId);

      await api.patch(`/users/${userId.id}`, {
        tasks: updatedTasks,
      });

      setCard((prev) => prev.filter((task) => task.id !== taskId));
    } catch (err) {
      console.error("Erro ao deletar task:", err);
    }
  };

  useEffect(() => {
    const loadUserTasks = async () => {
      try {
        if (user) {
          const response = await api.get(`/users/${user.id}`);
          setCard(response.data.tasks || []);
        }
      } catch (error) {
        console.error("Erro ao carregar as tasks:", error);
        setCard([]);
      }
    };

    loadUserTasks();
  }, [user]);
  return (
    <div className={styles.kanban}>
      <Header
        darkMode={darkMode}
        toggleTheme={toggleTheme}
        logo={logo}
        utask={utask}
        showLogo={true}
      />
      <button
        onClick={() => setOverlayApi(true)}
        className={`${styles.mobileApi} ${
          darkMode ? styles.dark : styles.light
        }`}
      >
        {" "}
        <img src={darkMode ? lampada2 : lampada} />
        Frase do dia
      </button>
      {overlayApi && (
        <div className={styles.overlayApi}>
          <KanbanApi darkMode={darkMode} overlay={setOverlayApi} />
        </div>
      )}
      <span className={styles.api}>
        <KanbanApi darkMode={darkMode} overlay={setOverlayApi} />
      </span>
      <div className={styles.kanbanMobile}>
        <button
          className={styles.arrow}
          onClick={() => setIndex((index - 1 + 3) % 3)}
        >
          <img src={arrow}></img>
        </button>

        <div className={styles.carousel}>
          {["todo", "doing", "done"].map((columnId, i) => (
            <div
              key={columnId}
              className={`${styles.slide} ${i === index ? styles.active : ""}`}
            >
              <Kanban
                titulo={
                  columnId === "todo"
                    ? "A fazer"
                    : columnId === "doing"
                    ? "Em andamento"
                    : "Feito"
                }
                columnId={columnId}
                moveCard={moveCard}
                cards={cards}
                showButton={columnId === "todo"}
                createTask={createTask}
                deleteTask={deleteTask}
                user={user}
                darkMode={darkMode}
              />
            </div>
          ))}
        </div>
        <button
          className={styles.arrow2}
          onClick={() => setIndex((index + 1) % 3)}
        >
          <img src={arrow2}></img>
        </button>
      </div>
      <div className={styles.indicators}>
        {[0, 1, 2].map((i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`${styles.dot} ${index === i ? styles.activeDot : ""}`}
          >
            <img
              src={index === i ? elipse : elipse2}
              alt={`Ir para slide ${i + 1}`}
            />
          </button>
        ))}
      </div>
      <div className={styles.kanbanContainer}>
        <Kanban
          titulo="A fazer"
          columnId="todo"
          moveCard={moveCard}
          cards={cards}
          showButton={true}
          createTask={createTask}
          deleteTask={deleteTask}
          user={user}
          darkMode={darkMode}
        />
        <Kanban
          titulo="Em andamento"
          columnId="doing"
          moveCard={moveCard}
          cards={cards}
          createTask={createTask}
          deleteTask={deleteTask}
          user={user}
          darkMode={darkMode}
        />
        <Kanban
          titulo="Feito"
          columnId="done"
          cards={cards}
          moveCard={moveCard}
          createTask={createTask}
          deleteTask={deleteTask}
          user={user}
          darkMode={darkMode}
        />
      </div>
      <KanbanFooter darkMode={darkMode} />
    </div>
  );
}

export default KanbanPage;
