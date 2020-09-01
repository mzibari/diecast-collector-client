import React from 'react'
import ReactDOM from 'react-dom'
import LoginForm from './LoginForm'

//Smoke test
it('Renders without problems', () => {
    const div = document.createElement('div')
    ReactDOM.render(<LoginForm />, div)
    ReactDOM.unmountComponentAtNode(div)
}) 