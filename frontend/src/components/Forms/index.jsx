import React, {useState} from 'react';
import {Box, Button, Grid, Typography} from "@material-ui/core";
import {useStyles} from "./style";
import SignUp from "./SIgnUp";
import SignIn from "./SignIn";

const SignForms = (props) => {

    const {} = props
    const classes = useStyles()
    const [active, setActive] = useState(false)

    return (
        <Grid className={classes.wrapper}>
            <Box className={!active ? `${classes.container} ${classes.signIn}` : `${classes.container} ${classes.signIn} ${classes.signInActive}`}>
                <SignIn />
            </Box>
            <Box className={!!active ? `${classes.container} ${classes.signUp}` : `${classes.container} ${classes.signUp} ${classes.signUpActive}`}>
                <SignUp />
            </Box>
            <Box className={!!active ? `${classes.overlayContainer} ${classes.overlayContainerActive}` : classes.overlayContainer}>
                <Box className={!!active ? `${classes.overlay} ${classes.overlayActive}` : `${classes.overlay}`}>
                    <Box className={!!active ? `${classes.overlayPanel}` : `${classes.overlayPanel} ${classes.overlayLeftActive}`}>
                        <Typography>Welcome Back!</Typography>
                        <Typography>To keep connected with us please login with your personal info</Typography>
                        <Button
                            onClick={() => {setActive(false)}}
                            className="ghost" id="signIn"
                        >
                            Sign In
                        </Button>
                    </Box>
                    <Box className={!!active ? `${classes.overlayPanel} ${classes.overlayRight}` : `${classes.overlayPanel} ${classes.overlayRight}`}>
                        <Typography>Hello, Friend!</Typography>
                        <Typography>Enter your personal details and start journey with us</Typography>
                        <Button
                            onClick={() => {setActive(true)}}
                            className="ghost" id="signUp"
                        >
                            Sign Up
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Grid>
    );
};

export default SignForms;