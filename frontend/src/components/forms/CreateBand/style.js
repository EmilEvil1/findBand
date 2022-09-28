import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    uploadPhotoLink: {
        marginTop: 30,
        fontSize: 16,
        cursor: "pointer",
        '&:hover': {
            textDecoration: "underline"
        }
    },
})