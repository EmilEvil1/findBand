import {getListRegion} from "../action/action";

export const getRegionList = () => dispatch => {
    return fetch('http://ec2-3-14-79-158.us-east-2.compute.amazonaws.com/api/v1/regions', {
    })
        .then((response) => response.json())
        .then((response) => dispatch(getListRegion(response)))
        .catch((err) => {
            console.log(err);
            throw new Error(err)
        });
}

export const sendSignInFormData = ( data ) => dispatch => {
    return fetch('http://ec2-3-14-79-158.us-east-2.compute.amazonaws.com/api/v1/authenticate ', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
        .then((response) => response.json())
        .then((response) => { response.token ?  document.cookie = `access_token=${response.token}`: document.cookie = `access_token=''`})
        .catch((err) => {
            console.log(err);
            throw new Error(err)
        });
}

export const sendSignUpFormData = ( data ) => dispatch => {
    return fetch('http://ec2-3-14-79-158.us-east-2.compute.amazonaws.com/api/v1/register ', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
        .then((response) => response.json())
        .then((response) => { response.data.token ?  document.cookie = `access_token=${response.data.token}`: document.cookie = `access_token=''`})
        .catch((err) => {
            console.log(err);
            throw new Error(err)
        });
}