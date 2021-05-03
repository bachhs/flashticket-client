/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';

import { SEAT_STATUS } from 'src/utils/constants';

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

  const [seatSelected, setSeatSelected] = useState([]);

  const [seats, setSeats] = useState(
    [
      [1, 2, 2, 0, 1, 1, 2, 2, 1, 1, 1, 1, 0, 1, 2, 1],
      [2, 2, 1, 0, 1, 1, 1, 1, 1, 1, 2, 2, 0, 1, 1, 1],
      [1, 2, 1, 0, 1, 1, 2, 2, 2, 1, 1, 1, 0, 2, 2, 1],
      [1, 1, 1, 0, 1, 1, 1, 1, 2, 2, 1, 1, 0, 1, 2, 2],
      [1, 1, 2, 0, 1, 1, 1, 2, 2, 1, 2, 2, 0, 1, 1, 1],
      [2, 2, 1, 0, 1, 1, 1, 2, 2, 1, 1, 1, 0, 2, 2, 1],
      [1, 1, 2, 0, 1, 1, 1, 2, 2, 1, 1, 1, 0, 1, 2, 2],
    ]
  );

  const handleSeatSelect = (row, column) => {
    const copy = [...seats];
    copy[row][column] = SEAT_STATUS.selected;
    setSeatSelected([...seatSelected, String.fromCharCode(row + 65) + column]);
    setSeats(copy);
  };

  const handleSeatUnSelect = (row, column) => {
    const copy = [...seats];
    copy[row][column] = SEAT_STATUS.available;
    setSeatSelected(seatSelected.filter((item) => item !== String.fromCharCode(row + 65) + column));
    setSeats(copy);
  };

  return (
    <>
      <Container maxWidth="xl" className={classes.container}>
        <Grid
          container
        >
          <MovieInfo />
          <Grid item lg={9} xs={12} md={12}>
            <BookingTitle />
            <BookingSeats
              seats={seats}
              handleSeatSelect={handleSeatSelect}
              handleSeatUnSelect={handleSeatUnSelect}
            />
            <BookingCheckout seatSelected={seatSelected} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default BookingView;
