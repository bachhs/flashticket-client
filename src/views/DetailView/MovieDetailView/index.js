import React from 'react';

import {
  makeStyles
} from '@material-ui/core';

import MovieDetail from 'src/components/MovieDetail';

const useStyles = makeStyles(() => ({
  root: {}
}));

function MovieDetailView() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root} />
      <MovieDetail />
    </>
  );
}

export default MovieDetailView;
