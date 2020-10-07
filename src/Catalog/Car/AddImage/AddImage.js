import React, { Component } from 'react'
import config from '../../../config'

export default class AddImage extends Component {

    state = {
        img_name: {},
        img: {}
    }

    handleChangeImageName = e => this.setState({ img_name: e.target.value })

    handleChangeImage = e => this.setState({ img: e.target.value })

    handleSubmit = event => {
        event.preventDefault()
        const fileField = document.querySelector('#add_image')
        const formData = new FormData(fileField)
        const imgToAdd = {
            carImage: this.state.img,
            car_id: this.props.carId,
            img_name: this.state.img_name,
        }
        fetch(`${config.API_ENDPOINT}/images`, {
            method: 'POST',
            /* headers: {
                'content-type': 'form-data'
            }, */
            body: formData,
        })
            .then(res => {
                if (!res.ok)
                    return res.json().then(e => Promise.reject(e))
                return res
            })
            .then(() => {
                this.props.history.push('/catalog')
            })
            .catch(error => {
                console.error({ error })
            })
    }

    render() {
        return (
            <section className='add-image page'>
                <form id='add_image' onSubmit={this.handleSubmit}>

                    <input onChange={this.handleChangeImageName} type='text' className='add-image-input' name='image' placeholder='image name' required />

                    <input onChange={this.handleChangeImage} type="file" id="car_image" name="car_image" accept="image/png, image/jpeg" />

                    <button type='submit' />
                </form>
            </section>

        )
    }
}