import { Meteor } from 'meteor/meteor'
import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import ReactDOM from 'react-dom'
import MainLayout from '../../ui/components/main'
import AnimalList from '../../ui/components/animalList'
import AnimalContainer from '../../ui/containers/animalContainer'
import FosterListContainer from '../../ui/containers/fosterListContainer'
import FosterContainer from '../../ui/containers/fosterContainer'
import SignIn from '../../ui/components/signIn'
import { Accounts } from 'meteor/std:accounts-ui'

Meteor.startup(() => {
  ReactDOM.render((
    <Router history={browserHistory}>
      <Route path="/" component={MainLayout}>
        <IndexRoute component={AnimalContainer} />
        <Route path='/admin' component={FosterListContainer} >
          <IndexRoute component={FosterContainer} />
        </Route>
        <Route path="/signin" component={() => <SignIn />} />
      </Route>
    </Router>
  ), document.getElementById('app') )
})
