import React from 'react'

function App() {

  function submithandler(e){
    e.preventDefault() 
    console.log("form submitted")
   }
  return (

   


    <div>

      <form className='bg-white p-6 rounded shadow-md w-full max-w-sm flex flex-col gap-4' onSubmit={submithandler}>
       <input type="text" placeholder='Username' className='bg-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500' />
       <input type="password" placeholder='Password' className='bg-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500' />
       <button type='submit' className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'>
         submit
       </button>
      </form>
    </div>

      
  )
}

export default App 
