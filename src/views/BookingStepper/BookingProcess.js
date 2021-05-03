/* eslint-disable react/destructuring-assignment */
import React from 'react';

import {
  Box,
  Button,
  Container,
  Step,
  StepConnector,
  StepLabel,
  Stepper
} from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Check from '@material-ui/icons/Check';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import SettingsIcon from '@material-ui/icons/Settings';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';
import Alert from '@material-ui/lab/Alert';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  useLocation
} from 'react-router-dom';

import MethodPayment from './MethodPayment/MethodPayment';
import OrderConfirm from './OrderConfirm/OrderConfirm';
import SuccessPayment from './PaymentConfirmation/PaymentConfirmation';
import Ticket from './Ticket/Ticket';

const useQontoStepIconStyles = makeStyles({
  root: {
    color: '#eaeaf0',
    display: 'flex',
    height: 80,
    alignItems: 'center',
  },
  active: {
    color: '#784af4',
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
  completed: {
    color: '#784af4',
    zIndex: 1,
    fontSize: 18,
  },
});

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? <Check className={classes.completed} /> : <div className={classes.circle} />}
    </div>
  );
}

QontoStepIcon.propTypes = {
  /**
     * Whether this step is active.
     */
  active: PropTypes.bool,
  /**
     * Mark the step as completed. Is passed to child components.
     */
  completed: PropTypes.bool,
};

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    '& $line': {
      backgroundImage:
          'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  completed: {
    '& $line': {
      backgroundImage:
          'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundImage:
        'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    backgroundImage:
        'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <SettingsIcon />,
    2: <GroupAddIcon />,
    3: <VideoLabelIcon />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(12),
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(10),
    marginRight: theme.spacing(1),
  },
  buttonSuccess: {
    marginTop: theme.spacing(10),
    marginRight: theme.spacing(5)
  },
  instructions: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(1),
  },
  boxButton: {
    marginLeft: theme.spacing(13)
  },
  [theme.breakpoints.down('sm')]: {
    boxButton: {
      marginLeft: theme.spacing(5)
    },
  }
}));

function getSteps() {
  return ['Payment Information', 'Payment Method', 'Payment Confirmation'];
}

function getStepContent(step, seat) {
  switch (step) {
    case 0:
      return (
        <OrderConfirm seat={seat} />
      );
    case 1:
      return (
        <MethodPayment seat={seat} />
      );
    case 2:
      return (
        <SuccessPayment seat={seat} />
      );
    default:
      return 'Unknown step';
  }
}

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function BookingProcess() {
  const classes = useStyles();

  const query = useQuery();
  const seat = query.get('seat').split(',');

  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handlePrint = () => {

  };

  return (
    <Container maxWidth="lg">
      <div className={classes.root}>
        <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />} style={{ backgroundColor: 'transparent' }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
              <Ticket seat={seat} />
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Alert className={classes.buttonSuccess} style={{ width: '40vw', marginLeft: '6vw' }} variant="filled" severity="success">Booking Succeed</Alert>
                <Button onClick={handleReset} className={classes.buttonSuccess} variant="contained">
                  Ticket
                </Button>
                <Button onClick={handlePrint} className={classes.buttonSuccess} variant="contained">
                  Print
                </Button>
              </div>
            </div>
          ) : (
            <div>
              <Box className={classes.instructions}>
                {getStepContent(activeStep, seat)}
              </Box>
              <Box className={classes.boxButton} mb={3}>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  variant="contained"
                  className={classes.button}
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  className={classes.button}
                >
                  {activeStep === steps.length - 1 ? 'Finish' : 'Confirm and Next'}
                </Button>
              </Box>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}

export default BookingProcess;
