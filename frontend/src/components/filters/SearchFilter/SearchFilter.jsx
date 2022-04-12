import React from 'react';
import {useHistory} from "react-router-dom";
import {Box, Button, Grid, Typography} from "@material-ui/core";
import SearchField from "../../common/SearchField/SearchField";
import {useStyles} from "./style";

const SearchFilter = () => {

    const classes = useStyles()
    const history = useHistory()

    return (
        <Grid className={classes.container}>
            <Box className={classes.wrapper}>
                <Typography variant={'h5'} className={classes.title}>Результаты поиска</Typography>
                <SearchField />
                <Button onClick={() => history.goBack()}>Назад</Button>
            </Box>
        </Grid>
    );
};

export default SearchFilter;