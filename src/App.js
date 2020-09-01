import React from 'react';
import { Route } from 'react-router-dom'
import Nav from './Nav/Nav'
import LandingPage from './LandingPage/LandingPage'

function App() {
  return (
    <main className='App'>
      <Route component={Nav} />
      <Route component={LandingPage} />
    </main>
  );
}

export default App;