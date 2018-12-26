import React from 'react'
import { connect } from 'react-redux'
import { clearAuth } from '../actions/auth'
import { clearAuthToken } from '../local-storage'
import { clearQuestion } from '../actions/question'
import './styles/card.css'

export const Card = props => {
  let logOutButton
  let userName
  let Child
  let accuracy
  if (props.loggedIn) {
    logOutButton = <button onClick={() => props.logOut()} className="log-out">Log out</button>
    userName = <strong>{props.user.username}</strong>
  }
  if (props.accuracy) {
    accuracy = <strong className="accuracy">ACCURACY: {props.accuracy}%</strong>
  }
  Child = props.Child
  return (
    <div className="card">
      {accuracy}
      <Child />
      <div>
        {userName}
        {logOutButton}
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
  user: state.auth.currentUser,
  accuracy: state.question.accuracy
})

const mapDispatchToProps = dispatch => ({
  logOut: () => {
    dispatch(clearAuth())
    dispatch(clearQuestion())
    clearAuthToken()
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card)
