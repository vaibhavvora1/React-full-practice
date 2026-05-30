import React from 'react'
import { useContext } from 'react'
import { Themedatacontext } from '../context/ThemeContext'

const Button = () => {

    const [Theme,setTheme] = useContext(Themedatacontext)


  return (
    <div>
        <button onClick={() => setTheme(Theme === 'light' ? 'dark' : 'light')}>
        Change theme
        </button>
    </div>
  )
}

export default Button