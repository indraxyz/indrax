"use client";
import { createTheme } from "@mui/material/styles";
// import { green, purple } from "@mui/material/colors";

const theme = createTheme({
  typography: {
    fontFamily: "var(--font-roboto)",
    cssVariables: true,
  },
  //   palette: {
  //     primary: green,
  //     secondary: purple,
  //   },
});

export default theme;
