import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  HashRouter,
  hashHistory,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import { NavBar } from 'common/navbar';
import { navs } from 'common/navoptions';
import { Home } from 'home/home';
import { Two  } from 'two/two';
import { Three  } from 'three/three';

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
                          { this.props.children }
                    </div>
                </div>
            </div>
        );
    }
}

render((
  <HashRouter>
    <App>
        <Route path="/two" component={Two}/>
        <Route path="/three" component={Three}/>
        <Route exact path="/" component={Home}/>
    </App>
  </HashRouter>
), document.getElementById('content'))
