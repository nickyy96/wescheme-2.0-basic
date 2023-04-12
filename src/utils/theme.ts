import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
      fontFamily: [
        'Montserrat',
        'sans-serif',
      ].join(','),
    },
    palette: {
      primary: {
        main: '#000000',
      },
      secondary: {
        main: '#f44336',
      },
    },
  });

export default theme