import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import { NavBar } from 'navbar';
import { Home } from 'home';
import { Two  } from 'two';
import { Three  } from 'three';

let navs = [
  {
    title: 'Home',
    route: '/one'
  },
  {
    title: 'View Two',
    route: '/two'
  },
  {
    title: 'View Three',
    route: '/three'
  }
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
                        <HashRouter>
                          <Switch>
                            <Route path="/two" component={Two} />
                            <Route path="/three" component={Three} />
                            <Route path="/" component={Home} />
                          </Switch>
                        </HashRouter>
                    </div>
                </div>
            </div>
        );
    }
}

render((
    <App />
), document.getElementById('content'))
