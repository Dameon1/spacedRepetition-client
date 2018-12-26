import React from 'react'
import { login } from '../actions/auth'
import { registerUser } from '../actions/users'
import { Field, reduxForm, focus } from 'redux-form'
import { required, nonEmpty, matches, length, isTrimmed } from '../validators'
import Input from './input'

const passwordLength = length({ min: 6, max: 72 })
const matchesPassword = matches('password')

export class RegistrationForm extends React.Component {
  onSubmit(values) {
    const { username, password } = values
    const user = { username, password }
    return this.props
      .dispatch(registerUser(user))
      .then(() => this.props.dispatch(login(username, password)))
  }

  render() {
    return (
      <form
        className="login-form"
        onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
      >
        <Field
          component={Input}
          type="text"
          name="username"
          label="USERNAME"
          validate={[required, nonEmpty, isTrimmed]}
        />
        <Field
          component={Input}
          type="password"
          name="password"
          label="PASSWORD"
          validate={[required, passwordLength, isTrimmed]}
        />
        <Field
          component={Input}
          type="password"
          name="passwordConfirm"
          label="CONFIRM"
          validate={[required, nonEmpty, matchesPassword]}
        />
        <button
          type="submit"
          disabled={this.props.pristine || this.props.submitting}
        >
          Register
        </button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'registration',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('registration', Object.keys(errors)[0]))
})(RegistrationForm)
