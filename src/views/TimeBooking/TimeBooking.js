import React from 'react';

import {
  Container, Grid
} from '@material-ui/core';

import MovieInfo from './MovieInfo/MovieInfo';
import TimeShowing from './TimeShowing/TimeShowing';

function TimeBooking() {
  return (
    <>
      <Container maxWidth="xl">
        <Grid
          container
        >
          <MovieInfo />
          <Grid item lg={9} xs={12} md={12}>
            <TimeShowing />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default TimeBooking;
