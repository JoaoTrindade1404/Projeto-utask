import styles from './Header.module.css'

function Header({darkMode}){
    return(
        <header className={`${styles.header} ${darkMode ? styles.dark : styles.light}`}>
            
        </header>
    )
}

export default Header