import React from 'react';
import {Box, Button, Grid} from "@material-ui/core";
import {useStyles} from "./style";
import ProfileIcon from "../../../assets/icons/sidebar/profile";

const ResultRow = () => {
    const classes = useStyles()
    return (
        <Grid className={classes.wrapper}>
            <Box><ProfileIcon /></Box>
            <Box>Басс-гитара</Box>
            <Box>Владимир</Box>
            <Box>3 года</Box>
            <Button className={classes.profileBtn} color={'primary'}>Профиль</Button>
        </Grid>
    );
};

export default ResultRow;