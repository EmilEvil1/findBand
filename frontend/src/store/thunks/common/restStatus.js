import {saveRestStatus} from "../../action/action";

export const saveRestStatusCode = status => dispatch => {
    return dispatch(saveRestStatus(status))

}