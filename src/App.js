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
    <Router>
      <Nav />
      <Routes>
        <Route path="/quote" element={<Quote />} />
        <Route path="/maths" element={<Maths />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  </div>
);

export default App;
