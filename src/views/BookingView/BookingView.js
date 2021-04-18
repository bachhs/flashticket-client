import React from 'react';

import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';

import BookingCheckout from './BookingCheckout/BookingCheckout';
import BookingSeats from './BookingSeats/BookingSeats';
import BookingTitle from './BookingTitle/BookingTitle';
import MovieInfo from './MovieInfo/MovieInfo';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(14),
    height: '100%'
  }
}));

function BookingView() {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="xl" className={classes.container}>
        <Grid
          container
        >
          <MovieInfo />
          <Grid item lg={9} xs={12} md={12}>
            <BookingTitle />
            <BookingSeats />
            <BookingCheckout />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default BookingView;
