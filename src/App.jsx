import style from "./App.module.css";
import "./global.css";
import SignUpPage from "./components/SignUpPage"
import LoginPage from "./components/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import ToggleTheme from "./ToggleTheme";


function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState(null);
  const toggleTheme = () => setDarkMode(prev => !prev); 

  const handleLogin = (userData) => {
    setUser(userData);
  };
  const handleLogout = () => {
    setUser(null);
    return <Navigate to="/" />;
  };

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
    document.body.classList.toggle('light', !darkMode);
  }, [darkMode]);

  return (
    <div className={toggleTheme}>
      <Router> 
      <Routes>
        <Route path="/" element={<LoginPage onLogin={handleLogin} darkMode={darkMode}  toggleTheme={toggleTheme}/>} />
        <Route path="/cadastro" element={<SignUpPage darkMode={darkMode} toggleTheme={toggleTheme}/>} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
