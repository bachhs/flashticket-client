import React from 'react';

import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Link,
  Typography,
  makeStyles
} from '@material-ui/core';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { useHistory } from 'react-router-dom';

import Page from 'src/components/Page';

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

  const history = useHistory();

  const onSubmitSuccess = () => {
    history.push('/');
  };

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
            color="primary"
            href="/"
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
              <RegisterForm onSubmitSuccess={onSubmitSuccess} />
            </Box>
            <Box my={2}>
              <Divider />
            </Box>
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
