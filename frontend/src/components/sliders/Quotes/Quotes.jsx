import React from 'react';
import {Box, Typography} from "@material-ui/core";
import {useStyles} from "./style";
import QuoteSymbolIcon from "../../../assets/icons/home/quoteSymbol";

const Quotes = ({text, author, index}) => {

    const classes = useStyles()

    return (
        <Box key={index} className={classes.quoteWrapper}>
            <Box className={classes.wrapper}>
                <Box className={classes.background} />
                <Box className={classes.content}>
                    <QuoteSymbolIcon />
                    <Typography>{text}</Typography>
                    <Typography style={{marginTop: 15}}>— {author}</Typography>
                </Box>
            </Box>
        </Box>
    )
};

export default Quotes;