import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Nav from './Nav/Nav'
import LandingPage from './LandingPage/LandingPage'
import LoginForm from './LoginForm/LoginForm'
import RegisterForm from './RegisterForm/RegisterForm'
import ApiContext from './ApiContext'
import PrivateRoute from './ProtectedRoute/PrivateRoute'
import PublicOnlyRoute from './ProtectedRoute/PublicOnlyRoute'
import store from './dummy-store'


export default class App extends Component {
  state = {
    cars: [],
    users: [],
    reviews: [],
    images: [],
  }

  componentDidMount() {
    this.setState({
      ...store
    })
  }

  handleAddUser = user => {
    this.setState =({
      users: user, ...this.state.users
    })
  }
  render() {
    const value = {
      cars: this.state.cars,
      users: this.state.users,
      reviews: this.state.reviews,
      images: this.state.images,
      addUser: this.handleAddUser,
    }
    return (
      <main className='App'>
        <ApiContext.Provider value={value}>
          <Route component={Nav} />
          <Route exact path='/' component={LandingPage} />
          <PublicOnlyRoute exact path='/register' component={RegisterForm} />
          <PublicOnlyRoute exact path='/login' component={LoginForm} />
        </ApiContext.Provider>
      </main>
    )
  }
}