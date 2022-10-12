import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    uploadPhotoLink: {
        marginTop: 30,
        fontSize: 11,
        cursor: "pointer",
        '&:hover': {
            textDecoration: "underline"
        }
    },
    wrapper: {

        '& .MuiFormHelperText-root.Mui-error': {
            position: "absolute",
            bottom: -25
        }
    }
})