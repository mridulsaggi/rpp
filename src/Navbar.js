import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className='nav'>home</Link>
      <Link to="/contact" className='nav'>contact</Link>
    </div>
  )
}

export default Navbar;
