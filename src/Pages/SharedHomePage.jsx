import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
const SharedHomePage = () => {
  return (
    <>
        <Navbar/>
        <Outlet/>
    </>
  )
}

export default SharedHomePage