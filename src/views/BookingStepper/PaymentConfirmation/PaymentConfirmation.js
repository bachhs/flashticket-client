import React from 'react';

import {
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(5),
    width: '100%',
    height: 500
  },
  ticketBg: {
    height: 500,
    width: 400,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: 'url(https://scontent.fhph1-2.fna.fbcdn.net/v/t1.15752-9/177030036_4522246731135825_4582645564598705243_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=ae9488&_nc_ohc=UKJAAzotXYgAX_oo7Y6&_nc_ht=scontent.fhph1-2.fna&oh=1c6292915634be2164f4c9832ed233b1&oe=60B140D1)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    opacity: 0.8
  },
  filmTitle: {
    maxWidth: '60%',
    fontSize: '38px',
    lineHeight: 1.2,
    fontWeight: 390
  },
  price: {
    fontSize: '22px'
  },
  paymentNotification: {
    fontSize: '30px',
    maxWidth: 500,
    lineHeight: 1.2,
    fontWeight: 350,
    marginTop: theme.spacing(4)
  },
  [theme.breakpoints.down('md')]: {
    ticketBg: {
      height: 320,
      width: 230
    },
    paymentConfirm: {
      padding: theme.spacing(5)
    },
    filmTitle: {
      fontSize: '25px'
    },
    price: {
      fontSize: '15px'
    }
  }
}));

function PaymentConfirmation({ seat }) {
  const classes = useStyles();
  return (
    <>
      <Grid
        className={classes.root}
        container
        alignItems="flex-start"
        justify="space-evenly"
      >
        <Grid item>
          <div className={classes.ticketBg} />
        </Grid>
        <Grid className={classes.paymentConfirm} item>
          <div>
            <Typography
              className={classes.filmTitle}
              display="inline"
              align="center"
              variant="h5"
              color="inherit"
            >
              Zack Snyder&apos;s Justice League
            </Typography>
            <Typography
              className={classes.price}
              variant="body1"
              color="primary"
            >
              {seat.length}
              {' '}
              Tickets - Price:
              {' '}
              {seat.length * 5}
              $
            </Typography>
            <Typography
              className={classes.paymentNotification}
              variant="body1"
              color="secondary"
            >
              Click FINISH when you have finished the payment !!!
            </Typography>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

PaymentConfirmation.propTypes = {
  seat: PropTypes.array
};

export default PaymentConfirmation;
