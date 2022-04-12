import React, {useEffect} from 'react';
import {useCookies} from "react-cookie";
import {useHistory} from "react-router-dom";
import Authentication from "../../components/forms/Authentication/Authentication";
import {checkTokenValidate} from "../../helpers/utils";

const Auth = () => {

    const [token, ] = useCookies(['access_token'])
    const history = useHistory()

    useEffect(() => {
        if (!checkTokenValidate(token.access_token)) history.push('/')
    }, [history, token.access_token])

    return (<Authentication />)
};

export default Auth;