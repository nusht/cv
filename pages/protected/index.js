
// pages/protected/index.js

import { useEffect } from 'react';
import { auth } from '../../firebase';
import { onAuthStateChanged } from 'firebase/auth';

const ProtectedPage = () => {
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (!user) {
                // Redirect to login page if not authenticated
                window.location.href = '/';
            }
        });

        return () => unsubscribe();
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <h2>Protected Page</h2>
            <p>You are logged in!</p>
            <button onClick={() => auth.signOut().then(() => window.location.href = '/')}>
                Logout
            </button>
        </div>
    );
};

export default ProtectedPage;