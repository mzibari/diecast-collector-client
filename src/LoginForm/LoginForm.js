import React, { Component } from 'react'
import TokenService from '../services/token-service'
import ApiContext from '../ApiContext'
import './LoginForm.css'


export default class LoginFrom extends Component {
    static contextType = ApiContext
    // Using state to get login credentials
    state = {
        username: {},
        password: {},
    }

    // SetState to store user credentials
    handleUsernameChange = e => this.setState({ username: e.target.value })
    handlePasswordChange = e => this.setState({ password: e.target.value })

    // Verifying user credentials
    handleUserVerification = (username, password) => {
        const user = this.context.users.find(entry => entry.username === username)
        return (user && user.password === password)
    }

    // Using TokenService to store user login for the session
    handleSubmitBasicAuth = event => {
        event.preventDefault()
        const { username, password } = this.state
        if (this.handleUserVerification(username, password)) {
            TokenService.saveAuthToken(
                TokenService.makeBasicAuthToken(username.value, password.value)
            )

            this.setState({
                username: '',
                password: '',
            })
            this.props.history.push('/')
        }
        else document.getElementById('error').innerHTML = 'Wrong username or password'
    }
    render() {
        return (
            <>
                <form id='login' className='LoginForm'
                    onSubmit={this.handleSubmitBasicAuth}>
                    <h2>Login</h2>
                    <input onChange={this.handleUsernameChange} type='username' autoComplete='false' name='username' className='login-input' placeholder='username' required />
                    <input onChange={this.handlePasswordChange} type='password' autoComplete='false' name='password' className='login-input' placeholder='password' required />
                    <span name='error' id='error'></span>
                    <button type='submit' className='login-button'>Log in</button>

                </form>
            </>
        )
    }
}