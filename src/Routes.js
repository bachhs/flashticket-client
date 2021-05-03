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
                  path="/sports/:id"
                  component={lazy(() => import('src/views/DetailView/SportDetailView'))}
                />
                <Route
                  exact
                  path="/concerts/:id"
                  component={lazy(() => import('src/views/DetailView/ConcertDetailView'))}
                />
                <Route
                  exact
                  path="/booking"
                  component={lazy(() => import('src/views/BookingView'))}
                />
                <Route
                  exact
                  path="/showtime"
                  component={lazy(() => import('src/views/TimeBooking'))}
                />
                <Route
                  exact
                  path="/bookingprocess"
                  component={lazy(() => import('src/views/BookingStepper'))}
                />
                <Route
                  exact
                  path="/"
                  component={lazy(() => import('src/views/HomeView'))}
                />
                <Redirect to="/404" />
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
