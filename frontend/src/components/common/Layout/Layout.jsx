import React from 'react';
import {Box, Grid} from "@material-ui/core";
import Sidebar from "../Sidebar/Sidebar";
import {useStyles} from "./style";

const Layout = ({children}) => {

    const classes = useStyles()

    return (
        <Grid className={classes.container}>
            <Sidebar />
            <Box className={classes.content}>{children}</Box>
        </Grid>
    );
};

export default Layout;