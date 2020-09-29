import React from 'react'
import ReactDOM from 'react-dom'
import AddItem from './AddItem'

//Smoke test
it('Renders without problems', () => {
    const div = document.createElement('div')
    ReactDOM.render(<AddItem />, div)
    ReactDOM.unmountComponentAtNode(div)
}) 