import React from 'react';
import {Grid} from "@material-ui/core";
import Authentication from "../../components/forms/Authentication";
import {useCookies} from "react-cookie";
import {Redirect} from "react-router-dom";

const Auth = () => {

    const [token, setToken] = useCookies(['access_token'])

    return (
        <Grid>
            {/*{token !== '' ? <Redirect to={'/'} /> : <Authentication />}*/}
        </Grid>

    );
};

export default Auth;