import React from 'react'
import { Meteor } from 'meteor/meteor'
import { Link } from 'react-router'
import AnimalListItem from './animalListItem'
import { browserHistory } from 'react-router'

export default class AnimalList extends React.Component {
  componentWillMount() {
    Meteor.call('isAdmin', (error, isAdmin) => {
      if (isAdmin) {
        browserHistory.push('/admin')
      }
    })
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
        <div className='selection-wrapper'>
          <p>Select the types of animals you are able and willing to foster</p>
          <p></p>
          <ul className='animals'>
            {this.listItems()}
          </ul>
        </div>
      )
    } else return (<h1>Loading</h1>)
  }
}
