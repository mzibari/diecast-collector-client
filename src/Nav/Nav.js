import React, { Component } from 'react'
import TokenService from '../services/token-service'
import './Nav.css'

export default class Nav extends Component {
    state = {
        isBurgerShown: false,
        isUserLoggedIn: TokenService.hasAuthToken()
    }

    handleBurger = () => {
        if (this.state.isBurgerShown) {
            this.setState({
                isBurgerShown: false
            })
        }
        else {
            this.setState({
                isBurgerShown: true
            })
        }

    }

    renderHome = () => {
        this.setState({
            isBurgerShown: false
        })
        this.props.history.push('/')
    }
    renderCatalog = () => {
        this.setState({
            isBurgerShown: false
        })
        this.props.history.push('/catalog')
    }
    renderLogin = () => {
        this.setState({
            isBurgerShown: false,
            isUserLoggedIn: TokenService.hasAuthToken()
        })
        this.props.history.push('/login')
        return 'Logout'
    }
    renderLogout = () => {
        TokenService.clearAuthToken()
        this.setState({
            isBurgerShown: false,
            isUserLoggedIn: TokenService.hasAuthToken()
        })
        this.props.history.push('/')
        return 'Login'
    }
    renderRegister = () => {
        this.setState({
            isBurgerShown: false
        })
        this.props.history.push('/register')
    }
    render() {
        return (
            <nav>
                <label htmlFor='toggle' className='burger'>☰</label>
                <input type='checkbox' onClick={this.handleBurger} id='toggle' />
                <div id='toggled-menu' className={this.state.isBurgerShown ? 'show-menu menu' : 'hide-menu menu'}>
                    <button className='home' onClick={this.renderHome}>Home</button>
                    <button className='catalog' onClick={this.renderCatalog}>Catalog</button>
                    <button className='login' onClick={TokenService.hasAuthToken() ? this.renderLogout : this.renderLogin}>{this.state.isUserLoggedIn ? 'Logout' : 'Login'}</button>
                    <button className='register' onClick={this.renderRegister}>Register</button>
                </div>
            </nav>
        )
    }
}