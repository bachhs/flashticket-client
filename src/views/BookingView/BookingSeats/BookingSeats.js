/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import {
  Box, Grid, makeStyles
} from '@material-ui/core';

import { SEAT_STATUS } from 'src/utils/constants';

const useStyles = makeStyles((theme) => ({
  row: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%'
  },
  seat: {
    cursor: 'pointer',
    color: 'rgba(255,255,255,0.7)',
    borderRadius: 2,
    padding: theme.spacing(2),
    margin: theme.spacing(0.5),
    fontWeight: 600,
    '&:hover': {
      background: 'rgb(120, 205, 4)'
    }
  },
  seatInfoContainer: {
    margin: 'auto',
    display: 'flex',
    textAlign: 'center',
    color: '#eee'
  },

  seatInfo: { marginRight: theme.spacing(2) },

  seatInfoLabel: {
    marginRight: theme.spacing(1),
    display: 'inline-block',
    width: 10,
    height: 10
  },
  container: {
    marginTop: '12vh',
    marginBottom: '12vh',
    perspective: '1000px',
    height: '100%'
  },
  seatEmpty: {
    backgroundColor: 'rgb(255, 255, 255, 0)',
    height: 20,
    width: 25,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  seatAvailable: {
    cursor: 'pointer',
    backgroundColor: 'rgb(212 204 205)',
    height: 20,
    width: 25,
    margin: 6,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  seatReserved: {
    cursor: 'not-allowed',
    backgroundColor: 'rgb(65, 66, 70)',
    height: 20,
    width: 25,
    margin: 6,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  seatSelected: {
    cursor: 'pointer',
    backgroundColor: 'rgb(120, 205, 4)',
    height: 20,
    width: 25,
    margin: 6,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  row1: {
    display: 'flex'
  },
  screen: {
    backgroundColor: '#fff',
    height: 70,
    width: '100%',
    margin: '15px 0',
    transform: 'rotateX(-45deg)',
    boxShadow: '0 3px 10px rgba(255, 255, 255, 0.7)'
  },
  [theme.breakpoints.down('sm')]: {
    seat: { padding: theme.spacing(1.2), margin: theme.spacing(0.5) },
    seatInfoContainer: { width: '100%', display: 'block' },
    seatInfo: { marginTop: theme.spacing(2) },
    container: {
      paddingLeft: theme.spacing(15),
      paddingRight: theme.spacing(3),
      marginTop: '3vh',
      marginBottom: '0vh',
    }
  },
  [theme.breakpoints.down('md')]: {
    seatEmpty: {
      height: 12,
      width: 15,
      margin: 4,
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8
    },
    seatAvailable: {
      height: 12,
      width: 15,
      margin: 4,
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8
    },
    seatReserved: {
      height: 12,
      width: 15,
      margin: 4,
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8
    },
    seatSelected: {
      height: 12,
      width: 15,
      margin: 4,
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8
    }
  }
}));

export default function BookingSeats(props) {
  const classes = useStyles(props);

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
    setSeats(copy);
  };

  const handleSeatUnSelect = (row, column) => {
    const copy = [...seats];
    copy[row][column] = SEAT_STATUS.available;
    setSeats(copy);
  };

  return (
    <>
      <Box>
        <Grid container alignItems="center" justify="center">
          <div className={classes.container}>
            <div className={classes.screen} />
            {seats.map((row, rowIndex) => (
              <div className={classes.row} key={rowIndex}>
                {row.map((column, columnIndex) => {
                  switch (column) {
                    case (SEAT_STATUS.available):
                      return (
                        <div
                          className={classes.seatAvailable}
                          key={columnIndex}
                          onClick={() => handleSeatSelect(rowIndex, columnIndex)}
                        />
                      );
                    case (SEAT_STATUS.selected):
                      return (
                        <div
                          className={classes.seatSelected}
                          key={columnIndex}
                          onClick={() => handleSeatUnSelect(rowIndex, columnIndex)}
                        />
                      );
                    case (SEAT_STATUS.reserved):
                      return (
                        <div
                          className={classes.seatReserved}
                          key={columnIndex}
                        />
                      );
                    default:
                      return (
                        <div
                          className={classes.seatEmpty}
                          key={columnIndex}
                        />
                      );
                  }
                })}
              </div>
            ))}
          </div>
        </Grid>
      </Box>
      <Box width={1} mt={10}>
        <Grid container alignItems="center" justify="center">
          <div className={classes.seatInfoContainer}>
            <div className={classes.seatInfo}>
              <div
                className={classes.seatInfoLabel}
                style={{ background: 'rgb(212 204 205)' }}
              />
              Seat Available
            </div>
            <div className={classes.seatInfo}>
              <div
                className={classes.seatInfoLabel}
                style={{ background: 'rgb(65, 66, 70)' }}
              />
              Reserved Seat
            </div>
            <div className={classes.seatInfo}>
              <div
                className={classes.seatInfoLabel}
                style={{ background: 'rgb(120, 205, 4)' }}
              />
              Selected Seat
            </div>
            <div className={classes.seatInfo}>
              <div
                className={classes.seatInfoLabel}
                style={{ background: 'rgb(14, 151, 218)' }}
              />
              Recommended Seat
            </div>
          </div>
        </Grid>
      </Box>
    </>
  );
}
