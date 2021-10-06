import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Box, Container, Grid} from "@material-ui/core";
import {getTestInformation} from "../../store/thunks/thunks";
import Sidebar from "../../components/common/Sidebar";

const Home = () => {

    const info = useSelector(({ state }) => state.info);
    const dispatch = useDispatch()
    console.log('info', info)

    useEffect(() => {
        dispatch(getTestInformation('https://jsonplaceholder.typicode.com/users'))
    }, [])

    return (
        <Grid>
            <Container>
                <Box>
                    HOME PAGE
                    <Sidebar />
                </Box>
            </Container>
        </Grid>
    );
};

export default Home;
