import React from 'react'
import ReactDOM from 'react-dom'
import LandingPage from './LandingPage'

//Smoke test
it('Renders without problems', () => {
    const div = document.createElement('div')
    ReactDOM.render(<LandingPage />, div)
    ReactDOM.unmountComponentAtNode(div)
}) 