import React from 'react';
import {Box} from "@material-ui/core";
import {useSelector} from "react-redux";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {useStyles} from "./style";
import Quotes from "../Quotes/Quotes";

const Musicians = () => {

    const classes = useStyles()
    const quotes = useSelector(({ state }) => state.quotes)

    const randomIntFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

    return (
        <AliceCarousel
            activeIndex={randomIntFromInterval(0, quotes.length)}
            items={quotes.length && quotes.map((element, index) => {
                return (
                    <Box key={index} className={classes.sliderWrapper}>
                        <Box className={classes.shadowBackground} />
                        <img className={classes.slideImg} src={element.img} alt='' />,
                        <Quotes
                            text={element.text}
                            author={element.author}
                            index={index}
                        />
                    </Box>
                )
            })}
            animationType='fadeout'
            autoPlayStrategy="none"
            autoPlayInterval={7000}
            animationDuration={500}
            mouseTracking={false}
            touchTracking={false}
            touchMoveDefaultEvents={false}
            disableButtonsControls
            disableDotsControls
            disableSlideInfo
            infinite
            autoPlay
            innerWidth
        />
    );
};

export default Musicians;