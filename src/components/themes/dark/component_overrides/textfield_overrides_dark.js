
import {colors } from '../../colors';
export const muiTextField= {
  
    root: {
      "& label": {
        color:colors.gray[400],
      },
      "& label.Mui-focused": {
        color: colors.gray[400],
        borderBottomColor: "#1100FF",
      },
      "& input ": {
        color: "#FFFFFF",
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: "#FD11F1",
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: colors.gray[700],
        },
        "&:hover fieldset": {
          borderColor: "#FFFFFF",
        },
        "&.Mui-focused fieldset": {
          borderColor: colors.gray[400],
        },
      },
    },
  
};


