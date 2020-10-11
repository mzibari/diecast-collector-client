import React, { Component } from 'react'
import './AddCar.css'
import ApiContext from '../ApiContext'
import xss from 'xss'

export default class AddItem extends Component {
    // Using state to get new item fields
    state = {
        model: {},
        make: {},
        year: {},
        description: {},
        manufacturer: {},
        scale: {},
    }

    handleChangeModel = e => this.setState({ model: e.target.value })
    handleChangeMake = e => this.setState({ make: e.target.value })
    handleChangeYear = e => this.setState({ year: e.target.value })
    handleChangeDescription = e => this.setState({ description: e.target.value })
    handleChangeManufacturer = e => this.setState({ manufacturer: e.target.value })
    handleChangeScale = e => this.setState({ scale: e.target.value })

    handleSubmit = event => {
        event.preventDefault()
        const car = {
            model: xss(this.state.model),
            make: xss(this.state.make),
            year: xss(this.state.year),
            description: xss(this.state.description),
            manufacturer: xss(this.state.manufacturer) || '',
            scale: xss(this.state.scale) || '',
        }
        this.context.addCar(car)
        this.props.history.push('/catalog')
    }

    static contextType = ApiContext
    render() {
        return (
            <section className='add-car-section page'>
                <h2>Add Car</h2>
                <form id='add-car-form' onSubmit={this.handleSubmit}>

                    <input onChange={this.handleChangeModel} type='text' className='add-car-input' name='model' placeholder='model' required />

                    <input onChange={this.handleChangeMake} type='text' className='add-car-input' name='make' placeholder='make' required />

                    <input onChange={this.handleChangeYear} type='number' min="1900" max="2022" step="1" className='add-car-input' name='year' placeholder='year' required />

                    <input onChange={this.handleChangeDescription} type='text' className='add-car-input' name='description' placeholder='description' required />

                    <input onChange={this.handleChangeManufacturer} type='text' className='add-car-input' name='manufacturer' placeholder='manufacturer' />

                    <input onChange={this.handleChangeScale} type='text' className='add-car-input' name='scale' placeholder='scale' />

                    <button class='add-car-button' type='submit'>Add car</button>
                    <button class='add-car-button' type='reset'>Reset</button>

                </form>
            </section>
        )
    }
}