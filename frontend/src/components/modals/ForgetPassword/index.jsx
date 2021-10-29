import React from 'react';
import {useDispatch} from "react-redux";
import {Box, Dialog, Grid} from "@material-ui/core";
import {closeModal} from "../../../helpers/utils";


const ForgetPassword = (props) => {

    const {open, close} = props
    const dispatch = useDispatch()
    // const classes = useStyles()

    return (

        <Dialog
            open={open}
            onClose={() => closeModal(close)}
        >
            <Box style={{padding: 50}}>ЗАБЫЛИ ПАРОЛЬ?</Box>
        </Dialog>
    );
};

export default ForgetPassword;