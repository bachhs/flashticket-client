/* eslint-disable no-unused-vars */
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

  const [concerts, setConcers] = useState([
    { id: 1, title: 'Yanni Live at El Morro, Puerto Rico', poster: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/159d35c6-a5b1-469a-a9cd-31928db4e349/d4zvorh-7acf1c50-d19a-4778-9813-5ab98ff41398.jpg/v1/fill/w_496,h_350,q_70,strp/yanni_live_at_el_morro_puerto_rico_by_mizomix_d4zvorh-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD00MzIiLCJwYXRoIjoiXC9mXC8xNTlkMzVjNi1hNWIxLTQ2OWEtYTljZC0zMTkyOGRiNGUzNDlcL2Q0enZvcmgtN2FjZjFjNTAtZDE5YS00Nzc4LTk4MTMtNWFiOThmZjQxMzk4LmpwZyIsIndpZHRoIjoiPD02MTIifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.BHHQZHNKPDH4Bp0Fw4AtehpmEe8AsYrxR5nzGd8S0TQ' },
    { id: 2, title: 'See Sing Share', poster: 'https://i1.sndcdn.com/artworks-000235391545-mo53ci-t500x500.jpg' },
    { id: 3, title: 'Closer', poster: 'https://images-na.ssl-images-amazon.com/images/I/51C%2BsJBSW7L.jpg' },
    { id: 4, title: 'Dạ Khúc Dương Cầm', poster: 'https://i1.sndcdn.com/artworks-000251908583-y8oh93-t500x500.jpg' },
    { id: 5, title: 'Asia 77 - Dòng Nhạc Anh Bằng & Lam Phương', poster: 'https://i.ytimg.com/vi/8-RBsLFGMZE/maxresdefault.jpg' }
  ]);

  const [movies, setMovies] = useState([
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 }
  ]);

  const [sports, setSports] = useState([
    { id: 1, title: 'Aston Villa - West Brom', poster: 'https://i.imgur.com/8CxgGsF.png' },
    { id: 2, title: 'Chelsea – Real Madrid', poster: 'https://i.imgur.com/rWKXsxK.jpg' },
    { id: 3, title: 'Leeds – Man Utd', poster: 'https://i.imgur.com/V3IKlAD.png' },
    { id: 4, title: 'Man Utd – Roma', poster: 'https://i.imgur.com/pMYFZpW.jpg' },
    { id: 5, title: 'Wolves – Burnley', poster: 'https://i.imgur.com/5h3jEC0.png' }
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

  useEffect(() => {
    getMovies();
  }, [getMovies]);

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
          <Carousel items={concerts} />
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
