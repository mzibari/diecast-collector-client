import React from 'react';
import { Route } from 'react-router-dom'
import Nav from './Nav/Nav'

function App() {
  return (
    <main className='App'>
      <Route component={Nav} />
    </main>
  );
}

export default App;