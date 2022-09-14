import { useQuery} from "react-query";
import regionsService from "../services/RegionsServices";

export const useRegionList = () => useQuery("Regions", regionsService.getRegions)