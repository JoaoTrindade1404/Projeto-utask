import styles from './KanbanFooter.module.css'
import img from '../assets/footer.svg'

function KanbanFooter({darkMode}){
    
    return(
        <footer className={`${styles.footer} ${darkMode ? styles.dark : styles.light}`}>
            <img src={img} />
            <h1>Feito com amor por <strong>João Vitor</strong></h1>
        </footer>
    )
}

export default KanbanFooter