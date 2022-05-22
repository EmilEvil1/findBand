import React from 'react';
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {Box, Button, Typography} from "@material-ui/core";
import {useStyles} from "../style";
import {saveErrorStatusCode} from "../../store/action/action";

const Error = () => {

    const classes = useStyles()
    const history = useHistory()
    const dispatch = useDispatch()

    return (
        <Box className={classes.contentDark}>
            <Box className={classes.centerPosition}>
                <Typography variant='h1'>404</Typography>
                <Typography variant='h3'>Страница не найдена</Typography>
                <Button
                    className={classes.backButton}
                    onClick={() => {
                        dispatch(saveErrorStatusCode(null))
                        history.push('/')
                    }}
                >
                    На главную
                </Button>
            </Box>
        </Box>
    );
};

export default Error;