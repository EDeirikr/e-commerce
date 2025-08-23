import { createContext, useState } from "react";

export const Contexto = createContext()

export const ContextoProvider = ({children}) => {
    const [data, setData] = useState('0')

    const value = {data}

    return (
        <Contexto.Provider value={value}>
            {children}
        </Contexto.Provider>
    )
}