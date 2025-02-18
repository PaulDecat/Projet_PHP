import React from "react";
import Register from "./Register";
import "./Home.css";

export default function Home() {
    return (
        <div>
            <h1>Bienvenue sur mon site !</h1>
            <p>Découvrez tous nos héros.</p>
            <Register />
        </div>
    );
}
