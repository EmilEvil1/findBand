import React from 'react';
import {useDispatch} from "react-redux";
import {Box, IconButton, Input, TextField} from "@material-ui/core";
import SearchIcon from "../../../assets/icons/search/search";
import {useStyles} from "./style";


const SearchField = (props) => {

    const {} = props
    // const dispatch = useDispatch()
    const classes = useStyles()

    return (
        <Box className={classes.wrapper}>
            <TextField
                className={classes.input}
                name='search'
                variant='outlined'
                // fullWidth
            />
            <IconButton className={classes.searchBtn}>
                <SearchIcon />
            </IconButton>
        </Box>
    );
};

export default SearchField;