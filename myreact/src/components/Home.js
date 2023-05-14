import React from 'react'
import { Link, Outlet } from "react-router-dom"
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/logo.jpg'
import background from '../images/back.jpg'

export default function Home() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-light" >
  <div class="container-fluid">
    <img src={logo} width={30} height={30}></img>
    <h3>XenStack</h3>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/login">Login</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/products">Products</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Register">Register</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/ContactUs">Contact Us</Link>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>

        <Outlet/>
    </div>
  )
}
