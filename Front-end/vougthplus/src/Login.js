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
            const responseU = await axios.post("http://127.0.0.1:8000/api/users", formUser);
            console.log("Login Success:", responseU.data);

            setFormUser({
                email: "",
                password: "",
            });

            alert("Connexion réussie !");
        } catch (error) {
            console.error("Erreur lors de la connexion :", error.response?.data || error);
            alert("Erreur lors de la connexion. Vérifiez vos identifiants.");
        }
    };

    return (
        <div style={{ maxWidth: "300px", margin: "auto", textAlign: "center" }}>
            <h1>Login</h1>
            <form onSubmit={handleSubmitU}>
                <div>
                    <label htmlFor="email">Email :</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formUser.email}
                        onChange={handleChangeU}
                        placeholder="Email"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Mot de passe :</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formUser.password}
                        onChange={handleChangeU}
                        placeholder="Password"
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}
