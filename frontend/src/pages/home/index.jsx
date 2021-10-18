import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Box, Container, Grid, Typography} from "@material-ui/core";
import {getTestInformation} from "../../store/thunks/thunks";
import {useStyles} from "../../components/common/Sidebar/style";
import Sidebar from "../../components/common/Sidebar";
import Musicians from "../../components/sliders/Musicians";
import SearchBandPanel from "../../components/forms/search";


const Home = () => {

    const info = useSelector(({ state }) => state.info);
    const dispatch = useDispatch()
    const classes = useStyles()
    console.log('info', info)

    useEffect(() => {
        dispatch(getTestInformation('https://jsonplaceholder.typicode.com/users'))
    }, [])

    return (

        <Box className={classes.content}>
            <Sidebar />
            <Musicians />
            <Container>
                <Box className={classes.searchPanelWrapper}>
                    <SearchBandPanel />
                </Box>
            </Container>
        </Box>
    );
};

export default Home;
