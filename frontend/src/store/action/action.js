import {GET_INFO, REGIONS_LIST, SIGN_IN, SIGN_UP} from "../types/types";


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

export const sendSignInForm = (payload) => {
    return {
        type: SIGN_IN,
        payload
    }
}

export const sendSignUpForm = (payload) => {
    return {
        type: SIGN_UP,
        payload
    }
}