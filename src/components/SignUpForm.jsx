import utasklogo from "../assets/TituloCadastro.svg";
import styles from "./SignUpForm.module.css";
import iconNaoVer from '../assets/icon NaoVisivel.svg'
import iconVer from '../assets/iconVer.svg'
import { useState } from "react";

function SignUpForm({darkMode}) {
  const [showPassword, setShowPassword] = useState(false); 
  
      const togglePassword = () => {
        setShowPassword(!showPassword); 
      };
  return (
    <div className={`${styles.container} ${darkMode ? styles.dark : styles.light}`}>
      <img className={styles.logo} src={utasklogo} alt="Logo Utask" />
      <form className={styles.signForm}>
        <h1>Crie uma conta</h1>
        <span>
          <label for="nome">Nome de usuário</label>
          <input type="text" placeholder="Seu nome de usuário" name="user" id="user" required />
        </span>
        <span>
          <label for="email">E-mail</label>
          <input type="text" placeholder="Endereço de e-mail" name="email" id="email" required />
        </span>
        <span className={styles.senha}>
          <label for="senha">Senha</label>
          <input type={showPassword ? 'text' : 'password'} placeholder="Senha" name="senha" id="senha" required />
          <img  onClick={togglePassword} className={styles.iconSenha} src={showPassword ? iconVer : iconNaoVer} />
        </span>
        <span className={styles.senha}>
          <img onClick={togglePassword} className={styles.iconSenha} src={showPassword ? iconVer : iconNaoVer} />
          <label for="senha">Confirme a senha</label>
          <input type={showPassword ? 'text' : 'password'} placeholder="Senha" name="senha" id="senha" required />
        </span>
        <button>Criar cadastro</button>
    </form>

    </div>
  );
}

export default SignUpForm;
