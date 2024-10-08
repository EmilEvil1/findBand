import {useQuery} from "react-query"
import homeService from "../services/HomeServices"

export const useSearchForMembers = (regionId, instrumentId, value) => useQuery("SearchForMembers",
    () => homeService.searchForMembers(regionId, instrumentId), {staleTime: 0, variables: value})