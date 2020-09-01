import React, { Component } from 'react'
import './LandingPage.css'

export default class LandingPage extends Component {

    render() {
        return (
            <>
                <h1 className='landing-page-header'>
                    Diecast Collector
                </h1>
                <section className='landing-page-description'>
                    <p className='landing-page-paragraph'>
                        Diecast Collector is a collaborative website for toy car enthusiasts. It allows anyone to edit existing articles and create new one.
                        Pictures shared on this website need to have an artistic angle to be approved.
                        All articles can be viewed by anyone, you need to be a registered user to contribute to our content.
                    </p>
                </section>

                <section className='landing-page-register-login'>
                    <h2>Login</h2>
                    <form id='login' className='LoginFrom'
                        onSubmit={this.handleSubmitBasicAuth}>
                        <input type='username' autoComplete='false' name='username' className='login-input' placeholder='username' required />
                        <input type='password' autoComplete='false' name='password' className='login-input' placeholder='password' required />
                        <span name='error' id='error'></span>

                        <button type='submit' className='login-button'>Log in</button>

                    </form>
                    or
                    <h2>Register</h2>
                    <form id='register' className='RegisterForm' onSubmit={this.handleNewUser}>
                        <input type='text' autoComplete='false' id='user-name' name='user-name' className='register-input' placeholder='user name' required />
                        <input type='email' autoComplete='false' id='email' name='email' className='register-input' placeholder='email' required />
                        <input type='password' autoComplete='false' id='password' name='password' className='register-input' placeholder='password' required />
                        <input type='password' autoComplete='false' id='confirm-password' name='confirm-password' className='register-input' placeholder='confirm password' required />

                        <button type='submit' className='register-button'>Submit</button>
                        <span id='registrationError' className='error'></span>
                    </form>
                </section>
            </>
        )
    }
}