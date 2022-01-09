import React, { createContext, useState } from 'react'

// Create context
export const AuthContext = createContext({
    auth: undefined,
    login: () => { },
    logout: () => { },
})

// Export Context
export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(undefined);

    // Actions
    const login = (userData) =>
        setAuth(userData)

    const logout = () =>
        setAuth(undefined)


    // export values
    const valueContext = {
        auth,
        login,
        logout
    }

    return (
        <AuthContext.Provider
            value={valueContext}
        >
            {children}
        </AuthContext.Provider>
    )
}