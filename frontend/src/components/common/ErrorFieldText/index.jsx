import React from 'react';
import {useDispatch} from "react-redux";
import {Box} from "@material-ui/core";
import {useStyles} from "./style";


const ErrorFieldText = (props) => {

    const {errorText} = props
    const dispatch = useDispatch()
    const classes = useStyles()

    return (!!errorText && (<Box className={classes.errorText}>{errorText}</Box>));
};

export default ErrorFieldText;