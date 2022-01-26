import {getListRegion} from "../action/action";

export const getRegionList = () => dispatch => {
    return fetch('http://ec2-3-14-79-158.us-east-2.compute.amazonaws.com/api/v1/regions', {
    })
        .then((response) => response.json())
        .then((response) => dispatch(getListRegion(response)))
        .catch((err) => {
            console.log(err);
        });
}

export const sendSignInFormData = ( data, setCookie ) => {
    return fetch('http://ec2-3-14-79-158.us-east-2.compute.amazonaws.com/api/v1/authenticate ', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
        .then((response) => response.json())
        .then((response) => {
            if (response.token) setCookie('access_token', response.token);
        })
        .catch((err) => {
            console.log(err);
        });
}

export const sendSignUpFormData = ( data, setCookie) => {
    return fetch('http://ec2-3-14-79-158.us-east-2.compute.amazonaws.com/api/v1/register ', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
        .then((response) => response.json())
        .then((response) => {
            if (response.data.token) setCookie('access_token', response.data.token);
        })
        .catch((err) => {
            console.log(err);
        });
}

export const sendPassword = ( data ) => {
    return fetch('http://ec2-3-14-79-158.us-east-2.compute.amazonaws.com/api/v1/resetPassword', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
        .then((response) => response.json())
        .catch((err) => {
            console.log(err);
        });
}