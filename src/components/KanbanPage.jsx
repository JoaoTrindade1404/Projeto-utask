import Header from "./Header";
import logo from "../assets/Logo branca.svg";
import utask from "../assets/uTask 3.0.svg";
import styles from "./KanbanPage.module.css";
import KanbanApi from "./KanbanApi";
import KanbanFooter from "./KanbanFooter";
import Kanban from "./Kanban";
import { useEffect, useState } from "react";
import api from "../api";

function KanbanPage({ darkMode, toggleTheme, user }) {
  console.log(user)
  const [cards, setCard] = useState([]);
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
            novaColuna = "todo"
          else novaColuna = card.column;

          return { ...card, column: novaColuna };
        }
        return card;
      }) 
    );
  }
  const createTask = async (task) => {
    const userResponse = await api.get(`/users/${user.id}`);

    const newTask = {
      id: userResponse.data.tasks.length + 1,
      ...task,
    };

    userResponse.data.tasks.push(newTask);
    await api.put(`/users/${user.id}`, userResponse.data);

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
          setCard(response.data.tasks); 
        }
      } catch (error) {
        console.error("Erro ao carregar as tasks:", error);
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
      <span className={styles.api}>
        <KanbanApi darkMode={darkMode}/>
      </span>
      <span className={styles.kanbanContainer}>
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
      </span>
      <KanbanFooter darkMode={darkMode}/>
    </div>
  );
}

export default KanbanPage;
