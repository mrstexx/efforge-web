import { createStyles } from "@material-ui/core";

export const createStyle = (theme) => {
  return {
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "500px",
      maxWidth: "500px",
      marginLeft: "auto",
      marginRight: "auto"
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main
    },
    title: {
      marginBottom: theme.spacing(3)
    },
    form: {
      width: "100%",
      marginTop: theme.spacing(3)
    },
    submit: {
      margin: theme.spacing(3, 0, 2)
    }
  };
};
