import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import AllHeros from "./AllHeros";
import AddHero from "./AddHero";
import "./App.css";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/getHeros">Tous les héros</Link></li>
          <li><Link to="/addHero">Ajouter un Héros</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/getHeros" element={<AllHeros />} />
        <Route path="/addHero" element={<AddHero />} />
      </Routes>
    </Router>
  );
}

export default App;
