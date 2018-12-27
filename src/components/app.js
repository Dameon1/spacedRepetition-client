import React from 'react'
import HeaderBar from './header-bar'
import LandingPage from './landing-page'
import Dashboard from './dashboard'
import RegistrationPage from './registration-page'
import { BASENAME, API_BASE_URL, splitURLs } from '../config'
import { connect } from 'react-redux'
import { refreshAuthToken } from '../actions/auth'
import { Route, withRouter } from 'react-router-dom'
import './styles/app.css'

export class App extends React.Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.loggedIn && this.props.loggedIn) {
      // When we are logged in, refresh the auth token periodically
      this.startPeriodicRefresh()
    } else if (prevProps.loggedIn && !this.props.loggedIn) {
      // Stop refreshing when we log out
      this.stopPeriodicRefresh()
    }
  }

  componentWillUnmount() {
    this.stopPeriodicRefresh()
  }

  startPeriodicRefresh() {
    this.refreshInterval = setInterval(
      () => this.props.dispatch(refreshAuthToken()),
      60 * 60 * 1000 // One hour
    )
  }

  stopPeriodicRefresh() {
    if (!this.refreshInterval) {
      return
    }

    clearInterval(this.refreshInterval)
  }

  render() {
    return (
      <main className="app">
        <HeaderBar />
        <Route exact path={`${BASENAME}/`}component={LandingPage} />
        <Route exact path={`${BASENAME}/dashboard`} component={Dashboard}/>
        <Route
          exact
          path={`${BASENAME}/register`}
          component={RegistrationPage}
        />
      </main>
    )
  }
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
})

export default withRouter(connect(mapStateToProps)(App))