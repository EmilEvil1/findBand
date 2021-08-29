import React from 'react';
import {Button, FormControl, Grid} from "@material-ui/core";

import {useStyles} from "../style";

const SignIn = () => {

    const classes = useStyles()

    return (

            <FormControl action="#">
                <h1>Sign in</h1>
                <div className="social-container">
                    <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                    <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                </div>
                <span>or use your account</span>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <a href="#">Forgot your password?</a>
                <Button>Sign In</Button>
            </FormControl>

    );
};

export default SignIn;