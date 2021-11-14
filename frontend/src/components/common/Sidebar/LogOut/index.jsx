import React from 'react';
import {useDispatch} from "react-redux";
import {Button} from "@material-ui/core";
import LogOutIcon from "../../../../assets/icons/sidebar/logOut";

const LogOut = (props) => {

    const {} = props
    const dispatch = useDispatch()
    // const classes = useStyles()

    return (
        <Button>
            <LogOutIcon />
        </Button>

    );
};

export default LogOut;