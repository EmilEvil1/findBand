import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    searchPanelWrapper: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center'
    },
    formWrapper: {
        position: "relative",
        marginTop: 20,
        marginBottom: 20,
        width: '100%',
        zIndex: 2
    },
    background: {
        position: "absolute",
        width: '100%',
        height: '100%',
        opacity: 0.8,
        background: 'linear-gradient(85.18deg, rgba(58, 22, 201, 0.55) 7.47%, rgba(44, 0, 122, 0.55) 95.51%);',
        backdropFilter: 'blur(30px)',
        borderRadius: 20,
        zIndex: -1
    },
    quotesSliderWrapper: {
        padding: '60px 30px',
        zIndex: 2
    }
});