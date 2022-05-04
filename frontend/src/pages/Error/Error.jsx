import React from 'react';
import {useHistory} from "react-router-dom";
import {Box, Button, Typography} from "@material-ui/core";
import {useStyles} from "../style";

const Error = () => {

    const classes = useStyles()
    const history = useHistory()

    return (
        <Box className={classes.contentDark}>
            <Box className={classes.centerPosition}>
                <Typography variant='h1'>404</Typography>
                <Typography variant='h3'>Страница не найдена</Typography>
                <Button
                    className={classes.backButton}
                    onClick={() => history.push('/')}
                >
                    На главную
                </Button>
            </Box>
        </Box>
    );
};

export default Error;