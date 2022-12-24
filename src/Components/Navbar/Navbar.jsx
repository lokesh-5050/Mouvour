import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Navbar/Navbar.css'
const Navbar = () => {
  return (
    <>
      {/* <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" href="#">Mouvour</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to='/'>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to='/movies/toprated'>Top-Rated</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to='/movies/upcoming'>Upcoming</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to='/movies/discover'>Discover</NavLink>
        </li>
        
        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav> */}

      <div className="nav d-flex gap-1 justify-content-between">
        <div className="title p-2">
          <h4>Mouvour</h4>
        </div>
        <div className="items d-flex align-items-center justify-content-end p-1 gap-1">
          <li><NavLink style={({ isActive }) => ({ backgroundColor: isActive ? 'black' : '#fff', color: isActive ? 'whitesmoke' : 'black' })} className='nav-item text-decoration-none p-1 rounded-1  fs-7 active' to='/'>Home</NavLink></li>
          <li><NavLink style={({ isActive }) => ({ backgroundColor: isActive ? 'black' : '#fff', color: isActive ? 'whitesmoke' : 'black' })} className='nav-item text-decoration-none p-1 rounded-1 fs-7' to='/movies/toprated'>Top-Rated</NavLink></li>
          <li><NavLink style={({ isActive }) => ({ backgroundColor: isActive ? 'black' : '#fff', color: isActive ? 'whitesmoke' : 'black' })} className='nav-item text-decoration-none p-1 rounded-1 fs-7' to='/movies/upcoming'>Upcoming</NavLink></li>
          <li><NavLink style={({ isActive }) => ({ backgroundColor: isActive ? 'black' : '#fff', color: isActive ? 'whitesmoke' : 'black' })} className='nav-item text-decoration-none p-1 rounded-1 fs-7' to='/movies/discover'>Discover</NavLink></li>
        </div>
      </div>


    </>
  )
}

export default Navbar