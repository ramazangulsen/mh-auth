import { colors } from "../../colors";
import { alpha } from "@material-ui/core";
export const button = {
  root: {
    "&:disabled": {
      backgroundColor: "#07FF30",
      color: "#FFFFFF",
    },
  },
 /*  label: {
    color: "#FFFFFF",
  }, */
  contained: {
    backgroundColor: colors.purple[400],
    color: "#FFFFFF",
    "&:hover": {
      backgroundColor: colors.purple[500],
      color: "#FFFFFF",
    },

    "&:focus": {
      backgroundColor: colors.purple[600],
      color: "#FFFFFF",
    },
    
  },
  text: {
    color: colors.purple[400]
  },
};
