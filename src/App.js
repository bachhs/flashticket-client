import React from 'react';

import MomentUtils from '@date-io/moment';
import { ThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { SnackbarProvider } from 'notistack';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import Auth from 'src/components/Auth';
import store from 'src/redux/store';
import Routes from 'src/Routes';
import theme from 'src/theme';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <SnackbarProvider maxSnack={3}>
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <CssBaseline />
            <Router>
              <Auth>
                <Routes />
              </Auth>
            </Router>
          </MuiPickersUtilsProvider>
        </SnackbarProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
