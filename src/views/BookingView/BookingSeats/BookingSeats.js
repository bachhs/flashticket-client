import React from 'react';

import {
  Box, Grid, makeStyles
} from '@material-ui/core';

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
    width: '50%',
    margin: 'auto',
    display: 'flex',
    alignItems: 'center',
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
  Seat: {
    cursor: 'pointer',
    backgroundColor: 'rgb(212 204 205)',
    height: 20,
    width: 25,
    margin: 6,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  seatOccupied: {
    cursor: 'pointer',
    backgroundColor: 'rgb(65, 66, 70)',
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
    Seat: {
      height: 12,
      width: 15,
      margin: 4,
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8
    },
    seatOccupied: {
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

  return (
    <>
      <Box>
        <Grid container alignItems="center" justify="center">
          <div className={classes.container}>
            <div className={classes.screen} />

            <div className={classes.row1}>

              <div className={classes.Seat} />
              <div className={classes.Seat} />
              <div className={classes.Seat} style={{ marginRight: 20 }} />

              <div className={classes.Seat} />
              <div className={classes.Seat} />
              <div className={classes.Seat} />
              <div className={classes.Seat} />
              <div className={classes.seatOccupied} />
              <div className={classes.seatOccupied} />
              <div className={classes.Seat} />
              <div className={classes.Seat} />
              <div className={classes.Seat} />
              <div className={classes.Seat} />
              <div className={classes.Seat} />

              <div className={classes.Seat} style={{ marginLeft: 20 }} />
              <div className={classes.seatOccupied} />
              <div className={classes.Seat} />
            </div>

            <div className={classes.row1}>
              <div className={classes.seatOccupied} />
              <div className={classes.seatOccupied} />
              <div className={classes.Seat} style={{ marginRight: 20 }} />

              <div className={classes.Seat} />
              <div className={classes.Seat} />
              <div className={classes.seatOccupied} />
              <div className={classes.seatOccupied} />
              <div className={classes.Seat} />
              <div className={classes.Seat} />
              <div className={classes.Seat} />
              <div className={classes.Seat} />
              <div className={classes.seatOccupied} />
              <div className={classes.seatOccupied} />
              <div className={classes.Seat} />

              <div className={classes.Seat} style={{ marginLeft: 20 }} />
              <div className={classes.Seat} />
              <div className={classes.Seat} />
            </div>

            <div className={classes.row1}>
              <div className={classes.Seat} />
              <div className={classes.seatOccupied} />
              <div className={classes.Seat} style={{ marginRight: 20 }} />

              <div className={classes.Seat} />
              <div className={classes.Seat} />
              <div className={classes.Seat} />
              <div className={classes.Seat} />
              <div className={classes.seatOccupied} />
              <div className={classes.seatOccupied} />
              <div className={classes.Seat} />
              <div className={classes.Seat} />
              <div className={classes.Seat} />
              <div className={classes.Seat} />
              <div className={classes.seatOccupied} />

              <div className={classes.seatOccupied} style={{ marginLeft: 20 }} />
              <div className={classes.seatOccupied} />
              <div className={classes.seatOccupied} />
            </div>

            <div className={classes.row1}>
              <div className={classes.Seat} />
              <div className={classes.seatOccupied} />
              <div className={classes.seatOccupied} style={{ marginRight: 20 }} />

              <div className={classes.Seat} />
              <div className={classes.Seat} />
              <div className={classes.Seat} />
              <div className={classes.Seat} />
              <div className={classes.Seat} />
              <div className={classes.Seat} />
              <div className={classes.seatOccupied} />
              <div className={classes.seatOccupied} />
              <div className={classes.Seat} />
              <div className={classes.Seat} />
              <div className={classes.Seat} />

              <div className={classes.seatOccupied} style={{ marginLeft: 20 }} />
              <div className={classes.Seat} />
              <div className={classes.Seat} />
            </div>

            <div className={classes.row1}>
              <div className={classes.seatOccupied} />
              <div className={classes.Seat} />
              <div className={classes.Seat} style={{ marginRight: 20 }} />

              <div className={classes.Seat} />
              <div className={classes.Seat} />
              <div className={classes.Seat} />
              <div className={classes.Seat} />
              <div className={classes.seatOccupied} />
              <div className={classes.seatOccupied} />
              <div className={classes.Seat} />
              <div className={classes.Seat} />
              <div className={classes.Seat} />
              <div className={classes.Seat} />
              <div className={classes.Seat} />

              <div className={classes.Seat} style={{ marginLeft: 20 }} />
              <div className={classes.Seat} />
              <div className={classes.Seat} />
            </div>

            <div className={classes.row1}>
              <div className={classes.Seat} />
              <div className={classes.Seat} />
              <div className={classes.Seat} style={{ marginRight: 20 }} />

              <div className={classes.Seat} />
              <div className={classes.Seat} />
              <div className={classes.Seat} />
              <div className={classes.seatOccupied} />
              <div className={classes.seatOccupied} />
              <div className={classes.seatOccupied} />
              <div className={classes.seatOccupied} />
              <div className={classes.Seat} />
              <div className={classes.Seat} />
              <div className={classes.Seat} />
              <div className={classes.Seat} />

              <div className={classes.Seat} style={{ marginLeft: 20 }} />
              <div className={classes.seatOccupied} />
              <div className={classes.seatOccupied} />
            </div>

            <div className={classes.row1}>
              <div className={classes.Seat} />
              <div className={classes.Seat} />
              <div className={classes.Seat} style={{ marginRight: 20 }} />

              <div className={classes.Seat} />
              <div className={classes.seatOccupied} />
              <div className={classes.seatOccupied} />
              <div className={classes.Seat} />
              <div className={classes.Seat} />
              <div className={classes.seatOccupied} />
              <div className={classes.seatOccupied} />
              <div className={classes.Seat} />
              <div className={classes.Seat} />
              <div className={classes.Seat} />
              <div className={classes.Seat} />

              <div className={classes.seatOccupied} style={{ marginLeft: 20 }} />
              <div className={classes.seatOccupied} />
              <div className={classes.Seat} />
            </div>
          </div>
        </Grid>
      </Box>
      <Box width={1} mt={10}>
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
      </Box>
    </>
  );
}
