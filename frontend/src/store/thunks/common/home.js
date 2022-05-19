import service from "../../../helpers/api";
import {searchByMusicians} from "../../action/action";

export const makeSearchForMembers = ( data ) => dispatch => {
    return service.post('searchForMembers ', {...data})
        .then(response => dispatch(searchByMusicians(response)))
        .catch(err => console.log(err))
}
