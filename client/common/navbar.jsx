import React from 'react';
import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom'
import classNames from 'classnames/bind';

import { NavItem } from 'common/navitem';

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
