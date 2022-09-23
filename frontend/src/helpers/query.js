import { MutationCache, QueryCache, QueryClient } from "react-query"

let queryClient

export const handleRemoveQuery = (name) => {
    queryClient.removeQueries(name, {
        exact: true,
    })
}

export const getQueryClient = (errorHandle) => {
    if (queryClient) {
        return queryClient
    }
    const onError = (error) => {
        const response = (error).response
        errorHandle(response)
    }

    queryClient = new QueryClient({
        defaultOptions: {
            queries: { refetchOnWindowFocus: false, staleTime: Infinity, retry}},
            queryCache: new QueryCache({ onError }),
            mutationCache: new MutationCache({ onError })
        }
    )
    return queryClient
}

const retry = (count, error) => {
    const status = error.response.status
    switch (status) {
        case 401:
        case 403:
            return false
        default:
            return count < 5
    }
}

