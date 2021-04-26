import React from 'react';

import {
  Box,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  dayShowing: {
    paddingLeft: theme.spacing(0.5),
    fontWeight: 300
  },
  timeShowing: {
    paddingLeft: theme.spacing(0.5),
    fontWeight: 300
  },
  movieTheater: {
    fontWeight: 300
  },
  span: {
    paddingLeft: theme.spacing(0.5),
    paddingRight: theme.spacing(0.5),
    fontWeight: 300
  },
  [theme.breakpoints.down('md')]: {
    root: {
      marginTop: theme.spacing(1.5)
    }
  }
}));

function BookingTitle() {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        alignItems="center"
        justify="center"
        className={classes.root}
      >
        <Box>
          <Grid container>
            <Typography display="initial" style={{ fontWeight: 300 }}>
              Showing on
            </Typography>
            <Typography className={classes.dayShowing}>
              Sun 18 Apr
            </Typography>
            <Typography className={classes.timeShowing}>
              14:00
            </Typography>
          </Grid>
        </Box>
        <Box className={classes.span}>
          <Typography>
            -
          </Typography>
        </Box>
        <Box>
          <Typography className={classes.movieTheater}>
            IFILM Paper Brigde
          </Typography>
        </Box>
      </Grid>
    </>
  );
}

export default BookingTitle;
