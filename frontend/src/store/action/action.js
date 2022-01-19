import {GET_LIST, REGIONS_LIST, SET_QUOTES} from "../types/types";


export const getListRegion = (payload) => {
    return {
        type: REGIONS_LIST,
        payload
    }
}

// Home page

export const getQuotes = (payload) => {
    return {
        type: SET_QUOTES,
        payload
    }
}