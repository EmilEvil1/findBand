import React from 'react';
import {Box, Grid} from "@material-ui/core";
import {useStyles} from "../../style";
import IconGoogleAuth from "../../../../../assets/icons/auth/googleAuth";
import IconVkAuth from "../../../../../assets/icons/auth/vkAuth";
import IconAppleAuth from "../../../../../assets/icons/auth/appleAuth";

const AuthServices = (props) => {
    const {} = props
    const classes = useStyles()

    return (

        <Grid className={classes.authServicesWrapper}>
            <Box className={classes.iconServiceWrapper}>
                <IconGoogleAuth />
            </Box>
            <Box className={classes.iconServiceWrapper}>
                <IconVkAuth />
            </Box>
            <Box className={classes.iconServiceWrapper}>
                <IconAppleAuth />
            </Box>
        </Grid>

    );
};

export default AuthServices;