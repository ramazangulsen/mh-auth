import { createTheme } from "@material-ui/core";
import { muiTextField } from "./component_overrides/textfield_overrides_dark";
import { button } from "./component_overrides/button_override_dark";
import { colors } from "../colors";
import { menuItem } from "./component_overrides/select_override_dark";

export const darkTheme = createTheme({
  palette: {
    primary: {
      main: colors.green[400],
      contrastText: colors.gray[50],
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
    mode: "dark",

    background: {
      default: "#121212",
    },
  },
  overrides: {
    MuiTextField: muiTextField,
    MuiButton: button,
    MuiSelect: menuItem,
  },
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
  },
});
