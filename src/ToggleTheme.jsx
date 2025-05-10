import React from 'react'
import styles from './ToggleTheme.module.css'
import light from './assets/[Botão] Light mode.svg'
import dark from './assets/[Botão] Dark Mode.svg'

function ToggleTheme({darkMode, toggleTheme}){
    return(
        <button className={styles.toggletheme} onClick={toggleTheme}>
            <img src={darkMode ? dark : light} />
        </button>
    )
}

export default ToggleTheme