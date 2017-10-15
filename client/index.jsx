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
    route: '/',
    component: Home,
    exact: true
  },
  {
    title: 'View Two',
    route: '/two',
    component: Two
  },
  {
    title: 'View Three',
    route: '/three',
    component: Three
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
                            {
                              navs.map((nav) => {
                                if (nav.exact) {
                                  return <Route key={nav.route} exact path={nav.route} component={nav.component} />
                                } else {
                                  return <Route key={nav.route} path={nav.route} component={nav.component} />
                                }
                              })
                            }
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
