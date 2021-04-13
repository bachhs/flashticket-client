import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '*::-webkit-scrollbar': {
          width: '0.6em',
          color: 'transparent'
        },
        '*::-webkit-scrollbar-thumb': {
          borderRadius: '8px',
          border: '4px solid transparent',
          backgroundColor: '#909090',
        },
        '*::-webkit-scrollbar-thumb:active': {
          borderRadius: '8px',
          border: '4px solid transparent',
          backgroundColor: '#cccccc',
        }
      }
    }
  },
  palette: {
    type: 'dark',
    background: {
      paper: 'rgba(55, 55, 55, 0.95)',
      default: 'rgba(18, 18, 18, 1)'
    },
    primary: {
      main: '#03a9f4',
      light: '#67daff',
      dark: '#007ac1',
    },
    secondary: {
      main: '#ec407a',
      light: '#ff77a9',
      dark: '#b4004e',
    },
  }
});

export default responsiveFontSizes(theme);
