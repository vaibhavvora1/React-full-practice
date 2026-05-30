import React from 'react'

function Card(props) {
  return (

        
        <div className='card'>

        <img src={props.img} alt="react" />
        <h1>{props.user} { props.age}</h1>
        <span>1.</span><p>Props are used to pass data from one component to another. Props are passed to components via HTML attributes.</p>
        <br />
        <span>2.</span><p>Props are read-only. They are immutable. Props are used to pass data from parent to child components.</p>
        <br />
        <span>3.</span><p>Props are used to pass data from one component to another. Props are passed to components via HTML attributes.</p>
        <br />
        <span>4.</span><p>Props are read-only. They are immutable. Props are used to pass data from parent to child components.</p>
        <br />
        <button>Click Me</button>

      
    </div>
      
    
  )
}

export default Card
