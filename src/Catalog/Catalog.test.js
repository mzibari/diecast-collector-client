import React from 'react'
import ReactDOM from 'react-dom'
import Catalog from './Catalog'

//Smoke test
it('Renders without problems', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Catalog />, div)
    ReactDOM.unmountComponentAtNode(div)
}) 