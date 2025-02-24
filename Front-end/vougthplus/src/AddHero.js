import { useState, useEffect } from "react";
import axios from "axios";
import "./AddHero.css"; // Assurez-vous d'importer le fichier CSS contenant les styles du modal

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
        
        console.log("Données à envoyer :", dataToSend);
        try {
            const response = await axios.post("http://127.0.0.1:8000/api/heroes", dataToSend);
            console.log("Héros ajouté :", response.data);
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
            console.log("Villes récupérées :", response.data);
            setCities(response.data); // Stocker les villes dans l'état
        }
        catch (error) {
            console.error("Erreur lors de la récupération des villes :", error);
        }
    };

    const handlePlanets = async () => {
        try {
            const response = await axios.get("http://127.0.0.1:8000/api/planets");
            console.log("Planètes récupérées :", response.data);
            setPlanets(response.data);
        }
        catch (error) {
            console.error("Erreur lors de la récupération des planètes :", error);
        }
    };

    const handlePower = async () => {
        try {
            const response = await axios.get("http://127.0.0.1:8000/api/powers");
            console.log("Pouvoirs récupérés :", response.data);
            setPower(response.data);
        }
        catch (error) {
            console.error("Erreur lors de la récupération des pouvoirs :", error);
        }
    }

    const handleTeams = async () => {
        try {
            const response = await axios.get("http://127.0.0.1:8000/api/teams");
            console.log("Équipes récupérées :", response.data);
            setTeams(response.data);
        }
        catch (error) {
            console.error("Erreur lors de la récupération des équipes :", error);
        }
    }

    const handleGadget = async () => {
        try {
            const response = await axios.get("http://127.0.0.1:8000/api/gadgets");
            console.log("Gadgets récupérés :", response.data);
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
            console.log("Planète ajoutée :", response.data);
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
            console.log("Ville ajoutée :", response.data);
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
            console.log("Pouvoir ajouté :", response.data);
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
            console.log("Gadget ajouté :", response.data);
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
            console.log("Équipe ajoutée :", response.data);
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
        <div>
            <h1>Ajouter un Héros :</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="hero-name">Nom :</label>
                    <input type="text" id="hero-name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="hero-sexe">Sexe :</label>
                    <select id="hero-sexe" name="sexe" value={formData.sexe} onChange={handleChange} required>
                        <option value="">Sélectionnez le sexe</option>
                        <option value="M">M</option>
                        <option value="F">F</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="hero-planet">Planète :</label>
                    <select id="hero-planet" name="planet" value={formData.planet} onChange={handleChange} required>
                        <option value="">Sélectionnez une planète</option>
                        {planets.map((planet) => (
                            <option key={planet.id} value={planet.name}>{planet.name}</option>
                        ))}
                    </select>
                    <button type="button" onClick={() => setShowPlanetModal(true)}>Ajouter une planète</button>
                </div>
                <div>
                    <label htmlFor="hero-galaxy">Galaxie :</label>
                    <input type="text" id="hero-galaxy" name="galaxy" value={formData.galaxy} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="hero-description">Description :</label>
                    <input type="text" id="hero-description" name="description" value={formData.description} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="hero-powers">Pouvoirs :</label>
                    <select id="hero-powers" name="power" value={formData.power} onChange={handleChange} multiple>
                        {power.map((power) => (
                            <option key={power.id} value={power.name}>{power.name}</option>
                        ))}
                    </select>
                    <button type="button" onClick={() => setShowPowerModal(true)}>Ajouter un pouvoir</button>
                </div>
                <div>
                    <label htmlFor="hero-city">Ville :</label>
                    <select id="hero-city" name="city" value={formData.city} onChange={handleChange}>
                        <option value="">Sélectionnez une ville</option>
                        {cities.map((city) => (
                            <option key={city.id} value={city.name}>{city.name}</option>
                        ))}
                    </select>
                    <button type="button" onClick={() => setShowCityModal(true)}>Ajouter une ville</button>
                </div>
                <div>
                    <label htmlFor="hero-gadgets">Gadgets :</label>
                    <select id="hero-gadgets" name="gadget" value={formData.gadget} onChange={handleChange} multiple>
                        {gadget.map((gadget) => (
                            <option key={gadget.id} value={gadget.name}>{gadget.name}</option>
                        ))}
                    </select>
                    <button type="button" onClick={() => setShowGadgetModal(true)}>Ajouter un gadget</button>
                </div>
                <div>
                    <label htmlFor="hero-team">Équipe :</label>
                    <select id="hero-team" name="team" value={formData.team} onChange={handleChange}>
                        <option value="">Sélectionnez une équipe</option>
                        {teams.map((team) => (
                            <option key={team.id} value={team.name}>{team.name}</option>
                        ))}
                    </select>
                    <button type="button" onClick={() => setShowTeamModal(true)}>Ajouter une équipe</button>
                </div>
                <div>
                    <label htmlFor="hero-vehicle">Véhicule :</label>
                    <input type="text" id="hero-vehicle" name="vehicle" value={formData.vehicle} onChange={handleChange} />
                </div>
                <button type="submit">Ajouter</button>
            </form>

            {showPlanetModal && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Ajouter une nouvelle planète</h2>
                        <form onSubmit={handleAddPlanet}>
                            <div>
                                <label htmlFor="new-planet-name">Nom de la planète :</label>
                                <input type="text" id="new-planet-name" name="name" value={newPlanet.name} onChange={(e) => setNewPlanet({ ...newPlanet, name: e.target.value })} required />
                            </div>
                            <div>
                                <label htmlFor="new-planet-galaxy">Galaxie :</label>
                                <input type="text" id="new-planet-galaxy" name="galaxy" value={newPlanet.galaxy} onChange={(e) => setNewPlanet({ ...newPlanet, galaxy: e.target.value })} required />
                            </div>
                            <button type="submit">Ajouter</button>
                            <button type="button" onClick={() => setShowPlanetModal(false)}>Annuler</button>
                        </form>
                    </div>
                </div>
            )}

            {showCityModal && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Ajouter une nouvelle ville</h2>
                        <form onSubmit={handleAddCity}>
                            <div>
                                <label htmlFor="new-city-name">Nom de la ville :</label>
                                <input type="text" id="new-city-name" name="name" value={newCity.name} onChange={(e) => setNewCity({ ...newCity, name: e.target.value })} required />
                            </div>
                            <button type="submit">Ajouter</button>
                            <button type="button" onClick={() => setShowCityModal(false)}>Annuler</button>
                        </form>
                    </div>
                </div>
            )}

            {showPowerModal && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Ajouter un nouveau pouvoir</h2>
                        <form onSubmit={handleAddPower}>
                            <div>
                                <label htmlFor="new-power-name">Nom du pouvoir :</label>
                                <input type="text" id="new-power-name" name="name" value={newPower.name} onChange={(e) => setNewPower({ ...newPower, name: e.target.value })} required />
                            </div>
                            <button type="submit">Ajouter</button>
                            <button type="button" onClick={() => setShowPowerModal(false)}>Annuler</button>
                        </form>
                    </div>
                </div>
            )}

            {showGadgetModal && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Ajouter un nouveau gadget</h2>
                        <form onSubmit={handleAddGadget}>
                            <div>
                                <label htmlFor="new-gadget-name">Nom du gadget :</label>
                                <input type="text" id="new-gadget-name" name="name" value={newGadget.name} onChange={(e) => setNewGadget({ ...newGadget, name: e.target.value })} required />
                            </div>
                            <button type="submit">Ajouter</button>
                            <button type="button" onClick={() => setShowGadgetModal(false)}>Annuler</button>
                        </form>
                    </div>
                </div>
            )}

            {showTeamModal && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Ajouter une nouvelle équipe</h2>
                        <form onSubmit={handleAddTeam}>
                            <div>
                                <label htmlFor="new-team-name">Nom de l'équipe :</label>
                                <input type="text" id="new-team-name" name="name" value={newTeam.name} onChange={(e) => setNewTeam({ ...newTeam, name: e.target.value })} required />
                            </div>
                            <button type="submit">Ajouter</button>
                            <button type="button" onClick={() => setShowTeamModal(false)}>Annuler</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}