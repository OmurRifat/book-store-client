import React, { createContext, useState } from 'react';
import { getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config'

export const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});

    const googleSignIn = (googleProvider) => {
        return signInWithPopup(auth, googleProvider);
    }
    const googleLogOut = () => {
        return signOut(auth);
    }

    const authInfo = { user, setUser, googleSignIn, googleLogOut }
    return (
        <AuthContext.Provider value={ authInfo }>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;