import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { Authcontext } from "../context"

export const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const { setUser } = useContext(Authcontext)

    const handleName = (e) => {
        setUsername(e.target.value);
    }

    const handlePass = (e) => {
        setPassword(e.target.value)
    }

    const checkAuth = () => {
        console.log("Checking auth...", { username, password });
        
        if(username === "admin" && password === "admin"){
            console.log("Login successful, setting user...");
            setUser({name: username});
            console.log("Navigating to home...");
            navigate("/");
        } else {
            console.log("Login failed");
            alert("you are not loggedin")
            navigate("/login")
        }
    }

    return(
        <div>
            <h1>this is login</h1>
            <input onChange={handleName} type="text" name="username"/>
            <input onChange={handlePass} type="password" name="password"/>
            <button onClick={checkAuth}>Login</button>
        </div>
    )
} 