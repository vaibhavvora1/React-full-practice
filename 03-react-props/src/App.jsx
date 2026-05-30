import React from 'react'
import Card from './components/card'

function App() {
  return (
    <div className='parent'> 
    
   
    <Card user="aman" age={20} img="https://images.unsplash.com/photo-1776779399573-0c19831317df?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    <Card user="Vaibhav" age={20} img="https://images.unsplash.com/photo-1776785044825-57390a892be8?q=80&w=1026&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    <Card user="Rohit" age={20} img="https://images.unsplash.com/photo-1776785044825-57390a892be8?q=80&w=1026&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
 

   

    </div>
  )
}

export default App
