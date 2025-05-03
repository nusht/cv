
// pages/index.js

import { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCTi83irgRaHDljplyKjf-p8UcYVXwqcdY",
    authDomain: "heysnu1.firebaseapp.com",
    projectId: "heysnu1",
    storageBucket: "heysnu1.firebasestorage.app",
    messagingSenderId: "880305695748",
    appId: "1:880305695748:web:1f958f1ec3a7badd5cd951"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function Home() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSignUp = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            // Redirect to protected page on signup
            window.location.href = '/protected';
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            // Redirect to protected page on login
            window.location.href = '/protected';
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Login / Sign Up</h2>
            <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email" 
                required 
            />
            <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password" 
                required 
            />
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleSignUp}>Sign Up</button>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </div>
    );
}