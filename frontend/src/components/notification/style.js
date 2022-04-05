import { makeStyles } from '@material-ui/core/styles';
import {popUpColor} from "../../helpers/styles";

export const useStyles = makeStyles({
    wrapper: {
        position: "absolute",
        bottom: 30,
        left: 60,
        padding: '20px 30px',
        maxWidth: 500,
        background: "white",
        borderRadius: 20,
        zIndex: 10
    },
    infoWrapper: {
        display: "flex",
        justifyContent: "space-between",
    },
    infoWrapperContent: {
        marginTop: 20,
        display: "flex",
        justifyContent: "space-between",
    },
    iconsWrapper: {
        display: "flex"
    },
    iconWrapper: {
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        '&:nth-child(2)': {
            marginLeft: 35
        }
    },
    content: {
        marginTop: 20
    },
    title: {
        fontSize: 36,
        color: "black"
    },
    dateInfo: {
        color: "black",
        letterSpacing: 0.15,
        fontSize: 14,
        fontWeight: 300
    },
    message: {
        marginLeft: 15,
        width: '80%'
    },
    userMessage: {
        fontSize: 16,
        color: "black",
        letterSpacing: 0.5
    },
    userName: {
        fontFamily: 'MA-Bold',
        color: "black",
        textDecoration: "underline"
    },
    btn: {
        marginTop: 10,
        fontSize: 12,
        background: popUpColor,
        letterSpacing: 0.25
    },
    avatar: {
        width: 85,
        height: 85
    },
    avatarWrapper: {
        display: "flex",
        alignItems: "center"
    },
    dateWrapper: {
        marginLeft: 15
    }
});