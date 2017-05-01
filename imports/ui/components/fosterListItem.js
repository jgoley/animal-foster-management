import React from 'react'
import { Meteor } from 'meteor/meteor'
import { Link } from 'react-router'
import { _ } from 'lodash'

export default class FosterListItem extends React.Component {
  render() {
    return (
      <li className='flex'>{this.props.foster.emails[0].address}</li>
    )
  }
}
