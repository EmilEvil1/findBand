import {
    ERROR_CODE,
    GET_INSTRUMENT_LIST,
    GET_PROFILE_DATA,
    REGIONS_LIST, SAVE_PROFILE_DATA,
    SEARCH_MUSICIAN,
    SEND_NEW_PASSWORD,
    SET_QUOTES
} from "../types/types";


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

// Profile

export const getProfileData = payload => {
    return {
        type: GET_PROFILE_DATA,
        payload
    }
}

export const saveProfileData = payload => {
    return {
        type: SAVE_PROFILE_DATA,
        payload
    }
}

// Error handling

export const saveErrorStatusCode = payload => {
    return {
        type: ERROR_CODE,
        payload
    }
}
