import React, { useState } from 'react';

import {
  Box,
  Container,
  Divider,
  Tab,
  Tabs,
  makeStyles
} from '@material-ui/core';

import TimeShowingDetail from 'src/views/TimeBooking/TimeShowingDetail/TimeShowingDetail';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    paddingTop: theme.spacing(9)
  },
  [theme.breakpoints.down('md')]: {
    root: {
      paddingTop: theme.spacing(0)
    }
  }
}));

function TimeShowing() {
  const classes = useStyles();
  const [currentTab, setCurrentTab] = useState('day1');
  const tabs = [
    { value: 'day1', label: 'Chủ nhật 11/4' },
    { value: 'day2', label: 'Thứ hai 12/4' },
    { value: 'day3', label: 'Thứ ba 13/4' },
    { value: 'day4', label: 'Thứ tư 14/4' },
  ];

  const handleTabsChange = (event, value) => {
    setCurrentTab(value);
  };

  return (
    <>
      <Container maxWidth="xl" className={classes.root}>
        <Box mt={3}>
          <Tabs
            onChange={handleTabsChange}
            scrollButtons="auto"
            textColor="secondary"
            value={currentTab}
            variant="scrollable"
          >
            {tabs.map((tab) => (
              <Tab
                key={tab.value}
                label={tab.label}
                value={tab.value}
              />
            ))}
          </Tabs>
        </Box>
        <Divider />
        <TimeShowingDetail />
      </Container>
    </>
  );
}

export default TimeShowing;
