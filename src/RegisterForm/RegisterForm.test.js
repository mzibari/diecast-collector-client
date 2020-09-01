import React from 'react'
import ReactDOM from 'react-dom'
import RegisterForm from './RegisterForm'

//Smoke test
it('Renders without problems', () => {
    const div = document.createElement('div')
    ReactDOM.render(<RegisterForm />, div)
    ReactDOM.unmountComponentAtNode(div)
})