import React from 'react';
import { render } from 'react-dom';
import {
  HashRouter,
  Link
} from 'react-router-dom'
import classNames from 'classnames/bind';

export class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectedIndex: 0};
  }
  updateSelectedNav(navIndex) {
    this.setState({selectedIndex: navIndex});
  }
  render() {
    return (
      <div className="col-lg-2 col-md-2 col-sm-2">
        <h2>Nav Bar</h2>
        <HashRouter>
          <ul className="list-group">
              {
                this.props.navs.map((nav, i) => {
                  return <NavItem key={nav.title} navName={nav.title} navRoute={nav.route} navIndex={i} isSelected={(this.state.selectedIndex === i)} updateSelectedNav={this.updateSelectedNav.bind(this)}/>
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
  handleLinkClick() {
    this.props.updateSelectedNav(this.props.navIndex);
  }
  render() {
    var navClasses = classNames({
      "list-group-item": true,
      "active": this.props.isSelected
    });
    return (
      <Link onClick={this.handleLinkClick.bind(this)} to={this.props.navRoute}>
        <li className={navClasses}>{this.props.navName}</li>
      </Link>
    )
  }
}
