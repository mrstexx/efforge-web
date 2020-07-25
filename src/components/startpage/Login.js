import React from "react";
import { TextField, Grid, Button, Avatar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Link } from "@reach/router";
import { createStyle } from "./createStyle";

const useStyles = makeStyles(createStyle);

const Login = () => {
  const classes = useStyles();
  return (
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography className={classes.title} component="h1" variant="h5">
        Sign In
      </Typography>
      <form autoComplete="true" noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              label="Enter your Username"
              variant="outlined"
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-password-input"
              label="Enter your Password"
              type="password"
              autoComplete="current-password"
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
          Sign In
        </Button>
        <Grid container justify="flex-end">
          <Grid item>
            <Link to="/register" variant="body2">
              Still don&apos;t have an account? Create one
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Login;
