import ToggleTheme from '../ToggleTheme'
import styles from './Header.module.css'
import logo2 from '../assets/logo_azul.svg'
import utask2 from '../assets/uTask 3.0 _azul.svg'

function Header({darkMode, toggleTheme, logo, utask, showLogo = false}){
    return(
        <header className={`${styles.header} ${darkMode ? styles.dark : styles.light}`}>
            {showLogo && <img className={styles.logo} src={darkMode ? logo2 : logo} alt="Unect logo" />}
            {showLogo && <img className={styles.utask} src={darkMode ? utask2 : utask} alt="Utask" />}
            {showLogo && <ToggleTheme darkMode={darkMode} toggleTheme={toggleTheme}/>}
        </header>
    )
}

export default Header