import React from 'react';
import {
  Divider, Typography, Link, makeStyles, Grid, List, ListItem, IconButton
} from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    background: 'transparent',
    color: 'white'
  },
  copyright: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(0.5),
    color: 'white'
  },
  socialIcon: {
    padding: 0,
    marginRight: theme.spacing(1.5),
    color: 'rgba(255,255,255,.6)',
    '&:hover': {
      background: 'black',
    },
    '&:last-child': {
      marginRight: 0,
    },
  },
  icon: {
    fontSize: 30,
    color: 'white'
  },
  listIcon: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(0.5),
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(1),
    }
  }
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Divider style={{ backgroundColor: 'white' }} />
      <Grid container justify="space-between">
        <Grid item>
          <Typography className={classes.copyright} variant="body1">
            © 2020 Rune Team. All rights reserved
          </Typography>
          <Typography variant="caption" className={classes.copyright}>
            Donated with love |
            {' '}
            <Link href="https://nhantien.momo.vn/0387005857" target="_blank" rel="noopener">
              Rune Team
            </Link>
          </Typography>
        </Grid>
        <Grid item>
          <List className={classes.listIcon} disablePadding>
            <ListItem disableGutters>
              <IconButton className={classes.socialIcon}>
                <FacebookIcon className={classes.icon} />
              </IconButton>
              <IconButton className={classes.socialIcon}>
                <InstagramIcon className={classes.icon} />
              </IconButton>
              <IconButton className={classes.socialIcon}>
                <TwitterIcon className={classes.icon} />
              </IconButton>
              <IconButton className={classes.socialIcon}>
                <YouTubeIcon className={classes.icon} />
              </IconButton>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </div>
  );
}
