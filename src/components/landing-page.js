import React from 'react'
import Card from './card'
import LoginForm from './login-form'
import {BASENAME} from '../config'
import { connect } from 'react-redux'
import { getQuestion } from '../actions/question'
import { Link, withRouter } from 'react-router-dom'
import './styles/landing-page.css'

export function LandingPage(props) {
  // If we are logged in redirect straight to the user's dashboard
  if (props.loggedIn) {
    props.dispatch(getQuestion())
      .then(() => props.history.push(`${BASENAME}/dashboard`))
  }

  return (
    <div className="landing-page">
      <Card Child={LoginForm} />
      <Link to={`${BASENAME}/register`}>Don't have an account? Register here!</Link>
    </div>
  )
}

export const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
})

export default withRouter(connect(mapStateToProps)(LandingPage))
