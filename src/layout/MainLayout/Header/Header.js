import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import {
  makeStyles,
  Toolbar,
  IconButton,
  Hidden,
  Drawer,
  List,
  ListItem,
  Typography
} from '@material-ui/core';
import Menu from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import AccountCircle from '@material-ui/icons/AccountCircle';

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
    position: 'relative',
    zIndex: 'unset'
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
  logoLink: {
    display: 'inline-block',
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
  accountIcon: {
    color: 'white',
    marginRight: 60,
    [theme.breakpoints.down('md')]: {
      position: 'absolute',
      right: 0,
      top: 0
    },
  }
}));

function Header({ fixed, absolute }) {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
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
          <Typography className={classes.logo} variant="h2">
            FlashTicket
          </Typography>
        </Link>
        <Hidden mdDown implementation="css">
          <List className={classes.list}>
            <ListItem className={classes.listItem}>
              <Link className={classes.navLink}>
                Home
              </Link>
              <Link className={classes.navLink}>
                Concerts
              </Link>
              <Link className={classes.navLink}>
                Sports
              </Link>
              <Link className={classes.navLink}>
                Cinemas
              </Link>
              <Link className={classes.navLink}>
                Others
              </Link>
            </ListItem>
          </List>
        </Hidden>
        <IconButton
          edge="end"
          aria-label="account of current user"
          aria-haspopup="true"
          color="inherit"
          className={classes.accountIcon}
        >
          <AccountCircle style={{ fontSize: 30 }} />
        </IconButton>
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
            <Link className={classes.navRe}>
              Home
            </Link>
            <br />
            <Link className={classes.navRe}>
              Concerts
            </Link>
            <br />
            <Link className={classes.navRe}>
              Sports
            </Link>
            <br />
            <Link className={classes.navRe}>
              Cinemas
            </Link>
            <br />
            <Link className={classes.navRe}>
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
