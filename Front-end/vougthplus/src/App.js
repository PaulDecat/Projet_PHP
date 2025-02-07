import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import AllHeros from "./AllHeros";
import AddHero from "./AddHero";
import DeleteHero from "./DeleteHero";
import "./App.css";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/home">Accueil</Link></li>
          <li><Link to="/getHeros">Tous les héros</Link></li>
          <li><Link to="/addHero">Ajouter un héros</Link></li>
          <li><Link to="/deleteHeros">Supprimer un héros</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/getHeros" element={<AllHeros />} />
        <Route path="/addHero" element={<AddHero />} />
        <Route path="/deleteHeros" element={<DeleteHero />} />
      </Routes>
    </Router>
  );
}

export default App;
