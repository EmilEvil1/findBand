import React from 'react';
import {Box} from "@material-ui/core";
import {useStyles} from "./style";
import GlobalSearch from "../../forms/GlobalSearch/GlobalSearch";

const MainContent = () => {

    const classes = useStyles()

    return (
        <Box className={classes.searchPanelWrapper}>
            <Box className={classes.formWrapper}>
                <Box className={classes.background} />
                <Box className={classes.quotesSliderWrapper}>
                    <GlobalSearch />
                </Box>
            </Box>
        </Box>
    );
};

export default MainContent;