import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Box, Container, Grid} from "@material-ui/core";
import {getTestInfo} from "../../store/thunks/thunks";
import {useStyles} from "../../components/common/Sidebar/style";
import Sidebar from "../../components/common/Sidebar";
import Musicians from "../../components/sliders/Musicians";
import Main from "../../components/content/Main";

const Home = () => {

    const info = useSelector(({ state }) => state.info);
    const dispatch = useDispatch()
    const classes = useStyles()

    useEffect(() => {
        dispatch(getTestInfo)
    }, [])

    return (
        <Grid className={classes.content}>
            <Sidebar />
            <Musicians />
            <Container>
                <Box className={classes.searchPanelWrapper}>
                  <Main />
                </Box>
            </Container>
        </Grid>
    );
};

export default Home;
