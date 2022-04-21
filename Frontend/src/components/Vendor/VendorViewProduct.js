import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
//import updateProduct from "./UpdateProduct"
import VendorNavbar from "./VendorNavbar";

const VendorViewProduct = () => {
  const [products, setProducts] = useState([]);
  const timeout = useRef(null);
  const navigate = useNavigate();
  const token = window.localStorage.getItem('token')

  /* const checkAuth=()=>{
        axios.get("http://localhost:3009/isAuth",{
            headers:{
             "x-access-token":localStorage.getItem("token")
            }
        }).then((response)=>{
         if(!response.data.login)
         {
            nevigate("/");
         }
        })
     
     }

    useEffect(() => {
        timeout.current=setTimeout(checkAuth,200)
        //console.log("test")
        getProductsData()
    }, [])
 */
  if (!localStorage.getItem("token")) {
    useEffect(() => {
      window.alert("You're not logged in!, Login first");
      navigate("/");
    }, []);
  } else {
    useEffect(() => {
      axios.get("http://localhost:3009/vendorViewProduct"),
        {
          headers: {
            token: `${token}`,
          },
        }.then((response) => {
          setProducts(response.data.reverse());
        });
    }, []);
  }

  console.log(products);

  async function deleteOperation(id) {
    //alert(id)
    let result = await fetch("http://localhost:3009/deleteProduct/" + id, {
      method: "DELETE",
    });
    getProductsData();
    result = await result.json();
    console.log(result);
  }
  return (
    <>
      <div>
        <div className="container-scroller">
          <VendorNavbar />
          <div className="container-fluid page-body-wrapper">
            <nav
              className="sidebar sidebar-offcanvas"
              tabIndex="-1"
              id="sidebar"
            >
              <ul className="nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/addproduct">
                    <i className="mdi mdi-view-headline menu-icon"></i>
                    <span className="menu-title">AddProduct</span>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/vendorviewproduct">
                    <i className="mdi mdi-grid-large menu-icon"></i>
                    <span className="menu-title">ViewProduct</span>
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>product_id</th>
                    <th>Product_Name</th>
                    <th>product_description</th>
                    <th>product_price</th>
                    <th>product_discount</th>
                    <th>product_photo</th>
                    <th>product_action</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr>
                      <td>{product.product_id}</td>
                      <td>{product.product_name}</td>
                      <td>{product.product_description}</td>
                      <td>{product.product_price}</td>
                      <td>{product.product_discount}</td>
                      <td>
                        <img
                          src={"http://localhost:3009/" + product.product_photo}
                        />
                      </td>
                      <td>
                        <button
                          className="delete"
                          onClick={() => deleteOperation(product.product_id)}
                        >
                          <span className="linkname">Delete</span>
                        </button>
                        &nbsp;
                        <button className="update">
                          <Link to={`/updateproduct/${product.product_id}`}>
                            <span className="linkname">Update</span>
                          </Link>
                        </button>
                      </td>
                      {/* <button className='update'><Link  to={`/updateproduct/${product.product_id}`}><span className="linkname">Update</span></Link></button></td> */}
                    </tr>
                  ))}
                </tbody>
              </table>
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
  );
};

export default VendorViewProduct;
