import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen';

function Routes() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Switch>
        <Route
          exact
          path="/"
          component={lazy(() => import('src/views/Home'))}
        />
        <Route
          exact
          path="/login"
          component={lazy(() => import('src/views/auth/LoginView'))}
        />
        <Route
          exact
          path="/register"
          component={lazy(() => import('src/views/auth/RegisterView'))}
        />
      </Switch>
    </Suspense>
  );
}

export default Routes;
