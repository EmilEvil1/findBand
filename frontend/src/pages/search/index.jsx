import React from 'react';
// import {useDispatch} from "react-redux";
import {Box, Container, Grid} from "@material-ui/core";
import Sidebar from "../../components/common/Sidebar";
import {useStyles} from "./style";
import ResultRow from "../../components/common/ResultRow";

const SearchResult = (props) => {

    const {} = props
    const classes = useStyles()
    // const dispatch = useDispatch()

    return (
        <Grid>
            <Sidebar />
            <Container>
                <Box className={classes.wrapper}>
                    <ResultRow />
                </Box>
            </Container>
        </Grid>
    );
};

export default SearchResult;