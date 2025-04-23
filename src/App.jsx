import Header from './components/Header'
import loginimg from './assets/login-img.svg'
import divisor from './assets/Divisor.svg'
import style from './App.module.css'
import './global.css'

function App() {
  return (
    <div>
      <Header />
      <div className={style.container}>
        <img src={loginimg} alt="login imagem" id={style.imgLogin} />
        <img src={divisor} alt="divisor" />
      </div>
    </div>
  )
}

export default App
