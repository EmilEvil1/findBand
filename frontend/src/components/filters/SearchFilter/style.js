import { makeStyles } from '@material-ui/core/styles';
import {purpleDark} from "../../../helpers/styles";

export const useStyles = makeStyles({
    container : {
        margin: '30px 0',
        width: '100%',
        background: purpleDark,
        borderRadius: 20
    },
    wrapper: {
        padding: '30px 40px',
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    title: {
        fontFamily: 'RobotoRegular',
        fontWeight: 600,

    }
});