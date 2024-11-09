import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './comps/home';
import Experts1 from './comps/experts1';
import Navbar from './comps/navbar';
import Formulaire from './comps/Formulaire';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experts" element={<Experts1 />} />
        <Route path="/form" element={<Formulaire />} />
      </Routes>
    </Router>
  );
};

export default App;