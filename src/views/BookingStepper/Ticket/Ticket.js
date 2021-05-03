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
    backgroundImage: 'url(http://game4v.com/g4v-content/uploads/2021/02/Justice-League-Snyder-Cut-1-game4v.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    opacity: 0.8
  },
  paymentConfirm: {
  },
  filmTitle: {
    maxWidth: '60%',
    fontSize: '38px',
    lineHeight: 1.2,
    fontWeight: 390
  },
  showingTime: {
    fontSize: '25px',
    lineHeight: 1.2,
    fontWeight: 350,
    marginTop: theme.spacing(1)
  },
  cinema: {
    fontSize: '23px',
    opacity: 0.98,
    lineHeight: 1.2,
    fontWeight: 350,
    marginTop: theme.spacing(1),
  },
  seat: {
    fontSize: '22px'
  },
  price: {
    fontSize: '22px'
  },
  qrCode: {
    height: 200,
    width: 200,
    marginTop: theme.spacing(1),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: 'url(https://vinacheck.vn/media/2019/05/ma-qr-code_vinacheck.vm_001.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    opacity: 0.9
  },
  subText: {
    color: '#cfd6e1',
    lineHeight: 1.2,
    fontWeight: 350,
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(1)
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
    showingTime: {
      fontSize: '21px'
    },
    cinema: {
      fontSize: '19px'
    },
    seat: {
      fontSize: '15px'
    },
    price: {
      fontSize: '15px'
    },
  }
}));

function Ticket({ seat }) {
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
              className={classes.showingTime}
              variant="body1"
              color="secondary"
            >
              Showing 8:00 PM - 20/6/2021
            </Typography>
            <Typography
              className={classes.cinema}
              variant="body2"
              color="inherit"
            >
              IFILM Paper Brigde
            </Typography>
            <Typography
              className={classes.seat}
              variant="subtitle1"
              color="primary"
              style={{ paddingRight: 20 }}
            >
              Seats:
              {' '}
              {seat.join(', ')}
            </Typography>
            <Typography
              className={classes.subText}
              variant="body2"
              color="inherit"
            >
              *Give the QRCODE to the ticket collector to enter the theater
            </Typography>
            <div className={classes.qrCode} />
          </div>
        </Grid>
      </Grid>
    </>
  );
}

Ticket.propTypes = {
  seat: PropTypes.array
};

export default Ticket;
