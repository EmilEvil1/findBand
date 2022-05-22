import service from "../../../helpers/api";
import {getProfileData, saveErrorStatusCode} from "../../action/action";

export const getUserProfileData = () => dispatch => {
    return service.get('profile')
        .then(response => dispatch(getProfileData(response)))
        .catch(err => dispatch(saveErrorStatusCode(err.response.status)))
}