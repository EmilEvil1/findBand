import React from 'react';
import {Box, Grid} from "@material-ui/core";
import Sidebar from "../../components/common/Sidebar/Sidebar";
import {useStyles} from "../style";
import FoundMusician from "../../components/common/FoundMusician/FoundMusician";

const MusicianSearchResult = (props) => {

    const {} = props
    const classes = useStyles()

    return (
        <Grid className={classes.layout}>
            <Sidebar />
            <Box className={classes.container}><FoundMusician /></Box>
        </Grid>
    );
};

export default MusicianSearchResult;