import React, { forwardRef } from 'react';

import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const Page = forwardRef(({ title, children, ...rest }, ref) => (
  <div
    ref={ref}
    {...rest}
  >
    <Helmet>
      <title>{title}</title>
    </Helmet>
    {children}
  </div>
));

Page.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string
};

export default Page;
