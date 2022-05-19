import service from "../../../helpers/api";
import {getListRegion} from "../../action/action";

export const getRegionList = () => dispatch => {
    return service.get('regions', {
    })
        .then((response) => dispatch(getListRegion(response)))
        .catch((err) => console.log(err))
}