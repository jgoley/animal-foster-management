import React from 'react'
import { Meteor } from 'meteor/meteor'
import { Link } from 'react-router'
import { _ } from 'lodash'

export default class AnimalListItem extends React.Component {
  constructor() {
    super()
    this.state = {checked: false}
  }

  componentWillMount() {
    if(_.includes(this.props.animal.fosters, Meteor.userId())) {
      this.setState({ checked: true })
    }
  }

  setAnimalPref() {
    let isChecked = this.state.checked
    Meteor.call('setAvailability', this.props.animal, isChecked, (error, res) => {
      if(!error)
        this.setState({checked: !isChecked})
    })
  }

  render() {
    let type = this.props.animal.type
    return (
      <li className='flex'>
        <a className={this.state.checked ? 'selection checked' : 'selection'}
           onClick={_.throttle(this.setAnimalPref.bind(this), 100)}>
          <span>
            <h1 className='animal-label'>{type}</h1>
            <span className={`icon-${ type.toLowerCase() }`}></span>
          </span>
        </a>
      </li>
    )
  }
}
