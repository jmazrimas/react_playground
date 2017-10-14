import React from 'react';
import { render } from 'react-dom';

export class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="col-lg-2 col-md-2 col-sm-2">
        <h2>Nav Bar</h2>
        <ul className="list-group">
          {
            this.props.navs.map((nav) => {
              return <NavItem key={nav} navName={nav}/>
            })
          }
        </ul>
      </div>
    )
  }
}

class NavItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      // need to add the active class
      <li className="list-group-item">{this.props.navName}</li>
    )
  }
}
