import {getListRegion, searchByMusicians} from "../action/action";
import service from "../../helpers/api";

export const getRegionList = () => dispatch => {
    return service.get('regions', {
    })
        .then((response) => dispatch(getListRegion(response)))
        .catch((err) => console.log(err))
}

export const sendSignInFormData = ( data, setCookie ) => {
    return service.post('authenticate ', { ...data })
        .then((response) => {
            if (response.token) setCookie('access_token', response.token)
        })
        .catch(err => console.log(err))
}

export const sendSignUpFormData = ( data, setCookie) => {
    return service.post('register ', { ...data })
        .then((response) => {
            if (response.data.token) setCookie('access_token', response.data.token)
        })
        .catch(err => console.log(err))
}

export const sendPassword = ( data ) => {
    return service.post('resetPassword', {...data})
        .catch(err => console.log(err))
}

export const makeSearchForMembers = ( data ) => dispatch => {
    return service.post('searchForMembers ', {...data})
        .then(response => dispatch(searchByMusicians(response)))
        .catch(err => console.log(err))
}
