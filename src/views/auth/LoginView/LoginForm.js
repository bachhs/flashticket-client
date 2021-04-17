import React from 'react';

import {
  Box,
  Button,
  Link,
  TextField,
  Typography,
  makeStyles
} from '@material-ui/core';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { login } from 'src/redux/actions/accountActions';

const useStyles = makeStyles((theme) => ({
  form: {
    paddingLeft: '100px',
    paddingRight: '100px',
    paddingBottom: '125px',
    flexBasis: '700px',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    }
  },
  logo: {
    fontSize: 130,
    color: '#cecccc'
  },
  Title: {
    color: 'white',
    fontWeight: '330',
    fontSize: 35
  }
}));

function LoginForm({ onSubmitSuccess, onSubmitFail }) {
  const classes = useStyles();

  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validate={(values) => {
        const errors = {};

        if (!values.email) {
          errors.email = 'Vui lòng nhập email';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Vui lòng nhập email đúng định dạng';
        }

        if (!values.password) {
          errors.password = 'Vui lòng nhập mật khẩu';
        }

        return errors;
      }}
      onSubmit={async (values, {
        setErrors,
        setStatus,
        setSubmitting
      }) => {
        try {
          await dispatch(login(values.email, values.password));
          onSubmitSuccess();
        } catch (error) {
          const message = (error.response && error.response.data.message) || 'Something went wrong';
          onSubmitFail(error);
          setStatus({ success: false });
          setErrors({ submit: message });
          setSubmitting(false);
        }
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form
          onSubmit={handleSubmit}
          className={classes.form}
        >
          <Box
            mt={1}
            display="flex"
            justifyContent="center"
          >
            <AccountCircleRoundedIcon className={classes.logo} />
          </Box>
          <Box
            mt={1}
            mb={1.5}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Typography className={classes.Title}>
              Đăng nhập
            </Typography>
          </Box>
          <TextField
            name="email"
            type="email"
            fullWidth
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
            label="Email"
            margin="normal"
            variant="outlined"
          />
          <TextField
            name="password"
            fullWidth
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
            label="Mật khẩu"
            type="password"
            margin="normal"
            variant="outlined"
            autoComplete="current-password"
          />
          <Box my={2} />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disable={isSubmitting}
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
        </form>
      )}
    </Formik>
  );
}

LoginForm.propTypes = {
  onSubmitSuccess: PropTypes.func,
  onSubmitFail: PropTypes.func
};

LoginForm.defaultProps = {
  onSubmitSuccess: () => {},
  onSubmitFail: () => {}
};

export default LoginForm;
