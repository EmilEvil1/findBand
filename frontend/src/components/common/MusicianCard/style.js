import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    cardBackground: {
        marginBottom: 20,
        padding: 20,
        width: '32%',
        background: 'rgba(22, 0, 61, 0.9);',
        borderRadius: 15,
    },
    info: {
        display: "flex",
        justifyContent: "space-between"
    },
    additionalInfo: {
        marginTop: 45,
        display: "flex",
        justifyContent: "space-between"
    },
    redirectBtn: {
        marginTop: 20,
        width: '100%',
    }

});