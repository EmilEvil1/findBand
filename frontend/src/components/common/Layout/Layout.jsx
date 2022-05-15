import React, {useEffect} from 'react';
import {useCookies} from "react-cookie";
import {useHistory} from "react-router-dom";
import {Box, Container, Grid} from "@material-ui/core";
import Sidebar from "../Sidebar/Sidebar";
import {useStyles} from "./style";
import {checkTokenValidate} from "../../../helpers/utils";

const Layout = ({ children }) => {

    const classes = useStyles()
    const [token] = useCookies(['access_token'])
    const history = useHistory()

    useEffect(() => {
        if (checkTokenValidate(token.access_token)) history.push('/auth')
    }, [history, token.access_token])

    return (
        <Grid className={classes.container}>
            <Sidebar />
            <Container>
                <Box className={classes.content}>
                    {children}
                </Box>
            </Container>

        </Grid>
    );
};

export default Layout;