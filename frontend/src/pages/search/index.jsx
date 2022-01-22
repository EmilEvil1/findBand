import React from 'react';
import {Box, Grid} from "@material-ui/core";
import Sidebar from "../../components/common/Sidebar";
import {useStyles} from "../style";
import FoundMusician from "../../components/common/FoundMusician";

const SearchResult = (props) => {

    const {} = props
    const classes = useStyles()

    return (
        <Grid className={classes.layout}>
            <Sidebar />
            <Box className={classes.container}><FoundMusician /></Box>
        </Grid>
    );
};

export default SearchResult;