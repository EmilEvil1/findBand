import React from 'react';
import {Box, Container, Grid} from "@material-ui/core";
import Sidebar from "../../components/common/Sidebar";
import {useStyles} from "./style";
import ResultRow from "../../components/common/FoundMusician";

const SearchResult = (props) => {

    const {} = props
    const classes = useStyles()

    return (
        <Grid className={classes.layout}>
            <Sidebar />
            {/*<Container>*/}
                <Box className={classes.container}>
                    <ResultRow />
                </Box>
            {/*</Container>*/}
        </Grid>
    );
};

export default SearchResult;