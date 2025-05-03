import styles from './KanbanFooter.module.css'
import img from '../assets/footer.svg'

function KanbanFooter(){
    
    return(
        <footer className={styles.footer}>
            <img src={img} />
            <h1>Feito com amor por <strong>João Vitor</strong></h1>
        </footer>
    )
}

export default KanbanFooter