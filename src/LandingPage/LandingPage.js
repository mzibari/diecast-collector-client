import React, { Component } from 'react'
import LoginForm from '../LoginForm/LoginForm'
import RegisterForm from '../RegisterForm/RegisterForm'
import PublicOnlyRoute from '../ProtectedRoute/PublicOnlyRoute'
import './LandingPage.css'
import TokenService from '../services/token-service'


export default class LandingPage extends Component {

    state = {
        isUserLoggedIn: TokenService.hasAuthToken()
    }
    render() {
        return (
            <div className='landingPage'>
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
                    <PublicOnlyRoute component={LoginForm} />
                    <h3>{this.state.isUserLoggedIn? '' : 'or'}</h3>
                    <PublicOnlyRoute component={RegisterForm} />
                </section>
            </ div>
        )
    }
}