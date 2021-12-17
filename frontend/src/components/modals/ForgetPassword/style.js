import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    wrapper: {
        padding: 50,
        background: '#4D16C9'
    },
    text: {
        textAlign: "center",
        fontSize: 32,
        letterSpacing: '0.25px'
    },
    form: {
        marginTop: 50,
        display: "flex",
        flexDirection: "column"
    },
    btn: {
        marginTop: 35,
        borderRadius: 20,
        border: '1px solid #FFFFFF',
        filter: 'drop-shadow(0px 4px 8px rgba(39, 39, 39, 0.2))'
    },
    btnText: {
        padding: '20px 76px'
    }
});