"use client";
import { createTheme } from "@mui/material/styles";
// import { green, purple } from "@mui/material/colors";

const theme = createTheme({
  typography: {
    fontFamily: "var(--font-roboto)",
    cssVariables: true,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
  },
  //   palette: {
  //     primary: green,
  //     secondary: purple,
  //   },
});

export default theme;
