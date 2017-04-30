import React from 'react'
import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data';
import AccountsUIWrapper from './accountsUiWrapper'
import { browserHistory } from 'react-router';
import Tracker from 'tracker-component';

import { Link } from 'react-router'

export default class MainLayout extends Tracker.Component {
  constructor(props) {
    super(props)
    this.autorun(() => {
      this.setState({
        isAuthenticated: Meteor.userId()
      })
    })
  }

  componentDidMount() {
    if (!this.state.isAuthenticated)
      browserHistory.push('/signIn')
  }
  componentWillMount() {
    if (!this.state.isAuthenticated)
      browserHistory.push('/signIn')
  }

  showSignOut() {
    if (this.state.isAuthenticated)
      return <AuthItem />
  }

  render() {
    return (
      <div>
        <header>
          <h1>Foster Availability</h1>
          <nav>
            <ul>
              {this.showSignOut()}
            </ul>
          </nav>
        </header>
        <section>
          { this.props.children }
        </section>
      </div>
    )
  }
}


export class AuthItem extends React.Component {

  logOut() {
    Meteor.logout()
    browserHistory.push('/signIn')
  }

  render() {
    return ( <li><a onClick={this.logOut}>Sign Out</a></li> )
  }
}
