import { useState, useEffect } from "react";
import axios from "axios";

export default function DeleteHero() {
    const [data, setData] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [heroToDelete, setHeroToDelete] = useState(null);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/heroes")
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error("Erreur lors de la récupération des héros", error);
            });
    }, []);

    const handleConfirmDelete = (id) => {
        setHeroToDelete(id);
        setIsModalOpen(true);
    };


    const handleDelete = async () => {
        try {
            const response = await axios.delete(`http://127.0.0.1:8000/api/heroes/${heroToDelete}`);
            console.log("Héros supprimé :", response.data);
            setData(prevData => prevData.filter(hero => hero.id !== heroToDelete));
            setIsModalOpen(false);
        } catch (error) {
            console.error("Erreur lors de la suppression du héros :", error);
            alert("Erreur lors de la suppression du héros.");
        }
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        setHeroToDelete(null);
    };

    return (
        <div>
            <h1>Supprimer un Héros :</h1>
            {data ? (
                data.map((hero) => (
                    <div
                        key={hero.id}
                        style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px", cursor: "pointer" }}
                        onClick={() => handleConfirmDelete(hero.id)}
                    >
                        <p><strong>Nom :</strong> {hero.name}</p>
                    </div>
                ))
            ) : (
                <p>Chargement...</p>
            )}

            {isModalOpen && (
                <div style={modalStyles.overlay}>
                    <div style={modalStyles.modal}>
                        <h2>Êtes-vous sûr de vouloir supprimer ce héros ?</h2>
                        <div>
                            <button onClick={handleDelete} style={modalStyles.button}>Oui</button>
                            <button onClick={handleCancel} style={modalStyles.button}>Non</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}


const modalStyles = {
    overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    modal: {
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "5px",
        textAlign: "center",
        width: "300px",
    },
    button: {
        padding: "10px 20px",
        margin: "10px",
        backgroundColor: "#4CAF50",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
    },
};
