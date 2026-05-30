import React from 'react'
import {Link,Outlet} from 'react-router-dom'
import Homebtn from '../components/Homebtn'


const Product = () => {
  return (
    <div>
       <Homebtn/>
      <div className="flex space-x-4 mb-4 justify-center"> 

       

        <Link to="/product/Men" className="text-blue-500 hover:underline no-underline">Mens</Link>
        <Link to ="/product/Women" className="text-blue-500 hover:underline no-underline">Womens</Link>
        <Link to="/product/kids" className="text-blue-500 hover:underline no-underline">Kids</Link>

      </div>
      
      <Outlet />

     </div>


    
  )
}

export default Product