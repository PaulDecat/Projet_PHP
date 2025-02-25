import { useState, useEffect } from "react";
import axios from "axios";
import Modal from 'react-modal';
import "./AddHero.css"; // Assurez-vous d'importer le fichier CSS contenant les styles du modal
import "./ModalStyles.css"; // Importez les styles personnalisés pour les modals

export default function AddHero() {    
    const [formData, setFormData] = useState({
        name: "",
        sexe: "",
        planet: "",
        galaxy: "",
        description: "",
        power: [],
        city: "",
        gadget: [],
        team: "",
        vehicle: "",
    });

    const [cities, setCities] = useState([]);
    const [planets, setPlanets] = useState([]);
    const [power, setPower] = useState([]);
    const [teams, setTeams] = useState([]);
    const [gadget, setGadget] = useState([]);
    const [showPlanetModal, setShowPlanetModal] = useState(false);
    const [showCityModal, setShowCityModal] = useState(false);
    const [showPowerModal, setShowPowerModal] = useState(false);
    const [showGadgetModal, setShowGadgetModal] = useState(false);
    const [showTeamModal, setShowTeamModal] = useState(false);
    const [newPlanet, setNewPlanet] = useState({ name: "", galaxy: "" });
    const [newCity, setNewCity] = useState({ name: "" });
    const [newPower, setNewPower] = useState({ name: "" });
    const [newGadget, setNewGadget] = useState({ name: "" });
    const [newTeam, setNewTeam] = useState({ name: "" });

    const handleChange = (event) => {
        const { name, value, options } = event.target;
        if (name === "power" || name === "gadget") {
            const selectedOptions = Array.from(options).filter(option => option.selected).map(option => option.value);
            setFormData({ ...formData, [name]: selectedOptions });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const dataToSend = {
            ...formData,
            team: formData.team || "Aucune équipe", 
            vehicle: formData.vehicle || "Aucun véhicule", 
        };
        
        try {
            const response = await axios.post("http://127.0.0.1:8000/api/heroes", dataToSend);
            alert("Héros ajouté avec succès !");
            setFormData({
                name: "",
                sexe: "",
                planet: "",
                galaxy: "",
                description: "",
                power: [],
                city: "",
                gadget: [],
                team: "",
                vehicle: "",
            });
        } catch (error) {
            console.error("Erreur lors de l'ajout du héros :", error);
            alert("Erreur lors de l'ajout du héros.");
        }
    };

    const handleCities = async () => {
        try {
            const response = await axios.get("http://127.0.0.1:8000/api/cities");
            setCities(response.data); // Stocker les villes dans l'état
        }
        catch (error) {
            console.error("Erreur lors de la récupération des villes :", error);
        }
    };

    const handlePlanets = async () => {
        try {
            const response = await axios.get("http://127.0.0.1:8000/api/planets");
            setPlanets(response.data);
        }
        catch (error) {
            console.error("Erreur lors de la récupération des planètes :", error);
        }
    };

    const handlePower = async () => {
        try {
            const response = await axios.get("http://127.0.0.1:8000/api/powers");
            setPower(response.data);
        }
        catch (error) {
            console.error("Erreur lors de la récupération des pouvoirs :", error);
        }
    }

    const handleTeams = async () => {
        try {
            const response = await axios.get("http://127.0.0.1:8000/api/teams");
            setTeams(response.data);
        }
        catch (error) {
            console.error("Erreur lors de la récupération des équipes :", error);
        }
    }

    const handleGadget = async () => {
        try {
            const response = await axios.get("http://127.0.0.1:8000/api/gadgets");
            setGadget(response.data);
        }
        catch (error) {
            console.error("Erreur lors de la récupération des gadgets :", error);
        }
    }

    const handleAddPlanet = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("http://127.0.0.1:8000/api/planets", newPlanet);
            setPlanets([...planets, response.data]);
            setShowPlanetModal(false);
            setNewPlanet({ name: "", galaxy: "" });
        } catch (error) {
            console.error("Erreur lors de l'ajout de la planète :", error);
            alert("Erreur lors de l'ajout de la planète.");
        }
    };

    const handleAddCity = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("http://127.0.0.1:8000/api/cities", newCity);
            setCities([...cities, response.data]);
            setShowCityModal(false);
            setNewCity({ name: "" });
        } catch (error) {
            console.error("Erreur lors de l'ajout de la ville :", error);
            alert("Erreur lors de l'ajout de la ville.");
        }
    };

    const handleAddPower = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("http://127.0.0.1:8000/api/powers", newPower);
            setPower([...power, response.data]);
            setShowPowerModal(false);
            setNewPower({ name: "" });
        } catch (error) {
            console.error("Erreur lors de l'ajout du pouvoir :", error);
            alert("Erreur lors de l'ajout du pouvoir.");
        }
    };

    const handleAddGadget = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("http://127.0.0.1:8000/api/gadgets", newGadget);
            setGadget([...gadget, response.data]);
            setShowGadgetModal(false);
            setNewGadget({ name: "" });
        } catch (error) {
            console.error("Erreur lors de l'ajout du gadget :", error);
            alert("Erreur lors de l'ajout du gadget.");
        }
    };

    const handleAddTeam = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("http://127.0.0.1:8000/api/teams", newTeam);
            setTeams([...teams, response.data]);
            setShowTeamModal(false);
            setNewTeam({ name: "" });
        } catch (error) {
            console.error("Erreur lors de l'ajout de l'équipe :", error);
            alert("Erreur lors de l'ajout de l'équipe.");
        }
    };

    useEffect(() => {
        handleCities();
        handlePlanets();
        handlePower();
        handleTeams();
        handleGadget();
    }, []);

    return (
        <div className="add-hero-container">
            <h1>Ajouter un Héro 🦸🏻‍♂️🚀</h1>
            <form className="add-hero-form" onSubmit={handleSubmit}>
                <div className="form-grid">

                    <div className="input-group">
                        <label htmlFor="hero-name">Nom ✍🏼</label>
                        <input type="text" id="hero-name" name="name" value={formData.name} onChange={handleChange} required />
                    </div>

                    <div className="input-group">
                        <label htmlFor="hero-sexe">Sexe 👶🏻</label>
                        <select id="hero-sexe" name="sexe" value={formData.sexe} onChange={handleChange} required>
                            <option value="">Sélectionnez</option>
                            <option value="M">M</option>
                            <option value="F">F</option>
                        </select>
                    </div>

                    <div className="input-group">
                        <label htmlFor="hero-planet">Planète 🪐</label>
                        <select id="hero-planet" name="planet" value={formData.planet} onChange={handleChange} required>
                            <option value="">Sélectionnez</option>
                            {planets.map((planet) => (
                                <option key={planet.id} value={planet.name}>{planet.name}</option>
                            ))}
                        </select>
                        <button className="add-small-button" type="button" onClick={() => setShowPlanetModal(true)}>Ajouter une planète</button>
                    </div>

                    <div className="input-group">
                        <label htmlFor="hero-galaxy">Galaxie ☄️</label>
                        <input type="text" id="hero-galaxy" name="galaxy" value={formData.galaxy} onChange={handleChange} required />
                    </div>

                    <div className="input-group">
                        <label htmlFor="hero-description">Description 📋</label>
                        <textarea id="hero-description" name="description" value={formData.description} onChange={handleChange} required></textarea>
                    </div>

                    <div className="input-group">
                        <label htmlFor="hero-powers">Pouvoir 🏋🏽‍♀️</label>
                        <select id="hero-powers" name="power" value={formData.power} onChange={handleChange} multiple>
                            <option value="">Sélectionnez</option>
                            {power.map((p) => (
                                <option key={p.id} value={p.name}>{p.name}</option>
                            ))}
                        </select>
                        <button className="add-small-button" type="button" onClick={() => setShowPowerModal(true)}>Ajouter un pouvoir</button>
                    </div>

                    <div className="input-group">
                        <label htmlFor="hero-city">Ville 🌇</label>
                        <select id="hero-city" name="city" value={formData.city} onChange={handleChange}>
                            <option value="">Sélectionnez</option>
                            {cities.map((city) => (
                                <option key={city.id} value={city.name}>{city.name}</option>
                            ))}
                        </select>
                        <button className="add-small-button" type="button" onClick={() => setShowCityModal(true)}>Ajouter une ville</button>
                    </div>

                    <div className="input-group">
                        <label htmlFor="hero-gadgets">Gadgets 🧰</label>
                        <select id="hero-gadgets" name="gadget" value={formData.gadget} onChange={handleChange} multiple>
                            {gadget.map((g) => (
                                <option key={g.id} value={g.name}>{g.name}</option>
                            ))}
                        </select>
                        <button className="add-small-button" type="button" onClick={() => setShowGadgetModal(true)}>Ajouter un gadget</button>
                    </div>

                    <div className="input-group">
                        <label htmlFor="hero-team">Équipe 👩🏽‍🤝‍👨🏼</label>
                        <select id="hero-team" name="team" value={formData.team} onChange={handleChange}>
                            <option value="">Sélectionnez</option>
                            {teams.map((team) => (
                                <option key={team.id} value={team.name}>{team.name}</option>
                            ))}
                        </select>
                        <button className="add-small-button" type="button" onClick={() => setShowTeamModal(true)}>Ajouter une équipe</button>
                    </div>

                    <div className="input-group">
                        <label htmlFor="hero-vehicle">Véhicule 🚗</label>
                        <input type="text" id="hero-vehicle" name="vehicle" value={formData.vehicle} onChange={handleChange} />
                    </div>

                </div>

                <button className="add-button" type="submit">Ajouter ✨</button>
            </form>

            {/* Modal pour ajouter une planète */}
            <Modal isOpen={showPlanetModal} onRequestClose={() => setShowPlanetModal(false)} className="modal-content" overlayClassName="modal-overlay">
                <h2>Ajouter une Planète</h2>
                <form onSubmit={handleAddPlanet}>
                    <label>
                        Nom de la planète:
                        <input type="text" value={newPlanet.name} onChange={(e) => setNewPlanet({ ...newPlanet, name: e.target.value })} required />
                    </label>
                    <label>
                        Galaxie:
                        <input type="text" value={newPlanet.galaxy} onChange={(e) => setNewPlanet({ ...newPlanet, galaxy: e.target.value })} required />
                    </label>
                    <button type="submit">Ajouter</button>
                    <button type="button" onClick={() => setShowPlanetModal(false)}>Annuler</button>
                </form>
            </Modal>

            {/* Modal pour ajouter une ville */}
            <Modal isOpen={showCityModal} onRequestClose={() => setShowCityModal(false)} className="modal-content" overlayClassName="modal-overlay">
                <h2>Ajouter une Ville</h2>
                <form onSubmit={handleAddCity}>
                    <label>
                        Nom de la ville:
                        <input type="text" value={newCity.name} onChange={(e) => setNewCity({ ...newCity, name: e.target.value })} required />
                    </label>
                    <button type="submit">Ajouter</button>
                    <button type="button" onClick={() => setShowCityModal(false)}>Annuler</button>
                </form>
            </Modal>

            {/* Modal pour ajouter un pouvoir */}
            <Modal isOpen={showPowerModal} onRequestClose={() => setShowPowerModal(false)} className="modal-content" overlayClassName="modal-overlay">
                <h2>Ajouter un Pouvoir</h2>
                <form onSubmit={handleAddPower}>
                    <label>
                        Nom du pouvoir:
                        <input type="text" value={newPower.name} onChange={(e) => setNewPower({ ...newPower, name: e.target.value })} required />
                    </label>
                    <button type="submit">Ajouter</button>
                    <button type="button" onClick={() => setShowPowerModal(false)}>Annuler</button>
                </form>
            </Modal>

            {/* Modal pour ajouter un gadget */}
            <Modal isOpen={showGadgetModal} onRequestClose={() => setShowGadgetModal(false)} className="modal-content" overlayClassName="modal-overlay">
                <h2>Ajouter un Gadget</h2>
                <form onSubmit={handleAddGadget}>
                    <label>
                        Nom du gadget:
                        <input type="text" value={newGadget.name} onChange={(e) => setNewGadget({ ...newGadget, name: e.target.value })} required />
                    </label>
                    <button type="submit">Ajouter</button>
                    <button type="button" onClick={() => setShowGadgetModal(false)}>Annuler</button>
                </form>
            </Modal>

            {/* Modal pour ajouter une équipe */}
            <Modal isOpen={showTeamModal} onRequestClose={() => setShowTeamModal(false)} className="modal-content" overlayClassName="modal-overlay">
                <h2>Ajouter une Équipe</h2>
                <form onSubmit={handleAddTeam}>
                    <label>
                        Nom de l'équipe:
                        <input type="text" value={newTeam.name} onChange={(e) => setNewTeam({ ...newTeam, name: e.target.value })} required />
                    </label>
                    <button type="submit">Ajouter</button>
                    <button type="button" onClick={() => setShowTeamModal(false)}>Annuler</button>
                </form>
            </Modal>
        </div>
    );
}