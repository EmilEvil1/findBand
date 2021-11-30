import React, {useState} from 'react';
import {Box, Button, Grid, Typography} from "@material-ui/core";
import {useStyles} from "./style";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

const SignForms = (props) => {

    const {} = props
    const classes = useStyles()
    const [active, setActive] = useState(true)

    return (
        <Grid className={classes.wrapper}>
            <Box
                className={
                    !active ? `${classes.container} ${classes.signIn}` :
                    `${classes.container} ${classes.signIn} ${classes.signInActive}`
                }
            >
                <SignIn />
            </Box>
            <Box
                className={
                    !!active ? `${classes.container} ${classes.signUp}` :
                    `${classes.container} ${classes.signUp} ${classes.signUpActive}`
                }
            >
                <SignUp />
            </Box>
            <Box className={
                    !!active ? `${classes.overlayContainer} ${classes.overlayContainerActive}` :
                    classes.overlayContainer
                }
            >
                <Box className={
                        !!active ? `${classes.overlay} ${classes.overlayActive}` :
                        `${classes.overlay}`
                    }
                >
                    <Box className={
                            !!active ? `${classes.overlayPanel}` :
                            `${classes.overlayPanel} ${classes.overlayLeftActive}`
                        }
                    >
                        <Typography>Привет мой друг!!!</Typography>
                        <Typography>Тут будет красивый текст</Typography>
                        <Button onClick={() => setActive(false)}>Войти</Button>
                    </Box>
                    <Box className={
                            !!active ? `${classes.overlayPanel} ${classes.overlayRight}` :
                            `${classes.overlayPanel} ${classes.overlayRight}`
                        }
                    >
                        <Typography>Привет мой друг!!!</Typography>
                        <Typography>Тут будет какой-нибудь красивый текст</Typography>
                        <Button onClick={() => setActive(true)}>Зарегистрипроваться</Button>
                    </Box>
                </Box>
            </Box>
        </Grid>
    );
};

export default SignForms;