import React from 'react'
import Input from './input'
import { login } from '../actions/auth'
import { required, nonEmpty } from '../validators'
import { Field, reduxForm, focus } from 'redux-form'
import './styles/login-form.css'

export class LoginForm extends React.Component {
  onSubmit(values) {
    return this.props.dispatch(login(values.username, values.password))
  }

  render() {
    let error
    if (this.props.error) {
      error = (
        <div className="form-error" aria-live="polite">
          {this.props.error}
        </div>
      )
    }
    return (
      <form
        className="login-form"
        onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
      >
        {error}
        <Field
          component={Input}
          type="text"
          name="username"
          id="username"
          label="USERNAME"
          autocomplete="username"
          validate={[required, nonEmpty]}
        />
        <Field
          component={Input}
          type="password"
          name="password"
          id="password"
          label="PASSWORD"
          autocomplete="current-password"
          validate={[required, nonEmpty]}
        />
        <button disabled={this.props.pristine || this.props.submitting}>
          LOGIN
        </button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'login',
  onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm)
