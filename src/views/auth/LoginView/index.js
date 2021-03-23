import React from 'react';
import {
  Container,
  makeStyles,
  Typography,
  Card,
  CardContent,
  Divider,
  Link,
  Box,
  Button
} from '@material-ui/core';
import Page from 'src/components/Page';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import LoginForm from './LoginForm';

const useStyles = makeStyles((theme) => ({
  bg: {
    minHeight: '100vh',
    background: 'rgba(255,255,255,0.2)',
    backgroundImage: `url(${'/static/images/bgResgiter.jpg'})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    opacity: '0.8',
    '&:before': {
      position: 'absolute',
      content: '" "',
      top: 0,
      left: 0,
      height: '100%',
      width: '100%',
      backgroundImage: 'linear-gradient(-180deg, rgba(0,0,0,0.00) 58%, rgba(0,0,0,0.32) 100%)'
    }
  },
  root: {
    justifyContent: 'center',
    display: 'flex',
    minHeight: '100%',
    paddingBottom: 120,
    paddingTop: 220,
    [theme.breakpoints.down('sm')]: {
      paddingTop: 100
    },
  },
  Title: {
    color: 'black',
    opacity: 0.9,
    fontWeight: 'bold',
    fontSize: 24
  },
  button: {
    color: '#ffffff',
    opacity: 0.95
  }
}));

function LoginView() {
  const classes = useStyles();
  return (
    <div className={classes.bg}>
      <Page className={classes.root}>
        <Container maxWidth="sm">
          <Box
            mt={1}
            mb={3.5}
            display="flex"
            justifyContent="center"
            maxWidth={130}
            style={{ backgroundColor: '#000000', borderRadius: 6000 }}
          >
            <AccountCircleRoundedIcon style={{ fontSize: 130 }} />
          </Box>
          <Card>
            <CardContent>
              <Box
                mt={1}
                mb={3.5}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Typography className={classes.Title}>
                  Đăng nhập
                </Typography>
              </Box>
              <Box>
                <LoginForm />
              </Box>
              <Box my={2}>
                <Divider />
              </Box>
              <Button
                variant="contained"
                color="secondary"
                fullWidth
              >
                Đăng nhập
              </Button>
              <Box mt={2}>
                <Typography
                  variant="body2"
                  color="textSecondary"
                >
                  <Link href="register">
                    Bạn chưa có tài khoản?
                  </Link>
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Container>
      </Page>
    </div>
  );
}

export default LoginView;
