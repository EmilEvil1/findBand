import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    wrapper: {
        padding: 50,
        // background: '#4D16C9'
    },
    text: {
        textAlign: "center",
        fontSize: 32,
        letterSpacing: '0.25px'
    },
    form: {
        marginTop: 40,
        display: "flex",
        flexDirection: "column",
        '& p.MuiFormHelperText-root': {
            position: "absolute",
            bottom: -25
        }
    },
    btn: {
        marginTop: 40
    },
    errorText: {
        color: '#f44336',
        position: "absolute"
    },
    errorMessage: {
        position: "absolute",
        bottom: -45,
        width: '100%',
        display: "flex",
        justifyContent: "center",
        color: '#f44336'
    }
});