import {GET_INFO} from "../types/types";

const initialState = {
    info: {},
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_INFO:
            return {...state, info: action.payload}
        default:
            return state;
    }
}

