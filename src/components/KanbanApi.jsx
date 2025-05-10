import styles from "./KanbanApi.module.css";
import axios from "axios";
import icon from "../assets/lampada.svg";
import icon2 from "../assets/lampada_dark.svg";
import { useState, useEffect } from "react";

function KanbanApi({darkMode}) {
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
    <div className={`${styles.apiBox} ${darkMode ? styles.dark : styles.light}`}>
      <img src={darkMode ? icon2 : icon} />
      <span className={styles.apiText}>
        <h1>Frase do dia</h1>
        <p>{fraseTraduzida}</p>
      </span>
    </div>
  );
}

export default KanbanApi;
