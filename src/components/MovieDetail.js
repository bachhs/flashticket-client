/* eslint-disable no-unused-vars */
import React from 'react';

import {
  Box,
  Button,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import Skeleton from '@material-ui/lab/Skeleton';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    width: '100%',
    height: '100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  blurRoot: {
    display: 'flex',
    alignItems: 'center',
    height: ' 100%',
    width: '100%',
    padding: theme.spacing(5),
    background:
        'linear-gradient(to right, rgba(0,0,0,.9) 32%, transparent 100%)',
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
    maxWidth: '60%',
    fontSize: '32px',
    lineHeight: 1.2,
    fontWeight: 390
  },
  descriptionText: {
    color: '#cfd6e1',
    padding: theme.spacing(1.5, 0),
    maxWidth: '44%'
  },
  duration: {
    display: 'flex',
    marginLeft: theme.spacing(2),
    padding: theme.spacing(0.5),
    border: '1px solid rgba(255,255,255,0.13)'
  },
  boxGenre: {
    marginBottom: theme.spacing(3)
  },
  genre: {
    padding: theme.spacing(0.25, 3),
    marginRight: theme.spacing(1),
    border: '1px solid rgba(255,255,255,0.9)',
    borderRadius: 25
  },
  classify: {
    marginTop: theme.spacing(0.7),
    border: '1px solid red',
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.3),
    paddingRight: theme.spacing(0.9),
    paddingLeft: theme.spacing(0.9),
    borderRadius: 600
  },
  container1: {
    marginTop: theme.spacing(1)
  },
  bt: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(2, 0)
  },
  btBook: {
    border: '1px solid rgba(255,255,255,0.13)',
    borderRadius: 0,
    padding: '10px 30px',
    fontSize: 12,
    backgroundColor: '#ff0000bd'
  },
  btTrailers: {
    border: '1px solid rgba(255,255,255,0.13)',
    borderRadius: 0,
    marginLeft: 10,
    padding: '11.5px 50px',
    fontSize: 12,
    backgroundColor: '#ffffff40'
  },
  [theme.breakpoints.down('sm')]: {
    blurRoot: {
      background:
        'linear-gradient(to right, rgba(0,0,0,.8) 50%, transparent 100%)'
    },
    movieName: {
      maxWidth: '80%',
      fontSize: '25px'
    },
    descriptionText: {
      maxWidth: '80%',
      fontSize: '12px'
    },
    movieActions: { display: 'flex', width: '100%' },
    director: {
      fontSize: '15px'
    },
    stars: {
      fontSize: '15px'
    },
    boxGenre: {
      marginBottom: theme.spacing(2)
    },
    genre: {
      padding: theme.spacing(0.19, 1.7),
      marginRight: theme.spacing(1),
      fontSize: 12
    },
    container1: {
      marginTop: theme.spacing(2)
    },
    bt: {
      padding: theme.spacing(0)
    },
    btBook: {
      marginRight: 10,
      marginTop: 12,
      padding: '8px 20px',
      fontSize: 12
    },
    btTrailers: {
      marginLeft: 0,
      marginTop: 12,
      padding: '9.5px 40px',
      fontSize: 12,
    }
  }
}));

function MovieDetail({ movie }) {
  const classes = useStyles();

  return (
    <div
      className={classes.root}
      style={{
        backgroundImage: `url(${movie ? movie.poster : null})`
      }}
    >
      <div className={classes.blurRoot}>
        <div>
          <Box
            className={classes.boxGenre}
            display="flex"
            alignItems="center"
            flexWrap="wrap"
          >
            <Typography
              className={classes.genre}
              variant="body2"
              color="inherit"
            >
              Action
            </Typography>
            <Typography
              className={classes.genre}
              variant="body2"
              color="inherit"
            >
              Adventure
            </Typography>
            <Typography
              className={classes.genre}
              variant="body2"
              color="inherit"
            >
              Fantasy
            </Typography>
          </Box>

          <Typography
            className={classes.movieName}
            display="inline"
            align="center"
            variant="h5"
            color="inherit"
          >

            {!(movie && movie.title) ? <Skeleton /> : movie.title}
            <Typography
              className={classes.classify}
              variant="caption"
              style={{ marginLeft: 15 }}
            >
              C13
            </Typography>
          </Typography>

          <Grid
            container
            className={classes.container1}
            alignItems="center"
          >
            <Typography
              className={classes.openingDay}
              variant="body1"
              color="secondary"
            >
              {!(movie && movie.openingDay)
                ? <Skeleton width={60} height={30} />
                : movie.openingDay}
            </Typography>

            <Typography
              className={classes.duration}
              variant="caption"
            >
              {!(movie && movie.duration) ? <Skeleton width={60} height={20} /> : `${movie.duration} min`}
            </Typography>
          </Grid>
          <Typography
            className={classes.descriptionText}
            variant="body2"
            color="inherit"
          >
            {!(movie && movie.description) ? <Skeleton variant="rect" width={500} height={118} /> : movie.description}
          </Typography>

          <Typography
            className={classes.director}
            variant="subtitle1"
            color="primary"
            style={{ paddingRight: 20 }}
          >
            Director: Zack Snyder
          </Typography>

          <Typography
            className={classes.stars}
            variant="body1"
            color="primary"
          >
            Star:  Henry Cavill, Gal Gadot
          </Typography>
          <Grid
            container
            className={classes.bt}
          >
            <Link to="" style={{ textDecoration: 'none' }}>
              <Button className={classes.btBook}>
                Book Now
                <ConfirmationNumberIcon style={{ marginLeft: 8 }} />
              </Button>
            </Link>
            <Link to="" style={{ textDecoration: 'none' }}>
              <Button className={classes.btTrailers}>
                Trailers
              </Button>
            </Link>
          </Grid>
        </div>
      </div>
    </div>
  );
}

MovieDetail.propTypes = {
  movie: PropTypes.object
};

export default MovieDetail;
