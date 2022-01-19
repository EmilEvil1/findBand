import React from 'react';
import {Box} from "@material-ui/core";
import {useStyles} from "./style";


const ErrorFieldText = (props) => {

    const {errorText} = props
    const classes = useStyles()

    return (!!errorText && (<Box className={classes.errorText}>{errorText}</Box>));
};

export default ErrorFieldText;