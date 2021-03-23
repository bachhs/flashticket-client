/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import {
  makeStyles,
  TextField,
  Grid,
  Radio,
  Box,
  FormControl,
  FormLabel,
  RadioGroup
} from '@material-ui/core';
import { Formik } from 'formik';
import React from 'react';
import { KeyboardDatePicker } from '@material-ui/pickers';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles(() => ({
  root: {
  }
}));

function RegisterForm({ onSubmitSuccess, onSubmitFail, ...rest }) {
  const classes = useStyles();
  return (
    <Formik
      initialValues={{
        name: '',
        phone: '',
        email: '',
        password: '',
        birthday: new Date(),
        gender: ''
      }}
      validate={(values) => {
        const errors = {};

        if (!values.name) {
          errors.name = 'Vui lòng nhập tên';
        }

        if (!values.phone) {
          errors.phone = 'Vui lòng nhập số điện thoại';
        } else if (
          !/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/i.test(values.phone)
        ) {
          errors.phone = 'Vui lòng nhập đúng định dạng số điện thoại';
        }

        if (!values.email) {
          errors.email = 'Vui lòng nhập email';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Vui lòng nhập đúng định dạng email';
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
          await dispatch(register(values));
          onSubmitSuccess();
        } catch (error) {
          setStatus({ success: false });
          setErrors({ submit: error.message });
          onSubmitFail(error);
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
            fullWidth
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={Boolean(touched.name && errors.name)}
            helperText={touched.name && errors.name}
            label="Họ và Tên"
            margin="normal"
            variant="outlined"
          />
          <Grid
            container
          >
            <Grid
              item
              xs={12}
              sm={8}
            >
              <KeyboardDatePicker
                fullWidth
                disableToolbar
                variant="inline"
                format="DD/MM/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Ngày sinh"
                value={values.birthday}
                onChange={() => {}}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
              alignContent="center"
              alignItems="center"
            >
              <Box mt={2.3} ml={2}>
                <FormControl>
                  <FormLabel>Gender</FormLabel>
                  <RadioGroup row>
                    <FormControlLabel value="end" control={<Radio color="primary" />} label="Nam" />
                    <FormControlLabel value="end" control={<Radio color="primary" />} label="Nữ" />
                  </RadioGroup>
                </FormControl>

              </Box>
            </Grid>
          </Grid>
          <TextField
            fullWidth
            name="phone"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            error={Boolean(touched.phone && errors.phone)}
            helperText={touched.phone && errors.phone}
            label="Số điện thoại"
            margin="normal"
            variant="outlined"
          />
          <TextField
            fullWidth
            name="email"
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
            fullWidth
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
            label="Mật khẩu"
            type="password"
            margin="normal"
            variant="outlined"
            autoComplete="new-password"
          />
        </form>
      )}
    </Formik>
  );
}

RegisterForm.propTypes = {
  onSubmitSuccess: PropTypes.func,
  onSubmitFail: PropTypes.func
};

RegisterForm.defaultProps = {
  onSubmitSuccess: () => {},
  onSubmitFail: () => {}
};

export default RegisterForm;
