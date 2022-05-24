import service from "../../../helpers/api";
import {saveErrorStatusCode, searchByMusicians} from "../../action/action";

export const makeSearchForMembers = ( data, history ) => dispatch => {
    return service.post('searchForMembers ', {...data})
        .then(response => dispatch(searchByMusicians(response)))
        .then(() => history.push('/search'))
        .catch(err => dispatch(saveErrorStatusCode(err.response.status)))
}
