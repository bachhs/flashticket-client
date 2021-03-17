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
import RegisterForm from './RegisterForm';

const useStyles = makeStyles(() => ({
  bg: {
    minHeight: '100vh',
    backgroundImage: `url(${'/static/images/bgRes.jpg'})`,
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
    paddingTop: 80
  },
  Title: {
    color: 'yellow',
    fontFamily: '"Segoe UI"',
    fontWeight: 'bold'
  }
}));

function RegisterView() {
  const classes = useStyles();
  return (
    <div className={classes.bg}>
      <Page className={classes.root}>
        <Container maxWidth="sm">
          <Card>
            <CardContent>
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
