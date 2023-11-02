import React from "react";
import './Navbar.css'
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
    const state = useSelector((state)=> state.handleCart)
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light py-3 shadow-sm fixed-top navigation ">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" to="/">
            <p className="Brand">Habesha mart</p>
          </NavLink>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-7" aria-controls="navbarSupportedContent-7" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span></button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent-7">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link navlinks" aria-current="page" to="/">
                  Home
                  <span class="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link navlinks" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link navlinks" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link navlinks" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="buttons">
                <NavLink to="/login" className="btn btn-outline-dark">
                   <i className="fa fa-sign-in me-1"></i> Login</NavLink>
                <NavLink to="/register" className="btn btn-outline-dark ms-2">
                   <i className="fa fa-user-plus me-1"></i> Register</NavLink>
                <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                   <i className="fa fa-shopping-cart me-1"></i> Cart ({state.length})</NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
