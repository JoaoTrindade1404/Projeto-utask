import styles from "./KanbanApi.module.css";
import axios from "axios";
import icon from "../assets/lampada.svg";
import icon2 from "../assets/lampada_dark.svg";
import { useState, useEffect } from "react";

function KanbanApi({ darkMode, overlay }) {
  const [frase, setFrase] = useState("");
  const [fraseTraduzida, setFraseTraduzida] = useState("");
  const buscarFrase = async () => {
    try {
      const response = await axios.get("https://api.adviceslip.com/advice");
      setFrase(response.data.slip.advice);
    } catch (error) {
      console.error("erro ao buscar a frase", error);
    }
  };
  async function traduzirMensagem(mensagemEmIngles) {
    const params = {
      q: mensagemEmIngles,
      langpair: "en|pt",
    };

    try {
      const r = await axios.get(
        "https://api.mymemory.translated.net/get?q=Hello World!&langpair=en|pt",
        { params }
      );
      const traducao = r.data.responseData.translatedText;
      return traducao;
    } catch (error) {
      console.error("Erro ao traduzir:", error);
      return null;
    }
  }

  useEffect(() => {
    buscarFrase();
  }, []);
  useEffect(() => {
    if (frase) {
      traduzirMensagem(frase).then(setFraseTraduzida);
    }
  }, [frase]);
  return (
    <div
      className={`${styles.apiBox} ${darkMode ? styles.dark : styles.light}`}
    >
      <div className={styles.content}>
        <img src={darkMode ? icon2 : icon} />
        <span className={styles.apiText}>
          <h1>Frase do dia</h1>
          <p className={styles.fraseDesktop}>{fraseTraduzida}</p>
        </span>
        <button onClick={() => overlay(false)} className={styles.close}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="50%"
            viewBox="0 0 24 24"
            width="50%"
            fill="#3867D6"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
          </svg>
        </button>
      </div>
      <span className={styles.fraseMobile}>{fraseTraduzida}</span>
    </div>
  );
}

export default KanbanApi;
