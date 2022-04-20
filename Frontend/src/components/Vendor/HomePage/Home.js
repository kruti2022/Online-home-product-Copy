import React from 'react'
import "./style.css";
import { Link } from 'react-router-dom'
import VendorNavbar from '../VendorNavbar'

export default function Home() {
  return (
    <>
    <VendorNavbar/>
    <div>
      <div className="container-scroller">
   
    <div className="container-fluid page-body-wrapper">
     
      <nav className="sidebar sidebar-offcanvas" tabIndex="-1"  id="sidebar">
        <ul className="nav">
          {/* <li className="nav-item">
            <a className="nav-link" href="index.html">
              <i className="mdi mdi-home menu-icon"></i>
              <span className="menu-title">Dashboard</span>
            </a>
          </li> */}
          
          <li  key="uniqueId1"className="nav-item">
            <Link className="nav-link"  to="/addproduct">
              <i className="mdi mdi-view-headline menu-icon"></i>
              <span className="menu-title">AddProduct</span>
              </Link>
          </li>
          

          <li key="uniqueId02" className="nav-item">
          <Link className="nav-link"  to="/viewproduct">
              <i className="mdi mdi-grid-large menu-icon"></i>
              <span className="menu-title">ViewProduct</span>
              </Link>
          </li>
          
          
          
        </ul>
      </nav>

      <div className="main-panel">
        <div className="content-wrapper">
          
          <div className="row">
            <div className="col-md-12 grid-margin">
              <div className="d-flex justify-content-between flex-wrap">
                <div className="d-flex align-items-end flex-wrap">
                  <div className="me-md-3 me-xl-5">
                    <h2>Welcome to Vendor Page</h2>
                    <p className="mb-md-0">Your analytics dashboard template.</p>
                  </div>
                  
                </div>
               
              </div>
            </div>
          </div>
        
          
    
        </div>
        <footer className="footer">
        <div className="d-sm-flex justify-content-center justify-content-sm-between">
          <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">Copyright © <a href="https://www.bootstrapdash.com/" target="_blank">bootstrapdash.com </a>2021</span>
          <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Only the best <a href="https://www.bootstrapdash.com/" target="_blank"> Bootstrap dashboard  </a> templates</span>
        </div>
        </footer>
      
      </div>
     
    </div>
   
  </div>
 
  <script src="vendors/base/vendor.bundle.base.js"></script>
 
  <script src="vendors/chart.js/Chart.min.js"></script>
  <script src="vendors/datatables.net/jquery.dataTables.js"></script>
  <script src="vendors/datatables.net-bs4/dataTables.bootstrap4.js"></script>
  
  <script src="js/off-canvas.js"></script>
  <script src="js/hoverable-collapse.js"></script>
  <script src="js/template.js"></script>
  
  <script src="js/dashboard.js"></script>
  <script src="js/data-table.js"></script>
  <script src="js/jquery.dataTables.js"></script>
  <script src="js/dataTables.bootstrap4.js"></script>
  <script src="js/jquery.cookie.js" type="text/javascript"></script>
    </div>
    </>
  )
}
