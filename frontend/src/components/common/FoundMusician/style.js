import { makeStyles } from '@material-ui/core/styles';
import {white} from "../../../helpers/styles";

export const useStyles = makeStyles({
    contentWrapper: {
        background: 'rgba(255, 255, 255, 0.6)',
        backdropFilter: 'blur(30px)',
        borderRadius: 20,
        height: '100vh'
    },
    wrapper: {
        position: "relative",
        margin: '0 70px 35px',
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: '#4D16C9',
        height: 75,
        borderRadius: 12
    },
    titleWrapper: {
        margin: '0 70px 35px',
        width: '74%',
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        '& > p': {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }
    },
    profileBtn: {
        width: '15%',
        height: '100%',
        background: '#300086',
        borderTopRightRadius: 12,
        borderBottomRightRadius: 12
    },
    tab: {
        height: '100%',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRight: '1px solid #3F00AE',
        color: white
    }
});