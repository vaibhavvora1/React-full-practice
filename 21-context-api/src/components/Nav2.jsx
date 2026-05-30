import React from 'react'
import { useContext } from 'react'
import { Themedatacontext } from '../context/ThemeContext'

const Nav2 = () => {

    const [theme] = useContext(Themedatacontext)
  return (
    <div className="nav2">
        <h4>About</h4>
        <h4>Contact</h4>
        <h4>Blog</h4>
        <h4>Login</h4>
        <h4>{theme}</h4>
    
    </div>
  )
}

export default Nav2