import React from 'react'
import { NavLink } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <>
      <div style={{ height: '100vh', textAlign: "center" }}>
        <h2>We are sorry , Page Not Found !</h2>
        <NavLink to="/">Back to home</NavLink>
      </div>
    </>
  )
}

export default ErrorPage