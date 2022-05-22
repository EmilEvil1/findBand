import React, {useEffect} from 'react';
import {useCookies} from "react-cookie";
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {Box, Container, Grid} from "@material-ui/core";
import Sidebar from "../Sidebar/Sidebar";
import {useStyles} from "./style";

const Layout = ({ children }) => {

    const classes = useStyles()
    const history = useHistory()
    const [token, , removeToken] = useCookies(['access_token'])
    const errorStatusCode = useSelector(({ state }) => state.error)

    useEffect(() => {
        switch (errorStatusCode) {
            case 404:
                history.push('/404')
                break
            case 500:
                history.push('/500')
                break
            case 401:
                removeToken("access_token")
                history.push('/auth')
                break
            default:
                console.log('hello')
        }

    }, [history, token.access_token, errorStatusCode])

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