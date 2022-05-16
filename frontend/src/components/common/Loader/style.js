import { makeStyles } from '@material-ui/core/styles';
import {white} from "../../../helpers/styles";

export const useStyles = makeStyles({
    '@keyframes pendulum': {
        '0%': {
            transform: 'rotate(40deg)'
        },
        '20%': {
            transform: 'rotate(-30deg)'
        },
        '50%': {
            transform: 'rotate(0deg)'
        },
        '80%': {
            transform: 'rotate(-30deg)'
        },
        '100%': {
            transform: 'rotate(40deg)'
        }
    },
    metronomeStick: {
        position: 'absolute',
        width: '50px',
        top: '-10%',
        left: '25%',
        zIndex: 2,
        animation: '$pendulum 5s infinite lineae',
        transformOrigin: '50% 100%',
        // transform: 'translate(-50%, -50%)'
    },
    stick: {
        width: 2,
        height: 85,
        backgroundColor: white,
        margin: '0 auto'
    }
});