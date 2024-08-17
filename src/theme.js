import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: rgb(188,149,71), // need to get primary color
    },
    secondary: {
      main: rgb(188,149,71), // gold custom color
    },
  },
  typography: {
  },
});

export default theme;
