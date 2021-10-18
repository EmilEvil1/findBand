import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    formWrapper: {
        position: "relative",
        marginTop: 20,
        marginBottom: 20,
        width: '100%',
        maxWidth: '80%',
        zIndex: 2
    },
    background: {
        position: "absolute",
        width: '100%',
        height: '100%',
        opacity: 0.5,
        backgroundColor: '#0f5d62;',
        backdropFilter: 'blur(2px)',
        borderRadius: 20,
        zIndex: -1
    },
    quotesSliderWrapper: {
        padding: '60px 30px',
        zIndex: 2
    }
});