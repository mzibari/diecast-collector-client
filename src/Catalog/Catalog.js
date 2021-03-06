import React, { Component } from 'react'
import './Catalog.css'
import Car from './Car/Car'
import ApiContext from '../ApiContext'
import TokenService from '../services/token-service'


export default class Catalog extends Component {

    static contextType = ApiContext

    loginUserId = TokenService.getAuthUserId(this.context.users)
    user = TokenService.getAuthUserName()
    redirectAddCar = () => {
        this.props.history.push('/addcar')
    }

    handleDeleteItemRedirect = () => {
        this.props.history.push('/catalog')
    }
    render() {
        const isUserLoggedIn = TokenService.hasAuthToken() 
        const cars = this.context.cars.map((car, i) => {
            return (
                <ul className='car-ul' key={i}>
                    <li className='car-li' key={i}>
                        <Car car={car} className='car-section' userId={this.loginUserId} key={i} />
                    </li>
                </ul>
            )
        })
        return (
            <section className='catalog-section page'>
                {cars}
                {isUserLoggedIn? <button className='add-car' onClick={this.redirectAddCar}>Add Car</button> : <></>}
            </section>
        )
    }
}
