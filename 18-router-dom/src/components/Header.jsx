import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <div className = "header">
        <h2>My Website</h2>
        <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link> 
        </div>
      </div>
    </div>
  )
}

export default Header
