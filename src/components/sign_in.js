import React from "react";
import Paper from "@material-ui/core/Paper";
import pic from "./images/vector.png";
import {
  Button,
  Grid,
  Link,
  Typography,
  Box,
  FormControl,
  IconButton,
} from "@material-ui/core";
import GoogleButton from "react-google-button";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import { purple } from "@material-ui/core/colors";
import Divider from "@material-ui/core/Divider";
import { colors } from "./themes/colors";
export const Login = (isDarkTheme) => {
  const useStyles = makeStyles(() => ({
    root: {
      "& > *": {
        width: "100%",
      },
    },

    paperRoot: {
      backgroundColor: isDarkTheme ? "#232323" : "#FFFFFF",
      padding: "40px 72px 37px 72px",
      minWidth: "400px",
      color: isDarkTheme ? "#FFFFFF" : "#121212",
    },
    icon: {
      color: isDarkTheme ? "#FFFFFF" : "#121212",
    },
    divider: {
      
      background: '#ffffff'
    }
  }));
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Paper className={classes.paperRoot} elevation={10}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="stretch"
        spacing={2}
      >
        <Grid item align="center">
          <Box>
            <img src={pic} alt="vec" />
          </Box>
        </Grid>
        <Grid item>
          <Typography align="center" variant="h2">
            Welcome!
          </Typography>
        </Grid>
        <Grid item>
          <Typography align="center">
            Create Components / UI Library from design.
          </Typography>
        </Grid>
        <Grid item>
          <GoogleButton
            style={{ width: "100%" }}
            onClick={() => {
              console.log("Google Button clicked");
            }}
          />
        </Grid>
        <Grid item>
          <Divider light={false}/>
        </Grid>

        <Grid item>
          <TextField
            placeholder="email address"
            variant="outlined"
            margin="normal"
            fullWidth
          ></TextField>
        </Grid>
        <Grid item>
          <FormControl fullWidth variant="outlined">
            <TextField
              variant="outlined"
              margin="normal"
              placeholder="password"
              onChange={handleChange}
              type={values.showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      className={classes.icon}
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </FormControl>
        </Grid>

        <Grid item align="left">
          <Link
            href="#"
            style={{
              color: colors.purple[200],
              border: "none",
            }}
            component="button"
            variant="body2"
          >
            Forgot Password?
          </Link>
        </Grid>
        <Grid item>
          <Box mt={2}>
            <Button variant="contained" fullWidth>
              Login
            </Button>
          </Box>
        </Grid>
        <Grid item align="left">
          <span>Don’t have an account? </span>
          <Link
            style={{
              color: colors.purple[200],
            }}
            component="button"
            variant="body2"
            onClick={() => {
              console.info("I'm a forget.");
            }}
          >
            Sign up?
          </Link>
        </Grid>
      </Grid>
    </Paper>
  );
};
