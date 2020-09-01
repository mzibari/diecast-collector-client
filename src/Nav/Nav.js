import React, { Component } from 'react'
import './Nav.css'

export default class Nav extends Component {
    state = {
        isBurgerShown: false
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
    render() {
        return (
            <nav>
                <label htmlFor='toggle' className='burger'>☰</label>
                <input type='checkbox' onClick={this.handleBurger} id='toggle' />
                <div id='toggled-menu' className={this.state.isBurgerShown ? 'show-menu menu' : 'hide-menu menu'}>
                    <button className='home' onClick={this.renderHome}>Home</button>
                </div>
            </nav>
        )
    }
}