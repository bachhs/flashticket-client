import React from 'react';

import {
  Button, Grid, Typography, makeStyles
} from '@material-ui/core';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100vh',
    minHeight: '640px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  blurRoot: {
    display: 'flex',
    alignItems: 'center',
    height: ' 100%',
    width: '100%',
    padding: theme.spacing(5),
    background:
      'radial-gradient(circle, rgba(5,5,18,0.55) 0%, rgba(4,3,20,0.91) 100%)',
    zIndex: 2
  },
  rootInfo: {
    position: 'absolute',
    left: 1,
    right: 1
  },
  leagueBox: {
    marginBottom: theme.spacing(1)
  },
  league: {
    fontSize: '40px',
    color: 'rgb(0 255 135)',
    marginRight: theme.spacing(1)
  },
  leagueSub: {
    fontSize: '20px',
    color: '#cee4fd'
  },
  sportName: {
    fontSize: '40px',
    lineHeight: 1.2,
    fontWeight: 350,
  },
  root1: {
    marginBottom: theme.spacing(2)
  },
  kickOff: {
    fontSize: '20px',
    lineHeight: 1.2,
    fontWeight: 320,
  },
  stadium: {
    fontSize: '13px',
    marginLeft: theme.spacing(2),
    padding: theme.spacing(0.4),
    border: '1px solid rgba(255,255,255,0.13)',
    borderRadius: 30
  },
  btBook: {
    marginTop: theme.spacing(2),
    borderRadius: 0,
    padding: '10px 30px',
    fontSize: 12,
    backgroundColor: '#ff0000bd'
  },
  [theme.breakpoints.down('sm')]: {
    league: {
      fontSize: '25px'
    },
    leagueSub: {
      fontSize: '13px'
    },
    root1: {
      marginBottom: theme.spacing(0)
    },
    kickOff: {
      fontSize: '13px',
      marginBottom: theme.spacing(1)
    },
    stadium: {
      fontSize: '10.3px',
      marginBottom: theme.spacing(1)
    },
    sportName: {
      fontSize: '25px'
    },
    btBook: {
      marginRight: 10,
      marginTop: 12,
      padding: '8px 20px',
      fontSize: 12
    },
  }
}));

function SportDetailView() {
  const classes = useStyles();

  return (
    <div
      className={classes.root}
      style={{
        backgroundImage: `url(${'https://wallpaper.dog/large/17090684.jpg'})`
      }}
    >
      <div className={classes.blurRoot}>
        <div className={classes.rootInfo}>
          <Grid
            className={classes.leagueBox}
            alignItems="center"
            direction="column"
            justify="center"
            container
          >
            <Typography className={classes.league} variant="h5" color="inherit">
              Premier League
            </Typography>
            <Typography className={classes.leagueSub} variant="body2" color="inherit">
              #Round 32
            </Typography>
          </Grid>

          <Grid
            container
            className={classes.root1}
            justify="center"
            alignItems="center"
          >
            <Typography
              className={classes.kickOff}
              variant="body1"
              color="secondary"
            >
              Kick off: 1h30 23/5/2021
            </Typography>

            <Typography
              className={classes.stadium}
              variant="caption"
            >
              Old Trafford Stadium
            </Typography>
          </Grid>

          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Typography className={classes.sportName} variant="h5" color="inherit">
              Manchester United
            </Typography>
            <Typography className={classes.sportName} variant="h5" color="inherit">
              vs
            </Typography>
            <Typography className={classes.sportName} variant="h5" color="inherit">
              Liverpool
            </Typography>
            <Link to="" style={{ textDecoration: 'none' }}>
              <Button className={classes.btBook}>
                Book Now
                <ConfirmationNumberIcon style={{ marginLeft: 8 }} />
              </Button>
            </Link>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default SportDetailView;
