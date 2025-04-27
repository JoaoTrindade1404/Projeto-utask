import utasklogo from "../assets/TituloCadastro.svg";
import styles from "./SignUpForm.module.css";
import iconNaoVer from "../assets/icon NaoVisivel.svg";
import iconVer from "../assets/iconVer.svg";
import { useState } from "react";
import api from "../api.js";

function SignUpForm({ darkMode }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [passwordError, setPasswordError] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (name === "password" || name === "confirmPassword") {
      if (formData.password && formData.confirmPassword) {
        setFormData(formData.password !== formData.confirmPassword);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setPasswordError(true);
      return;
    } else {
      setPasswordError(false);
    }
    try {
      const response = await api.get("/users", {
        params: { email: formData.email },
      });

      if (response.data.length > 0) {
        alert("Email já cadastrado!");
        return;
      }

      const { confirmPassword, ...userData } = formData;
      await api.post("/users", userData);
      alert("Cadastro realizado com sucesso!");
    } catch (error) {
      console.error("Erro no cadastro:", error);
      alert("Erro ao cadastrar. Tente novamente.");
    }
  };
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div
      className={`${styles.container} ${darkMode ? styles.dark : styles.light}`}
    >
      <img className={styles.logo} src={utasklogo} alt="Logo Utask" />
      <form onSubmit={handleSubmit} className={styles.signForm}>
        <h1>Crie uma conta</h1>
        <span>
          <label htmlFor="name">Nome de usuário</label>
          <input
            type="text"
            placeholder="Seu nome de usuário"
            value={formData.name}
            onChange={handleChange}
            name="name"
            id="name"
            required
          />
        </span>
        <span>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            placeholder="Endereço de e-mail"
            value={formData.email}
            onChange={handleChange}
            name="email"
            id="email"
            required
          />
        </span>
        <span className={styles.senha}>
          <label htmlFor="senha">Senha</label>
          <input
            className={`${passwordError ? styles.errorInput : ""}`}
            type={showPassword ? "text" : "password"}
            value={formData.password}
            onChange={handleChange}
            placeholder="Senha"
            name="password"
            id="senha"
            required
          />
          <img
            onClick={togglePassword}
            className={styles.iconSenha}
            src={showPassword ? iconVer : iconNaoVer}
          />
        </span>
        <span className={styles.senha}>
          <img
            onClick={togglePassword}
            className={styles.iconSenha}
            src={showPassword ? iconVer : iconNaoVer}
          />
          <label htmlFor="confirmPassword">Confirme a senha</label>
          <input
            className={`${passwordError ? styles.errorInput : ""}`}
            type={showPassword ? "text" : "password"}
            placeholder="Confirme sua senha"
            value={formData.confirmPassword}
            onChange={handleChange}
            name="confirmPassword"
            id="confirmPassword"
            required
          />
        </span>
        {passwordError && (
          <span className={styles.errorAlert}>As senhas não coincidem</span>
        )}
        <button>Criar cadastro</button>
      </form>
    </div>
  );
}

export default SignUpForm;
