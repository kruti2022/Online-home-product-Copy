import React from 'react'
import {useNavigate} from 'react-router-dom';

const VendorNavbar = () => {
    const navigate = useNavigate();
    function Logout(){
        localStorage.clear()
        navigate(`/`)
      }
  return (
    <>
    <nav class="navbar navbar-light bg-light justify-content-between">
  <a class="navbar-brand">HOME PRODUCT</a>
  <form class="form-inline">
    
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={Logout} >Logout</button>
  </form>
</nav>
        {/* <nav className="navbar navbar-expand-lg custom_nav-container ">
        <a className="navbar-brand" href="index.html">
          <span>
            HOME PRODUCT
          </span>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className=""> </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="d-flex mx-auto flex-column flex-lg-row align-items-center">
            <ul className="navbar-nav  ">
              <li key="uniqueId20" className="nav-item active">
                <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
              </li>
              <li key="uniqueId21" className="nav-item">
                <a className="nav-link" href="about.html"> About</a>
              </li>
              <li key="uniqueId22" className="nav-item">
                <a className="nav-link" href="furniture.html">Furnitures</a>
              </li>
              <li key="uniqueId23" className="nav-item">
                <a className="nav-link" href="blog.html">Blog</a>
              </li>
              <li key="uniqueId24" className="nav-item">
                <a className="nav-link" href="contact.html">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="quote_btn-container">
            <a >
              <span>
                Login
              </span>
              <i className="fa fa-user" aria-hidden="true"></i>
            </a>
            <a onClick={Logout} >
              <span className="logout">
                Logout
              </span>
              <i className="fa fa-sign-out" aria-hidden="true"></i>

            </a>
            
            <button type='button' className="btn btn-primary btn-lg" onClick={Logout} to = "/homepage">Logout</button>
            <form className="form-inline">
              <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                <i className="fa fa-search" aria-hidden="true"></i>
              </button>
            </form>
          </div>
        </div>
      </nav> */}
    </>
  )
}

export default VendorNavbar