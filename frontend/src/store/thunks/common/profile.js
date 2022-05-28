import service from "../../../helpers/api";
import {getProfileData, saveErrorStatusCode} from "../../action/action";

export const getUserProfileData = () => dispatch => {
    return service.get('profile')
        .then(response => dispatch(getProfileData(response)))
        .catch(err => dispatch(saveErrorStatusCode(err.response.status)))
}

export const sendNewUserProfileData = data => dispatch => {
    return service.put('profile', {...data})
        .catch(err => dispatch(saveErrorStatusCode(err.response.status)))
}

export const sendNewUserProfilePhoto = data => dispatch => {
    return service.post('profile', {...data})
        .then(() => dispatch(getUserProfileData))
        .catch(err => dispatch(saveErrorStatusCode(err.response.status)))
}