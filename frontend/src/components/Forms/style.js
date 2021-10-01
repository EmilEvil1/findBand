import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    wrapper: {
        width: '100%',
        height: '100vh',
        borderRadius: '10px',
        boxShadow: '0 14px 28px rgba(0,0,0,0.25),0 10px 10px rgba(0,0,0,0.22)',
        position: 'relative',
        overflow: 'hidden',
    },
    container: {
        position: 'absolute',
        top: 0,
        height: '100%',
        transition: 'all 1s ease-in-out'
    },
    signUp: {
        left: 0,
        width: '50%',
        opacity: 1,
        zIndex: 1,
        transform: 'translateX(100%)'
    },
    signUpActive: {
        transform: 'translateX(120%)',
        opacity: 0,
        zIndex: 5
    },
    signIn: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: '50%',
        // opacity: 1,
        zIndex: 2,
        transform: 'translateX(0%)'
    },
    signInActive: {
        transform: 'translateX(30%)'
    },
    overlayContainer: {
        position: 'absolute',
        top: 0,
        left: '50%',
        width: '50%',
        height: '100%',
        overflow: 'hidden',
        transition: 'transform 0.6s ease-in-out',
        zIndex: 100,
    },
    overlay: {
        background: 'linear-gradient(219.08deg, #0F5D62 -28.98%, #789F8B 132.22%);',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: '0 0',
        color: '#FFFFFF',
        position: 'relative',
        left: '-100%',
        height: '100%',
        width: '200%',
        transform: 'translateX(0)',
        transition: 'transform 0.6s ease-in-out'
    },
    overlayPanel: {
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: '0 40px',
        textAlign: 'center',
        top: 0,
        height: '100%',
        width: '50%',
        transform: 'translateX(0)',
        transition: 'transform 0.6s ease-in-out',
    },
    overlayLeftActive: {
        transform: 'translateX(0)'
    },
    overlayRight: {
        right: 0,
        transform: 'translateX(0)'
    },
    overlayContainerActive: {
        transform: 'translateX(-100%)'
    },
    overlayActive: {
        transform: 'translateX(50%)'
    },
    signUpWrapper : {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputsWrapper: {
        display: "flex",
        flexDirection: "column",
        color: "white"
    }
});