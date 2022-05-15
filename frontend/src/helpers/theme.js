import {createTheme} from "@material-ui/core";
import {darkBlue, popUpColor, purple, white} from "./styles";

export const theme = createTheme({
    palette: {
        primary: {
            main: white,
            contrastText: white,
        },
        secondary: {
            main: '#e57373',
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
            root: {
                '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: white,
                }
            },
            input: {
                color: white,
            },
        },
        MuiMenu: {
            list: {
                backgroundColor: purple,
            },
        },
        MuiDialog: {
            root: {
                '& .MuiPaper-root': {
                    borderRadius: '44px !important',
                    background: popUpColor
                }
            }

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
        },
        MuiButton: {
            root: {
                borderRadius: 20,
                color: white,
                padding: '6px 15px',
                border: '1px solid white'
            },
        },
        MuiDrawer: {
            root: {
                '& .MuiPaper-root': {
                    background: 'linear-gradient(11.72deg, #3F00AE 18.92%, #1D004F 89.13%);'
                }
            }
        },
        MuiTabs: {
            root: {
                color: white,
            }
        },
        MuiPaper: {
            root: {
                backgroundColor: darkBlue,
                fontFamily: 'MA-Regular',
                color: white
            },
        },
    },
    typography: {
        fontFamily: 'MA-Regular',
        allVariants: {color: white},
        fontSize: 16,
    },
})