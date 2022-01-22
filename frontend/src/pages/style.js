import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    layout: {
        display: "flex",
        justifyContent: "center"
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
    }
});