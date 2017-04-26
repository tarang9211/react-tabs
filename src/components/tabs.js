import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tab from './tab';

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectIndex: 0,
    };
  }

  renderTabs = () => {
    const filteredTabs = this.props.children.filter(tab => tab.type === Tab);
    return filteredTabs.map(tab => (
      <Tab
        title={tab.props.title}
        key={tab.props.title}
      >
        {tab.props.children}
      </Tab>
      ));
  }

  render() {
    return (
      <div className="tabs">
        {this.renderTabs()}
      </div>
    );
  }
}

Tabs.propTypes = {
  children: PropTypes.node,
};

export default Tabs;
