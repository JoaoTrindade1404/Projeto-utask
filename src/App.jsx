import "./global.css";
import SignUpPage from "./components/SignUpPage";
import LoginPage from "./components/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import KanbanPage from "./components/KanbanPage";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved === null ? false : saved === "true";
  });
  const [user, setUser] = useState(null);
  const toggleTheme = () => setDarkMode((prev) => !prev);

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);
  const handleLogout = () => {
    setUser(null);
    return <Navigate to="/" />;
  };

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
    document.body.classList.toggle("light", !darkMode);
  }, [darkMode]);

  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    if (savedDarkMode !== null) {
      setDarkMode(savedDarkMode === "true");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <LoginPage
                onLogin={handleLogin}
                darkMode={darkMode}
                toggleTheme={toggleTheme}
              />
            }
          />
          <Route
            path="/cadastro"
            element={
              <SignUpPage darkMode={darkMode} toggleTheme={toggleTheme} />
            }
          />
          <Route
            path="/kanban"
            element={
              <KanbanPage
                user={user}
                darkMode={darkMode}
                toggleTheme={toggleTheme}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
