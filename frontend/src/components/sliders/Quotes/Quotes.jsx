import React from 'react';
import {useSelector} from "react-redux";
import {Box, Typography} from "@material-ui/core";
import AliceCarousel from "react-alice-carousel";
import {useStyles} from "./style";

const Quotes = () => {

    const classes = useStyles()
    const quotes = useSelector(({ state }) => state.quotes);

    return (
        <AliceCarousel
            mouseTracking={false}
            items={quotes.map((item, index) => {
                return (
                    <Box key={index} className={classes.quoteWrapper}>
                        <Typography>{item.text}</Typography>
                        <Typography style={{marginTop: 15}}>— {item.author}</Typography>
                    </Box>
                )
            })}
            disableDotsControls
            disableSlideInfo
            innerWidth
            disableButtonsControls
            animationType='fadeout'
            autoPlay
            autoPlayStrategy="none"
            autoPlayInterval={7000}
            animationDuration={500}
            animationEasingFunction='ease-in-out'
            infinite
            touchTracking={false}
            touchMoveDefaultEvents={false}
        />
    );
};

export default Quotes;