import {GET_INFO} from "../types/types";


export const getinfo = (payload) => {
    return {
        type: GET_INFO,
        payload
    }
}