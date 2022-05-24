import service from "../../../helpers/api";
import {getInstrumentList, saveErrorStatusCode} from "../../action/action";

export const getInstrumentsListData = () => dispatch => {
    return service.get('instruments')
        .then((response) => dispatch(getInstrumentList(response)))
        .catch(err => {
            err.response && dispatch(saveErrorStatusCode(err.response.status))
        })
}