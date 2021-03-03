import React from 'react'
import {NavLink} from 'react-router-dom'


export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <div class="container-fluid">
        <img src="https://img.icons8.com/color/48/000000/batman.png"/>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                {/* <a class="nav-link active text-white" aria-current="page" href="#!">Home</a> */}
                <NavLink to="/">Home</NavLink>
              </li>
              <li class="nav-item">
                {/* <a class="nav-link active text-white" aria-current="page" href="#!">Favorite</a> */}
                <NavLink to="/favorite">Favorite</NavLink>
              </li>
            </ul>
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-success text-white" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
  )
}