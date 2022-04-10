import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    wrapper: {
        width: '50%'
    },
    attentionText: {
        color: '#869CB9'
    },
    inputFile: {
        display: "none"
    },
    userPhoto: {
        width: 150,
        height: 150,
        borderRadius: '50%'
    },
    userSelectedPhoto: {
        width: '100%',
        height: '100%'
    }
});