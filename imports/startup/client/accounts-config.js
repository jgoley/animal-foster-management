import { Accounts } from 'meteor/accounts-base';
import { AccountsTemplates } from 'meteor/useraccounts:core'

Accounts.config({
  sendVerificationEmail: false,
  forbidClientAccountCreation: false
});

Accounts.ui.config({
  passwordSignupFields: 'EMAIL_ONLY',
  loginPath: '/signIn',
  minimumPasswordLength: 6
});
