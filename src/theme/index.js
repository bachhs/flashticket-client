import { colors, createMuiTheme, responsiveFontSizes } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    type: 'light',
    action: {
      active: colors.blueGrey[600]
    },
    background: {
      default: colors.common.white,
      dark: '#f0f2f5',
      paper: colors.common.white
    },
    primary: {
      main: colors.blue[600]
    },
    secondary: {
      main: '#1877f2'
    },
    text: {
      primary: colors.blueGrey[900],
      secondary: colors.blueGrey[600]
    }
  },
});

export default responsiveFontSizes(theme);
