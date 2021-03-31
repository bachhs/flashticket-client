import React from 'react';

import {
  Box,
  Button,
  Divider,
  makeStyles,
  TextField,
} from '@material-ui/core';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { login } from 'src/redux/actions/accountActions';

const useStyles = makeStyles(() => ({
  root: {
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
          className={classes.root}
        >
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
          <Box my={2}>
            <Divider />
          </Box>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disable={isSubmitting}
            fullWidth
          >
            Đăng nhập
          </Button>
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
