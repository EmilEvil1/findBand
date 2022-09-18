import React, { createContext, useContext, useState } from "react"

const ErrorHandling = createContext([undefined])

export const useErrorContext = () => useContext(ErrorHandling)

const ErrorContext = ({ children }) => {
    const errorState = useState()
    return <ErrorHandling.Provider value={errorState}>{children}</ErrorHandling.Provider>
}

export default ErrorContext
