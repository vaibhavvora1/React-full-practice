import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'

export const Themedatacontext=createContext()

const ThemeContext = (props) => {



const [Theme,setTheme]=useState('light')


  return (
    <div>
       
       <Themedatacontext.Provider value={[Theme, setTheme]}>
            {props.children}
         </Themedatacontext.Provider>
        
    </div>
  )
}
export default ThemeContext 
