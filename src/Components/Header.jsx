import React from 'react'
import { NavLink } from 'react-router-dom';
import logo1 from '../Images/logo1.png'
function Header() {
  return (
    <div>
        <header className="bg-gradient-to-r from-cyan-950 via-teal-900 to-cyan-800 shadow">
<div className="container mx-auto px-4 py-6 flex justify-between items-center">
<div className="text-xl text-white font-italic"><img src={logo1} height={100} width={100} /></div>
<nav className="space-x-4">
<NavLink to="/" className="text-emerald-400 font-bold hover:text-white">Home</NavLink>
<NavLink to="/about" className="text-emerald-400  font-bold hover:text-white">About</NavLink>
<NavLink to="/services" className="text-emerald-400 font-bold hover:text-white">Services</NavLink>
<NavLink to="/contactus" className="text-emerald-400 font-bold hover:text-white">Contact</NavLink>
</nav>
</div>
</header>
    </div>
  )
}

export default Header