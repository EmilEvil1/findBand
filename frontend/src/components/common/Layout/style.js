import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    container: {
        width: '100%',
        height: '100%',
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    content: {
        width: '100%',
        height: '100%',
        overflow: "hidden",
        flexGrow: 1,
    }
});