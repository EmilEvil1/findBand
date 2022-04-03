import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    layout: {
        display: "flex",
        flexDirection: "column"
    },
    container: {
        width: '85%',
        padding: '0 60px',
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
    flexWrap: {
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
    }
});