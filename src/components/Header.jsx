import ToggleTheme from '../ToggleTheme'
import styles from './Header.module.css'

function Header({darkMode, toggleTheme, logo, utask, showLogo = false}){
    return(
        <header className={`${styles.header} ${darkMode ? styles.dark : styles.light}`}>
            {showLogo && <img src={logo} alt="Unect logo" />}
            {showLogo && <img src={utask} alt="Utask" />}
            {showLogo && <ToggleTheme darkMode={darkMode} toggleTheme={toggleTheme}/>}
        </header>
    )
}

export default Header