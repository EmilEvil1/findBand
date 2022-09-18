import {useQuery} from "react-query"
import homeService from "../services/HomeServices"

export const useSearchForMembers = (regionId, instrumentId) => useQuery("SearchForMembers",
    () => homeService.searchForMembers(regionId, instrumentId))