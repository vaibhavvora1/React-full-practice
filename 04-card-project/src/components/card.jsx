import React from 'react'
import { Bookmark } from "lucide-react"


function Card(props) {
  return (
   

      <div className="card">

        <div>
          <div className="top">
          <img src={props.companyLogo} alt="logo" />
          <button>Save <Bookmark size={15} color='grey' /></button>
        </div>

        <div className="center">
          <h2>{props.companyName} <span>{props.postedTime}</span></h2>
          <h3>{props.jobTitle}</h3>
          <div className='tag'>
            <h4>{props.jobType}</h4>
            <h4>{props.experienceLevel}</h4>
          </div>
        </div>
        </div>
        <div className="bottom">
          
            <div>
              <h4>{props.rate}</h4>
              <p>{props.location}</p>
            </div>
              <button>Apply Now</button>
          
        </div>
      </div>
      
   
  )
}

export default Card
