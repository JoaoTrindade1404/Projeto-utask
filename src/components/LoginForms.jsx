import utasklogo from '../assets/Titulo.svg'
import iconNaoVer from '../assets/icon NaoVisivel.svg'
import styles from '../components/LoginForms.module.css'
import divisor from '../assets/DivisorLogin.svg'
import iconVer from '../assets/iconVer.svg'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginForms(){
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false); 

    const togglePassword = () => {
      setShowPassword(!showPassword); 
    };
    return(
        <div className={styles.loginforms}>
            <img src={utasklogo} alt="" />
            <div className={styles.formularios}>
                <form>
                    <h1>E-mail</h1>
                    <input type="text" placeholder="Insira seu endereço de e-mail aqui" />
                </form>
                <form>
                    <h1>Senha</h1>
                    <img src={showPassword ? iconVer : iconNaoVer} className={styles.iconSenha} onClick={togglePassword} />
                    <input type={showPassword ? 'text' : 'password'} placeholder="Senha" />
                    <a href="#">Esqueceu a senha?</a>
                </form>
            </div>
            <button>Entrar</button>
            <span><img src={divisor}/></span>
            <a onClick={() => navigate("/cadastro")}>Nao tem cadastro? Crie uma conta</a>
        </div>
    )
}

export default LoginForms