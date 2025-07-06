import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Authcontext } from "../context"

export const Navigation = () => {
    const { user, logout } = useContext(Authcontext)
    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
        navigate("/")
    }

    return (
        <nav className="navigation">
            <div className="nav-brand">
                <Link to="/">My App</Link>
            </div>
            <div className="nav-links">
                {user ? (
                    <>
                        <Link to="/dashboard">Dashboard</Link>
                        <button onClick={handleLogout}>Logout</button>
                    </>
                ) : (
                    <button>
                        <Link to="/login">Login</Link>
                    </button>
                    
                )}
            </div>
        </nav>
    )
} 