import React from 'react';
import {useDispatch} from "react-redux";
// import LogOutIcon from "../../../assets/icons/logOut";
import {Grid} from "@material-ui/core";

const LogOut = (props) => {

    const {} = props
    const dispatch = useDispatch()
    // const classes = useStyles()

    return (
        <Grid>
            {/*<LogOutIcon />*/}
            LOG OUT BTN
        </Grid>

    );
};

export default LogOut;