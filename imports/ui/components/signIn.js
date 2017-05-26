import { Meteor } from 'meteor/meteor'
import { Accounts, STATES } from 'meteor/std:accounts-ui'

export default class SignUp extends Accounts.ui.LoginForm {
  fields() {
    const { formState } = this.state
    if (formState == STATES.SIGN_UP) {
      return (
        {
          ...super.fields(),
          name: {
            id: 'name',
            label: 'Full Name',
            onChange: this.handleChange.bind(this, 'name')
          },
          signupCode: {
            id: 'code',
            hint: 'Code given by ACC fostering managers',
            label: 'Signup Code',
            onChange: this.handleChange.bind(this, 'code')
          }
        }
      )
    }
    return super.fields()
  }

  signUp(options = {}) {
    const { code = null, name = null } = this.state
    console.log(name)
    if (code === null) return
    options.credentials = {
      email: options.email,
      password: options.password,
      code: code
    }
    options.profile = Object.assign(options.profile || {}, {
      name: name
    })
    Meteor.call('checkCredentials', options.credentials, (error, res) =>{
      if(!error) {
        super.signUp(options)
      } else {
        alert(error.reason[0])
      }
    })
  }
}
