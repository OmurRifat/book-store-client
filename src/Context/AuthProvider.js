import React, { createContext } from 'react';

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    return (
        <div>
            {
                children
            }
        </div>
    );
};

export default AuthProvider;