import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <h1>Gladiator's Task Manager</h1>
      <div>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/login'}>Login</NavLink>
        <NavLink to={'/register'}>Register</NavLink>
      </div>
    </div>
  );
}

export default Navbar;
