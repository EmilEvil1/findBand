import React from "react"
import { QueryClientProvider } from "react-query"
import { getQueryClient } from "../helpers/query"
import { useErrorContext } from "./errorContext"

const QueryContext= ({ children }) => {
    const [, setError] = useErrorContext()
    const client = getQueryClient(setError)

    return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}

export default QueryContext