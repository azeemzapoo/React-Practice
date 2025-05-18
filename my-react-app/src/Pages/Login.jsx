import { useContext, useState } from "react"
import { Authcontext } from "../context"
import { useNavigate } from "react-router-dom"
import { Navigation } from "../components/Navigation"

export const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const { user, login } = useContext(Authcontext)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()


        // if the condition is for only login for admin username and
        // admin password this is the code for that

        // if (username.trim() === "admin" && password.trim() === "admin") {
        //     login({
        //         Name: username
        //     })
        //     navigate("/dashboard")
        // } else {
        //     alert("wrong credentials")
        //     navigate("/login")
        // }



        if (username.trim() !== "" && password.trim() !== "") {
            login({
                Name: username
            })
            navigate("/dashboard")
        } else {
            alert("Please enter both username and password")
        }
    }

    const handleUsername = (e) => {
        setUsername(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    return (
        <div>
            <Navigation />
            <div className="login-content">
                <form onSubmit={handleSubmit} className="login-form">
                    <h1>Login</h1>
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={username}
                            onChange={handleUsername}
                            required
                            placeholder="Enter any username"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={handlePassword}
                            required
                            placeholder="Enter any password"
                        />
                    </div>
                    <button type="submit" className="login-button">Login</button>
                </form>
            </div>
        </div>
    )
}