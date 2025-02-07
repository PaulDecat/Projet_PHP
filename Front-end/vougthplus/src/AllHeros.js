import { useState, useEffect } from "react";
import axios from "axios";

export default function AllHeros() {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/heros")
        .then((response) => {
            console.log("Réponse API :", response.data);
            setData(response.data); 
        })
        .catch((error) => console.error("Erreur API :", error));
    }, []);
    

    return (
        <div>
            <h1>Tout les héros :</h1>
            {data ? (
                data.map((hero) => (
                    <div key={hero.id} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
                        <p><strong>Nom :</strong> {hero.name}</p>
                        <p><strong>Sexe :</strong> {hero.sexe}</p>
                        <p><strong>Planète :</strong> {hero.planet}</p>
                        <p><strong>Description :</strong> {hero.description}</p>
                        <p><strong>Pouvoirs :</strong> {hero.powers}</p>
                        <p><strong>Équipe :</strong> {hero.team}</p>
                        <p><strong>Ville :</strong> {hero.city}</p>
                        <p><strong>Gadgets :</strong> {hero.gadgets}</p>
                        <p><strong>Véhicule :</strong> {hero.vehicle}</p>
                    </div>
                ))
            ) : (
                <p>Chargement...</p>
            )}
        </div>
    );
    
}

