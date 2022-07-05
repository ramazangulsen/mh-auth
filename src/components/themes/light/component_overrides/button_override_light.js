import { colors } from "@material-ui/core";

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
    color: "#FFFFFF",
  },
};
