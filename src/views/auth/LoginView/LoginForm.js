import {
  makeStyles,
  TextField,
  Grid,
  Radio,
  Box
} from '@material-ui/core';
import { Formik } from 'formik';
import React from 'react';
import { KeyboardDatePicker } from '@material-ui/pickers';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles(() => ({
  root: {
  }
}));

function LoginForm() {
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
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
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
            fullWidth
            value={values.email}
            label="Email"
            margin="normal"
            variant="outlined"
          />
          <TextField
            fullWidth
            value={values.password}
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

export default LoginForm;
