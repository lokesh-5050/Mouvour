import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Navbar/Navbar.css'
const Navbar = () => {

  return (
    <>


      <div className="nav d-flex gap-1 justify-content-between">
        <div className="title p-2">
          <h4>Mouvour</h4>
        </div>
        <div className="items d-flex align-items-center justify-content-end p-1 gap-1">
          <div className="box">
            <li><NavLink style={({ isActive }) => ({ backgroundColor: isActive ? 'black' : '#fff', color: isActive ? 'whitesmoke' : 'black' })} className='nav-item text-decoration-none p-1 rounded-1  fs-6 active' to='/'>Home</NavLink></li>
            <div className="sub_menu position-absolute p-1  ">
            <h6 className='mt-2 rounded-1 '>Moviasses</h6>
            <h6 className=' rounded-1'>Movies</h6>
            </div>
          </div>
          <div className="box">
            <li><NavLink style={({ isActive }) => ({ backgroundColor: isActive ? 'black' : '#fff', color: isActive ? 'whitesmoke' : 'black' })} className='nav-item text-decoration-none p-1 rounded-1 fs-6' to='/tv-shows'>Tv</NavLink></li>
            <div className="sub_menu position-absolute ">hey</div>
          </div>
          <div className="box">
            <li><NavLink style={({ isActive }) => ({ backgroundColor: isActive ? 'black' : '#fff', color: isActive ? 'whitesmoke' : 'black' })} className='nav-item text-decoration-none p-1 rounded-1 fs-6' to='/movies/toprated' >Top-Rated</NavLink></li>
            <div className="sub_menu position-absolute ">
            <ul><NavLink style={{color:'#000'}} className=' text-decoration-none rounded-1 fs-6' to='/movies/toprated' >Top-Rated</NavLink></ul>
            <ul><NavLink style={{color:'#000'}} className=' text-decoration-none rounded-1 fs-6' to='/movies/toprated' >Top-Rated</NavLink></ul>

            </div>
          </div>
          <div className="box">
            <li><NavLink style={({ isActive }) => ({ backgroundColor: isActive ? 'black' : '#fff', color: isActive ? 'whitesmoke' : 'black' })} className='nav-item text-decoration-none p-1 rounded-1 fs-6' to='/movies/upcoming'>Upcoming</NavLink></li>
            <div className="sub_menu position-absolute ">hey</div>
          </div>
          <div className="box">
            <li><NavLink style={({ isActive }) => ({ backgroundColor: isActive ? 'black' : '#fff', color: isActive ? 'whitesmoke' : 'black' })} className='nav-item text-decoration-none p-1 rounded-1 fs-6' to='/movies/discover'>Discover</NavLink></li>
            <div className="sub_menu position-absolute ">hey</div>
          </div>




        </div>
      </div>


    </>
  )
}

export default Navbar