import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => {
  return(
    <div><h1>Topics List</h1></div>
  )
}
function App() {
  return (
    <div>
      <switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop/hats' component={HatsPage} />
      </switch>
    </div>
  );
}

export default App;
