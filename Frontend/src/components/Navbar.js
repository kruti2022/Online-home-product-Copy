import React, { useContext } from 'react'

import { Link } from 'react-router-dom'
import { DataContext } from '../context/DataContext'

const Navbar = () => {
  const {cart}=useContext(DataContext)
  // console.log(cart)
  
    return (

            <header className="header_section long_section2 px-0">
          <nav className="navbar navbar-expand-lg custom_nav-container ">
            {/* <a className="navbar-brand" href="index.html">
            <span>
              Edgecut
            </span>
          </a> */}
            <Link className="navbar-brand" type="text" to="/homepage">
              <span>
                Home Product
              </span>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className=""> </span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <div className="d-flex mx-auto flex-column flex-lg-row align-items-center">
                <ul className="navbar-nav  ">
                  <li className="nav-item">
                    {/* <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a> */}
                    <Link className="nav-link" type="text" to="/homepage"> Home </Link>
                  </li>
                  <li className="nav-item">
                    {/* <a className="nav-link" href="About.js"> About</a> */}
                    <Link className="nav-link" type="text" to="/about">About</Link>
                  </li>
                  <li className="nav-item">
                    {/* <a className="nav-link" href="ViewProduct.js">Furnitures</a> */}
                    <Link className="nav-link" type="text" to="/viewproduct">Furnitures</Link>
                  </li>
                </ul>
              </div>
              <div className="quote_btn-container">
                {/* <a href="">
                <span>
                  Login
                </span>
                <i className="fa fa-user" aria-hidden="true"></i>
              </a> */}
              <ul className="navbar-nav  ">
              <li className="nav-item">
                <Link className="fa fa-user" type="text" aria-hidden="true" to="/">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="cart-box cart" to="/cart"> 
                 Cart  
                  <span>{cart.length}</span>
                </Link> 
              </li>
              <li className="nav-item">
                <Link type="text" aria-hidden="true" to="/order">My Orders</Link>
              </li>
              </ul>
                {/* <form className="form-inline">
                  <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </button>
                </form> */}
              </div>
            </div>
          </nav>
        </header>

    )
}

export default Navbar
