import React from 'react';
import {useDispatch} from "react-redux";
import {Box, Grid} from "@material-ui/core";
import {useStyles} from "./style";


const Sidebar = (props) => {

    const {} = props
    const classes = useStyles()
    const dispatch = useDispatch()

    return (
        <Grid>
            <Box></Box>
            <Box>
                <Box></Box>
            </Box>
            <Box></Box>
        </Grid>
    );
};

export default Sidebar;