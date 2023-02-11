import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
//have to add infinite scroll
const SharedHomePage = () => {
  return (
    <>
        <Navbar/>
        <Outlet/>
    </>
  )
}

export default SharedHomePage
