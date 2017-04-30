import React from 'react'
import { Meteor } from 'meteor/meteor'
import { Link } from 'react-router'

export default class AnimalListItem extends React.Component {
  render() {
    return (
      <li>
        <h1>{this.props.animal.type}</h1>
      </li>
    )
  }
}
