/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import {
  makeStyles,
  TextField,
} from '@material-ui/core';
import { Formik } from 'formik';
import React from 'react';

const useStyles = makeStyles(() => ({
  root: {
  }
}));

function LoginForm({ onSubmitSuccess, onSubmitFail, ...rest }) {
  const classes = useStyles();
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
        /* try {
          await dispatch(login(values.email, values.password));
          onSubmitSuccess();
        } catch (error) {
          const message = (error.response && error.response.data.message) || 'Something went wrong';
          onSubmitFail(error);
          setStatus({ success: false });
          setErrors({ submit: message });
          setSubmitting(false);
        } */
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
        <form className={classes.root}>
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
