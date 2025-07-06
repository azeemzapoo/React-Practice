import { useContext } from "react"
import { Authcontext } from "../context"
import { Navigation } from "../components/Navigation"

export const Home = () => {
    const { user } = useContext(Authcontext)

    return (
        <div>
            <Navigation />
            <div className="home-content">
                <h1>Welcome to Our App</h1>
                {user ? (
                    <p>Welcome back, {user.Name}!</p>
                ) : (
                    <p>Please login to access your dashboard</p>
                )}
            </div>
        </div>
    )
}