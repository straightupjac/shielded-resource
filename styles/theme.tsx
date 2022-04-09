import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// Create a theme instance.
let theme = createTheme({
  palette: {
    primary: {
      main: '#88b1b1',
    },
    secondary: {
      main: '#cdeafe',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    h1: {
      fontSize: '4rem',
      fontWeight: 500,
      color: '#137dc5',
      '@media only screen and (max-width: 900px)': {
        fontSize: '3rem',
      },
      '@media only screen and (max-width: 600px)': {
        fontSize: '2rem',
      }
    },
    body1: {
      fontSize: '1.15rem',
    }
  },
});

theme = responsiveFontSizes(theme);

export default theme;