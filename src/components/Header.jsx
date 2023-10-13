import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css'
function Header() {
  return (
    <nav>
      <Link to='/' >Home</Link>
      <Link to='/review'>OrderReivew</Link>
      <Link to='/about'>About</Link>
      <Link to='/Contact' >Contact</Link>
    </nav>
  )
}

export default Header
