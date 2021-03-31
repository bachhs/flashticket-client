import React from 'react';

import {
  CardMedia,
  Container,
  Grid,
  makeStyles,
  Typography,
  CardContent,
  Card,
  Box
} from '@material-ui/core';

import Carousel from 'src/components/Carousel';
import MovieBanner from 'src/components/MovieBanner';

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

  const placeHolder = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 }
  ];

  const dump = [
    {
      poster: 'https://kinhtechungkhoan.vn/stores/news_dataimages/xuanhoang/032020/06/16/2306_1_a_nha_5.jpg',
      title: 'MU VS MC'
    },
    {
      poster: 'https://i.ytimg.com/vi/ldrw7ocvQWk/maxresdefault.jpg',
      title: 'Truyện Ngắn'
    },
    {
      poster: 'https://image.tmdb.org/t/p/original/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg',
      title: 'Justice League'
    },
    {
      poster: 'https://image.tmdb.org/t/p/original/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg',
      title: 'Justice League'
    },
    {
      poster: 'https://image.tmdb.org/t/p/original/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg',
      title: 'Justice League'
    },
    {
      poster: 'https://image.tmdb.org/t/p/original/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg',
      title: 'Justice League'
    }
  ];

  return (
    <>
      <MovieBanner />

      <div className={classes.mbody}>
        <Grid>
          <Typography className={classes.Title}>
            Sports
          </Typography>
          <Carousel items={dump} />
        </Grid>
      </div>

      <div className={classes.mbody}>
        <Grid>
          <Typography className={classes.Title}>
            Concerts
          </Typography>
          <Carousel items={placeHolder} />
        </Grid>
        <Box height={10} />
      </div>

      <div className={classes.mbody}>
        <Grid>
          <Typography className={classes.Title}>
            Movies
          </Typography>
          <Carousel items={placeHolder} />
        </Grid>
        <Box height={10} />
      </div>

      {/* Best Seller */}

      <div className={classes.mbody}>
        <Grid>
          <Typography className={classes.Title}>
            Best Seller
          </Typography>
        </Grid>
        <Box height={10} />
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
                    A Story about both of VSsYii pet
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
                    A Story about VSsYii
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
                    VSsYii
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </div>
      {/* End BestSeller */}
    </>
  );
}

export default HomeView;
