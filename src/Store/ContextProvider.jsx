import React, { useState, useEffect } from 'react';
import { UserContext } from './UserContext';

function ContextProvider({ children }) {
    const [SavedCocktail, setSavedCocktail] = useState(() => {
        // Initialize from localStorage if available
        const storedData = localStorage.getItem('SavedCocktail');
        return storedData ? JSON.parse(storedData) : [];
    });

    // Update localStorage whenever SavedCocktail changes
    useEffect(() => {
        localStorage.setItem('SavedCocktail', JSON.stringify(SavedCocktail));
    }, [SavedCocktail]);

    return (
        <UserContext.Provider value={{ SavedCocktail, setSavedCocktail }}>
            {children}
        </UserContext.Provider>
    );
}

export default ContextProvider;
