import React from 'react';

import {
  Box,
  Button,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';

const useStyles = makeStyles((theme) => ({
  bannerTitle: {
    fontSize: theme.spacing(1.4),
    textTransform: 'uppercase',
    color: 'rgb(93, 93, 97)',
    marginBottom: theme.spacing(1)
  },
  bannerContent: {
    fontSize: theme.spacing(2),
    textTransform: 'capitalize',
    color: theme.palette.common.white
  },
  boxAll: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2),
    background: 'rgb(18, 20, 24)'
  },
  icon: {
    marginLeft: theme.spacing(1),
  },
  [theme.breakpoints.down('md')]: {
    boxAll: {
      marginLeft: 0
    }
  },
  [theme.breakpoints.down('sm')]: {
    hideOnSmall: {
      display: 'none'
    },
    icon: {
      display: 'none'
    }
  }
}));

function BookingCheckout() {
  const classes = useStyles();
  return (
    <Box className={classes.boxAll}>
      <Grid container>
        <Grid item xs={8} md={10}>
          <Grid container spacing={3} style={{ padding: 20 }}>
            <Grid item className={classes.hideOnSmall}>
              <Typography className={classes.bannerTitle}>Name</Typography>
              <Typography className={classes.bannerContent}>
                VSsYii
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.bannerTitle}>Tickets</Typography>
              <Typography className={classes.bannerContent}>1 Tickets</Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.bannerTitle}>Price</Typography>
              <Typography className={classes.bannerContent}>
                5 $
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={4}
          md={2}
          style={{
            color: 'rgb(120, 205, 4)',
            background: '#e02c2c',
            display: 'flex'
          }}
        >
          <Button
            style={{ color: 'white' }}
            fullWidth
          >
            Checkout
            <ConfirmationNumberIcon className={classes.icon} />
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default BookingCheckout;
