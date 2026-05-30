import React from 'react'

import Herotxt from './Herotxt'
import Arrow from './Arrow'

function Leftcontent() {
  return (
    <div className='h-full w-2/5 flex flex-col justify-between p-5 '>
         <Herotxt />
         <Arrow />
        
    </div>
  )
}

export default Leftcontent
