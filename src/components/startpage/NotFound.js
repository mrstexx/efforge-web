import React from "react";
import { Link } from "@reach/router";
import { Typography } from "@material-ui/core";

const NotFound = () => {
  return (
    <Typography variant="h4" color="secondary" align="center">
      <h1>Page Not Found</h1>
      <div>
        Click <Link to="/">here</Link> to go back
      </div>
    </Typography>
  );
};

export default NotFound;
