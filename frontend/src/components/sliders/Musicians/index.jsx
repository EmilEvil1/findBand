import React from 'react';
import {useDispatch} from "react-redux";
import photo1  from '../../../assets/img/1.jpeg'
import photo2  from '../../../assets/img/2.jpeg'
import photo3  from '../../../assets/img/3.jpeg'
import photo4  from '../../../assets/img/4.jpeg'
import phote6  from '../../../assets/img/6.jpg'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {Box} from "@material-ui/core";
import {useStyles} from "./style";


const Musicians = (props) => {

    const {} = props
    const dispatch = useDispatch()
    const classes = useStyles()

    const items = [
        <Box className={classes.sliderWrapper}>
            <Box className={classes.shadowBackground} />
            <img className={classes.slideImg} src={phote6}  />,
        </Box>,
        <Box className={classes.sliderWrapper}>
            <Box className={classes.shadowBackground} />
            <img className={classes.slideImg} src={photo1}  />,
        </Box>,
        <Box className={classes.sliderWrapper}>
            <Box className={classes.shadowBackground} />
            <img className={classes.slideImg} src={photo2} />,
        </Box>,
        <Box className={classes.sliderWrapper}>
            <Box className={classes.shadowBackground} />
            <img className={classes.slideImg} src={photo3} />
        </Box>,
        <Box className={classes.sliderWrapper}>
            <Box className={classes.shadowBackground} />
            <img className={classes.slideImg} src={photo4} />
        </Box>
    ];

    return (
        <AliceCarousel
            className={classes.abstract}
            mouseTracking={false}
            items={items}
            disableDotsControls
            disableSlideInfo
            innerWidth
            disableButtonsControls
            animationType={'fadeout'}
            autoPlay
            autoPlayStrategy="none"
            autoPlayInterval={5000}
            animationDuration={400}
            infinite
            touchTracking={false}
            touchMoveDefaultEvents={false}
        />
    );
};

export default Musicians;