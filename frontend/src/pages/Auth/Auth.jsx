import React, {useEffect} from 'react'
import {useCookies} from "react-cookie"
import {useHistory} from "react-router-dom"
import Authentication from "../../components/forms/Authentication/Authentication"
import {checkTokenValidate} from "../../helpers/utils"
import {useErrorContext} from "../../context/errorContext";

const Auth = () => {

    const [token, ] = useCookies(['access_token'])
    const history = useHistory()

    const [error, setError] = useErrorContext()

    useEffect(() => setError(undefined), [error])

    useEffect(() => {
        if (!checkTokenValidate(token.access_token)) history.push('/')
    }, [token.access_token])

    return <Authentication />
}

export default Auth