import React from 'react'
import {Route,Routes} from "react-router-dom"
import Home from './pages/Home'
import Result from './pages/Result'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/result' element={<Result/>}/>
           
      </Routes>
      <Footer/>
    </div>
  )
}

export default App