import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Nav from './Nav/Nav'
import LandingPage from './LandingPage/LandingPage'
import LoginForm from './LoginForm/LoginForm'
import RegisterForm from './RegisterForm/RegisterForm'
import Catalog from './Catalog/Catalog'
import AddCar from './AddCar/AddCar'
import ApiContext from './ApiContext'
import PublicOnlyRoute from './ProtectedRoute/PublicOnlyRoute'
import PrivateOnlyRoute from './ProtectedRoute/PrivateRoute'
import config from './config'




export default class App extends Component {
  state = {
    cars: [],
    users: [],
    reviews: [],
  }

  componentDidMount() {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/cars`),
      fetch(`${config.API_ENDPOINT}/users`),
      fetch(`${config.API_ENDPOINT}/reviews`),
    ])
      .then(([carsRes, usersRes, reviewsRes, imagesRes]) => {
        if (!carsRes.ok)
          return carsRes.json().then(e => Promise.reject(e))
        if (!usersRes.ok)
          return usersRes.json().then(e => Promise.reject(e))
        if (!reviewsRes.ok)
          return reviewsRes.json().then(e => Promise.reject(e))

        return Promise.all([

          carsRes.json(),
          usersRes.json(),
          reviewsRes.json(),
        ])
      })
      .then(([cars, users, reviews]) => {
        this.setState({ cars, users, reviews })
      })
      .catch(error => {
        console.error({ error })
      })
  }

  handleAddUser = user => {
    fetch(`${config.API_ENDPOINT}/users`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user),
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
        return res.json()
      })
      .then(user => {
        this.setState({
          users: [
            ...this.state.users,
            user
          ]
        })
      })
      .catch(error => {
        console.error({ error })
      })
  }

  handleAddCar = car => {
    fetch(`${config.API_ENDPOINT}/cars`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(car),
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
        return res.json()
      })
      .then(car => {
        this.setState({
          cars: [
            ...this.state.cars,
            car
          ]
        })
      })
      .catch(error => {
        console.error({ error })
      })
  }

  handleRemoveCar = carId => {
    this.setState({
      cars: this.state.cars.filter(car => car.id !== carId)
    })
  }

  render() {
    const value = {
      cars: this.state.cars,
      users: this.state.users,
      reviews: this.state.reviews,
      addUser: this.handleAddUser,
      addCar: this.handleAddCar,
      removeCar: this.handleRemoveCar,
    }
    return (
      <main className='App'>
        <ApiContext.Provider value={value}>
          <Route component={Nav} />
          <Route exact path='/' component={LandingPage} />
          <PrivateOnlyRoute exact path='/catalog' component={Catalog} />
          <PrivateOnlyRoute exact path='/addcar' component={AddCar} />
          <PublicOnlyRoute exact path='/register' component={RegisterForm} />
          <PublicOnlyRoute exact path='/login' component={LoginForm} />
        </ApiContext.Provider>
      </main>
    )
  }
}