import { colors } from "../../colors";
import { alpha } from "@material-ui/core";

export const button = {
  root: {
   
    "&:disabled": {
      backgroundColor: "#07FF30",
      color: "#FFFFFF",
    },
  },
  label: {
    color: "#FFFFFF",
  },
  contained: {
    backgroundColor: colors.purple[400],
    "&:hover": {
      backgroundColor: colors.purple[500],
      color: "#FFFFFF",
    },

    "&:focus": {
      backgroundColor: colors.purple[600],
      color: "#FFFFFF",
    },
    "&:disabled": {
      backgroundColor: alpha(colors.purple[500], 0.3),
    },
  },
  text: {
    "&:hover": {
      backgroundColor: alpha("#ffffff", 0.2),
      color: "#FFFFFF",
    },

    "&:focus": {
      backgroundColor: alpha("#ffffff", 0.3),
      color: "#FFFFFF",
    },
   
  },
};
