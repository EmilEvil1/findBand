import { makeStyles } from '@material-ui/core/styles'
import {popUpColor, purpleDark} from "../../../helpers/styles";

export const useStyles = makeStyles({
    wrapper: {
        marginTop: 30,
        width: '50%',
        display: "flex",
        flexWrap: "wrap",
        gap: 30
    },
    row: {
        display: "flex",
        alignItems: "center",
        gap: 20,
    },
    item: {
        padding: 20,
        display: "flex",
        flexDirection: "column",
        background: purpleDark,
        transition: 'all 0.3s ease',
        borderRadius: 25,
        '&:hover': {
            background: popUpColor
        }
    },
    bandPhoto: {
        width: '100%',
        objectFit: "contain",
        border: '1px solid black',
        borderRadius: 20
    },
    rowsWrapper: {
        marginTop: 20
    }
})