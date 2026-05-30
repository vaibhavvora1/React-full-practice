import React from 'react'

function App() {
 const user = {
  name : "vaibhav",
  age : 20,
  town : "botad"
 }

 localStorage.setItem("user",JSON.stringify(user))
 const userinfo=localStorage.getItem("user")
 console.log(JSON.parse(userinfo));
 
  return (
    <div>
      
      </div>
  )
}

export default App
