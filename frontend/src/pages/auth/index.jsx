import React, {useEffect} from 'react';
import {useCookies} from "react-cookie";
import {useHistory} from "react-router-dom";
import Authentication from "../../components/forms/Authentication";
import {checkTokenValidate} from "../../helpers/utils";

const Auth = () => {

    const [token, setToken] = useCookies(['access_token'])
    const history = useHistory()

    useEffect(() => {
        if (!checkTokenValidate(token.access_token)) history.push('/')
    }, [])


    return (<Authentication />)
};

export default Auth;