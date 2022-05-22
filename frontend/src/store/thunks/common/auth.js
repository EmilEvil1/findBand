import service from "../../../helpers/api";
import {createPassword, saveErrorStatusCode} from "../../action/action";

export const sendSignInFormData = ( data, setCookie ) => dispatch => {
    return service.post('authenticate ', { ...data })
        .then((response) => {
            if (response.token) setCookie('access_token', response.token)
        })
        .catch(err => dispatch(saveErrorStatusCode(err.response.status)))
}

export const sendSignUpFormData = ( data, setCookie) => dispatch => {
    return service.post('register ', { ...data })
        .then((response) => response.data.token && setCookie('access_token', response.data.token)
        .catch(err => dispatch(saveErrorStatusCode(err.response.status))))
}

export const sendPassword = data => dispatch => {
    return service.post('resetPassword', {...data})
        .catch(err => dispatch(saveErrorStatusCode(err.response.status)))
}

export const createNewPassword = ( data, history ) => dispatch => {
    return service.post('createNewPassword ', {...data})
        .then(response => dispatch(createPassword(response)))
        .then(() => history.push('/'))
        .catch(err => dispatch(saveErrorStatusCode(err.response.status)))
}
