import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import { NavBar } from 'common/navbar';
import navOptions from 'common/navoptions'

let navs = navOptions().navs;

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <NavBar currentRoute={location.hash} navs={navs} />
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
