import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import './App.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import Maths from './pages/Maths';
import Quote from './pages/Quote';

const App = () => (
  <div className="App">
    <Nav />
    <Router>
      <Routes>
        <Route path="/quote" element={<Quote />} />
        <Route path="/maths" element={<Maths />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
    {/* <Quote /> */}
    {/* <Maths /> */}
    {/* <Home /> */}
    {/* <Calculator /> */}
  </div>
);

export default App;
