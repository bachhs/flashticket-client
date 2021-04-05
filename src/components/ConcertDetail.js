import React from 'react';

import {
  Button,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100vh',
    minHeight: '960px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  blurRoot: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: ' 100%',
    width: '100%',
    padding: theme.spacing(5),
    background:
        'linear-gradient(to right, rgb(5 12 19 / 50%) 2%, #000000a6 100%)',
    zIndex: 2
  },
  boxPoster: {
    paddingTop: '100px'
  },
  poster: {
    height: '600px',
    width: '400px',
    backgroundColor: 'red'
  },
  posterImg: {
    width: '100%',
    height: '100%',
    'object-fit': 'cover'
  },
  concertInfo: {
    padding: theme.spacing(5)
  },
  concertName: {
    maxWidth: '60%',
    fontSize: '48px',
    lineHeight: 1.2,
    fontWeight: 390
  },
  openingDay: {
    fontSize: '19px',
    lineHeight: 1.2,
    fontWeight: 350,
    marginTop: theme.spacing(1)
  },
  address: {
    fontSize: '23px',
    opacity: 0.98,
    lineHeight: 1.2,
    fontWeight: 350,
    marginTop: theme.spacing(1)
  },
  subAddress: {
    color: '#cfd6e1',
    lineHeight: 1.2,
    fontWeight: 350,
    marginTop: theme.spacing(0.7),
    marginBottom: theme.spacing(1)
  },
  live: {
    fontSize: '22px'
  },
  guest: {
    fontSize: '22px'
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
  btTrack: {
    border: '1px solid rgba(255,255,255,0.13)',
    borderRadius: 0,
    marginLeft: 10,
    padding: '11.5px 60px',
    fontSize: 12,
    backgroundColor: '#ffffff40'
  },
  [theme.breakpoints.down('sm')]: {
    blurRoot: {
      background:
        'linear-gradient(to right, rgba(0,0,0,.8) 50%, transparent 100%)'
    },
    boxPoster: {
      paddingTop: 0
    },
    poster: {
      height: '300px',
      width: '200px'
    },
    concertName: {
      fontSize: '25px'
    },
    live: {
      fontSize: '15px'
    },
    guest: {
      fontSize: '15px'
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
    btTrack: {
      marginLeft: 0,
      marginTop: 12,
      padding: '9.5px 48.5px',
      fontSize: 12,
    },
  }
}));

function ConcertDetail() {
  const classes = useStyles();

  return (
    <div
      className={classes.root}
      style={{
        backgroundImage: `url(${'https://images.wallpaperscraft.com/image/concert_performance_smoke_136716_3840x2160.jpg'})`
      }}
    >
      <div className={classes.blurRoot}>
        <Grid
          container
          alignItems="center"
          justify="space-evenly"
        >
          <Grid className={classes.boxPoster} item>
            <div className={classes.poster}>
              <img className={classes.posterImg} alt="poster" src="http://media.doisongphapluat.com/686/2019/9/20/poster-VE-01.jpg" />
            </div>
          </Grid>

          <Grid className={classes.concertInfo} item>
            <div>
              <Typography
                className={classes.concertName}
                display="inline"
                align="center"
                variant="h5"
                color="inherit"
              >
                Truyện Ngắn
              </Typography>

              <Typography
                className={classes.openingDay}
                variant="body1"
                color="secondary"
              >
                Opening 20:00 - 23/6/2021
              </Typography>
              <Typography
                className={classes.address}
                variant="body2"
                color="inherit"
              >
                Trung tâm hội nghị quốc gia
              </Typography>
              <Typography
                className={classes.subAddress}
                variant="body2"
                color="inherit"
              >
                Số 1 Đại Lộ Thăng Long, Mễ Trì, Nam Từ Liêm, Hà Nội
              </Typography>

              <Typography
                className={classes.live}
                variant="subtitle1"
                color="primary"
                style={{ paddingRight: 20 }}
              >
                Live Show: Hà Anh Tuấn
              </Typography>

              <Typography
                className={classes.guest}
                variant="body1"
                color="primary"
              >
                Guest: Sơn Tùng MTP, Thanh Hằng, Mỹ Tâm, Gal Gadot
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
                  <Button className={classes.btTrack}>
                    Track
                  </Button>
                </Link>
              </Grid>
            </div>
          </Grid>
        </Grid>

      </div>
    </div>
  );
}

export default ConcertDetail;
