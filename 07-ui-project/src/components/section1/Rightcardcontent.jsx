import React from 'react'

import { ArrowBigRight } from 'lucide-react'

function Rightcardcontent(props) {
  
  
  return (
    <div>
        <div className='absolute top-0 left-0 h-full w-full bg-black/50 flex flex-col justify-between p-8  '> 
                <h1 className='text-2xl font-bold  bg-white rounded-full h-10 w-10 flex justify-center items-center'>{props.id + 1}</h1>

                <div className='text-lg leading-relaxed font-semibold '><p className='text-white'>{props.intro}</p>
                <div className='flex justify-between mt-10'>
                    <button  style={{ backgroundColor: props.color }}  className={` text-black font-semibold px-7 py-2 rounded-full `}>{props.tag}</button>
                <button style={{ backgroundColor: props.color}} className=' text-black font-semibold px-4 py-2 rounded-full '><ArrowBigRight size={25} /></button></div>
            </div>
                </div>
      
    </div>
  ) 
}

export default Rightcardcontent

