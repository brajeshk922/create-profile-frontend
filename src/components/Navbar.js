import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { UserContext } from '../App';

const Navbar = () => {
  const { state, dispatch } = useContext(UserContext);
  const RenderMenu = () => {
    console.log(state);
    if (state) {
      return (
        <>
          <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="about">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="contact">Contact</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="logout">Log Out</NavLink>
          </li>
        </>
      )
    } else {
      return (
        <>
          <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="about">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="contact">Contact</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="login">Login</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="signup">Sign up</NavLink>
          </li>
        </>
      )
    }
  }
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <RenderMenu />
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
