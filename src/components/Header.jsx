import ToggleTheme from '../ToggleTheme'
import styles from './Header.module.css'

function Header({darkMode, toggleTheme}){
    return(
        <header className={`${styles.header} ${darkMode ? styles.dark : styles.light}`}>
            <ToggleTheme className={styles.botaoTema} darkMode={darkMode} toggleTheme={toggleTheme}/>
        </header>
    )
}

export default Header