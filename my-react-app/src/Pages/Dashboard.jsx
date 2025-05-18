import { useContext, useEffect } from "react"
import { Authcontext } from "../context"
import { useNavigate } from "react-router-dom"
import { Navigation } from "../components/Navigation"

export const Dashboard = () => {
    const { user } = useContext(Authcontext)
    const navigate = useNavigate()

    useEffect(() => {
        if (!user) {
            navigate("/login")
        }
    }, [user, navigate])

    if (!user) {
        return null
    }

    return (
        <div>
            <Navigation />
            <div className="dashboard-content">
                <h1>Dashboard</h1>
                <div className="welcome-section">
                    <h2>Welcome to your dashboard, {user.Name}!</h2>
                    <p>This is your personal space where you can manage your account.</p>
                </div>
                <div className="dashboard-info">
                    <h3>Your Information</h3>
                    <p>Username: {user.Name}</p>
                </div>
            </div>
        </div>
    )
}