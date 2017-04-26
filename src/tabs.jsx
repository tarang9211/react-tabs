import React, {Component} from 'react'

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {activeTab:0}
  }

  render() {
    const tabCollection = this.props.children.filter((ele) => ele.type === Tab)
    const links = (
      <div className="mdl-tabs__tab-bar"> 
        {tabCollection.map((tab) => <a className="mdl-tabs__tab" key={tab.props.title} href={`#${tab.props.title.toLowerCase().replace(' ','')}`}>{tab.props.title}</a>)}
      </div>
    );
    const content = tabCollection.map(tab => <div className="mdl-tabs__panel" key={tab.props.title} id={tab.props.title.toLowerCase().replace(' ','')}>{tab.props.children}</div>);
    return (
      <div className="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
        {links}
        {content}
      </div>
    );
  }
}

function Tab(props) {
  return null
}

export {Tabs, Tab}