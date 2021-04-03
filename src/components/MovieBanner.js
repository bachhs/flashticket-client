import React from 'react';

import {
  Button, Grid, Typography, makeStyles
} from '@material-ui/core';
import ArrowRightAlt from '@material-ui/icons/ArrowRightAlt';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    width: '100%',
    height: '85vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '85% 15%',
  },
  blurRoot: {
    positon: 'relative',
    display: 'flex',
    alignItems: 'center',
    height: ' 100%',
    width: '100%',
    padding: theme.spacing(5),
    background:
        'linear-gradient(to right, rgba(0,0,0,.8) 30%, transparent 100%)',
    zIndex: 2
  },
  movieImg: {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '85% 15%',
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 1,
    top: 0,
    right: 0
  },
  movieName: {
    maxWidth: '44%',
    fontSize: '32px',
    lineHeight: 1.2,
    fontWeight: 320,
    textTransform: 'capitalize'
  },
  descriptionText: {
    color: '#cfd6e1',
    padding: theme.spacing(1.5, 0),
    maxWidth: '44%'
  },
  cast: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0.5, 0),
    maxWidth: '44%'
  },
  duration: {
    display: 'inline-block',
    marginTop: theme.spacing(0.7),
    padding: theme.spacing(1.05),
    border: '1px solid rgba(255,255,255,0.13)'
  },
  genre: {
    display: 'inline-block',
    color: '#cee4fd',
    padding: theme.spacing(0.52),
    fontSize: 15
  },
  span: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  btLearn: {
    border: '1px solid rgba(255,255,255,0.13)',
    borderRadius: 0,
    marginLeft: 15,
    fontSize: 11
  },
  [theme.breakpoints.down('sm')]: {
    blurRoot: {
      background:
        'linear-gradient(to right, rgba(0,0,0,.8) 50%, transparent 100%)'
    },
    movieName: {
      maxWidth: '90%',
      fontSize: '18px'
    },
    descriptionText: {
      maxWidth: '100%',
      fontSize: '12px'
    },
    movieActions: { display: 'flex', width: '100%' },
    cast: {
      maxWidth: '90%'
    },
    director: {
      fontSize: '15px'
    },
    stars: {
      fontSize: '15px'
    },
    genre: {
      fontSize: 12
    }
  }
}));

function MovieBanner() {
  const classes = useStyles();

  return (
    <div
      className={classes.root}
      style={{
        backgroundImage: `url(${'/static/images/poster/poster0.jpg'})`
      }}
    >
      <div className={classes.blurRoot}>
        <div>
          <Typography className={classes.movieName} variant="h5" color="inherit">
            Justice League: Zack Snyder
          </Typography>
          <Typography
            className={classes.genre}
            variant="caption"
          >
            Action, Adventure, Fantasy
          </Typography>
          <Typography
            className={classes.descriptionText}
            variant="body2"
            color="inherit"
          >
            Determined to ensure Superman ultimate sacrifice was not in vain,
            Bruce Wayne aligns forces with Diana Prince with plans
            to recruit a team of metahumans to protect the world
            from an approaching threat of catastrophic proportions.
          </Typography>
          <Typography
            className={classes.openingDay}
            variant="body1"
            color="secondary"
          >
            Opening day 23/6/2021
          </Typography>
          <Grid
            container
            alignItems="center"
            className={classes.cast}
          >
            <Grid item>
              <Typography
                className={classes.director}
                variant="subtitle1"
                color="primary"
                style={{ paddingRight: 20 }}
              >
                Director: Zack Snyder
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                className={classes.span}
                variant="subtitle1"
                color="primary"
                style={{ paddingRight: 20 }}
              >
                |
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                className={classes.stars}
                variant="body1"
                color="primary"
              >
                Star:  Henry Cavill, Gal Gadot
              </Typography>
            </Grid>
          </Grid>
          <Typography
            className={classes.duration}
            variant="caption"
          >
            242
            {' '}
            min
          </Typography>
          <Typography
            className={classes.duration}
            variant="caption"
            style={{ marginLeft: 15 }}
          >
            C13
          </Typography>
          <Link to="" style={{ textDecoration: 'none' }}>
            <Button className={classes.btLearn}>
              Learn More
              <ArrowRightAlt style={{ marginLeft: 8 }} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MovieBanner;
