import React from 'react'
import ReactDOM from 'react-dom'
import Nav from './Nav'

//Smoke test
it('Renders without problems', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Nav />, div)
    ReactDOM.unmountComponentAtNode(div)
}) 