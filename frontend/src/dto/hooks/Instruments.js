import {useQuery} from "react-query";
import instrumentsService from "../services/InstrumentsServices";

export const useInstrumentsList = () => useQuery("Instruments", instrumentsService.getInstruments)