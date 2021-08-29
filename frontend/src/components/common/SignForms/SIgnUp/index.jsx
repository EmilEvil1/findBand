import React from 'react';
import {Button, FormControl, Grid} from "@material-ui/core";

import {useStyles} from "../style";

const SignUp = () => {
    const classes = useStyles()

    return (
            <FormControl action="#">
                <h1>Create Account</h1>
                <div className="social-container">
                    <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                    <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                </div>
                <span>or use your email for registration</span>
                <input type="text" placeholder="Name"/>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <Button>Sign Up</Button>
            </FormControl>

    );
};

export default SignUp;