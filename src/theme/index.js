import { colors, createMuiTheme, responsiveFontSizes } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    action: {
      active: colors.blueGrey[600]
    },
    primary: {
      main: colors.blue[600]
    },
    secondary: {
      main: '#1877f2'
    },
    text: {
      primary: '#ffffff',
      secondary: '#ffffff'
    }
  },
});

export default responsiveFontSizes(theme);
