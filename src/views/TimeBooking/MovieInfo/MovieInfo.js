import React from 'react';

import {
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  rootMovie: {
    paddingTop: theme.spacing(14)
  },
  movieInfos: {
    background: 'rgba(57, 61, 67, 0.5)',
    position: 'relative',
    height: '85vh',
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
    padding: theme.spacing(5),
    top: '70%',
    right: 0,
    width: '100%'
  },
  infoBox: {
    color: theme.palette.common.white,
    marginBottom: theme.spacing(2)
  },
  [theme.breakpoints.down('md')]: {
    movieInfos: { minHeight: '30vh' },
    background: { height: '100%' },
    title: { top: '80%' },
    info: { display: 'none' }
  }
}));

function MovieInfo(props) {
  const classes = useStyles(props);
  const movie = [{
    image: 'https://lh3.googleusercontent.com/proxy/_FD3Ywl3rdVEAgoUOHpgy-SXp5wnR6C4e2q9zZPH0l0grWr5ruJ3ZHUmmAu0oUMz4HYfBezix-sXMQInSK9_cV01yIy9AE_rC0gCjrygXq3VfH8JpfCOJEphhQN3v0hi8O08sYyiwGeNYsvU',
    title: "Zack Snyder's Justice League",
    director: 'VSsYii',
    cast: 'Gal Gadot',
    genre: 'Action'
  },
  {
    image: 'https://lh3.googleusercontent.com/proxy/_FD3Ywl3rdVEAgoUOHpgy-SXp5wnR6C4e2q9zZPH0l0grWr5ruJ3ZHUmmAu0oUMz4HYfBezix-sXMQInSK9_cV01yIy9AE_rC0gCjrygXq3VfH8JpfCOJEphhQN3v0hi8O08sYyiwGeNYsvU',
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
