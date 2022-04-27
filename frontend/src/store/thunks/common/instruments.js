import service from "../../../helpers/api";
import {getInstrumentList} from "../../action/action";

export const getInstrumentsListData = () => dispatch => {
    return service.get('instruments', {
    })
        .then((response) => dispatch(getInstrumentList(response)))
        .catch((err) => console.log(err))
}