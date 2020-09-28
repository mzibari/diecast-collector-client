import React, { Component } from 'react'
import ApiContext from '../ApiContext'
import xss from 'xss'
import './RegisterForm.css'

export default class RegisterFrom extends Component {

    state = {
        username: {},
        email: {},
        password: {},
        confirmPassword: {},
    }
    static contextType = ApiContext

    handleUsernameChange = e => this.setState({ username: e.target.value })
    handleEmailChange = e => this.setState({ email: e.target.value })
    handlePasswordChange = e => this.setState({ password: e.target.value })
    handleConfirmPasswordChange = e => this.setState({ confirmPassword: e.target.value })


    handleNewUser = e => {
        e.preventDefault()
        const newUser = {
            username: xss(this.state.username),
            email: xss(this.state.email),
            user_password: xss(this.state.password),
        }
        if (newUser.user_password !== this.state.confirmPassword) document.getElementById('registrationError').innerHTML = 'Passwords do not match'
        else {
            let doesUserExist = false
            this.context.users.forEach(user => {
                if (user.username === newUser.username) doesUserExist = true
            })
            if (doesUserExist) document.getElementById('registrationError').innerHTML = 'This user already exists'
            else {
                this.context.addUser(newUser) 
                this.props.history.push('/login')
            }

        }

    }

    render() {
        return (
            <>
                <form id='register' className='RegisterForm' onSubmit={this.handleNewUser}>
                    <h2>Register</h2>
                    <input onChange={this.handleUsernameChange} type='text' autoComplete='false' id='user-name' name='user-name' className='register-input' placeholder='user name' required />
                    <input onChange={this.handleEmailChange} type='email' autoComplete='false' id='email' name='email' className='register-input' placeholder='email' required />
                    <input onChange={this.handlePasswordChange} type='password' autoComplete='false' id='password' name='password' className='register-input' placeholder='password' required />
                    <input onChange={this.handleConfirmPasswordChange} type='password' autoComplete='false' id='confirm-password' name='confirm-password' className='register-input' placeholder='confirm password' required />

                    <button type='submit' className='register-button'>Submit</button>
                    <span id='registrationError' className='error'></span>
                </form>
            </>
        )
    }
}