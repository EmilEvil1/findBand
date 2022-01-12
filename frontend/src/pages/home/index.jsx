import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useCookies} from "react-cookie";
import {Box, Grid} from "@material-ui/core";
import {useStyles} from "./style";
import Sidebar from "../../components/common/Sidebar";
import Musicians from "../../components/sliders/Musicians";
import Main from "../../components/content/Main";
import {Redirect} from "react-router-dom";


const Home = () => {

    // const info = useSelector(({ state }) => state.info);
    const dispatch = useDispatch()
    const classes = useStyles()
    const [token, setToken] = useCookies(['access_token']);


    const emptyToken = Object.keys(token).length

    return (
        <Grid>
            {!emptyToken ? <Redirect to={'/auth'} /> : (
                <Grid className={classes.content}>
                    <Sidebar />
                    <Musicians />
                    <Box className={classes.container}>
                        <Main />
                    </Box>
                </Grid>
            )}
        </Grid>
    )
}

export default Home;
