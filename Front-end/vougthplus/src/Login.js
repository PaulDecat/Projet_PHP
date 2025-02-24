<<<<<<< HEAD
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
=======
nov/Projet_PHP/Front-end/vougthplus/src/Login.js
import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
    const data = await response.json();
    if (response.ok) {
      localStorage.setItem('token', data.token);
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
>>>>>>> noe
