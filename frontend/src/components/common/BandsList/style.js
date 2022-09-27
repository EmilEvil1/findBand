import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles({
    wrapper: {
        display: "flex",
    },
    row: {
        display: "flex",
        alignItems: "center",
        gap: 20,
    },
    item: {
        padding: 20,
        height: 200,
        display: "flex",
        flexDirection: "column",
        background: "black"
    }
})