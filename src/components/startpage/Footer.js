import React from "react";
import { Typography } from "@material-ui/core";

const Footer = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      <div className="my-footer">
        Copyright © <b>Efforge Studio</b> {new Date().getFullYear()}.
      </div>
    </Typography>
  );
};

export default Footer;
