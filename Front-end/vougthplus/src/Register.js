import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [error, setError] = useState(null); // To manage errors

    const getCsrfToken = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/sanctum/csrf-cookie', {
                method: 'GET',
                credentials: 'include',
            });
            if (!response.ok) {
                throw new Error('Failed to fetch CSRF token');
            }
        } catch (err) {
            console.error(err);
            setError('Error fetching CSRF token');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Get CSRF token first
        await getCsrfToken();

        const csrfTokenCookie = document.cookie.split('; ').find(row => row.startsWith('XSRF-TOKEN'));
        if (!csrfTokenCookie) {
            console.error('CSRF token not found');
            setError('CSRF token not found');
            return;
        }

        const csrfToken = csrfTokenCookie.split('=')[1];

        try {
            const response = await fetch('http://127.0.0.1:8000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'X-XSRF-TOKEN': csrfToken,
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
                setError(responseData.message || 'Registration failed');
            } else {
                console.log('User registered successfully');
                setError(null); // Clear error on success
            }
        } catch (err) {
            console.error('Error during registration:', err);
            setError('Error during registration');
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
