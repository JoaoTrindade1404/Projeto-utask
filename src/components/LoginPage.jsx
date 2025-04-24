import Header from "./Header"
import LoginForms from "./LoginForms"
import styles from './LoginPage.module.css'

function LoginPage(){
    return(
        <div className={styles.loginpage}>
            <Header />
            <LoginForms />
        </div>
    )
}

export default LoginPage