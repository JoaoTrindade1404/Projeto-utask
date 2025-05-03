import Header from "./Header";
import logo from "../assets/Logo branca.svg";
import utask from "../assets/uTask 3.0.svg";
import styles from "./KanbanPage.module.css";
import KanbanApi from "./KanbanApi";
import KanbanFooter from "./KanbanFooter";
import Kanban from "./Kanban";

function KanbanPage({ darkMode, toggleTheme }) {
  return (
    <div className={styles.kanban}>
      <Header
        darkMode={darkMode}
        toggleTheme={toggleTheme}
        logo={logo}
        utask={utask}
        showLogo={true}
      />
      <span className={styles.api}>
        <KanbanApi />
      </span>
      <span className={styles.kanbanContainer}>
        <Kanban titulo="A fazer" showButton={true} />
        <Kanban titulo="Em andamento" />
        <Kanban titulo="Feito" />
      </span>
      <KanbanFooter />
    </div>
  );
}

export default KanbanPage;
