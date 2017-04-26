import React from 'react';
import PropTypes from 'prop-types';

const Tab = (props) => {
  const { title, children } = props;

  return (
    <div className="tab_item">
      <a href="#">{title}</a>
    </div>
  );
};

Tab.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Tab;
