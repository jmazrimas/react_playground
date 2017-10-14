import React from 'react';
import { render } from 'react-dom';
import { NavBar } from 'navbar';

let navs = [
  'View One',
  'View Two',
  'View Three'
]

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <NavBar navs={navs} />
                    <div className="col-lg-10 col-md-10 col-sm-10">
                        <h2>Content</h2>
                    </div>
                </div>
            </div>
        );
    }
}

render((
    <App />
), document.getElementById('content'))
