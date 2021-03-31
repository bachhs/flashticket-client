import React from 'react';

import { Box, LinearProgress, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)'
  }
}));

function LoadingScreen() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box width={400}>
        <LinearProgress />
      </Box>
    </div>
  );
}

export default LoadingScreen;
