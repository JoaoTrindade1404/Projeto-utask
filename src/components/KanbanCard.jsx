import styles from "./KanbanCard.module.css";
import { useState } from "react";
import expand from "../assets/expand_more.svg";
import expand2 from "../assets/expand_less.svg";
function KanbanCard({ title, description, onDelete, onMoveLeft, onMoveRight,columnId}) {
  const [showDescription, setShowDescription] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cor, setCor] = useState('#000000');
  const mudarCor = () => {
    setCor(prev => (prev === '#000000' ? '#226ED8' : '#000000'))
  };
  return (
    <div className={styles.card}>
      <div className={styles.text}>
        <h1>{title}</h1>
        <button onClick={() => setShowDescription(!showDescription)}>
          {showDescription ? "Esconder descrição" : "Ler descrição"}
          <img src={showDescription ? expand2 : expand} />
        </button>
        {showDescription && <p>{description}</p>}
      </div>
      <div className={styles.buttons}>
        <span className={styles.menu}>
          <button onClick={() => {mudarCor(); setMenuOpen(!menuOpen)}}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="2vh"
              viewBox="0 0 24 24"
              width="1vw"
              fill={cor}
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
            </svg>
          </button>
          {menuOpen && <span className={styles.excluir}><svg xmlns="http://www.w3.org/2000/svg" height="3vh" viewBox="0 0 24 24" width="2vw" fill="#DF0000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"/></svg>Excluir</span>}
        </span>
        {columnId === 'doing' && <span className={styles.arrowBack}>
          <button onClick={onMoveLeft}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#226ED8"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.61 7.41L14.2 6l-6 6 6 6 1.41-1.41L11.03 12l4.58-4.59z"/></svg>
          </button>
          </span>}
        <span className={styles.arrow}>
          <button onClick={onMoveRight}>
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
