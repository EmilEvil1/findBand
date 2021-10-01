import React from 'react';
import {Box, Button, FormControl, Grid, TextField, Typography} from "@material-ui/core";

import {useStyles} from "../style";
import {Link} from "react-router-dom";

const SignIn = (props) => {

    const {} = props
    const classes = useStyles()

    return (
        <Grid>
            <FormControl action="#">
                <Typography>Sign in</Typography>
                <Box className="social-container">
                    <Link to="#" className="social"><i className="fab fa-facebook-f"></i></Link>
                    <Link to="#" className="social"><i className="fab fa-google-plus-g"></i></Link>
                    <Link to="#" className="social"><i className="fab fa-linkedin-in"></i></Link>
                </Box>
                <Typography>или</Typography>
                <TextField
                    type="email"
                    placeholder="Email"
                />
                <TextField type="password" placeholder="Password"/>
                <Link to="#">Forgot your password?</Link>
                <Button>Sign In</Button>
            </FormControl>
        </Grid>
    );
};

export default SignIn;