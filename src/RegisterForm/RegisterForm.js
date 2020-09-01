import React, { Component } from 'react'
import './RegisterForm.css'

export default class RegisterFrom extends Component {
    render() {
        return (
            <>
                <form id='register' className='RegisterForm' onSubmit={this.handleNewUser}>
                    <h2>Register</h2>
                    <input type='text' autoComplete='false' id='user-name' name='user-name' className='register-input' placeholder='user name' required />
                    <input type='email' autoComplete='false' id='email' name='email' className='register-input' placeholder='email' required />
                    <input type='password' autoComplete='false' id='password' name='password' className='register-input' placeholder='password' required />
                    <input type='password' autoComplete='false' id='confirm-password' name='confirm-password' className='register-input' placeholder='confirm password' required />

                    <button type='submit' className='register-button'>Submit</button>
                    <span id='registrationError' className='error'></span>
                </form>
            </>
        )
    }
}