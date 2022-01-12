import React from 'react';
import {useDispatch} from "react-redux";
import {Box, Grid} from "@material-ui/core";
import UserIcon from "../../../../assets/icons/sidebar/band";
import {useStyles} from "./style";

const UserData = (props) => {

    const {open} = props
    const dispatch = useDispatch()
    const classes = useStyles()

    return (

        <Grid className={classes.dataWrapper}>
            <UserIcon />
            {!!open && (<Box className={classes.userName}>John Due</Box>)}
        </Grid>
    );
};

export default UserData;