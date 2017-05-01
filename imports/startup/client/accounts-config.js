import { Accounts } from 'meteor/std:accounts-ui'

Accounts.config({
  sendVerificationEmail: false,
})

Accounts.ui.config({
  passwordSignupFields: 'EMAIL_ONLY',
  loginPath: '/signIn',
  minimumPasswordLength: 6
})
