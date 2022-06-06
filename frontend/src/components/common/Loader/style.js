import { makeStyles } from '@material-ui/core/styles';
import {white} from "../../../helpers/styles";

export const useStyles = makeStyles({
    '@keyframes pendulum': {
        '0%': {
            transform: 'rotate(35deg)',
        },
        '50%': {
            transform: 'rotate(-35deg)',
        },
        '100%': {
            transform: 'rotate(35deg)',
        }
    },
    metronomeStick: {
        position: 'absolute',
        width: '50px',
        top: '-5%',
        left: '25%',
        zIndex: 2,
        animation: '$pendulum 1.5s infinite ease',
        transformOrigin: '50% 100%',
    },
    stick: {
        width: 3,
        height: 80,
        backgroundColor: white,
        margin: '0 auto'
    }
});