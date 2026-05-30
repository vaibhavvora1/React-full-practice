import React from 'react'
import style from "./header.module.css"

function Header() {
  return (
    <div className={style.header}>
        <h2>Vaibhav</h2>
        <button className={style.btn}>Login</button>
      
    </div>
  )
}

export default Header
