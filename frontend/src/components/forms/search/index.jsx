import React from 'react';
import {useDispatch} from "react-redux";
import {Box, Grid} from "@material-ui/core";
import {useStyles} from "./style";
import Quotes from "../../sliders/Quotes";
import QuoteSymbolIcon from "../../../assets/icons/quoteSymbol";


const SearchBandPanel = (props) => {

    const {} = props
    const dispatch = useDispatch()
    const classes = useStyles()

    return (

        <Grid className={classes.formWrapper}>
            <Box className={classes.background} />
            <Box className={classes.quotesSliderWrapper}>
                <QuoteSymbolIcon />
                <Quotes />
            </Box>
        </Grid>
    );
};

export default SearchBandPanel;