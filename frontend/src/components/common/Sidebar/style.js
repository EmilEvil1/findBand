import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({

    sidebarWrapper: {
        width: '55px',
        height: '100%',
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: 'all .3s'
    },
    drawerSize: {
        width: '240px'
    },
    sidebarOpened: {
        width: '240px',
    },
    sidebarMiddleItems: {
        height: '100%',
        width: '100%',
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "column"
    },
    menuWrapper: {
        display: "flex",
        flexDirection: "column"
    },
    menuItem: {
        marginTop: 30,
        display: "flex",
        alignItems: "center",
    },

    sidebarItems: {
        paddingTop: 10,
        width: '100%',
    },
    sidebarBottomItems: {
        padding: '10px 20px',
        width: '100%',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderTop: '2px solid black'
    },
    arrowRotated: {
        cursor: "pointer",
        '& svg': {
            transform: 'rotate(180deg)',
            cursor: "pointer"
        }
    },
});