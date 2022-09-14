import React from "react"
import { getQueryClient } from "../helpers/query"
import { useErrorContext } from "./errorContext"
import { QueryClientProvider } from "react-query"

const QueryContext= ({ children }) => {
    const [, setError] = useErrorContext()
    const client = getQueryClient(setError)

    return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}

export default QueryContext