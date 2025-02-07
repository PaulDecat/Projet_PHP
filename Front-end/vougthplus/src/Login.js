import { useState } from "react";
import axios from "axios";

export default function Login() {
    const [formUser, setFormUser] = useState({
        email: "",
        password: "",
    });

    const handleChangeU = (e) => {
        setFormUser({
            ...formUser,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmitU = async (e) => {
        e.preventDefault();
        console.log("Login Data:", formUser);
        try {
            const responseU = await axios.post("http://127.0.0.1:8000/api/login", formUser);
            setFormUser({
                user: "",
                password: "",
            });
        } catch (error) {
            console.error("Erreur lors de la connexion :", error);
            alert("Erreur lors de la connexion.");
        }
    };


    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmitU}>
                <label htmlFor="email">Email :</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    value={formUser.email}
                    onChange={handleChangeU}
                    placeholder="Email"
                />
                <label htmlFor="password">Mot de passe :</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formUser.password}
                    onChange={handleChangeU}
                    placeholder="Password"
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}



