import React from 'react';

import {
  makeStyles
} from '@material-ui/core';

import SportDetail from 'src/components/SportDetail';

const useStyles = makeStyles(() => ({
  root: {}
}));

function SportDetailView() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root} />
      <SportDetail />
    </>
  );
}

export default SportDetailView;
