import React, { Suspense, lazy } from 'react';

import { Redirect, Route, Switch } from 'react-router-dom';

import LoadingScreen from 'src/components/LoadingScreen';
import MainLayout from 'src/layout/MainLayout';

function Routes() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Switch>
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
        <Route
          exact
          path="/404"
          component={lazy(() => import('src/views/pages/Error404View'))}
        />
        <Route
          path="*"
          render={(props) => (
            <MainLayout {...props}>
              <Switch>
                <Route
                  exact
                  path="/movies/:id"
                  component={lazy(() => import('src/views/DetailView/MovieDetailView'))}
                />
                <Route
                  exact
                  path="/sport"
                  component={lazy(() => import('src/views/DetailView/SportsDetailView'))}
                />
                <Route
                  exact
                  path="/"
                  component={lazy(() => import('src/views/HomeView'))}
                />
              </Switch>
            </MainLayout>
          )}
        />
        <Redirect to="/404" />
      </Switch>
    </Suspense>
  );
}

export default Routes;
