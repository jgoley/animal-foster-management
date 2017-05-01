import React from 'react'
import { Meteor } from 'meteor/meteor'
import { Link } from 'react-router'
import FosterContainer from '../containers/fosterContainer'
import FosterList from './fosterList'

export default class FosterLists extends React.Component {
  listItems() {
    let items = []
    this.props.animals.forEach((animal, i)=>{
      items.push(<FosterContainer animal={animal} key={i} />)
    })
    return items
  }

  render() {
    if(this.props.animals) {
      return (
        <div>
          <ul>
            {this.listItems()}
          </ul>
        </div>
      )
    } else return (<h1>Loading</h1>)

  }
}
