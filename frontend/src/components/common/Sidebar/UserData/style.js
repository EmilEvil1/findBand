import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    dataWrapper: {
        marginTop: 30,
        display: "flex",
        alignItems: "center",
        '& svg': {
            cursor: 'pointer'
        }
    },
    userName: {
        marginLeft: 10
    }
});