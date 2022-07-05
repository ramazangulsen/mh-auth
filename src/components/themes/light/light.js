import {  createTheme } from "@material-ui/core";
import {colors} from '../colors';
import {button} from './component_overrides/button_override_light';
import { muiTextField } from "./component_overrides/textfield_override_light";

export const lightTheme = createTheme({
    palette: {
        primary: {
            main: colors.green[400],
            contrastText: colors.gray[50]
        },
        secondary: {
            main: colors.geekBlue[400],
        },
        tertiary: {
            main: "#7F5FFF",
            contrastText: colors.gray[50],
        },
        info: {
            main: "#7F5FFF",
        },
        warning: {
            main: colors.yellow[400],
        },

        error: {
            main: colors.red[400],
        },
        default: {
            main: colors.gray[400],
        },

        mode: "light",

        background: {
            default: '#FFFFFF',
        },
    },
     overrides:{
        MuiButton: button,
        MuiTextField: muiTextField
    } ,
    
        typography: {
            fontFamily: [
                'Inter', 
            'sans-serif'
            ].join(','),
    }
});