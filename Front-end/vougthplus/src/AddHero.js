import { useState } from "react";
import axios from "axios";

export default function AddHero() {    
    const [formData, setFormData] = useState({
        name: "",
        sexe: "",
        planet: "",
        description: "",
        powers: "",
        city: "",
        gadgets: "",
        team: "",
        vehicle: "",
    });

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault(); 
        
        try {
            const response = await axios.post("http://127.0.0.1:8000/api/heros", formData);
            console.log("Héros ajouté :", response.data);
            alert("Héros ajouté avec succès !");
            setFormData({
                name: "",
                sexe: "",
                planet: "",
                description: "",
                powers: "",
                city: "",
                gadgets: "",
                team: "",
                vehicle: "",
            });
        } catch (error) {
            console.error("Erreur lors de l'ajout du héros :", error);
            alert("Erreur lors de l'ajout du héros.");
        }
    };

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
                    <input type="text" id="sexe" name="sexe" value={formData.sexe} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="planet">Planète :</label>
                    <input type="text" id="planet" name="planet" value={formData.planet} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="description">Description :</label>
                    <input type="text" id="description" name="description" value={formData.description} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="powers">Pouvoirs :</label>
                    <input type="text" id="powers" name="powers" value={formData.powers} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="city">Ville :</label>
                    <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="gadgets">Gadgets :</label>
                    <input type="text" id="gadgets" name="gadgets" value={formData.gadgets} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="team">Équipe :</label>
                    <input type="text" id="team" name="team" value={formData.team} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="vehicle">Véhicule :</label>
                    <input type="text" id="vehicle" name="vehicle" value={formData.vehicle} onChange={handleChange} required />
                </div>
                <button type="submit">Ajouter</button>
            </form>
        </div>
    );
}
