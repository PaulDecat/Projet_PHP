import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./Home";
import AllHeros from "./AllHeros";
import AddHero from "./AddHero";
import DeleteHero from "./DeleteHero";
import "./App.css";

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/" && (
        <nav>
          <ul>
            <li><Link to="/getHeros">Tous les héros</Link></li>
            <li><Link to="/addHero">Ajouter un héros</Link></li>
            <li><Link to="/deleteHeros">Supprimer un héros</Link></li>
          </ul>
        </nav>
      )}

      <div className="App-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/getHeros" element={<AllHeros />} />
          <Route path="/addHero" element={<AddHero />} />
          <Route path="/deleteHeros" element={<DeleteHero />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
