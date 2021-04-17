import React from 'react';

import {
  Box,
  Button,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
  },
  cinema: {
    borderBottom: '0.6px solid #afadadd4',
    paddingBottom: theme.spacing(2)
  },
  cinemaName: {
    color: '#e8e3e3'
  },
  movieType: {
    color: '#fdf7f7f2'
  },
  cinemaType: {
    color: '#bdbbbb'
  },
  timeShow: {
    color: '#dcd6d6',
    border: '1px solid rgba(255,255,255,0.13)',
    borderRadius: 0,
    padding: 4,
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    margin: theme.spacing(1),
    marginLeft: theme.spacing(0)
  },
  divider: {
    borderBottom: '0.1px solid #bdb7b7'
  }
}));

function TimeShowingDetail() {
  const classes = useStyles();
  return (
    <>
      <Grid
        className={classes.root}
        direction="column"
        container
      >
        <Grid item style={{ marginBottom: 10 }}>
          <Button style={{ color: '#fdf7f7f2', paddingRight: 13, paddingLeft: 13 }}>
            Hà Nội
          </Button>
          <Button style={{ color: '#fdf7f7f2', paddingRight: 13, paddingLeft: 13 }}>
            Thái Bình
          </Button>
          <Button style={{ color: '#fdf7f7f2', paddingRight: 13, paddingLeft: 13 }}>
            Nam Định
          </Button>
        </Grid>

        <Box className={classes.divider} />

        <Grid item style={{ marginTop: 10, marginBottom: 10 }}>
          <Button className={classes.movieType}>
            2D Phụ Đề Việt
          </Button>
          <Button className={classes.movieType}>
            IMAX
          </Button>
        </Grid>

        <Box className={classes.divider} />

        <Grid item style={{ marginTop: 10, paddingLeft: 10, paddingRight: 10 }}>
          <Box mt={1} className={classes.cinema}>
            <Typography className={classes.cinemaName}>
              IFILM Paper Brigde
            </Typography>
            <Box mt={1}>
              <Typography className={classes.cinemaType}> Rạp 2D</Typography>
              <Button className={classes.timeShow}>
                08:40 AM
              </Button>
              <Typography className={classes.cinemaType}> Rạp Premium</Typography>
              <Button className={classes.timeShow}>
                08:40 AM
              </Button>
              <Button className={classes.timeShow}>
                08:40 AM
              </Button>
              <Button className={classes.timeShow}>
                08:40 AM
              </Button>
            </Box>
          </Box>

          <Box mt={2} className={classes.cinema}>
            <Typography className={classes.cinemaName}>
              IFILM Paper Brigde
            </Typography>
            <Box mt={1}>
              <Typography className={classes.cinemaType}> Rạp 2D</Typography>
              <Button className={classes.timeShow}>
                08:40 AM
              </Button>
              <Typography className={classes.cinemaType}> Rạp Permium</Typography>
              <Button className={classes.timeShow}>
                08:40 AM
              </Button>
              <Button className={classes.timeShow}>
                08:40 AM
              </Button>
              <Button className={classes.timeShow}>
                08:40 AM
              </Button>
            </Box>
          </Box>

          <Box mt={2} className={classes.cinema}>
            <Typography className={classes.cinemaName}>
              IFILM Paper Brigde
            </Typography>
            <Box mt={1} className={classes.cinemaType}>
              <Typography> Rạp 2D</Typography>
              <Button className={classes.timeShow}>
                08:40 AM
              </Button>
              <Typography className={classes.cinemaType}> Rạp Premium</Typography>
              <Button className={classes.timeShow}>
                08:40 AM
              </Button>
              <Button className={classes.timeShow}>
                08:40 AM
              </Button>
              <Button className={classes.timeShow}>
                08:40 AM
              </Button>
            </Box>
          </Box>

          <Box mt={2} className={classes.cinema}>
            <Typography className={classes.cinemaName}>
              IFILM Paper Brigde
            </Typography>
            <Box mt={1} className={classes.cinemaType}>
              <Typography> Rạp 2D</Typography>
              <Button className={classes.timeShow}>
                08:40 AM
              </Button>
              <Typography className={classes.cinemaType}> Rạp Premium</Typography>
              <Button className={classes.timeShow}>
                08:40 AM
              </Button>
              <Button className={classes.timeShow}>
                08:40 AM
              </Button>
              <Button className={classes.timeShow}>
                08:40 AM
              </Button>
            </Box>
          </Box>

          <Box mt={2} className={classes.cinema}>
            <Typography className={classes.cinemaName}>
              IFILM Paper Brigde
            </Typography>
            <Box mt={1} className={classes.cinemaType}>
              <Typography> Rạp 2D</Typography>
              <Button className={classes.timeShow}>
                08:40 AM
              </Button>
              <Typography className={classes.cinemaType}> Rạp Premium</Typography>
              <Button className={classes.timeShow}>
                08:40 AM
              </Button>
              <Button className={classes.timeShow}>
                08:40 AM
              </Button>
              <Button className={classes.timeShow}>
                08:40 AM
              </Button>
            </Box>
          </Box>

        </Grid>
      </Grid>
    </>
  );
}

export default TimeShowingDetail;
