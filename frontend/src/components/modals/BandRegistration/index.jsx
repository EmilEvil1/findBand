import React from 'react';
import {useDispatch} from "react-redux";
import {Box, Dialog} from "@material-ui/core";
import {closeModal} from "../../../helpers/utils";


const BandRegistration = (props) => {

    const {open, close} = props
    const dispatch = useDispatch()
    // const classes = useStyles()

    return (

        <Dialog
            open={open}
            onClose={() => closeModal(close)}
        >
            <Box style={{padding: 50}}>ПОЛЯ ДЛЯ МУЗ ГРУППЫ</Box>
        </Dialog>
    );
};

export default BandRegistration;