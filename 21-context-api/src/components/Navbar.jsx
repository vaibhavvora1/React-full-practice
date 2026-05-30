import React from 'react'
import Nav2 from './Nav2'
import {useContext} from 'react'
import { Themedatacontext } from '../context/ThemeContext'


const Navbar = () => {

  const [Theme] = useContext(Themedatacontext)
    
    
  return (
    <div className = {Theme}>
       
        <h1>shriyansh</h1>
        <Nav2  />
    </div>
  )
}

export default Navbar