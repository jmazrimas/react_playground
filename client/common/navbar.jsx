import React from 'react';
import { render } from 'react-dom';
import {
  HashRouter,
  Link,
  NavLink
} from 'react-router-dom'
import classNames from 'classnames/bind';

export class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="col-lg-2 col-md-2 col-sm-2">
        <h2>Nav Bar</h2>
        <HashRouter>
          <ul className="list-group">
              {
                this.props.navs.map((nav, i) => {
                  return <NavItem
                            key={i}
                            navName={nav.title}
                            navRoute={nav.route}/>
                })
              }
          </ul>
        </HashRouter>
      </div>
    )
  }
}

class NavItem extends React.Component {
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
