import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    const getCsrfToken = async () => {
        await fetch('http://127.0.0.1:8000/sanctum/csrf-cookie', {
            method: 'GET',
            credentials: 'include',
        });
    };
    

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        await getCsrfToken();
    
        const response = await fetch('http://127.0.0.1:8000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({
                name,
                email,
                password,
                password_confirmation: passwordConfirmation,
            }),
        });
    
        const responseData = await response.json();
        if (!response.ok) {
            console.error('Registration failed', responseData);
        } else {
            console.log('User registered successfully');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <div>
                <label>Confirm Password:</label>
                <input type="password" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} required />
            </div>
            <button type="submit">Register</button>
            <p>
                Already have an account? <Link to="/login">Login</Link>
            </p>
        </form>
    );
}
