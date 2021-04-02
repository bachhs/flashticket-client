import React from 'react';

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  makeStyles
} from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 400,
    backgroundColor: 'transparent',
    color: theme.palette.common.white,
    boxShadow: 'unset',
    marginRight: '15px',
    marginLeft: '15px',
    marginTop: '10px'
  },
  media: {
    height: 300
  }
}));

function MovieCard({ movie }) {
  const classes = useStyles();

  return (
    <Link to="" style={{ textDecoration: 'none' }}>
      <Card className={classes.card}>
        <CardActionArea>
          {!(movie && movie.poster) ? (
            <Skeleton animation="wave" variant="rect" className={classes.media} />
          ) : (
            <CardMedia
              className={classes.media}
              image={movie.poster}
              title={movie.title}
            />
          )}
          <CardContent>
            <Typography variant="h5" gutterBottom>
              {!(movie && movie.title) ? <Skeleton /> : movie.title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired
};

export default MovieCard;
