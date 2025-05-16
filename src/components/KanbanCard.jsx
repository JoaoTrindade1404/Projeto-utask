import styles from "./KanbanCard.module.css";
import { useState } from "react";
import expand from "../assets/expand_more.svg";
import expand2 from "../assets/expand_less.svg";

function KanbanCard({
  title,
  description,
  onMoveLeft,
  onMoveRight,
  columnId,
  deleteTask,
  cardId,
  user,
  darkMode,
}) {
  const [showDescription, setShowDescription] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cor, setCor] = useState("#000000");
  const mudarCor = () => {
    setCor((prev) => (prev === "#000000" ? "#226ED8" : "#000000"));
  };
  return (
    <div className={`${styles.card} ${darkMode ? styles.dark : styles.light}`}>
      <div
        className={`${styles.text} ${darkMode ? styles.dark : styles.light}`}
      >
        <h1>{title}</h1>
        <button
          className={styles.showDesc}
          onClick={() => setShowDescription(!showDescription)}
        >
          {showDescription ? "Esconder descrição" : "Ler descrição"}
          <img src={showDescription ? expand2 : expand} />
        </button>
        {showDescription && <p className={styles.description}>{description}</p>}
      </div>
      <div className={styles.buttons}>
        <span className={styles.menu}>
          <button
            className={styles.menu}
            onClick={() => {
              mudarCor();
              setMenuOpen(!menuOpen);
            }}
          >
            <svg
              className={styles.iconDesk}
              xmlns="http://www.w3.org/2000/svg"
              height="3dvh"
              viewBox="0 0 24 20"
              width="1dvw"
              fill={cor}
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
            </svg>
            <svg
              className={styles.iconMobile}
              xmlns="http://www.w3.org/2000/svg"
              height="2dvh"
              viewBox="0 0 24 20"
              width="5dvw"
              fill={cor}
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
            </svg>
          </button>
          {menuOpen && (
            <span
              onClick={() => deleteTask(user, cardId)}
              className={styles.excluir}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="80%"
                viewBox="0 0 24 24"
                width="3vh"
                fill="#DF0000"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z" />
              </svg>
              Excluir
            </span>
          )}
        </span>
        <span className={styles.arrows}>
          {(columnId === "doing" || columnId === "done") && (
            <span className={styles.arrowBack}>
              <button onClick={onMoveLeft}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="3.5vh"
                  viewBox="0 0 24 20"
                  width="80%"
                  fill="#226ED8"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M15.61 7.41L14.2 6l-6 6 6 6 1.41-1.41L11.03 12l4.58-4.59z" />
                </svg>
              </button>
            </span>
          )}
          <span className={styles.arrow}>
            <button onClick={onMoveRight}>
              {columnId !== "done" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="3dvh"
                  viewBox="0 0 24 20"
                  width="80%"
                  fill="#ffffff"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M10.02 6L8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  height="3dvh"
                  viewBox="0 0 24 20"
                  width="80%"
                  fill="#ffffff"
                >
                  <g>
                    <rect fill="none" height="24" width="24" />
                    <rect fill="none" height="24" width="24" />
                    <rect fill="none" height="24" width="24" />
                  </g>
                  <g>
                    <g />
                    <path d="M12,5V1L7,6l5,5V7c3.31,0,6,2.69,6,6s-2.69,6-6,6s-6-2.69-6-6H4c0,4.42,3.58,8,8,8s8-3.58,8-8S16.42,5,12,5z" />
                  </g>
                </svg>
              )}
            </button>
          </span>
        </span>
      </div>
    </div>
  );
}

export default KanbanCard;
