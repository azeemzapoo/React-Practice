import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);


    // SAVE AUTH STATUS AND USER DATA TO LOCAL STORAGE
    useEffect(() => {
        const authStatus = localStorage.getItem('isAuthenticated');
        const userData = localStorage.getItem('user');
        if (authStatus === 'true' && userData) {
            setIsAuthenticated(true);
            setUser(JSON.parse(userData));
        }
    }, []);


    // LOGIN FUNCTION AND SAVE TO LOCAL STORAGE
    const login = (userData) => {
        setIsAuthenticated(true);
        setUser(userData);
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('user', JSON.stringify(userData));
    };


    // LOGOUT FUNCTION AND CLEAR LOCAL STORAGE
    const logout = () => {
        setIsAuthenticated(false);
        setUser(null);
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('user');
        // Clear visited and wishlist data on logout
        localStorage.removeItem('visitedCountries');
        localStorage.removeItem('wishlistCountries');
    };

    // RETURN AUTH CONTEXT

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}; 