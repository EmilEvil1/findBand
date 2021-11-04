import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    content: {
        position: "relative",
        display: "flex",
        width: '100vw',
        height: '100vh',
        overflow: "hidden"
    },
    sidebarWrapper: {
        height: '100vh',
        width: 50,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        background: '#E2D9A5',
        transition: 'width 0.3s ease-in-out',
        zIndex: 10
    },
    sidebarOpened: {
        width: '13%',
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
        // whiteSpace: "nowrap"
    },
    searchPanelWrapper: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center'
    },
    sidebarTopItems: {
        width: '100%',
        display: 'flex',
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: '2px solid black'
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