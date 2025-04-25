import style from "./App.module.css";
import "./global.css";
import SignUpPage from "./components/SignUpPage"
import LoginPage from "./components/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/cadastro" element={<SignUpPage />} />
      </Routes>
    </Router>
  );
}

export default App;
