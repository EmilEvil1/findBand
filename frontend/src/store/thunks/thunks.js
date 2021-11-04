import {getinfo} from "../action/action";
import {sendGetRequest} from "../../helpers/api";

export const getTestInfo = sendGetRequest('https://jsonplaceholder.typicode.com/users', getinfo)