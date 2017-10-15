import React from 'react';
import { render } from 'react-dom';
import {
  HashRouter,
  Link
} from 'react-router-dom'

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
                this.props.navs.map((nav) => {
                  return <NavItem key={nav.title} navName={nav.title} navRoute={nav.route}/>
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
    return (
      // need to add the active class
      <Link to={this.props.navRoute}>
        <li className="list-group-item">{this.props.navName}</li>
      </Link>
    )
  }
}
