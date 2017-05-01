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
    return (
      <li className='flex'>
        <a className={this.state.checked ? 'selection checked' : 'selection'}
           onClick={_.debounce(this.setAnimalPref.bind(this), 100)}>
          <span className='animal-label'>{this.props.animal.type}</span>
        </a>
      </li>
    )
  }
}
