import React from 'react';
import {Box} from "@material-ui/core";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import photo3  from '../../../assets/img/3.jpeg'
import photo4  from '../../../assets/img/4.jpeg'
import phote6  from '../../../assets/img/6.jpg'
import phote7  from '../../../assets/img/mainSlider/b-2.jpeg'
import photo8  from '../../../assets/img/mainSlider/b-3.jpeg'
import {useStyles} from "./style";

const Musicians = () => {

    const classes = useStyles()

    const items = [
        <Box className={classes.sliderWrapper}>
            <Box className={classes.shadowBackground} />
            <img className={classes.slideImg} src={phote6} alt='' />,
        </Box>,
        <Box className={classes.sliderWrapper}>
            <Box className={classes.shadowBackground} />
            <img className={classes.slideImg} src={phote7} alt='' />,
        </Box>,
        <Box className={classes.sliderWrapper}>
            <Box className={classes.shadowBackground} />
            <img className={classes.slideImg} src={photo8} alt='' />,
        </Box>,
        <Box className={classes.sliderWrapper}>
            <Box className={classes.shadowBackground} />
            <img className={classes.slideImg} src={photo3} alt='' />
        </Box>,
        <Box className={classes.sliderWrapper}>
            <Box className={classes.shadowBackground} />
            <img className={classes.slideImg} src={photo4} alt='' />
        </Box>
    ];

    return (
        <AliceCarousel
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