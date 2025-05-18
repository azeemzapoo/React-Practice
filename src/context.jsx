import { createContext, useState } from "react";

export const Authcontext = createContext(null)

export const ContextProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const logout = () => {
        setUser(null)
    }

    return(
        <Authcontext.Provider value={{user, setUser, logout}}>
            {children}
        </Authcontext.Provider>
    )
} 