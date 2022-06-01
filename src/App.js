import React from 'react';

import './App.css';
import Nav from './components/Nav';
// import Home from './pages/Home';
import Maths from './pages/Maths';

const App = () => (
  <div className="App">
    <Nav />
    <Maths />
    {/* <Home /> */}
    {/* <Calculator /> */}
  </div>
);

export default App;
