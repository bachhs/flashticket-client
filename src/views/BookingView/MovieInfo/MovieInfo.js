import React from 'react';

import {
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  rootMovie: {
    paddingTop: theme.spacing(0)
  },
  movieInfos: {
    background: 'rgba(57, 61, 67, 0.5)',
    position: 'relative',
    height: '100%',
    minHeight: '85vh'
  },
  background: {
    position: 'absolute',
    opacity: 0.5,
    top: 0,
    height: '70%',
    right: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    zIndex: 1
  },
  title: {
    position: 'absolute',
    top: '60%',
    right: 0,
    width: '100%',
    textAlign: 'center',
    color: theme.palette.common.white,
    fontSize: '24px',
    textTransform: 'capitalize',
    zIndex: 2
  },
  info: {
    position: 'absolute',
    padding: theme.spacing(4),
    top: '70%',
    right: 0,
    width: '100%',
  },
  infoBox: {
    color: theme.palette.common.white,
    marginBottom: theme.spacing(2)
  },
  [theme.breakpoints.down('md')]: {
    info: { display: 'none' },
    background: { height: '100%' },
    movieInfos: { minHeight: '35vh' },
  },
  [theme.breakpoints.down('sm')]: {
    title: { top: '65%' },
  }
}));

function MovieInfo(props) {
  const classes = useStyles(props);
  const movie = [{
    image: 'http://game4v.com/g4v-content/uploads/2021/02/Justice-League-Snyder-Cut-1-game4v.jpg',
    title: "Zack Snyder's Justice League",
    director: 'VSsYii',
    cast: 'Gal Gadot',
    genre: 'Action'
  },
  {
    image: 'http://game4v.com/g4v-content/uploads/2021/02/Justice-League-Snyder-Cut-1-game4v.jpg',
    title: "Zack Snyder's Justice League",
    director: 'VSsYii',
    cast: 'Gal Gadot',
    genre: 'Action'
  }];

  return (
    <Grid item xs={12} md={12} lg={3} className={classes.rootMovie}>
      <div className={classes.movieInfos}>
        <div
          className={classes.background}
          style={{
            backgroundImage: `url(${movie[1].image})`
          }}
        />
        <Typography className={classes.title}>{movie[1].title}</Typography>
        <div className={classes.info}>

          <div className={classes.infoBox}>
            <Typography variant="subtitle1" color="inherit">
              Director
            </Typography>
            <Typography variant="caption" color="inherit">
              {movie[1].director}
            </Typography>
          </div>

          <div className={classes.infoBox}>
            <Typography variant="subtitle1" color="inherit">
              Cast
            </Typography>
            <Typography variant="caption" color="inherit">
              {movie[1].cast}
            </Typography>
          </div>

          <div className={classes.infoBox}>
            <Typography variant="subtitle1" color="inherit">
              Genre
            </Typography>
            <Typography variant="caption" color="inherit">
              {movie[1].genre}
            </Typography>
          </div>

        </div>
      </div>
    </Grid>
  );
}

export default MovieInfo;
