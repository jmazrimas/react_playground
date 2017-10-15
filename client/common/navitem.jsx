import React from 'react';
import { render } from 'react-dom';
import {
  HashRouter,
  Link
} from 'react-router-dom'

import classNames from 'classnames/bind';

export class NavItem extends React.Component {
  constructor(props) {
    super(props);
  }
  handleLinkClick() {
    this.props.updateSelectedNav(this.props.navIndex);
  }
  render() {
    var navClasses = classNames({
      "list-group-item": true,
      "active": this.props.isSelected
    });
    return (
      // I could have used the activeClassName prop that's attached
      //   to link to achieve the addition of the 'active' class,
      //   but I thought this was a good opportunity to explore
      //   some semblence of two-way binding in react
      <Link onClick={this.handleLinkClick.bind(this)} to={this.props.navRoute}>
        <li className={navClasses}>{this.props.navName}</li>
      </Link>
    )
  }
}
