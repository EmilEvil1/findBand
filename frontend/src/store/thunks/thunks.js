import {getInfo, getListRegion, sendSignInForm, sendSignUpForm} from "../action/action";
import {sendGetRequest, sendPostRequest} from "../../helpers/api";

export const getTestInfo = sendGetRequest('https://jsonplaceholder.typicode.com/users', getInfo)
export const getTestingInfo = sendGetRequest ('http://ec2-3-14-79-158.us-east-2.compute.amazonaws.com/api/v1/regions', getListRegion)
export const signInForm = sendPostRequest ('http://ec2-3-14-79-158.us-east-2.compute.amazonaws.com/api/v1/authenticate ', sendSignInForm)
export const signUpForm = sendPostRequest ('http://ec2-3-14-79-158.us-east-2.compute.amazonaws.com/api/v1/register ', sendSignUpForm)