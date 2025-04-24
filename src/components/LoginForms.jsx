import utasklogo from '../assets/Titulo.svg'
import iconNaoVer from '../assets/icon NaoVisivel.svg'
import styles from '../components/LoginForms.module.css'
import divisor from '../assets/DivisorLogin.svg'

function LoginForms(){
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
                    <img src={iconNaoVer} className={styles.iconSenha}/>
                    <input type="text" placeholder="Senha" />
                    <a href="#">Esqueceu a senha?</a>
                </form>
            </div>
            <button>Entrar</button>
            <span><img src={divisor}/></span>
            <a href="#">Nao tem cadastro? Crie uma conta</a>
        </div>
    )
}

export default LoginForms