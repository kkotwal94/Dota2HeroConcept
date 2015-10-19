import React from 'react';
import {Route, Router} from 'react-router';

import App from 'components/App';
import Login from 'components/Login';
import Logout from 'components/Logout';
import Dashboard from 'components/Dashboard';
import Signup from 'components/Signup';
import UserStore from 'stores/UserStore';

function requireAuth(nextState, transition) {
  if (!UserStore.getState().user.get('authenticated')) {
    transition.to('/login', null, { nextPathname: nextState.location.pathname });
  }
}

export default (
  <Router>
  <Route component={App}>
    <Route path="/" component={Dashboard} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Signup} />
  </Route>
  </Router>
);
