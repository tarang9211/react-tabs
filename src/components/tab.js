import React from 'react';
import PropTypes from 'prop-types';

const Tab = (props) => {
  const { title, children } = props;
  return (
    <div>
      <a href="#">{title}</a>
      <p>{children}</p>
    </div>
  );
};

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

export default Tab;
