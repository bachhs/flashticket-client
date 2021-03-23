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
    backgroundImage: `url(${'/static/images/bgLogin.jpg'})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    opacity: '0.8'
  },
  root: {
    justifyContent: 'center',
    display: 'flex',
    minHeight: '100%',
    paddingBottom: 120,
    paddingTop: 120,
    [theme.breakpoints.down('sm')]: {
      paddingTop: 50
    },
    borderRadius: 60
  },
  Title: {
    color: 'black',
    opacity: 0.85,
    fontWeight: 'bold',
    fontSize: 30
  },
  button: {
    color: '#ffffff',
    opacity: 0.95
  },
  logo: {
    fontSize: 130,
    color: 'black'
  },
  card: {
    paddingTop: 10
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
            mb={0.5}
            display="flex"
            justifyContent="center"
          >
            <AccountCircleRoundedIcon className={classes.logo} />
          </Box>
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
          <Card className={classes.card}>
            <CardContent>
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
