import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    quotesSliderWrapper: {
        width: '100%',
        height: '100%',
        display: "flex"
    },
    quoteWrapper: {
        width: '55%',
        transition: 'opacity .3s',
        "& p": {
            fontSize: '1.5rem',
        },
        '&:nth-child(1)': {
            marginTop: 25
        }
    }
});