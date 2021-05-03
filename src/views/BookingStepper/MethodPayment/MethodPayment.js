import React from 'react';

import {
  Button,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';

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
    backgroundImage: 'url(https://image.freepik.com/free-vector/payment-background-design_1223-72.jpg)',
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
  btMethod1: {
    marginTop: theme.spacing(2),
    borderRadius: 0,
    padding: '10px 42px',
    fontSize: 12,
    backgroundColor: '#ff0000bd'
  },
  btMethod2: {
    marginTop: theme.spacing(2),
    borderRadius: 0,
    padding: '10px 40px',
    fontSize: 12,
    backgroundColor: '#ff0000bd'
  },
  btMethod3: {
    marginTop: theme.spacing(2),
    borderRadius: 0,
    padding: '10px 45px',
    fontSize: 12,
    backgroundColor: '#ff0000bd'
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
    },
  }
}));

function MethodPayment() {
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
              3 Tickets - Price: 30$
            </Typography>
            <Grid
              direction="column"
              justify="space-evenly"
              alignItems="flex-start"
              className={classes.paymentMethod}
            >
              <Grid item xs={12}>
                <Button className={classes.btMethod1}> MoMo</Button>
              </Grid>
              <Grid item xs={12}>
                <Button className={classes.btMethod2}> AirPay</Button>
              </Grid>
              <Grid item xs={12}>
                <Button className={classes.btMethod3}> Card</Button>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default MethodPayment;
