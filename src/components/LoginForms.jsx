import utasklogo from "../assets/Titulo.svg";
import iconNaoVer from "../assets/icon NaoVisivel.svg";
import styles from "../components/LoginForms.module.css";
import divisor from "../assets/DivisorLogin.svg";
import iconVer from "../assets/iconVer.svg";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api"

function LoginForms({ darkMode, onLogin }) {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loginError, setLoginError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setLoginError(''); 
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.email || !formData.password) {
      setLoginError('Preencha todos os campos');
      return;
    }

    setIsLoading(true);
    
    try {
      const response = await api.get('/users', {
        params: { email: formData.email }
      });

      if (response.data.length === 0) {
        setLoginError('Email não cadastrado');
        return;
      }

      const user = response.data[0];

      if (user.password !== formData.password) {
        setLoginError('Senha incorreta');
        return;
      }

      onLogin(user);
      
    } catch (error) {
      console.error('Erro no login:', error);
      setLoginError('Erro ao fazer login. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div
      className={`${styles.loginforms} ${
        darkMode ? styles.dark : styles.light
      }`}
    >
      <img src={utasklogo} alt="" />
      <div className={styles.formularios}>
        <form onSubmit={handleSubmit}>
          <h1>E-mail</h1>
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Insira seu endereço de e-mail aqui" required/>
          <h1>Senha</h1>
          <img
            src={showPassword ? iconVer : iconNaoVer}
            className={styles.iconSenha}
            onClick={togglePassword}
          />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Senha"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <a href="#">Esqueceu a senha?</a>
          {loginError && <div className={styles.errorMessage}>{loginError}</div>}
          <button type="submit">Entrar</button>
        </form>
      </div>
      <span>
        <img src={divisor} />
      </span>
      <a className={styles.button} onClick={() => navigate("/cadastro")}>
        Nao tem cadastro? Crie uma conta
      </a>
    </div>
  );
}

export default LoginForms;
