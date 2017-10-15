import { Home } from 'home/home';
import { Two  } from 'two/two';
import { Three  } from 'three/three';

// This is a list of all the main routes in the app
module.exports = {
    navs: [
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
}
