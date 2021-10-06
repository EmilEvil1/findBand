import {getinfo} from "../action/action";


export const getTestInformation = (url) => dispatch => {
    const link = url;
    return fetch(link)
        .then((res) => res.json())
        .then((json) => dispatch(getinfo(json)))
        .catch((err) => {
            console.log(err);
            throw new Error(err)
        });
}