import React from 'react';

import './App.css';
// import Calculator from './components/Calculator';
import Nav from './components/Nav';
import Home from './pages/Home';

const App = () => (
  <div className="App">
    <Nav />
    <Home />
    {/* <Calculator /> */}
  </div>
);

export default App;
