import React from 'react'
import { Meteor } from 'meteor/meteor'
import { Link } from 'react-router'
import FosterListItem from './fosterListItem'

export default class FosterList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      toggleClass: 'fa-chevron-circle-down',
      toggled: true
    }
  }

  fosters() {
    return this.props.fosters.map((foster, i)=>{
      return (<FosterListItem key={ i } foster={ foster } />)
    })
  }

  mailLink () {
    let emails = this.props.fosters.map((foster, i)=>{
      return foster.emails[0].address
    })
    return emails.join(',')

  }

  toggle () {
    let toggleState = this.state.toggled
    let toggleClass = ''
    if (toggleState)
      toggleClass = 'fa-chevron-circle-right'
    else
      toggleClass = 'fa-chevron-circle-down'
    this.setState({
      toggleClass: toggleClass,
      toggled: !toggleState
    })
  }

  render() {
    if(this.props.fosters) {
      let type = this.props.animal.type
      return (
        <li className={this.state.toggled ? '' : 'toggled'}>
          <span className={`icon-${ type.toLowerCase() }`}></span>
          <header>
            <h1 onClick={this.toggle.bind(this)} >
              <i className={`toggle fa ${this.state.toggleClass}`} ></i>
              <span>{ type }</span>
            </h1>
            <nav>
              <span>{this.props.fosters.length}</span>
              <a href={`mailto:?bcc=${this.mailLink()}`} title='Mail to entire list'>
                <i className='fa fa-envelope'></i>
              </a>
            </nav>
          </header>
          <ul>
            { this.fosters() }
          </ul>
        </li>
      )
    } else return (<h1>Loading</h1>)

  }
}
