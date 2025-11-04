import React from 'react'
import Home from './Pages/Home'
import About from './Pages/About'
import Contactus from './Pages/Contactus'
import Services from './Pages/Services'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div>
      
      <Router>
      <Header />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About/>} />
      <Route path='/contactus' element={<Contactus />} />
      <Route path='/services' element={<Services />} />
    

      </Routes>
        <Footer />
      </Router>
      
      
    </div>
  )
}

export default App