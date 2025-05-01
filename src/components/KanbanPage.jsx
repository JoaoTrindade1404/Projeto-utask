import Header from "./Header"
import logo from '../assets/Logo branca.svg'
import utask from '../assets/uTask 3.0.svg'
import styles from './KanbanPage.module.css'
import axios from 'axios'
import { useState, useEffect } from "react"

function KanbanPage({darkMode, toggleTheme}){
    const [frase, setFrase] = useState('');
    const buscarFrase = async () => {
        try{
            const response = await axios.get('https://api.adviceslip.com/advice');
            setFrase(response.data.slip.advice);
        }
        catch(error){
            console.error('erro ao buscar a frase', error);
        }
    };
    useEffect(() => {
        buscarFrase();
      }, []);
    return(
        <div className={styles.kanban}>
            <Header darkMode={darkMode} toggleTheme={toggleTheme} logo={logo} utask={utask} showLogo={true}/>
            <span className={styles.fraseDay}>
                <h1>Frase do dia</h1>
                <p>{frase}</p>
                <button onClick={buscarFrase}>Frase</button>
            </span>
        </div>
    )
}

export default KanbanPage