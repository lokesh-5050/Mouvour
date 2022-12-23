import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <>
        <h4>Something went Wrong.</h4>
        <Link to='/'>Go Back To Site</Link>
    </>
  )
}

export default ErrorPage