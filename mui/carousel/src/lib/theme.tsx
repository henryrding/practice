import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
    },
  },
  typography: {
    fontFamily: 'Raleway',
    h1: {
      fontSize: '3.5rem',
      '@media (min-width:600px)': {
        fontSize: '4.7129rem',
      },
      '@media (min-width:960px)': {
        fontSize: '5.3556rem',
      },
      '@media (min-width:1200px)': {
        fontSize: '5.9983rem',
      },
    },
  },
});

export default theme;
