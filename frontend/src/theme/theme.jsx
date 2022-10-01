import { createTheme } from "@material-ui/core/styles";
import colorGrade from "./colors/colors";
// https://in-your-saas.github.io/material-ui-theme-editor/

const theme = createTheme({
  palette: {
    common: { 
      black: "rgba(13, 27, 42, 1)", 
      white: "rgba(224, 225, 221, 1)" },
    background: {
      paper: "rgba(53, 65, 83, 1)",
      default: "rgba(13, 27, 42, 1)",
    },
    primary: {
      light: "rgba(13, 4, 9, 1)",
      main: "rgba(53, 65, 83, 1)",
      dark: "rgba(6, 14, 24, 1)",
      contrastText: "rgba(224, 225, 221, 1)",
    },
    secondary: {
      light: "rgba(68, 78, 101, 1)",
      main: "rgba(68, 78, 101, 1)",
      dark: "rgba(22, 28, 41, 1)",
      contrastText: "rgba(224, 225, 221, 1)",
    },
    error: {
      light: "rgba(202, 59, 59, 1)",
      main: "rgba(208, 0, 0, 1)",
      dark: "rgba(129, 1, 1, 1)",
      contrastText: "#fff",
    },
    text: {
      primary: "rgba(224, 225, 221, 1)",
      secondary: "rgba(224, 225, 221, 1)",
      disabled: "rgba(224, 225, 221, 1)",
      hint: "rgba(224, 225, 221, 1)",
    },
  },
});

export default theme;
