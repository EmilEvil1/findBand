import {GET_INSTRUMENT_LIST, REGIONS_LIST, SEARCH_MUSICIAN, SEND_NEW_PASSWORD, SET_QUOTES} from "../types/types";


export const getListRegion = (payload) => {
    return {
        type: REGIONS_LIST,
        payload
    }
}

export const getInstrumentList = payload => {
    return {
        type: GET_INSTRUMENT_LIST,
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

export const searchByMusicians = payload => {
    return {
        type: SEARCH_MUSICIAN,
        payload
    }
}

// Create new password

export const createPassword = payload => {
    return {
        type: SEND_NEW_PASSWORD,
        payload
    }
}