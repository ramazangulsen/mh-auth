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
import {
  makeStyles,
 
} from "@material-ui/core/styles";
import React, { useState } from "react";

import { App_bar } from "./App_Bar";
import pic from "./images/n_img.png";
import GoogleButton from "react-google-button";


const SignUp = () => {
  const [isDarkTheme] = useState(false);

  return (
    <Box bgcolor="background.default">
      {App_bar(isDarkTheme)}
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        <Grid item md={8}>
          {SignPage(isDarkTheme)}
        </Grid>
      </Grid>
    </Box>
  );
};

export default SignUp;

export const SignPage = (isDarkTheme) => {
  const useStyles = makeStyles(() => ({
    paperRoot: {
      backgroundColor: isDarkTheme ? "#232323" : "#FFFFFFF",
      padding: "40px 72px 37px 72px",
      minWidth: "400px",
      color: isDarkTheme ? "#FFFFFF" : "#121212",
    },
  }));
  const classes = useStyles();
  return (
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
                <Button variant="contained" fullWidth>
                  Login
                </Button>
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
  );
};
