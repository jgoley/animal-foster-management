import React from 'react'
import { Meteor } from 'meteor/meteor'
import { Link } from 'react-router'
import AnimalContainer from '../containers/animalContainer'
import AnimalListItem from './animalListItem'

export default class AnimalList extends React.Component {
  constructor () {
    super()
  }

  listItems() {
    let items = []
    this.props.animals.forEach((animal, i)=>{
      items.push(<AnimalListItem animal={animal} key={i} />)
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
