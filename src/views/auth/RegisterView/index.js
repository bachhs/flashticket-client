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

const useStyles = makeStyles(() => ({
  root: {
    justifyContent: 'center',
    display: 'flex',
    minHeight: '100%',
    paddingBottom: 120,
    paddingTop: 80
  },
  button: {
    opacity: 0.95
  }
}));

function RegisterView() {
  const classes = useStyles();
  return (
    <Page title="Register" className={classes.root}>
      <Container maxWidth="sm">
        <Box
          display="flex"
          alignItems="center"
          mb={1}
        >
          <Button
            variant="outlined"
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
              <Typography variant="h5" gutterBottom>
                Create your Flash Ticket account
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
  );
}

export default RegisterView;
