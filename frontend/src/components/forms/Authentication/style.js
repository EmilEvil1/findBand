import { makeStyles } from '@material-ui/core/styles';
import {darkBlue} from "../../../helpers/styles";

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
        display: "flex",
        justifyContent: "center",
        opacity: 1,
        zIndex: 1,
        transform: 'translateX(100%)'
    },
    signUpActive: {
        transform: 'translateX(85%)',
        opacity: 0,
        zIndex: 5
    },
    signIn: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: '53%',
        zIndex: 2,
        transform: 'translateX(0%)',
        opacity: 1,
    },
    signInForm: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    signInActive: {
        transform: 'translateX(15%)',
        opacity: 0
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
        opacity: 1
    },
    overlay: {
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
        '&:nth-child(1)': {
            background: 'linear-gradient(145.01deg, #4D16C9 -25.24%, #16003D 136.14%);',
            borderRadius: '0px 35px 35px 0px'
        },
        '&:nth-child(2)': {
            background: 'linear-gradient(219.08deg, #4D16C9 -28.98%, #16003D 132.22%)',
            borderRadius: '35px 0px 0px 35px'
        }
    },
    overlayLeftActive: {
        transform: 'translateX(0)',
    },
    overlayRight: {
        right: 0,
        transform: 'translateX(0)',
    },
    overlayContainerActive: {
        transform: 'translateX(-100%)'
    },
    overlayActive: {
        transform: 'translateX(50%)'
    },
    signUpWrapper : {
        width: 400,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputsWrapper: {
        width: '100%',
        display: "flex",
        flexDirection: "column",
        color: "white",
        '& p': {
            position: "absolute",
            bottom: -25
        }
    },
    inputWrapper: {
        marginTop: 35,
        position: "relative",
        width: '100%',
        display: "flex",
        alignItems: "center",
    },
    formWrapper: {
        width: 380
    },
    formControl: {
        width: '100%',
        display: "flex",
        alignItems: "center",
        flexDirection: "column"
    },
    authServicesWrapper: {
        marginTop: 50,
        width: '100%',
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center"
    },
    iconServiceWrapper: {
        cursor: "pointer"
    },
    field: {
        marginTop: 35
    },
    forgotPasswordLink: {
        margin: '50px 0 25px',
        height: 30,
        cursor: "pointer",
        transition: 'all 0.5s ease-out',
        '&:hover': {
            transition: 'all 0.5s ease-out',
            borderBottom: '1px solid white'
        }
    },
    signUpBtn: {
        marginTop: 20
    },
    passwordField: {
        marginTop: 30,
        position: "relative",
        width: '100%'
    },
    passwordIcon: {
        position: "absolute",
        right: 0,
        top: '50%',
        display: "flex",
        cursor: "pointer",
        transform: 'translate(-50%, -50%)'

    },
    passwordFieldWithHelper: {
        top: '33%',
    },
    errorText: {
        color: '#f44336',
        position: "absolute"
    },
    selectField: {
        // background: '#272727'
    },
    select: {
        width: '100%'
    },
    fieldsWrapper: {
        display: "flex",
        width: '100%',
        flexDirection: "column"
    },
    welcomeTitle: {
        marginBottom: 40,
        fontSize: '3rem',
        letterSpacing: '-0.094rem'
    },
    createBandButton: {
        marginTop: 40,
        border: 'none'
    },
    signInBtn: {
        width: '70%'
    },
    addBandWrapper: {
        display: "flex",
        alignItems: "center",
        '& > p': {
            marginLeft: 10,
            fontSize: '1rem'
        }
    },
    contentDark: {
        position: "relative",
        display: "flex",
        justifyContent: "center",
        width: '100%',
        height: '100vh',
        overflow: "hidden",
        flexGrow: 1,
        background: darkBlue
    },
    formContainer: {
        height: '100%',
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    createNewPasswordFields: {
        display: "flex",
        flexDirection: "column"
    },
    inputBox: {
        position: "relative",
        marginBottom: 35,
        width: 400,
        '& p': {
            position: "absolute",
            bottom: -25
        }
    },
    savePassword: {
        marginTop: 20,
        width: '100%'
    },
    marginBlock: {
        marginBottom: 35,
    }
});