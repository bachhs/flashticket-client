import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core';
import theme from 'src/theme';
import { BrowserRouter } from 'react-router-dom';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import CssBaseline from '@material-ui/core/CssBaseline';

import store from 'src/redux/store';
import Routes from 'src/Routes';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <CssBaseline />
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
