import { useState, useEffect } from "react";
import axios from "axios";
import "./AllHeros.css";

export default function AllHeros() {
    const [data, setData] = useState(null);
    const [filteredData, setFilteredData] = useState(null);
    const [filter, setFilter] = useState("");

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/heroes")
        .then((response) => {
            console.log("Réponse API :", response.data);
            setData(response.data); 
        })
        .catch((error) => console.error("Erreur API :", error));
    }, []);

    

    return (
        <div className="container">
            <h1>Tout les héros :</h1>
            {filteredData ? (
                filteredData.map((hero) => (
                    <div key={hero.id} className="hero-card">
                        <p><strong>Nom :</strong> {hero.name}</p>
                        <p><strong>Sexe :</strong> {hero.sexe}</p>
                        <p><strong>Planète :</strong> {hero.Planet}</p>
                        <p><strong>Description :</strong> {hero.description}</p>
                        <p><strong>Pouvoirs :</strong></p>
                        <ul>
                            {hero.power.map((power, index) => (
                                <li key={index}>{power}</li>
                            ))}
                        </ul>
                        <p><strong>Équipe:</strong> {hero.Team}</p>
                        <p><strong>Ville:</strong> {hero.City}</p>
                        <p><strong>Gadgets:</strong></p>
                        <ul>
                            {hero.gadget.map((weapon, index) => (
                                <li key={index}>{weapon}</li>
                            ))}
                        </ul>
                        <p><strong>Véhicule:</strong> {hero.vehicle}</p>
                    </div>
                ))
            ) : (
                <p>Chargement...</p>
            )}
        </div>
    );
}
