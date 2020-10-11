import React, { Component } from 'react'
import './Car.css'
import config from '../../config'
import ApiContext from '../../ApiContext'
import AddImage from './AddImage/AddImage'

export default class Car extends Component {
    static contextType = ApiContext

    handleClickAddImg = e => {
        e.preventDefault()
        const carId = this.props.car.id

    }

    handleClickDelete = e => {
        e.preventDefault()
        let confirmDelete = window.confirm('Are you sure you want to delete car?')
        if (confirmDelete) {
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
                    this.props.history.push('/catalog')
                })
                .catch(error => {
                    console.error({ error })
                })
        }
    }
    render() {
        /* const carImages = (this.props.carImages.map((img, i) => {
            return <img className='car-image' key={i} alt={i} src={img} ></img>
        })) */
        return (
            <div className='car'>
                <span className='model car-display'>{(this.props.car ? this.props.car.model : null)}</span>
                <span className='make car-display'>Make: {(this.props.car ? this.props.car.make : null)}</span>
                <span className='year car-display'>Year: {(this.props.car ? this.props.car.year : null)}</span>
                <span className='desc car-display'>Description: {(this.props.car ? this.props.car.description : null)}</span>
                {(this.props.car.manufacturer !== ('[object Object]') ? <span className='manufacturer car-display'>Manufacturer: {this.props.car.manufacturer}</span> : <></>)}
                {(this.props.car.scale !== ('[object Object]') ? <span className='scale car-display'>Scale: {this.props.car.scale}</span> : <></>)}
                <button
                    className='car__delete'
                    type='button'
                    onClick={this.handleClickDelete}>
                    remove <span className='bin'>&#x1F5D1;</span>
                </button>
                {/* <button
                    className='add__img'
                    type='button'
                    onClick={this.handleClickAddImg}>
                    add image <span className='add'>&#x1F5D1;</span>
                </button>
                    <AddImage carId={this.props.car.id}/> */}
            </div>
        )

    }
}