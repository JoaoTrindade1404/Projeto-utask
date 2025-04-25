import Header from "./Header"
import LoginForms from "./LoginForms"
import styles from './LoginPage.module.css'
import imgLogin from '../assets/login-img.svg'
import divisor from '../assets/Divisor.svg'
function LoginPage({darkMode}){
    return(
        <div className={`${styles.loginpage} ${darkMode ? styles.dark : styles.light}`}>
            <Header darkMode={darkMode}/>
            <img src={imgLogin} className={styles.img} alt="Imagem login" />
            <img src={divisor} className={styles.divisoria} />
            <LoginForms />
            
            
        </div>
    )
}

export default LoginPage