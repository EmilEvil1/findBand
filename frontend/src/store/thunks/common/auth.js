import service from "../../../helpers/api";
import {createPassword} from "../../action/action";

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

export const createNewPassword = ( data, history ) => dispatch => {
    return service.post('createNewPassword ', {...data})
        .then(response => dispatch(createPassword(response)))
        .then(() => history.push('/'))
        .catch(err => console.log(err))
}
