import React, { useEffect, useState } from 'react'

function App() {

  const [num, setnum] = useState(0)
  const [num2, setnum2] = useState(10)
  useEffect(function (){
    console.log("useeffect is running");
    
  },[num])


  return (
    <div className="p-4 flex flex-col justify-center items-start "> 
      <h1 className='text-4xl font-extrabold'>value of num : {num}</h1>
      <h1 className='text-4xl font-extrabold' >value of num2 : {num2}</h1>
      <button className="p-4 bg-blue-500 rounded-b-md text-white font-bold text-xl mt-2.5"onMouseEnter={()=>{
        setnum(num+1);
        
      }} onMouseLeave={()=>{
        setnum2(num2+10)
      }}>click me</button>
    </div>
  )
}

export default App
