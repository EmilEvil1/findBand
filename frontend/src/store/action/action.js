import {GET_INFO, REGIONS_LIST} from "../types/types";


export const getInfo = (payload) => {
    return {
        type: GET_INFO,
        payload
    }
}

export const getListRegion = (payload) => {
    return {
        type: REGIONS_LIST,
        payload
    }
}