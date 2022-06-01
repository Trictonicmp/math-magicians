import React from 'react';

import './App.css';
import Nav from './components/Nav';
// import Home from './pages/Home';
// import Maths from './pages/Maths';
import Quote from './pages/Quote';

const App = () => (
  <div className="App">
    <Nav />
    <Quote />
    {/* <Maths /> */}
    {/* <Home /> */}
    {/* <Calculator /> */}
  </div>
);

export default App;
