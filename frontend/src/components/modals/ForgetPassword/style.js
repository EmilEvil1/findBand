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
        '& p': {
            position: "absolute",
            bottom: -30
        }
    },
    btn: {
        marginTop: 40
    },
});