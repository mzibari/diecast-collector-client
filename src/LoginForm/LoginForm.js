import React, { Component } from 'react'
import './LoginForm.css'

export default class LoginFrom extends Component {
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