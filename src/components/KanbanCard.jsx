import styles from "./KanbanCard.module.css";
import { useState } from "react";
import expand from "../assets/expand_more.svg";
import expand2 from "../assets/expand_less.svg";
function KanbanCard({ title, description, onDelete, onMoveLeft, onMoveRight }) {
  const [showDescription, setShowDescription] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className={styles.card}>
      <div className={styles.text}>
        <h1>Titulo</h1>
        <button onClick={() => setShowDescription(!showDescription)}>
          {showDescription ? "Esconder descrição" : "Ler descrição"}
          <img src={showDescription ? expand2 : expand} />
        </button>
        {showDescription && <p>Penis</p>}
      </div>
      <div className={styles.buttons}>
        <span className={styles.menu}>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="2vh"
              viewBox="0 0 24 24"
              width="1vw"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
            </svg>
          </button>
        </span>
        <span className={styles.arrow}>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="3vh"
              viewBox="0 0 24 24"
              width="1.2vw"
              fill="#ffffff"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M10.02 6L8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z" />
            </svg>
          </button>
        </span>
      </div>
    </div>
  );
}

export default KanbanCard;
