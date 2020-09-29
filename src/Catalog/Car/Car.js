import React, { Component } from 'react'
import './Car.css'
import config from '../../config'
import ApiContext from '../../ApiContext'

export default class Car extends Component {
    static contextType = ApiContext

    
    handleClickDelete = e => {
        e.preventDefault()
        const carId = this.props.car.id
        fetch(`${config.API_ENDPOINT}/cars/${carId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(res => {
                if (!res.ok)
                    return res.json().then(e => Promise.reject(e))
                return res
            })
            .then(() => {
                this.context.removeCar(carId)
                this.props.redirectToPantry()
            })
            .catch(error => {
                console.error({ error })
            })
    }
    render() {
        const images = (this.props.imgs? this.props.imgs.map((img, i) => {
            if(!img || !img.approved) return null
            return <img className='car-image' key={i} alt={img.name} src={(img.image)} ></img>
        }) : {})
        return (
            <div className='car'>
                <span className='model'>{(this.props.car? this.props.car.model : null)}</span>
                <span className='make'>Make: {(this.props.car? this.props.car.make : null)}</span>
                <span className='year'>Year: {(this.props.car? this.props.car.year : null)}</span>
                <span className='desc'>Description: {(this.props.car? this.props.car.description : null)}</span>
                <span className='manufacturer'>Manufacturer: {(this.props.car? this.props.car.manufacturer : null)}</span>
                <span className='scale'>Scale: {(this.props.car? this.props.car.scale : null)}</span>
                {images}
                <button
                    className='car__delete'
                    type='button'
                    onClick={this.handleClickDelete}>
                    remove <span className='bin'>&#x1F5D1;</span>
                </button>
            </div>
        )

    }
}