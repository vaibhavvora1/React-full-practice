import React from 'react'
import { useParams } from 'react-router-dom'
import Homebtn from '../components/Homebtn'

const Coursedetails = () => {
  const params = useParams()
  return (
    <div>
        <Homebtn/>
         <h1> {params.id} Course Details</h1>
    </div>
  )
}

export default Coursedetails