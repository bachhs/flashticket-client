import React, { useState } from 'react';

import {
  Box,
  Button,
  Dialog,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import Skeleton from '@material-ui/lab/Skeleton';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    width: '100%',
    height: '100vh',
    minHeight: '640px',
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
  movieName: {
    maxWidth: '60%',
    fontSize: '32px',
    lineHeight: 1.2,
    fontWeight: 390
  },
  descriptionText: {
    color: '#cfd6e1',
    padding: theme.spacing(1.5, 0),
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
  skeleton: {
    width: '400px'
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
    },
    skeleton: {
      width: '75vw',
      maxWidth: '340px'
    },
  }
}));

function MovieDetail({ movie }) {
  const classes = useStyles();

  const account = useSelector((state) => state.account);
  const history = useHistory();

  const [trailerDialogOpen, setTrailerDialogOpen] = useState(false);

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

            {!(movie && movie.title) ? <Skeleton className={classes.skeleton} /> : movie.title}
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
                : new Date(movie.openingDay).toLocaleDateString('vi-VN', {
                  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
                })}
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
            variant="subtitle1"
            color="primary"
            paragraph
            style={{ paddingRight: 20, maxWidth: '35%' }}
          >
            {!(movie && movie.description)
              ? <Skeleton variant="rect" className={classes.skeleton} height={80} />
              : movie.description}
          </Typography>

          <Typography
            className={classes.director}
            variant="subtitle1"
            color="primary"
            style={{ paddingRight: 20 }}
          >
            {!(movie && movie.directors && movie.directors.length > 0)
              ? <Skeleton variant="rect" style={{ maxWidth: '30%' }} />
              : (`Directors: ${movie.directors[0].fullname}`)}
          </Typography>

          <Typography
            className={classes.stars}
            variant="body1"
            color="primary"
          >
            Star: Henry Cavill, Gal Gadot
          </Typography>
          <Grid
            container
            className={classes.bt}
          >
            <Button
              className={classes.btBook}
              onClick={() => {
                if (!account.user) {
                  history.push('/login?redirectUrl=showtime');
                } else history.push('/showtime');
              }}
            >
              Book Now
              <ConfirmationNumberIcon style={{ marginLeft: 8 }} />
            </Button>
            <Button
              className={classes.btTrailers}
              onClick={() => {
                setTrailerDialogOpen(true);
              }}
            >
              Trailers
            </Button>
          </Grid>
        </div>
      </div>
      <Dialog
        open={trailerDialogOpen}
        onClose={() => { setTrailerDialogOpen(false); }}
      >
        <iframe width="560" height="315" src="https://www.youtube.com/embed/vM-Bja2Gy04" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
      </Dialog>
    </div>
  );
}

MovieDetail.propTypes = {
  movie: PropTypes.object
};

export default MovieDetail;
