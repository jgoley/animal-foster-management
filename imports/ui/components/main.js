import React from 'react'
import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data';
import { browserHistory } from 'react-router';
import Tracker from 'tracker-component';

import { Link } from 'react-router'

class EmailLink extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isAdmin: false
    }
    Meteor.call('isAdmin', (error, isAdmin) => {
      this.setState({isAdmin: isAdmin})
    })
  }
  render() {
    if (!this.state.isAdmin) {
      return (
        <li>
          <a href='mailto:accfosters@nyacc.org'>Email ACC Fosters</a>
        </li>
      )
    } else
      return null
  }
}

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
          <h1>ACC Foster Availability</h1>
          <nav>
            <ul>
              <EmailLink />
              {this.showSignOut()}
            </ul>
          </nav>
        </header>
        <section>
          { this.props.children }
        </section>
        <footer>
          <p className='credit'>
            Animal Graphics Provided by <a href="https://www.vecteezy.com/">www.vecteezy.com</a>
          </p>
        </footer>

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
