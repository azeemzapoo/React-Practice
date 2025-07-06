import React, { useState, useEffect } from 'react';
import CountryCard from '../components/countrycard';
import '../components/countries.css';

const Visited = () => {
    const [visitedCountries, setVisitedCountries] = useState([]);

    useEffect(() => {
        const savedVisited = localStorage.getItem('visitedCountries');
        if (savedVisited) {
            setVisitedCountries(JSON.parse(savedVisited));
        }
    }, []);

    const handleRemoveFromVisited = (country) => {
        const newVisited = visitedCountries.filter(c => c.name.common !== country.name.common);
        setVisitedCountries(newVisited);
        localStorage.setItem('visitedCountries', JSON.stringify(newVisited));
    };

    return (
        <div className="countries-container">
            <h1>Visited Countries</h1>
            {visitedCountries.length === 0 ? (
                <p>No countries marked as visited yet.</p>
            ) : (
                <div className="countries-grid">
                    {visitedCountries.map(country => (
                        <CountryCard 
                            key={country.name.common} 
                            country={country}
                            onRemoveFromVisited={() => handleRemoveFromVisited(country)}
                            isVisited={true}
                            isWishlisted={false}
                            isVisitedPage={true}
                            isWishlistPage={false}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Visited;