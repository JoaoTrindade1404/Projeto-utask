import React from 'react'
import styles from './ToggleTheme.module.css'

function ToggleTheme({darkMode, toggleTheme}){
    return(
        <button className={styles.toggletheme} onClick={toggleTheme}>
            {darkMode ? 'Modo Claro' : 'Modo Escuro'}
        </button>
    )
}

export default ToggleTheme