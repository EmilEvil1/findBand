import React from 'react';
import {Box} from "@material-ui/core";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import photo1  from '../../../assets/img/mainSlider/bethoven.jpg'
import photo2  from '../../../assets/img/mainSlider/beatles.jpg'
import photo3  from '../../../assets/img/mainSlider/bob-marley.jpg'
import photo4  from '../../../assets/img/mainSlider/mike.jpg'
import {useStyles} from "./style";

const Musicians = () => {

    const classes = useStyles()

    const items = [
        <Box className={classes.sliderWrapper}>
            <Box className={classes.shadowBackground} />
            <img className={classes.slideImg} src={photo1} alt='' />,
        </Box>,
        <Box className={classes.sliderWrapper}>
            <Box className={classes.shadowBackground} />
            <img className={classes.slideImg} src={photo2} alt='' />,
        </Box>,
        <Box className={classes.sliderWrapper}>
            <Box className={classes.shadowBackground} />
            <img className={classes.slideImg} src={photo3} alt='' />,
        </Box>,
        <Box className={classes.sliderWrapper}>
            <Box className={classes.shadowBackground} />
            <img className={classes.slideImg} src={photo4} alt='' />
        </Box>
    ]

    // function randomIntFromInterval(min, max) { // min and max included
    //     return Math.floor(Math.random() * (max - min + 1) + min)
    // }

    return (
        <AliceCarousel
            // activeIndex={randomIntFromInterval(0, 4)}
            items={items}
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