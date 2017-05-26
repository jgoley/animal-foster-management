import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/std:accounts-ui'
import { browserHistory } from 'react-router'
import { Roles } from 'meteor/alanning:roles'

Accounts.config({
  sendVerificationEmail: false,
  forbidClientAccountCreation: false
})

Accounts.ui.config({
  passwordSignupFields: 'EMAIL_ONLY',
  minimumPasswordLength: 6,
  onSignedOutHook: () => browserHistory.push('/signIn'),
  onSignedInHook: () => browserHistory.push('/'),
  onPostSignUpHook: () => browserHistory.push('/')
})

if(Meteor.isServer) {
  Accounts.onCreateUser(function (options, user) {
    user.profile = options.profile || {}
    if(options.credentials.code === Meteor.settings.private.signUpCodeAdmin)
      user.roles = ['admin']
    return user
  })
}
