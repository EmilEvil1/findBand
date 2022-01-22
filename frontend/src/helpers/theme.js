import {createTheme} from "@material-ui/core";
import {purple, white} from "./styles";

export const theme = createTheme({
    palette: {
        primary: {
            main: white,
            contrastText: white,
        },
        secondary: {
            main: '#e57373'
        },
        textColor: white,
        action: {
            active: white,
            activeOpacity: 1,
            // hover: lightBlue[100],
            // hoverOpacity: 0.7,
            // focus: lightBlue[600],
            // focusOpacity: 1,
            // selected: lightBlue[300],
            // selectedOpacity: 1
        },
    },
    overrides: {
        MuiInputBase: {
            input: {
                // border: "1px solid #FFFFFF",
                color: white
            }
        },
        MuiMenu: {
            list: {
                backgroundColor: purple,
            },
        },
        MuiPaper: {
            root: {
                '&.MuiDrawer-paper': {
                    background: 'linear-gradient(11.72deg, #3F00AE 18.92%, #1D004F 89.13%);'
                },
            },
        },
        MuiListItemText: {
            root: {
                whiteSpace: 'nowrap'
            },
        },
        MuiButtonBase: {
            root: {
                color: white
            },
        }
    },
    typography: {
        fontFamily: 'MA-Regular',
        allVariants: {
            color: white
        },
        fontSize: 16,
    }
})