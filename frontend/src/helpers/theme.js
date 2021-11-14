import {createTheme} from "@material-ui/core";

export const theme = createTheme({
    palette: {
        primary: {
            main: '#FFFFFF',
            contrastText: '#FFFFFF',
        },
        secondary: {
            main: '#e57373'
        },
        textColor: '#FFFFFF',
        action: {
            active: '#FFFFFF',
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
                color: "#FFFFFF"
            }
        },
        MuiMenu: {
            list: {
                backgroundColor: "#cccccc",
            },
        },
    },
    typography: {
        fontFamily: 'MA-Regular',
        allVariants: {
            color: '#FFFFFF'
        },
        fontSize: 16,
    }
})