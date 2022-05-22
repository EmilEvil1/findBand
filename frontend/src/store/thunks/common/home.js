import service from "../../../helpers/api";
import {saveErrorStatusCode, searchByMusicians} from "../../action/action";

export const makeSearchForMembers = ( data ) => dispatch => {
    return service.post('searchForMembers ', {...data})
        .then(response => dispatch(searchByMusicians(response)))
        .catch(err => dispatch(saveErrorStatusCode(err.response.status)))
}
