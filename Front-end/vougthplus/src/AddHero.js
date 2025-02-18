import { useState, useEffect } from "react";
import axios from "axios";

export default function AddHero() {    
    const [formData, setFormData] = useState({
        name: "",
        sexe: "",
        planet: "",
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
                    <label htmlFor="name">Nom :</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="sexe">Sexe :</label>
                    <select id="sexe" name="sexe" value={formData.sexe} onChange={handleChange} required>
                        <option value="">Sélectionnez le sexe</option>
                        <option value="M">M</option>
                        <option value="F">F</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="planet">Planète :</label>
                    <select id="planet" name="planet" value={formData.planet} onChange={handleChange} required>
                        <option value="">Sélectionnez une planète</option>
                        {planets.map((planet) => (
                            <option key={planet.id} value={planet.name}>{planet.name}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="galaxy">Galaxie :</label>
                    <input type="text" id="galaxy" name="galaxy" value={formData.galaxy} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="description">Description :</label>
                    <input type="text" id="description" name="description" value={formData.description} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="power">Pouvoirs :</label>
                    <select id="power" name="power" value={formData.power} onChange={handleChange} multiple>
                        {power.map((power) => (
                            <option key={power.id} value={power.name}>{power.name}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="city">Ville :</label>
                    <select id="city" name="city" value={formData.city} onChange={handleChange}>
                        <option value="">Sélectionnez une ville</option>
                        {cities.map((city) => (
                            <option key={city.id} value={city.name}>{city.name}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="gadget">Gadgets :</label>
                    <select id="gadget" name="gadget" value={formData.gadget} onChange={handleChange} multiple>
                        {gadget.map((gadget) => (
                            <option key={gadget.id} value={gadget.name}>{gadget.name}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="team">Équipe :</label>
                    <select id="team" name="team" value={formData.team} onChange={handleChange}>
                        <option value="">Sélectionnez une équipe</option>
                        {teams.map((team) => (
                            <option key={team.id} value={team.name}>{team.name}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="vehicle">Véhicule :</label>
                    <input type="text" id="vehicle" name="vehicle" value={formData.vehicle} onChange={handleChange} />
                </div>
                <button type="submit">Ajouter</button>
            </form>
        </div>
    );
}
