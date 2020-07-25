import React from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme";
import Startpage from "./components/startpage/Startpage";
import Login from "./components/startpage/Login";
import Registration from "./components/startpage/Registration";
import NotFound from "./components/startpage/NotFound";

const App = () => {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Startpage path="/">
            <Login path="/" />
            <Login path="/login" />
            <Registration path="/register" />
            <NotFound default />
          </Startpage>
        </Router>
      </ThemeProvider>
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
