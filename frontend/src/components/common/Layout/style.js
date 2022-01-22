import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    container: {
        width: '100%',
        height: '100%',
        display: "flex",
        justifyContent: "center"
    },
    content: {
        minHeight: 'calc(100vh - 16px)',
        overflow: "hidden",
        flexGrow: 1
    }
});