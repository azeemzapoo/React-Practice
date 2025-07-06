import React, { useState, useEffect } from 'react';
import CountryCard from '../components/countrycard';
import '../components/countries.css';

const Wishlist = () => {
    const [wishlistCountries, setWishlistCountries] = useState([]);

    useEffect(() => {
        const savedWishlist = localStorage.getItem('wishlistCountries');
        if (savedWishlist) {
            setWishlistCountries(JSON.parse(savedWishlist));
        }
    }, []);

    const handleRemoveFromWishlist = (country) => {
        const newWishlist = wishlistCountries.filter(c => c.name.common !== country.name.common);
        setWishlistCountries(newWishlist);
        localStorage.setItem('wishlistCountries', JSON.stringify(newWishlist));
    };

    return (
        <div className="countries-container">
            <h1>Wishlist</h1>
            {wishlistCountries.length === 0 ? (
                <p>No countries in your wishlist yet.</p>
            ) : (
                <div className="countries-grid">
                    {wishlistCountries.map(country => (
                        <CountryCard 
                            key={country.name.common} 
                            country={country}
                            onRemoveFromWishlist={() => handleRemoveFromWishlist(country)}
                            isVisited={false}
                            isWishlisted={true}
                            isVisitedPage={false}
                            isWishlistPage={true}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Wishlist;