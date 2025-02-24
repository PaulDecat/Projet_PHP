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
        <div className="add-hero-container">
        <h1>Ajouter un Héro 🦸🏻‍♂️🚀</h1>
        <form className="add-hero-form">
            <div className="form-grid">
                <div className="input-group">
                    <label htmlFor="hero-name">Nom ✍🏼</label>
                    <input type="text" id="hero-name" name="name" required />
                </div>

                <div className="input-group">
                    <label htmlFor="hero-sexe">Sexe 👶🏻</label>
                    <select id="hero-sexe" name="sexe" required>
                        <option value="">Sélectionnez</option>
                        <option value="M">M</option>
                        <option value="F">F</option>
                    </select>
                </div>

                <div className="input-group">
                    <label htmlFor="hero-planet">Planète 🪐</label>
                    <select id="hero-planet" name="planet" required>
                        <option value="">Sélectionnez</option>
                    </select>
                </div>

                <div className="input-group">
                    <label htmlFor="hero-galaxy">Galaxie ☄️</label>
                    <input type="text" id="hero-galaxy" name="galaxy" required />
                </div>

                <div className="input-group">
                    <label htmlFor="hero-description">Description 📋</label>
                    <textarea id="hero-description" name="description" required></textarea>
                </div>

                <div className="input-group">
                    <label htmlFor="hero-powers">Pouvoir 🏋🏽‍♀️</label>
                    <select id="hero-powers" name="power" multiple>
                        <option value="">Sélectionnez</option>
                    </select>
                </div>

                <div className="input-group">
                    <label htmlFor="hero-city">Ville 🌇</label>
                    <select id="hero-city" name="city">
                        <option value="">Sélectionnez</option>
                    </select>
                </div>

                <div className="input-group">
                    <label htmlFor="hero-gadgets">Gadgets 🧰</label>
                    <select id="hero-gadgets" name="gadget" multiple>
                        <option value="">Sélectionnez</option>
                    </select>
                </div>

                <div className="input-group">
                    <label htmlFor="hero-team">Équipe 👩🏽‍🤝‍👨🏼</label>
                    <select id="hero-team" name="team">
                        <option value="">Sélectionnez</option>
                    </select>
                </div>

                <div className="input-group">
                    <label htmlFor="hero-vehicle">Véhicule 🚗</label>
                    <input type="text" id="hero-vehicle" name="vehicle" />
                </div>
            </div>

            <button className="add-button" type="submit">Ajouter ✨</button>
        </form>
    </div>
);
}