import React from 'react';
import {Box, IconButton, TextField} from "@material-ui/core";
import SearchIcon from "../../../assets/icons/search/search";
import {useStyles} from "./style";


const SearchField = () => {

    const classes = useStyles()

    return (
        <Box className={classes.wrapper}>
            <TextField
                className={classes.input}
                name='search'
                variant='outlined'
            />
            <IconButton className={classes.searchBtn}>
                <SearchIcon />
            </IconButton>
        </Box>
    );
};

export default SearchField;