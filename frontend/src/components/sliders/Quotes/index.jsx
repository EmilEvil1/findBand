import React from 'react';
import {useDispatch} from "react-redux";
import {Box, Typography} from "@material-ui/core";
import AliceCarousel from "react-alice-carousel";
import {useStyles} from "./style";


const Quotes = (props) => {

    const {} = props
    const dispatch = useDispatch()
    const classes = useStyles()

    const items = [
        <Box className={classes.quoteWrapper}>
            <Typography>Верить себя совсем не обязательно, главное верить в то, что ты делаешь. Тогда в это поверят другие</Typography>,
            <Typography>— Jimmy Page Led Zeppelin</Typography>,
        </Box>,
        <Box className={classes.quoteWrapper}>
            <Typography>Без труда не выловишь и рыбку из пруда.</Typography>,
            <Typography>— Рыбак</Typography>,
        </Box>,
        <Box className={classes.quoteWrapper}>
            <Typography>Дважды в год лето не бывает.</Typography>,
            <Typography>— Капитан очевидность</Typography>,
        </Box>,
        <Box className={classes.quoteWrapper}>
            <Typography>Придет осень, за все спросит.</Typography>,
            <Typography>— Лентяй</Typography>,
        </Box>,
        <Box className={classes.quoteWrapper}>
            <Typography>Сугроб да вьюга - два друга.</Typography>,v
            <Typography>— Человек без друзей</Typography>,
        </Box>,
    ];

    return (
        <AliceCarousel
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
            animationEasingFunction={'ease-in-out'}
            infinite
            touchTracking={false}
            touchMoveDefaultEvents={false}
        />
    );
};

export default Quotes;