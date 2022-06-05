import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    quoteWrapper: {
        position: 'absolute',
        right: '50%',
        left: '50%',
        top: '16%',
        width: '65%',
        zIndex: 3,
        transform: 'translate(-50%, -50%)',
        borderRadius: 25,
        "& p": {
            fontSize: '1.5rem',
        },
        '&:nth-child(1)': {
            marginTop: 25
        }
    },
    background: {
        position: "absolute",
        width: '100%',
        height: '100%',
        opacity: 0.8,
        background: 'linear-gradient(85.18deg, rgba(58, 22, 201, 0.55) 7.47%, rgba(44, 0, 122, 0.55) 95.51%);',
        backdropFilter: 'blur(30px)',
        borderRadius: 20,
        zIndex: -1
    },
    wrapper: {
        position: "relative",
        width: '100%',
        height: '100%'
    },
    content: {
        padding: 30
    }
});