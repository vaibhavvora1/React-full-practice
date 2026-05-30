import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
    <h2 className="text-2xl font-bold"> Pioneer Academy  </h2>
    <div className="flex gap-10"> 

      <Link to="/" className="hover:text-gray-400 font-medium"> Home </Link>
      <Link to="/about" className="hover:text-gray-400 font-medium"> About </Link>
      <Link to="/courses" className="hover:text-gray-400 font-medium"> Courses </Link>
      <Link to="/product" className="hover:text-gray-400 font-medium"> Product </Link>
      <Link to="/contact" className="hover:text-gray-400 font-medium"> Contact </Link>
      

    </div>
    </div>
  )
}

export default Navbar