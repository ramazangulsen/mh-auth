import {
  Box,
  Button,
  Grid,
  makeStyles,
  withStyles,
  Paper,
  Menu,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import { App_bar } from "./App_Bar";
import pic from "./images/tell_us.png";
import { MenuItem } from "@material-ui/core";

const LoginQue = (isDarkTheme) => {
  return (
    <Box bgcolor="background.default">
      {App_bar(isDarkTheme)}
      <Grid container justifyContent="center" alignItems="center">
        <Grid item md={4}>
          {BaseCom(isDarkTheme)}
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginQue;

export const BaseCom = (isDarkTheme) => {
  const useStyles = makeStyles(() => ({
    root: {
      "& > *": {
        width: "100%",
      },
    },

    paperRoot: {
      backgroundColor: isDarkTheme ? "#232323" : "#FFFFFFF",
      padding: "40px 48px 40px 46px",
      minWidth: "400px",
      color: isDarkTheme ? "#FFFFFF" : "#121212",
    },
    formControl: {
      width: "100%",
    },
  }));
  const classes = useStyles();
  const [work, setWork] = React.useState("");
  const [business, setBusiness] = React.useState("");
  const [team, setTeam] = React.useState("");

  const handleChangeWork = (event) => {
    setWork(event.target.value);
  };
  const handleChangeBusiness = (event) => {
    setBusiness(event.target.value);
  };
  const handleChangeTeam = (event) => {
    setTeam(event.target.value);
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
            <img alt="img" src={pic}></img>
          </Box>
        </Grid>
        <Grid item>
          <Typography align="center" variant="h2">
            Tell us about yourself!
          </Typography>
        </Grid>
        <Grid item>
          <Typography align="center" variant="body2">
            We want to tailor your experience.
          </Typography>
        </Grid>

        <Grid item>
          <TextField
            variant="outlined"
            id="select"
            label="What kind of work do you do?"
            value={work}
            select
            fullWidth
            onChange={handleChangeWork}
          >
            <MenuItem value="10">Deisgner</MenuItem>
            <MenuItem value="20">Twenty</MenuItem>
          </TextField>
        </Grid>
        <Grid item>
          <TextField
            variant="outlined"
            id="select"
            label="What type of business are you working in?"
            value={business}
            select
            fullWidth
            onChange={handleChangeBusiness}
          >
            <MenuItem value="Developer">Developer</MenuItem>
            <MenuItem value="Student">Student</MenuItem>
          </TextField>
        </Grid>
        <Grid item>
          <TextField
            variant="outlined"
            id="select"
            label="How many people are on your team?"
            value={team}
            select
            fullWidth
            onChange={handleChangeTeam}
          >
            <MenuItem value="2">1</MenuItem>
            <MenuItem value="5">5</MenuItem>
          </TextField>
        </Grid>

        <Grid item>
          <Box mt={2}>
            <Button variant="contained" fullWidth>
              Save
            </Button>
          </Box>
        </Grid>
        <Grid item>
          <Box mt={2}>
            <Button variant="text" color="#fafafa" fullWidth>
              Skip for now
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};
