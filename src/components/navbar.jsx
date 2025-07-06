import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import './Navbar.css'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const navigate = useNavigate()
    const { isAuthenticated, logout } = useAuth()

    const handleLogout = () => {
        logout()
        setIsMenuOpen(false)
        navigate('/login')
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">My App</Link>
            </div>
            <div className="menu-icon" onClick={toggleMenu}>
                ☰
            </div>
            <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                <li>
                    <Link to="/" onClick={() => setIsMenuOpen(false)}>All Countries</Link>
                </li>
                {isAuthenticated && (
                    <>
                        <li>
                            <Link to="/visited" onClick={() => setIsMenuOpen(false)}>Visited</Link>
                        </li>
                        <li>
                            <Link to="/wishlist" onClick={() => setIsMenuOpen(false)}>Wishlist</Link>
                        </li>
                    </>
                )}
                {isAuthenticated ? (
                    <li>
                        <button onClick={handleLogout} className="nav-button">Logout</button>
                    </li>
                ) : (
                    <li>
                        <Link to="/login" onClick={() => setIsMenuOpen(false)}>Login</Link>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;

