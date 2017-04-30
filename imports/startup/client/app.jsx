import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import ReactDOM from 'react-dom';
import MainLayout from '../../ui/components/main';
import AnimalContainer from '../../ui/containers/animalContainer';
import { Accounts } from 'meteor/std:accounts-ui'

Meteor.startup(() => {
  ReactDOM.render((
    <Router history={browserHistory}>
      <Route path="/" component={MainLayout}>
        <IndexRoute component={AnimalContainer}></IndexRoute>
        <Route path="/signin" component={() => <Accounts.ui.LoginForm />} />
      </Route>
    </Router>
  ), document.getElementById('app') );
});
