import style from "./App.module.css";
import "./global.css";
import SignUpPage from "./components/SignUpPage"
import LoginPage from "./components/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";


function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(prev => !prev); 

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
    document.body.classList.toggle('light', !darkMode);
  }, [darkMode]);

  return (
    <div className={toggleTheme}>
      <button id="butao" onClick={toggleTheme}>CLIQUE AQUI</button>
      <Router> 
      <Routes>
        <Route path="/" element={<LoginPage darkMode={darkMode} />} />
        <Route path="/cadastro" element={<SignUpPage />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
