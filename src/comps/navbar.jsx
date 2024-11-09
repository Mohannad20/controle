import React from 'react';
import { Link } from 'react-router-dom';
import Formulaire from './Formulaire';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="text-white">Home</Link>
        </li>
        <li>
          <Link to="/form" className="text-white">Form</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;