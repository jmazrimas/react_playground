import React from 'react';
import { render } from 'react-dom';
import {
  HashRouter,
  NavLink
} from 'react-router-dom'

import classNames from 'classnames/bind';

export class NavItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var navClasses = classNames({
      "list-group-item": true
    });
    return (
      <NavLink exact activeClassName="active" to={this.props.navRoute}>
        <li className={navClasses}>{this.props.navName}</li>
      </NavLink>
    )
  }
}
