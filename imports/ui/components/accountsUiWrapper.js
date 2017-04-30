// Based on Todo example: https://www.meteor.com/tutorials/react/adding-user-accounts

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

export default class AccountsUIWrapper extends Component {
  componentDidMount() {
    if (Meteor.userId()) this.props.history.push('/')
    this.view = Blaze.render(Template.atForm,
      ReactDOM.findDOMNode(this.refs.container));
  }
  componentWillUnmount() {
    this.props.history.push('/')
    Blaze.remove(this.view);
  }
  render() {
    return <span ref="container" />;
  }
}
