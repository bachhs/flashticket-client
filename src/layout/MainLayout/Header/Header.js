import React, { useState } from 'react';

import {
  // eslint-disable-next-line no-unused-vars
  Avatar,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Typography,
  makeStyles
} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Menu from '@material-ui/icons/Menu';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Account from './Account';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    display: 'flex',
    border: '0',
    borderRadius: '3px',
    padding: '0.625rem 0',
    marginBottom: '20px',
    color: '#555',
    width: '100%',
    transition: 'all 150ms ease 0s',
    alignItems: 'center',
    flexFlow: 'row nowrap',
    justifyContent: 'flex-start',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 999
  },
  absolute: {
    position: 'absolute',
    zIndex: '1100'
  },
  fixed: {
    position: 'fixed',
    zIndex: '1100'
  },
  container: {
    minHeight: '50px',
    flex: '1',
    alignItems: 'center',
    justifyContent: 'space-between',
    display: 'flex',
    flexWrap: 'nowrap'
  },
  flex: {
    flex: 1
  },
  logoImage: {
    marginRight: '8px'
  },
  logoLink: {
    display: 'flex',
    paddingTop: '.15rem',
    paddingBottom: '.15rem',
    marginRight: '20px',
    fontSize: '1.5rem',
    lineHeight: 'inherit',
    whiteSpace: 'nowrap',
    textDecoration: 'none',
    color: 'white',
  },
  logo: {
    maxHeight: '2.4rem',
    width: 'auto',
    fontSize: '2rem',
    letterSpacing: '1px',
    color: theme.palette.common.white
  },
  navLink: {
    color: theme.palette.common.white,
    padding: '0 .5rem',
    margin: '0 1rem',
    fontSize: '1.5rem',
    fontWeight: '420',
    cursor: 'pointer',
    textDecoration: 'none',
  },
  navRe: {
    color: theme.palette.common.white,
    padding: '0 .5rem',
    margin: '0 1rem',
    fontSize: '1.7rem',
    fontWeight: '400',
    cursor: 'pointer',
    textDecoration: 'none',
    paddingTop: 10
  },
  title: {
    lineHeight: '30px',
    fontSize: '18px',
    borderRadius: '3px',
    textTransform: 'none',
    color: 'inherit',
    padding: '8px 16px',
    letterSpacing: 'unset',
    '&:hover,&:focus': {
      color: 'inherit',
      background: 'transparent'
    }
  },
  appResponsive: {
    margin: '20px 10px',
  },
  drawerPaper: {
    border: 'none',
    bottom: '0',
    transitionProperty: 'top, bottom, width',
    transitionDuration: '.2s, .2s, .35s',
    transitionTimingFunction: 'linear, linear, ease',
    position: 'fixed',
    display: 'block',
    top: '0',
    height: '100vh',
    right: '0',
    left: 'auto',
    visibility: 'visible',
    overflowY: 'visible',
    borderTop: 'none',
    textAlign: 'left',
    paddingRight: '100px',
    paddingLeft: '0',
    background: 'rgb(26 26 25 )'
  },
  btDrawer: {
    color: 'white',
    paddingLeft: 10
  },
  account: {
    [theme.breakpoints.down('md')]: {
      position: 'absolute',
      right: 50,
      top: 9,
    },
  },
  logoImageSpin: {
    animation: '$spinMe 3s forwards'
  },
  '@keyframes spinMe': {
    to: {
      transform: 'rotate(6turn)'
    }
  },
}));

function Header({ fixed, absolute }) {
  const classes = useStyles();

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const appBarClasses = classNames({
    [classes.appBar]: true,
    [classes.absolute]: absolute,
    [classes.fixed]: fixed
  });

  return (
    <AppBar className={appBarClasses}>
      <Toolbar className={classes.container}>
        <Link className={classes.logoLink} to="/">
          <Avatar className={classes.logoImageSpin} alt="Flash Ticket" src="https://cdn.iconscout.com/icon/free/png-256/ticket-1855957-1574163.png" />
          <Typography className={classes.logo} variant="h2">
            FlashTicket
          </Typography>
        </Link>
        <Hidden mdDown implementation="css">
          <List className={classes.list}>
            <ListItem className={classes.listItem}>
              <Link to="/" className={classes.navLink}>
                Home
              </Link>
              <Link to="/" className={classes.navLink}>
                Concerts
              </Link>
              <Link to="/" className={classes.navLink}>
                Sports
              </Link>
              <Link to="/" className={classes.navLink}>
                Cinemas
              </Link>
              <Link to="/" className={classes.navLink}>
                Others
              </Link>
            </ListItem>
          </List>
        </Hidden>
        <div className={classes.account}>
          <Account />
        </div>
        <Hidden lgUp>
          <IconButton
            aria-label="open drawer"
            className={classes.btDrawer}
            onClick={handleDrawerToggle}
          >
            <Menu style={{ fontSize: 30 }} />
          </IconButton>
        </Hidden>
      </Toolbar>
      <Hidden lgUp implementation="js">
        <Drawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          classes={{
            paper: classes.drawerPaper
          }}
          onClose={handleDrawerToggle}
        >
          <div className={classes.appResponsive}>
            <Link to="/" className={classes.navRe}>
              Home
            </Link>
            <br />
            <Link to="/" className={classes.navRe}>
              Concerts
            </Link>
            <br />
            <Link to="/" className={classes.navRe}>
              Sports
            </Link>
            <br />
            <Link to="/" className={classes.navRe}>
              Cinemas
            </Link>
            <br />
            <Link to="/" className={classes.navRe}>
              Others
            </Link>
          </div>
        </Drawer>
      </Hidden>
    </AppBar>
  );
}

Header.propTypes = {
  fixed: PropTypes.bool,
  absolute: PropTypes.bool
};

export default Header;
