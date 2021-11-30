import {GET_INFO, REGIONS_LIST} from "../types/types";

const initialState = {
    info: {},
    regions: {}
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_INFO:
            return {...state, info: action.payload}
        case REGIONS_LIST:
            return {...state, regions: action.payload}
        default:
            return state;
    }
}

