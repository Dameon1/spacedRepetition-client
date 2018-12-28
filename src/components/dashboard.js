import React from 'react'
import { connect } from 'react-redux'
import requiresLogin from './requires-login'
import Card from './card'
import Question from './question'
import { getQuestion } from '../actions/question'

export class Dashboard extends React.Component {
  componentDidMount() {
    if (!this.props.question) {
      this.props.dispatch(getQuestion())
    }
  }

  render() {
    return (
      <div className="dashboard">
        <div className="dashboard-username">
          <Card Child={Question} />
        </div>
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  question: state.question.question
})

export default requiresLogin()(connect(mapStateToProps)(Dashboard))
