import './countrycard.css';
import { useAuth } from '../context/AuthContext';

const CountryCard = ({ 
    country, 
    onAddToVisited, 
    onAddToWishlist, 
    onRemoveFromVisited,
    onRemoveFromWishlist,
    isVisited, 
    isWishlisted,
    isVisitedPage,
    isWishlistPage
}) => {
    const { isAuthenticated } = useAuth();

    return (
        <div className="country-card">
            <img src={country.flags.png} alt={country.name.common} className="country-flag" />
            <h2 className="country-name">{country.name.common}</h2>
            <div className="country-info">
                <p><strong>Capital:</strong> {country.capital?.[0] || 'N/A'}</p>
                {/* <p><strong>Population:</strong> {country.population.toLocaleString()}</p> */}
                <p><strong>Region:</strong> {country.region}</p>
                {isAuthenticated && (
                    <>
                        {isVisitedPage ? (
                            <button 
                                className="visited-button remove"
                                onClick={onRemoveFromVisited}
                            >
                                Remove from Visited
                            </button>
                        ) : isWishlistPage ? (
                            <button 
                                className="wishlist-button remove"
                                onClick={onRemoveFromWishlist}
                            >
                                Remove from Wishlist
                            </button>
                        ) : (
                            <>
                                <button 
                                    className={`visited-button ${isVisited ? 'visited' : ''}`}
                                    onClick={onAddToVisited}
                                    disabled={isVisited}
                                >
                                    {isVisited ? 'Visited ✓' : 'Visited'}
                                </button>
                                <button 
                                    className={`wishlist-button ${isWishlisted ? 'wishlisted' : ''}`}
                                    onClick={onAddToWishlist}
                                    disabled={isWishlisted}
                                >
                                    {isWishlisted ? 'In Wishlist ✓' : 'Wishlist'}
                                </button>
                            </>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default CountryCard;