import React, { useState } from 'react'

function App() {

  const [Title, setTitle] = useState("")

  
  function inputvalue(e){
    setTitle(e.target.value);
  }

  function submithandler(e){
    e.preventDefault()
    console.log("form submitted by : ", Title);

    setTitle("");
  }

  return (

   


    <div>

      <form className='bg-white p-6 rounded shadow-md w-full max-w-sm flex flex-col gap-4' >
       <input type="text" placeholder='Username' className='bg-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500' onChange={inputvalue} value={Title} required />
       <input type="password" placeholder='Password' className='bg-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'   required />
       <button type='submit' className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600' onClick={submithandler} >
         submit
       </button>
      </form>
    </div>

      
  )
}

export default App 
