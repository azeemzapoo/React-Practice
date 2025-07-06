import React, { useState, useEffect } from 'react';
import CountryCard from './countrycard';
import './countries.css';

export const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [wishlistCountries, setWishlistCountries] = useState([]);

    useEffect(() => {
        // Load visited and wishlist from localStorage
        const savedVisited = localStorage.getItem('visitedCountries');
        const savedWishlist = localStorage.getItem('wishlistCountries');
        if (savedVisited) setVisitedCountries(JSON.parse(savedVisited));
        if (savedWishlist) setWishlistCountries(JSON.parse(savedWishlist));

        fetch("https://restcountries.com/v3.1/all?fields=name,flags,capital,region")
        .then(response => response.json())
        .then(data =>{ 
            console.log(data);
            setCountries(data)} )
        .catch(error => console.error('Error fetching data:', error));
    }, []);

    console.log(countries);

    const handleAddToVisited = (country) => {
        const newVisited = [...visitedCountries, country];
        setVisitedCountries(newVisited);
        localStorage.setItem('visitedCountries', JSON.stringify(newVisited));
    };

    const handleAddToWishlist = (country) => {
        const newWishlist = [...wishlistCountries, country];
        setWishlistCountries(newWishlist);
        localStorage.setItem('wishlistCountries', JSON.stringify(newWishlist));
    };

    const handleRemoveFromVisited = (country) => {
        const newVisited = visitedCountries.filter(c => c.name.common !== country.name.common);
        setVisitedCountries(newVisited);
        localStorage.setItem('visitedCountries', JSON.stringify(newVisited));
    };

    const handleRemoveFromWishlist = (country) => {
        const newWishlist = wishlistCountries.filter(c => c.name.common !== country.name.common);
        setWishlistCountries(newWishlist);
        localStorage.setItem('wishlistCountries', JSON.stringify(newWishlist));
    };

    if (countries.length === 0) {
        return <div>Loading...</div>;
    }

    // const filteredCountries = countries.filter(country => 
    //     country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    // );

    const filteredCountries = countries.filter(country =>
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
      );
      

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };
    
    return (
        <div className="countries-container">
            <h1>Countries</h1>
            <input type="text" placeholder="Search for a country" onChange={handleSearch} value={searchTerm} />
            <button className="search-button">Search</button>
            <div className="countries-grid">
                {filteredCountries.map(country => (
                    <CountryCard 
                        key={country.name.common} 
                        country={country}
                        onAddToVisited={() => handleAddToVisited(country)}
                        onAddToWishlist={() => handleAddToWishlist(country)}
                        onRemoveFromVisited={() => handleRemoveFromVisited(country)}
                        onRemoveFromWishlist={() => handleRemoveFromWishlist(country)}
                        isVisited={visitedCountries.some(c => c.name.common === country.name.common)}
                        isWishlisted={wishlistCountries.some(c => c.name.common === country.name.common)}
                        isVisitedPage={false}
                        isWishlistPage={false}
                    />
                ))}
            </div>
        </div>
    );
};

export default Countries;
