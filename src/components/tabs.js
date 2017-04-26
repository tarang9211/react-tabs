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

  renderTab = () => {
    const filteredTabs = this.props.children.filter(item => item.type === Tab);
    return (
      <ul className="tablist">
        {filteredTabs.map((tab, index) => (
          <li
            key={tab.props.title}
            className="tab_item"
            onClick={() => {
              console.log(index);
            }}
          >
            <Tab title={tab.props.title}>{tab.props.children}</Tab>
          </li>
        ))}
      </ul>
    );
  };

  render() {
    return (
      <div className="tabs">
        {this.renderTab()}
      </div>
    );
  }
}

Tabs.propTypes = {
  children: PropTypes.node,
};

export default Tabs;
