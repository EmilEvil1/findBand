import {useMutation} from "react-query"
import homeService from "../services/HomeServices"

export const useSearchForMembers = () => useMutation("SearchForMembers", homeService.searchForMembers)