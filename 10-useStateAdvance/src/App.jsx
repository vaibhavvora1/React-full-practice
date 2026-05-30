import React, { useState } from 'react'

function App() {

  const [Num, setNum] = useState([1,2,3,4,5])

  const btnclick=()=>{
    let newNum = [...Num]
    newNum.push(6)
    setNum(newNum)
}
  return (
    <div>
      <h1>{Num}</h1>
       <button onClick={btnclick}>Click</button> 

      
    </div>
  )
}

export default App
