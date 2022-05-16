import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({

    sidebarWrapper: {
        width: '55px',
        height: '100%',
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: 'width 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms',
        flexShrink: 0,
        zIndex: 1300
    },
    drawerSize: {
        width: '240px',
        transition: 'width 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms',
        overflowX: "hidden",
    },
    sidebarOpened: {
        width: '240px',
        transition: 'width 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms'
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
        marginTop: 15,
    },
    logosWrapper: {
        paddingTop: 10,
        width: '100%',
        display: "flex",
        justifyContent: "center"
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
    userInfo: {
        marginTop: 20,
        display: "flex",
        alignItems: "center"
    }
});