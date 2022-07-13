import {
  Box,
  Button,
  Divider,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { makeStyles, MuiThemeProvider } from "@material-ui/core/styles";
import React, { useState } from "react";
import { CssBaseline } from "@material-ui/core";
import { App_bar } from "./App_Bar";
import pic from "./images/n_img.png";
import GoogleButton from "react-google-button";
import { connect } from "react-redux";
import { darkTheme } from "./themes/dark/dark";
import { lightTheme } from "./themes/light/light";





const SignUp = (props) => {
  const useStyles = makeStyles(() => ({
    paperRoot: {
      backgroundColor: props.isDarkTheme ? "#232323" : "#FFFFFFF",
      padding: "40px 72px 37px 72px",
      minWidth: "400px",
      color: props.isDarkTheme ? "#FFFFFF" : "#121212",
    },
  }));
  const [isDarkTheme] = useState(false);
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={props.isDarkTheme ? darkTheme : lightTheme}>
      <CssBaseline />
      <Box bgcolor="background.default">
        {App_bar(props.isDarkTheme)}
        {
          <Grid container justifyContent="center" alignItems="center">
            <Grid item md={8}>
            <Paper className={classes.paperRoot} elevation={10}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item>
          <Box>
            <img alt="img" src={pic} />
          </Box>
        </Grid>
        <Grid item>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="stretch"
            spacing={2}
          >
            <Grid item>
              <Typography align="center" variant="h2">
                Sign up for free!
              </Typography>
            </Grid>
            <Grid item>
              <Typography align="center">
                Create a new account, easily.
              </Typography>
            </Grid>
            <Grid item>
              <GoogleButton
                type={isDarkTheme ? "light" : "dark"}
                style={{ width: "100%" }}
              />
            </Grid>
            <Grid item>
              <Divider variant="middle" />
            </Grid>
            <Grid item>
              <Grid container justifyContent="space-between">
                <Grid item xs={12} sm={6}>
                  <TextField
                    textFieldTheme
                    placeholder="Name"
                    variant="outlined"
                    fullWidth
                    autoFocus
                    required
                    borderColor="secondary"
                    autoComplete="false"
                  />
                </Grid>
                <Grid item>
                  <TextField
                    id="surname"
                    placeholder="Surname"
                    variant="outlined"
                    fullWidth
                    required
                    autoComplete="false"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <TextField
                id="email"
                placeholder="Email address"
                variant="outlined"
                margin="normal"
                fullWidth
                autoComplete="false"
              />
            </Grid>
            <Grid item>
              <TextField
                id="password"
                placeholder="Password"
                variant="outlined"
                margin="normal"
                fullWidth
                autoComplete="false"
              />
            </Grid>

            <Grid item align="left">
              <span>By registering, you agree to Monday Hero’s </span>
              <Link
                style={{
                  color: "#7F5FFF",
                }}
                variant="body2"
                component="button"
              >
                Terms of service
              </Link>
              <span> and </span>
              <Link
                style={{
                  color: "#7F5FFF",
                }}
                variant="body2"
                component="button"
              >
                Privacy Policy.
              </Link>
            </Grid>
            <Grid item>
              <Box mt={2}>
                <Link to="/sign_in">
                  <Button variant="contained" fullWidth>
                    Login
                  </Button>
                </Link>
              </Box>
            </Grid>
            <Grid item align="left">
              <span>Already have an account? </span>
              <Link
                style={{
                  color: "#9C77DC",
                }}
                component="button"
                variant="body2"
              >
                Login
              </Link>
            </Grid>
          </Grid>
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

export default connect(mapStateToProps)(SignUp);



  
    
  
  
