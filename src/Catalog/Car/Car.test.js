import React from 'react'
import ReactDOM from 'react-dom'
import Car from './Car'

//Smoke test
it('Renders without problems', () => {
    const div = document.createElement('div')
    ReactDOM.render(JSON.stringify(<Car />), div)
    ReactDOM.unmountComponentAtNode(div)
}) 