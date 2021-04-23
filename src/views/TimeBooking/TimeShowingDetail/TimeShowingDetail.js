/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import {
  Box,
  Button,
  Grid,
  Tab,
  Tabs,
  Typography,
  makeStyles,
  withStyles
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > span': {
      maxWidth: 40,
      width: '100%',
      backgroundColor: '#635ee7',
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    color: '#fff',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    '&:focus': {
      opacity: 1,
    },
  },
}))((props) => <Tab disableRipple {...props} />);

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

  const [movieCity, setMovieCity] = useState(0);
  const [movieType, setMovieType] = useState(0);

  const handleCityChange = (event, newValue) => {
    setMovieCity(newValue);
  };

  const handleTypeChange = (event, newValue) => {
    setMovieType(newValue);
  };

  const history = useHistory();

  return (
    <>
      <Grid
        className={classes.root}
        direction="column"
        container
      >
        <Grid item style={{ marginBottom: 10 }}>
          <StyledTabs value={movieCity} onChange={handleCityChange} aria-label="styled tabs example">
            <StyledTab label="Hà Nội" />
            <StyledTab label="Thái Bình" />
            <StyledTab label="Nam Định" />
          </StyledTabs>
        </Grid>

        <Box className={classes.divider} />

        <Grid item style={{ marginTop: 10, marginBottom: 10 }}>
          <Tabs
            onChange={handleTypeChange}
            scrollButtons="auto"
            textColor="secondary"
            value={movieType}
            variant="scrollable"
          >
            <Tab label="IMAX" />
            <Tab label="4DX" />
            <Tab label="Gold Class" />
          </Tabs>
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
              <Button className={classes.timeShow} onClick={() => { history.push('/booking'); }}>
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
