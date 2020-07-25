import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { makeStyles } from "@material-ui/core/styles";
import { createStyle } from "./createStyle";
import { Avatar, Typography, Grid, TextField, Button } from "@material-ui/core";

const useStyles = makeStyles(createStyle);

const Registration = () => {
  const classes = useStyles();
  return (
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <AccountCircleIcon />
      </Avatar>
      <Typography className={classes.title} component="h1" variant="h5">
        Create New Account
      </Typography>
      <form autoComplete="true" noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              label="Full Name"
              variant="outlined"
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              label="E-Mail Address"
              variant="outlined"
              type="email"
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              label="Username"
              variant="outlined"
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="outlined"
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-password-input"
              label="Re-Enter Password"
              type="password"
              variant="outlined"
              required
              fullWidth
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Register
        </Button>
      </form>
    </div>
  );
};

export default Registration;
