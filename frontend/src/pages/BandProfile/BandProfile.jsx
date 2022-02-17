import React, {useEffect} from 'react';
import {useCookies} from "react-cookie";
import {useHistory} from "react-router-dom";
import {Container, Grid, Typography} from "@material-ui/core";
import {useStyles} from "../style";
import {checkTokenValidate} from "../../helpers/utils";
import {darkBlue} from "../../helpers/styles";
import Sidebar from "../../components/common/Sidebar/Sidebar";

const BandProfile = () => {

    const classes = useStyles()
    const history = useHistory()
    const [token, setToken] = useCookies(['access_token'])

    useEffect(() => {
        if (checkTokenValidate(token.access_token)) history.push('/Auth')
    }, [token.access_token])

    return (
        <Grid style={{background: darkBlue}} className={classes.content}>
            <Sidebar />
            <Container>
                <Typography color={'white'} variant={'h4'}>BandProfile</Typography>
            </Container>


        </Grid>
    );
};

export default BandProfile;