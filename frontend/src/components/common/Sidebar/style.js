import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    sidebarWrapper: {
        position: "fixed",
        left: 0,
        height: '100vh',
        width: '6%',
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        background: '#E2D9A5',
        transition: 'width 0.3s ease-in-out'
    },
    sidebarOpened: {
        width: '13%',
    },
    sidebarMiddleItems: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
    }
});