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

function RegisterForm() {
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
            value={values.name}
            label="Họ và Tên"
            margin="normal"
            variant="outlined"
          />
          <TextField
            fullWidth
            value={values.phone}
            label="Số điện thoại"
            margin="normal"
            variant="outlined"
          />
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
          <Grid container>
            <Grid
              xs={8}
              lg={8}
            >
              <KeyboardDatePicker
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
              xs={4}
              lg={4}
            >
              <Box>
                <FormControlLabel value="end" control={<Radio color="primary" />} label="Nam" />
                <FormControlLabel value="end" control={<Radio color="primary" />} label="Nữ" />
              </Box>
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  );
}

export default RegisterForm;
