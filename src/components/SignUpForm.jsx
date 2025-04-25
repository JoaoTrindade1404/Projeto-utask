import utasklogo from "../assets/TituloCadastro.svg";
import styles from "./SignUpForm.module.css";

function SignUpForm() {
  return (
    <form className={styles.signForm}>
      <img src={utasklogo} alt="Logo Utask" />
      <h1>Crie uma conta</h1>
      <label for="nome">Nome de usuário</label>
      <input type="text" placeholder="Seu nome de usuário" name="user" id="user" required />
    </form>
  );
}

export default SignUpForm;
