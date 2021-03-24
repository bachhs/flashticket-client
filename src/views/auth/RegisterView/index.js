import {
  Container,
  makeStyles,
  Typography,
  Card,
  CardContent,
  Divider,
  Link,
  Box,
  Checkbox,
  FormControlLabel,
  Button
} from '@material-ui/core';
import React from 'react';
import Page from 'src/components/Page';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import RegisterForm from './RegisterForm';

const useStyles = makeStyles((theme) => ({
  bg: {
    height: '100%',
    background: 'rgba(255,255,255,0.2)',
    backgroundImage: `url(${'/static/images/bgResgiter.jpg'})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    opacity: '0.8',
    paddingTop: '2%',
    paddingBottom: '2%',
    [theme.breakpoints.down('lg')]: {
      paddingTop: '25%',
      paddingBottom: '25%'
    },
  },
  root: {
    justifyContent: 'center',
    display: 'flex',
    minHeight: '100%',
    paddingBottom: 120,
    paddingTop: 80
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

function RegisterView() {
  const classes = useStyles();
  return (
    <div className={classes.bg}>
      <Page className={classes.root}>
        <Container maxWidth="sm">
          <Box
            display="flex"
            alignItems="center"
            mb={1}
          >
            <Button
              variant="outline"
              color="secondary"
              className={classes.button}
              startIcon={<KeyboardBackspaceIcon />}
            >
              Trở về trang chủ
            </Button>
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
                  Tạo tài khoản FlashTicket của bạn
                </Typography>
              </Box>
              <Box>
                <RegisterForm />
              </Box>
              <Box my={2}>
                <Divider />
              </Box>
              <Box mb={1}>
                <FormControlLabel
                  control={(
                    <Checkbox />
              )}
                  label="Tôi đồng ý với Điều khoản sử dụng của FlashTicket"
                />
              </Box>
              <Button
                variant="contained"
                color="secondary"
                fullWidth
              >
                Đăng kí
              </Button>
              <Box mt={2}>
                <Typography
                  variant="body2"
                  color="textSecondary"
                >
                  <Link href="login">
                    Bạn đã có tài khoản?
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

export default RegisterView;
