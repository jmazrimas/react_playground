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
          <li className="list-group-item">View 1</li>
          <li className="list-group-item">View 2</li>
          <li className="list-group-item active">View 3</li>
        </ul>
      </div>
    )
  }
}
