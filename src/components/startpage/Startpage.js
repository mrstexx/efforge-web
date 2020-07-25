import React from "react";
import Footer from "./Footer";
import { Box } from "@material-ui/core";

const Startpage = (props) => {
  return (
    <React.Fragment>
      <div>{props.children}</div>
      <Box mt={5}>
        <Footer />
      </Box>
    </React.Fragment>
  );
};

export default Startpage;
