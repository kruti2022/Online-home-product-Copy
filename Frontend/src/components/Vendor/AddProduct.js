import React, { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import VendorNavbar from "./VendorNavbar";

export default function AddProduct() {
  const navigate = useNavigate();
  const [product_name, setProductName] = useState("");
  const [product_description, setProductDescription] = useState("");
  const [product_price, setProductPrice] = useState("");
  const [product_discount, setProductDiscount] = useState("");
  const [product_photo, setProductPhoto] = useState("");
  const [product_category, setProductCategory] = useState("");

  const addproduct = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("product_name", product_name);
    formData.append("product_description", product_description);
    formData.append("product_price", product_price);
    formData.append("product_discount", product_discount);
    formData.append("product_photo", product_photo);
    formData.append("product_category", product_category);

    await Axios.post("http://localhost:3009/addProduct", formData)
      .then(() => {
        navigate("/vendorviewproduct");
      })
      .catch((error) => window.alert("Please Enter Valid Data"));
  };

  return (
    <>
      <VendorNavbar />
      <div>
        <div className="container-scroller">
          <div className="container-fluid page-body-wrapper">
            <nav
              className="sidebar sidebar-offcanvas"
              tabIndex="-1"
              id="sidebar"
            >
              <ul className="nav">
                {/* <li className="nav-item">
            <a className="nav-link" href="index.html">
              <i className="mdi mdi-home menu-icon"></i>
              <span className="menu-title">Dashboard</span>
            </a>
          </li> */}

                <li key="uniqueId3" className="nav-item">
                  <Link className="nav-link" to="/addproduct">
                    <i className="mdi mdi-view-headline menu-icon"></i>
                    <span className="menu-title">AddProduct</span>
                  </Link>
                </li>

                <li key="uniqueId4" className="nav-item">
                  <Link className="nav-link" to="/vendorviewproduct">
                    <i className="mdi mdi-grid-large menu-icon"></i>
                    <span className="menu-title">ViewProduct</span>
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="main-panel">
              <div className="content-wrapper">
                <form className="mx-1 mx-md-4">
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <label className="form-label" htmlFor="inputproductname">
                        Product Name
                      </label>
                      <input
                        type="text"
                        id="inputproductname"
                        className="form-control"
                        placeholder="Product Name"
                        onChange={(e) => {
                          setProductName(e.target.value);
                        }}
                        required
                      />
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <label className="form-label" htmlFor="inputRole">
                        Select Product Category:
                      </label>
                      <br />
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio1"
                          value="office"
                          onChange={(e) => {
                            setProductCategory(e.target.value);
                          }}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="inlineRadio1"
                        >
                          Office
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio2"
                          value="Living Room"
                          onChange={(e) => {
                            setProductCategory(e.target.value);
                          }}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="inlineRadio2"
                        >
                          Living Room
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio3"
                          value="Dining"
                          onChange={(e) => {
                            setProductCategory(e.target.value);
                          }}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="inlineRadio3"
                        >
                          Dining
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio4"
                          value="Bedroom"
                          onChange={(e) => {
                            setProductCategory(e.target.value);
                          }}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="inlineRadio4"
                        >
                          Bedroom
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <label
                        className="form-label"
                        htmlFor="productdescription"
                      >
                        Product Description
                      </label>
                      <textarea
                        type="text"
                        id="productdescription"
                        rows={3}
                        className="form-control"
                        placeholder="Product Description"
                        onChange={(e) => {
                          setProductDescription(e.target.value);
                        }}
                        required
                      />
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <label className="form-label" htmlFor="productprice">
                        Product Price
                      </label>
                      <input
                        type="text"
                        id="productprice"
                        className="form-control"
                        placeholder="Product Price"
                        onChange={(e) => {
                          setProductPrice(e.target.value);
                        }}
                        required
                      />
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <label className="form-label" htmlFor="productdiscount">
                        Product Discount
                      </label>
                      <input
                        type="text"
                        id="productdiscount"
                        className="form-control"
                        placeholder="Product Discount"
                        onChange={(e) => {
                          setProductDiscount(e.target.value);
                        }}
                        required
                      />
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <label className="form-label" htmlFor="productimage">
                        Product Image
                      </label>
                      <input
                        type="file"
                        id="product image"
                        className="form-control"
                        placeholder="Product Image"
                        onChange={(e) => {
                          setProductPhoto(e.target.files[0]);
                        }}
                        required
                      />
                    </div>
                  </div>

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button
                      type="button"
                      className="btn btn-primary btn-lg"
                      onClick={addproduct}
                    >
                      Add Product
                    </button>
                  </div>
                </form>
              </div>
              <footer className="footer">
                <div className="d-sm-flex justify-content-center justify-content-sm-between">
                  <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">
                    Copyright ©{" "}
                    <a href="https://www.bootstrapdash.com/" target="_blank">
                      bootstrapdash.com{" "}
                    </a>
                    2021
                  </span>
                  <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">
                    Only the best{" "}
                    <a href="https://www.bootstrapdash.com/" target="_blank">
                      {" "}
                      Bootstrap dashboard{" "}
                    </a>{" "}
                    templates
                  </span>
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
  );
}
