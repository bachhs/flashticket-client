import React from 'react';

import PropTypes from 'prop-types';

import Header from './Header/Header';

function MainLayout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node
};

export default MainLayout;
