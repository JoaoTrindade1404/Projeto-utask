import KanbanCard from './KanbanCard'
import styles from './KanbanColumn.module.css'

function KanbanColumn(){
    return(
        <div className={styles.column}>
            <KanbanCard />
        </div>
    )
}

export default KanbanColumn