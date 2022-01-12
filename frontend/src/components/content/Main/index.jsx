import React from 'react';
import {useDispatch} from "react-redux";
import {Box, Grid} from "@material-ui/core";
import {useStyles} from "./style";
import Quotes from "../../sliders/Quotes";
import QuoteSymbolIcon from "../../../assets/icons/home/quoteSymbol";
import GlobalSearch from "../../forms/GlobalSearch";


const MainContent = (props) => {

    const {} = props
    const dispatch = useDispatch()
    const classes = useStyles()

    return (
        <Box className={classes.searchPanelWrapper}>
            <Grid className={classes.formWrapper}>
                <Box className={classes.background} />
                <Box className={classes.quotesSliderWrapper}>
                    <Box>
                        <QuoteSymbolIcon />
                        <Quotes />
                    </Box>
                    <GlobalSearch />
                </Box>
            </Grid>
        </Box>
    );
};

export default MainContent;