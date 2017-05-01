import React from 'react'
import { Meteor } from 'meteor/meteor'
import { Link } from 'react-router'
import FosterListItem from './fosterListItem'

export default class FosterList extends React.Component {
  listItems() {
    let items = []
    this.props.fosters.forEach((foster, i)=>{
      items.push(<FosterListItem foster={foster} key={i} />)
    })
    return items
  }

  render() {
    if(this.props.fosters) {
      return (
        <li>
          <h1>{ this.props.animal.type }</h1>
          <ul>{ this.listItems() }</ul>
        </li>
      )
    } else return (<h1>Loading</h1>)

  }
}
