import {getListRegion, searchByMusicians} from "../action/action";
import service from "../../helpers/api";

export const getRegionList = () => dispatch => {
    return service.get('/api/v1/regions', {
    })
        .then((response) => dispatch(getListRegion(response)))
        .catch((err) => {
            console.log(err);
        });
}

export const sendSignInFormData = ( data, setCookie ) => {
    return service.post('/api/v1/authenticate ', {...data})
        .then((response) => {
            if (response.token) setCookie('access_token', response.token);
        })
        .catch((err) => {
            console.log(err);
        });
}

export const sendSignUpFormData = ( data, setCookie) => {
    return service.post('/api/v1/resetPassword ', {...data})
        .then((response) => {
            if (response.data.token) setCookie('access_token', response.data.token);
        })
        .catch((err) => {
            console.log(err);
        });
}

export const sendPassword = ( data ) => {
    return fetch('http://ec2-3-14-79-158.us-east-2.compute.amazonaws.com/resetPassword', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
        .then((response) => response.json())
        .catch((err) => {
            console.log(err);
        });
}

export const makeSearchForMembers = ( data ) => dispatch => {
    console.log('values', data)
    return service.post('/api/v1/searchForMembers ', {...data})
        .then((response) => {
            dispatch(searchByMusicians(response))
        })
        .catch((err) => {
            console.log(err);
        });
}
