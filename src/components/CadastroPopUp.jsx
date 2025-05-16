import styles from "./CadastroPopUp.module.css";
import verificado from "../assets/verificado.svg";

function CadastroPopUp() {
  return (
    <div className={styles.container}>
      <div className={styles.popUp}>
        <div className={styles.header}>
          <img src={verificado} alt="verified" />
          <h1>Conta criada com sucesso</h1>
        </div>
        <span className={styles.text}>
          <h2>Um instante, iremos te redirecionar ao login!</h2>
        </span>
      </div>
    </div>
  );
}

export default CadastroPopUp;
