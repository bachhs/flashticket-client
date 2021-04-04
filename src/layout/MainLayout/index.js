import React from 'react';

import PropTypes from 'prop-types';

import Footer from './Footer/Footer';
import Header from './Header/Header';

function MainLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node
};

export default MainLayout;
