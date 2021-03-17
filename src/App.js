import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import theme from 'src/theme';
import { BrowserRouter } from 'react-router-dom';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import CssBaseline from '@material-ui/core/CssBaseline';

import Routes from 'src/Routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <CssBaseline />
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
}

export default App;
