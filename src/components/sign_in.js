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
  CssBaseline,
  InputAdornment,
} from "@material-ui/core";
import GoogleButton from "react-google-button";
import { makeStyles, MuiThemeProvider } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { App_bar } from "./App_Bar";
import Divider from "@material-ui/core/Divider";
import { colors } from "./themes/colors";
import { connect } from "react-redux";
import { darkTheme } from "./themes/dark/dark";
import { lightTheme } from "./themes/light/light";
const Login = (props) => {
  const useStyles = makeStyles(() => ({
    root: {
      "& > *": {
        width: "100%",
      },
    },

    paperRoot: {
      backgroundColor: props.isDarkTheme ? "#232323" : "#FFFFFF",
      padding: "40px 72px 37px 72px",
      minWidth: "400px",
      color: props.isDarkTheme ? "#FFFFFF" : "#121212",
    },
    icon: {
      color: props.isDarkTheme ? "#FFFFFF" : "#121212",
    },
    divider: {
      background: "#ffffff",
    },
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
    <MuiThemeProvider theme={props.isDarkTheme ? darkTheme : lightTheme}>
      <CssBaseline />
      <Box bgcolor="background.default">
        {App_bar(props.isDarkTheme)}
        {
          <Grid container justifyContent="center" alignItems="center">
            <Grid item md={4}>
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
                      type={props.isDarkTheme ? "light" : "dark"}
                      style={{ width: "100%" }}
                      onClick={() => {
                        console.log("Google Button clicked");
                      }}
                    />
                  </Grid>
                  <Grid item>
                    <Divider light={false} />
                  </Grid>

                  <Grid item>
                    <TextField
                      placeholder="Email Address"
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
                        placeholder="Password"
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
                                {values.showPassword ? (
                                  <Visibility />
                                ) : (
                                  <VisibilityOff />
                                )}
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
                    <Link to="/sign-up"
                       style={{
                        color: colors.purple[200],
                      }} 
                       component="button"
                      variant="body2" >
                      Sign up?
                    </Link>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        }
      </Box>
    </MuiThemeProvider>
  );
};

const mapStateToProps = (state) => {
  return {
    isDarkTheme: state.isDarkTheme,
  };
};

export default connect(mapStateToProps)(Login);
