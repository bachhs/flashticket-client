import React from 'react';

import {
  Grid,
  IconButton,
  makeStyles
} from '@material-ui/core';
import { ArrowBack as ArrowBackIcon } from '@material-ui/icons';
import { useHistory, useLocation } from 'react-router-dom';

import Page from 'src/components/Page';

import LoginForm from './LoginForm';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh'
  },
  grid: {
    height: '100%'
  },
  bgWrapper: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  bg: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: 'url(https://source.unsplash.com/featured/?cinema)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    opacity: 0.5
  },
  content: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  contentHeader: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: theme.spacing(5),
    paddingBototm: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },

  contentBody: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center'
    }
  }
}));

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function LoginView() {
  const classes = useStyles();
  const history = useHistory();

  const query = useQuery();

  const onSubmitSuccess = () => {
    if (query.has('redirectUrl')) {
      history.push(`/${query.get('redirectUrl')}`);
    } else {
      history.push('/');
    }
  };

  const handleBack = () => {
    history.push('/');
  };

  return (
    <Page title="Login" className={classes.root}>
      <Grid className={classes.grid} container>
        <Grid className={classes.bgWrapper} item lg={5}>
          <div className={classes.bg} />
        </Grid>

        <Grid className={classes.content} item lg={7} xs={12}>
          <div className={classes.contentHeader}>
            <IconButton
              className={classes.backButton}
              onClick={handleBack}
            >
              <ArrowBackIcon />
            </IconButton>
          </div>
          <div className={classes.contentBody}>
            <LoginForm onSubmitSuccess={onSubmitSuccess} />
          </div>
        </Grid>
      </Grid>
    </Page>
  );
}

export default LoginView;
