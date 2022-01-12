import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    sliderWrapper: {
        position: "relative"
    },
    shadowBackground: {
        position: "absolute",
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        backdropFilter: 'blur(2px)',
        zIndex: 2
    },
    aliceCarousel: {
        position: "absolute"
    },
    slideImg: {
        width: '100%',
        // height: '100%'
        objectFit: 'cover'
    }
});