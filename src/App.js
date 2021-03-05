import React, { Component } from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Header from './components/Header.js';
import LoginPage from './AuthPages/LoginPage.js';
import SignUpPage from './AuthPages/SignUpPage.js';
import MoviePage from './MoviePages/MoviePage.js';
import PrivateRoute from './components/PrivateRoute.js';
import FavoritesPage from './MoviePages/FavoritesPage.js';
import Home from './HOME/Home.js';
import { getTokenFromLocalStorage, putTokenInLocalStorage } from './localStorageUtils.js';
import MovieDetailPage from './MoviePages/MovieDetailPage.js'

export default class App extends Component {
  state = {
    token: getTokenFromLocalStorage()
  }
  handleToken = (token) => {
    this.setState({ token: token })
    putTokenInLocalStorage(token)
  };
  handleLogOut = () => {
    // localStorage.clear();
    this.handleToken('');

    // this.history.push('/');
  }

  render() {
    console.log(this.state.token);
    return (
      <div>
        <Router>
          <Header token={this.state.token} handleLogOut={this.handleLogOut} />
          <Switch>
            <Route
              path="/"
              exact
              render={(routerProps) => <Home {...routerProps} />}
            />
            <Route
              path="/movies"
              exact
              render={(routerProps) => <MoviePage token={this.state.token} {...routerProps} />}
            />
            <Route
              path="/movies/:movie"
              exact
              render={(routerProps) => <MovieDetailPage token={this.state.token} {...routerProps} />}
            />
            <PrivateRoute
              path="/favorites"
              exact
              token={this.state.token}
              render={(routerProps) => <FavoritesPage token={this.state.token} {...routerProps} />}
            />

            <Route
              path="/login"
              exact
              render={(routerProps) => <LoginPage handleToken={this.handleToken} {...routerProps} />}
            />
            <Route
              path="/signup"
              exact
              render={(routerProps) => <SignUpPage handleToken={this.handleToken} {...routerProps} />}
            />


          </Switch>
        </Router>

      </div>
    )
  }
}

