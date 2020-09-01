import React, { Component } from 'react'
import TokenService from '../services/token-service'
import ApiContext from '../ApiContext'
import './LoginForm.css'


export default class LoginFrom extends Component {

    static contextType = ApiContext

    handleUserVerification = (username, password) => {
        const user = this.context.users.find(entry => entry.username === username.value)
        return (user && user.password === password.value)
    }

    handleSubmitBasicAuth = event => {
        event.preventDefault()
        const { username, password } = event.target
        if (this.handleUserVerification(username, password)) {
            TokenService.saveAuthToken(
                TokenService.makeBasicAuthToken(username.value, password.value)
            )

            username.value = ''
            password.value = ''
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
                    <input type='username' autoComplete='false' name='username' className='login-input' placeholder='username' required />
                    <input type='password' autoComplete='false' name='password' className='login-input' placeholder='password' required />
                    <span name='error' id='error'></span>

                    <button type='submit' className='login-button'>Log in</button>

                </form>
            </>
        )
    }
}