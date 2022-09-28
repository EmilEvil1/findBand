import { makeStyles } from '@material-ui/core/styles';
import {darkBlue} from "../helpers/styles";

export const useStyles = makeStyles({
    layout: {
        display: "flex",
        flexDirection: "column"
    },
    container: {
        height: '100%',
        display: "flex",
        alignItems: "flex-end",
    },
    content: {
        position: "relative",
        display: "flex",
        justifyContent: "center",
        width: '100%',
        height: '100vh',
        overflow: "hidden",
        flexGrow: 1
    },
    contentDark: {
        position: "relative",
        display: "flex",
        justifyContent: "center",
        width: '100%',
        height: '100vh',
        overflow: "hidden",
        flexGrow: 1,
        background: darkBlue
    },
    flexWrap: {
        marginTop: 35,
        width: '100%',
        display: "flex"
    },
    wrapper: {
        padding: 40,
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        background: 'rgba(255, 255, 255, 0.6)',
        borderRadius: 20,
        backdropFilter: 'blur(30px)'
    },
    centerPosition: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    backButton: {
        marginTop: 70
    },
    noOptions: {
        color: "red",
        backgroundColor: "pink"
    },
    profileForm: {
        marginTop: 35,
        display: "flex",
        justifyContent: "space-between"
    },
    photoWrapper: {
        display: "flex",
        flexDirection: "column"
    },
    uploadPhotoLink: {
        marginTop: 30,
        fontSize: 20,
        cursor: "pointer",
        '&:hover': {
            textDecoration: "underline"
        }
    },
    uploadInfoText: {
        color: '#869CB9',
        fontSize: 20
    },
    marginValue: {
        marginTop: 35
    },
    textField: {
        position: "relative",
        width: '100%',
        display: "flex",
        flexDirection: "column",
        color: "white",
        '& p.MuiFormHelperText-root': {
            position: "absolute",
            bottom: -25
        }
    },
    autocomplete: {
        marginTop: 35,
        width: `100%`
    },

});