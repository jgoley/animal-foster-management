import React from 'react'
import { Meteor } from 'meteor/meteor'
import { Link } from 'react-router'
import { _ } from 'lodash'

export default class FosterListItem extends React.Component {
  render() {
    let foster = this.props.foster
    let email = foster.emails[0].address
    let name = foster.profile.name
    return (
      <li className='flex foster'>
        <a href={`mailto:${email}`}>
          <span>{name}</span>
          <i className='fa fa-envelope-o'></i>
        </a>
      </li>
    )
  }
}
