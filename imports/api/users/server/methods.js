import { Meteor } from 'meteor/meteor';
import { Accounts, STATES } from 'meteor/std:accounts-ui'

Meteor.methods({
  checkCredentials: (credentials) => {
    let code = credentials.code
    if(code === Meteor.settings.private.signUpCode ||
      code === Meteor.settings.private.signUpCodeAdmin)
      return
    else
      throw new Meteor.Error('Invalid Code', ['Invalid Code'])
  },
  isAdmin: () => {
    if (Meteor.user().roles)
      return true
    else
      return false
  }
})
