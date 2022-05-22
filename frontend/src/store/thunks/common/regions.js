import service from "../../../helpers/api";
import {getListRegion, saveErrorStatusCode} from "../../action/action";

export const getRegionList = () => dispatch => {
    return service.get('regions')
        .then((response) => dispatch(getListRegion(response)))
        .catch(err => dispatch(saveErrorStatusCode(err.response.status)))
}