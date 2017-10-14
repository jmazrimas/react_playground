import React from 'react';
import { render } from 'react-dom';


class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-2 col-md-2 col-sm-2">
                        <h2>Nav Bar</h2>
                        <ul className="list-group">
                            <li className="list-group-item">View 1</li>
                            <li className="list-group-item">View 2</li>
                            <li className="list-group-item active">View 3</li>
                        </ul>
                    </div>
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
