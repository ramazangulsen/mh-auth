
import {colors } from '../../colors';
export const muiTextField= {
  
    root: {
     

      '& .MuiInputBase-input': {
        color: colors.gray[700]},

      "& label": {
        color:colors.gray[400],
      },
      "& label.Mui-focused": {
        color: colors.purple[400],
        
      },
      "& input ": {
        color: colors.gray[900],
      },
      
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: colors.gray[400],
        },
        "&:hover fieldset": {
          borderColor: colors.purple[500],
        },
        "&.Mui-focused fieldset": {
          borderColor: colors.gray[400],
        },
      },
    },
  
};


