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
        phoneNumber: '',
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

        if (!values.phoneNumber) {
          errors.phoneNumber = 'Vui lòng nhập số điện thoại';
        } else if (
          !/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/i.test(values.phoneNumber)
        ) {
          errors.phoneNumber = 'Vui lòng nhập đúng định dạng số điện thoại';
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
        setFieldValue,
        setFieldTouched,
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
          <Grid container justify="space-around">
            <KeyboardDatePicker
              fullWidth
              disableToolbar
              inputVariant="outlined"
              variant="inline"
              format="DD/MM/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Ngày sinh"
              value={values.birthday}
              onBlur={() => setFieldTouched('birthday')}
              onClose={() => setFieldTouched('birthday')}
              onAccept={() => setFieldTouched('birthday')}
              onChange={(date) => setFieldValue('birthday', date)}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </Grid>
          <Box>
            <FormLabel>Giới tính</FormLabel>
            <RadioGroup
              row
              name="gender"
              aria-label="role"
              value={values.gender}
              onChange={handleChange}
            >
              <FormControlLabel value="male" control={<Radio color="primary" />} label="Nam" />
              <FormControlLabel value="female" control={<Radio color="primary" />} label="Nữ" />
            </RadioGroup>
          </Box>
          <TextField
            fullWidth
            name="phoneNumber"
            value={values.phoneNumber}
            onChange={handleChange}
            onBlur={handleBlur}
            error={Boolean(touched.phoneNumber && errors.phoneNumber)}
            helperText={touched.phoneNumber && errors.phoneNumber}
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
