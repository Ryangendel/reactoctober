import React, {createContext, useContext, useState} from "react";

const REIContext = createContext()

export const useREIContext = () => useContext(REIContext)

export const REIProvider = ({children}) =>{
    const [jackets, setJackets] = useState([{id:154144, brand:"patagonia", sizes:["s", "m", "xl"]},{id:216851, brand:"rei co op",sizes:["m","l","xl"] }])
    const working = true

    return(
        <REIContext.Provider value={{jackets, working, setJackets}}>
            {children}
        </REIContext.Provider>
    )

}