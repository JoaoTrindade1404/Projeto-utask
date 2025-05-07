import Header from "./Header";
import logo from "../assets/Logo branca.svg";
import utask from "../assets/uTask 3.0.svg";
import styles from "./KanbanPage.module.css";
import KanbanApi from "./KanbanApi";
import KanbanFooter from "./KanbanFooter";
import Kanban from "./Kanban";
import { useState } from "react";

function KanbanPage({ darkMode, toggleTheme }) {
  const [cards, setCard] = useState([
    {
      id: 1,
      title: "Titulo",
      description: "Descricao",
      column: "todo",
    },
    {
      id: 2,
      title: "Titulo2",
      description: "Descricao2",
      column: "todo",
    },
    {
      id: 3,
      title: "Titulo3",
      description: "Descricao3",
      column: "done",
    },
  ]);
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
          else novaColuna = card.column;

          return { ...card, column: novaColuna };
        }
        return card;
      })
    );
  }
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
        <KanbanApi />
      </span>
      <span className={styles.kanbanContainer}>
        <Kanban
          titulo="A fazer"
          columnId="todo"
          moveCard={moveCard}
          cards={cards}
          showButton={true}
        />
        <Kanban
          titulo="Em andamento"
          columnId="doing"
          moveCard={moveCard}
          cards={cards}
        />
        <Kanban
          titulo="Feito"
          columnId="done"
          cards={cards}
          moveCard={moveCard}
        />
      </span>
      <KanbanFooter />
    </div>
  );
}

export default KanbanPage;
