import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Navbar/Navbar.css'
const Navbar = () => {

  const showSubMenu = (e) => {
    console.log(e);
    e.target.parentNode.nextElementSibling.style.display = 'initial'

  }
  const hideSubMenu = (e) => {


    e.target.parentNode.nextElementSibling.style.display = 'none'


  }
  return (
    <>
      <div className="nav d-flex gap-1 justify-content-between">
        <div className="title p-2">
          <h4>Mouvour</h4>
        </div>
        <div className="items d-flex align-items-center justify-content-end p-1 gap-1">
          <li><NavLink style={({ isActive }) => ({ backgroundColor: isActive ? 'black' : '#fff', color: isActive ? 'whitesmoke' : 'black' })} className='nav-item text-decoration-none p-1 rounded-1  fs-6 active' to='/'>Home</NavLink></li>
          <li><NavLink style={({ isActive }) => ({ backgroundColor: isActive ? 'black' : '#fff', color: isActive ? 'whitesmoke' : 'black' })} className='nav-item text-decoration-none p-1 rounded-1 fs-6' to='/tv-shows'>Tv</NavLink></li>
          <li><NavLink style={({ isActive }) => ({ backgroundColor: isActive ? 'black' : '#fff', color: isActive ? 'whitesmoke' : 'black' })} className='nav-item text-decoration-none p-1 rounded-1 fs-6' to='/movies/toprated' >Top-Rated</NavLink></li>
          <li><NavLink style={({ isActive }) => ({ backgroundColor: isActive ? 'black' : '#fff', color: isActive ? 'whitesmoke' : 'black' })} className='nav-item text-decoration-none p-1 rounded-1 fs-6' to='/movies/upcoming'>Upcoming</NavLink></li>
          <li><NavLink style={({ isActive }) => ({ backgroundColor: isActive ? 'black' : '#fff', color: isActive ? 'whitesmoke' : 'black' })} className='nav-item text-decoration-none p-1 rounded-1 fs-6' to='/movies/discover'>Discover</NavLink></li>
        </div>
      </div>
    </>
  )
}

export default Navbar