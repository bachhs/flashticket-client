import React from 'react';

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  makeStyles,
  Typography
} from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 400,
    backgroundColor: 'transparent',
    boxShadow: 'unset',
    color: theme.palette.common.dark,
    display: 'flex',
    flex: ' 0 0 auto',
    flexDirection: 'column',
    height: 400,
    margin: '60px 30px'
  },
  media: {
    height: 300
  },
  header: {
    backgroundColor: '#7fc7d9',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '80%',
    padding: '5px 10px',
    width: '100%',
    color: theme.palette.common.white
  },
  body: {
    height: '20%',
    color: theme.palette.common.white,
    padding: '15px',
    whiteSpace: 'normal'
  }
}));

function MovieCard({ movie }) {
  const classes = useStyles();

  return (
    <Link to="" style={{ textDecoration: 'none' }}>
      <Card className={classes.card}>
        <CardActionArea>
          {!movie.poster ? (
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
              {!movie.title ? <Skeleton /> : movie.title}
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
