import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Nav from './Nav/Nav'
import LandingPage from './LandingPage/LandingPage'
import LoginForm from './LoginForm/LoginForm'
import RegisterForm from './RegisterForm/RegisterForm'
import ApiContext from './ApiContext'
import store from './dummy-store'


export default class App extends Component {
  state = {
    cars: [],
    users: [],
    reviews: [],
    imgs: [],
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
    console.log(`user added ${this.state.users}`)
  }
  render() {
    const value = {
      cars: this.state.cars,
      users: this.state.users,
      reviews: this.state.reviews,
      imgs: this.state.imgs,
      addUser: this.handleAddUser,
    }
    return (
      <main className='App'>
        <ApiContext.Provider value={value}>
          <Route component={Nav} />
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/register' component={RegisterForm} />
          <Route exact path='/login' component={LoginForm} />
        </ApiContext.Provider>
      </main>
    )
  }
}