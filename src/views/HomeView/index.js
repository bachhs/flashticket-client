/* eslint-disable no-underscore-dangle */
import React, { useCallback, useEffect, useState } from 'react';

import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';

import Carousel from 'src/components/Carousel';
import MovieBanner from 'src/components/MovieBanner';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import axios from 'src/utils/axios';

import Footer from './Footer/Footer';

const useStyles = makeStyles((theme) => ({
  mbody: {
    marginRight: theme.spacing(2)
  },
  rootCard: {
    maxWidth: 945,
    background: 'rgba(0,0,0,0.5)',
    margin: '20px',
    boxShadow: 3
  },
  media: {
    height: 800,
    [theme.breakpoints.down('xs')]: {
      height: 440
    },

  },
  title: {
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    fontSize: '2rem',
    color: '#fff',
  },
  desc: {
    fontFamily: 'Nunito',
    fontSize: '1.1rem',
    color: '#ddd',
  },
  Title: {
    paddingLeft: 30,
    color: 'white',
    maxHeight: '2.2rem',
    width: 'auto',
    fontSize: '2.8rem',
    letterSpacing: '2px',
    fontWeight: '300'
  }
}));

function HomeView() {
  const classes = useStyles();

  const isMountedRef = useIsMountedRef();

  const [movies, setMovies] = useState([
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 }
  ]);

  const [sports, setSports] = useState([
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 }
  ]);

  const getMovies = useCallback(() => {
    axios
      .get(`${process.env.REACT_APP_API}/movies?sort=createdDate,desc&size=6`)
      .then((response) => {
        if (response && response.data) {
          setMovies(response.data._embedded.movies);
        }
      })
      .catch(() => {

      });
  }, [isMountedRef]);

  const getSports = useCallback(() => {
    axios
      .get(`${process.env.REACT_APP_API}/sports?sort=createdDate,desc&size=6`)
      .then((response) => {
        if (response && response.data) {
          setSports(response.data._embedded.sports);
        }
      })
      .catch(() => {

      });
  }, [isMountedRef]);

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  useEffect(() => {
    // getSports();
  }, [getSports]);

  return (
    <>
      <MovieBanner />

      <Box height={70} />
      <div className={classes.mbody}>
        <Grid>
          <Typography className={classes.Title}>
            Sports
          </Typography>
          <Box height={40} />
          <Carousel items={sports} />
        </Grid>
      </div>

      <Box height={70} />

      <div className={classes.mbody}>
        <Grid>
          <Typography className={classes.Title}>
            Concerts
          </Typography>
          <Box height={40} />
          <Carousel items={movies} />
        </Grid>
      </div>

      <Box height={50} />

      <div className={classes.mbody}>
        <Grid>
          <Typography className={classes.Title}>
            Movies
          </Typography>
          <Box height={40} />
          <Carousel items={movies} />
        </Grid>
      </div>

      <Box height={50} />
      {/* Best Seller */}

      <div className={classes.mbody}>
        <Grid>
          <Typography className={classes.Title}>
            Best Seller
          </Typography>
        </Grid>
        <Box height={50} />
        <Container maxWidth="xl">
          <Grid container>
            <Grid
              item
              xs={12}
              sm={4}
            >
              <Card className={classes.rootCard}>
                <CardMedia
                  className={classes.media}
                  image="https://www.cgv.vn/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/g/o/godzilla_vs_1_.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h1"
                    className={classes.title}
                  >
                    GODZILLA VS KONG
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className={classes.desc}
                  >
                    The epic next chapter in the cinematic Monsterverse pits
                    two of the greatest icons
                    in motion picture history against one another -
                    the fearsome Godzilla and the mighty
                    Kong - with humanity caught in the balance.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
            >
              <Card className={classes.rootCard}>
                <CardMedia
                  className={classes.media}
                  image="https://www.cgv.vn/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/p/o/poster-part-1_1_.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h1"
                    className={classes.title}
                  >
                    HARRY POTTER
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className={classes.desc}
                  >
                    An orphaned boy enrolls in a school of wizardry,
                    where he learns the truth about himself,
                    his family and the terrible evil that haunts the magical world.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
            >
              <Card className={classes.rootCard}>
                <CardMedia
                  className={classes.media}
                  image="https://images-na.ssl-images-amazon.com/images/I/81%2BNup8-8NL._SL1500_.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h1"
                    className={classes.title}
                  >
                    AVENGER: END GAME
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className={classes.desc}
                  >
                    With the help of remaining allies, the Avengers assemble
                    once more in order to reverse Thanos&#39 actions and restore
                    balance to the universe.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </div>
      {/* End BestSeller */}
      <Footer />
    </>
  );
}

export default HomeView;
