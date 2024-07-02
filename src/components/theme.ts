import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1c62eb',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#ffffff',
    },
    success: {
      main: '#0e6f0e',
    },
  },
  typography: {
    fontSize: 15,
    fontWeightLight: 300,
    fontWeightRegular: 300,
  },
});
