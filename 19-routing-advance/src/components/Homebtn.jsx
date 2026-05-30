import React from 'react'
import {useNavigate} from 'react-router-dom'

const Homebtn = () => {

    const navigate = useNavigate()

  return (
    <div className='bg-gray-800'>
        <button onClick={() => navigate('/')} className='bg-green-800 text-white px-4 py-2 rounded-lg m-4 cursor-pointer hover:bg-green-600 active:scale-95 border border-green-600'>Go to Home</button>

        <button onClick={() => navigate(-1)}  className='bg-green-800 text-white px-4 py-2 rounded-lg m-4 cursor-pointer hover:bg-green-600 active:scale-95 border border-green-600'>
          Go Back
        </button>
        <button onClick={() => navigate(+1)}  className='bg-green-800 text-white px-4 py-2 rounded-lg m-4 cursor-pointer hover:bg-green-600 active:scale-95 border border-green-600'>
          Next
        </button>
    </div>
    
  )
}

export default Homebtn