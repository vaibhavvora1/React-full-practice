import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import NotFound from './pages/NotFound'
import Men from './pages/Men'
import Women from './pages/Women'
import Kids from './pages/Kids'
import Courses from './pages/Courses'
import Coursedetails from './pages/Coursedetails'
import { Routes , Route } from 'react-router-dom'



const App = () => {
  return ( 
    <div className="font-bold text-2xl ">
     <Navbar/>
       <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/product' element={<Product/>} >
            <Route path='men' element={<Men/>} />   
            <Route path='women' element={<Women/>} />
            <Route path='kids' element = {<Kids/>} />
          </Route>
          <Route path='/courses' element={<Courses/>} />
          <Route path='/courses/:id' element={<Coursedetails/>} />
            <Route path='*' element={<NotFound/>} />
       </Routes>
     <Footer/>
    </div>
  )
}

export default App
