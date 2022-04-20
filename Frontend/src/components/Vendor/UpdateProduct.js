import React, { useState, useEffect } from 'react'
//import { Link } from 'react-router-dom'
import {  useParams } from "react-router-dom";
import axios from 'axios';
import VendorNavbar from './VendorNavbar'

const UpdateProduct = () => {
    //const navigate = useNavigate();
    const { id } = useParams()
    
    //alert(id)
    const [product, setProduct] = useState([])
    const [product_id,setProductId]=useState(id)
    const [product_name, setProductName] = useState("");
    //const [product_category, setProductCategory] = useState("");
    const [product_description, setProductDescription] = useState("");
    const [product_price, setProductPrice] = useState(0);
    const [product_discount, setProductDiscount] = useState(0);
    //const [product_photo, setProductPhoto] = useState("");
    
    useEffect(async() => {
      const loadProduct = async () => {
          const result = await axios.get(`http://localhost:3015/viewproduct/${id}`);
          console.log(result.data)
          
          setProduct(result.data.products[0]) //main part
          //setProduct(result)
          setProductName(result.data.product_name)
          //setProductCategory(result.data.product_category)
          setProductDescription(result.data.product_description)
          setProductPrice(result.data.product_price)
          setProductDiscount(result.data.product_discount)
          //setProductPhoto(result.data.product_photo)
          setProductId(product_id)
          
          //setProduct(result.data)
          
      
      }
      loadProduct()
  }, [])
        // product_name: "",
        // product_category: "",
        // product_description: "",
        // product_price: "",
        // product_discount: ""
        // //product_photo: ""
    

    //const { product_name, product_description, product_price, product_discount } = product
  
    //const onInputChange = e =>{
    //setProduct({ ...product, [e.target.product_name]: e.target.value })
  //}
  
  async function onSubmit(product_id)  {
    //alert(product_id)
      console.log("enter",product_id)
     await axios.put(`http://localhost:3015/updateProduct/${product_id}`,
     {
       product_id:product_id,
       product_name:product_name,
       //product_category:product_category,
       product_description:product_description,
       product_price:product_price,
       product_discount:product_discount,
       //product_photo:product_photo

     })
     .then(() => {
       alert("Successfully Inserted")
   }).catch(error => console.log("error===>",error))

    // .then(res =>{
    //   res.data()
    // })
     //navigate("/viewproduct")
    //alert(id)
}
 
    return (
      <>
      <VendorNavbar/>
        <div className="main-panel">
        
                            <div className="content-wrapper">
                            
                                <form className="mx-1 mx-md-4" >



                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                        <div className="form-outline flex-fill mb-0">
                                            <label className="form-label" htmlFor="inputproductname" >Product Name</label>
                                            <input type="text" id="inputproductname" className="form-control" placeholder="Product Name"
                                              defaultValue={product.product_name}  
                                              onChange={(e) => setProductName(e.target.value)} required />

                                        </div>
                                    </div>
                                    {/* <div className="d-flex flex-row align-items-center mb-4">
                                        <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                        <div className="form-outline flex-fill mb-0">
                                            <label className="form-label" htmlFor="inputRole">Select Product Category:</label>
                                            <br />
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" 
                                                  defaultValue={product_category}  onChange={(e) => setProductCategory(e.target.value)} />
                                                <label className="form-check-label" htmlFor="inlineRadio1">Office</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" 
                                                  defaultValue={product_category}  onChange={(e) => setProductCategory(e.target.value)} />
                                                <label className="form-check-label" htmlFor="inlineRadio2">Living Room</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" 
                                                  defaultValue={product_category}  onChange={(e) => setProductCategory(e.target.value)} />
                                                <label className="form-check-label" htmlFor="inlineRadio3">Dining</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" 
                                                  defaultValue={product_category}  onChange={(e) => setProductCategory(e.target.value)} />
                                                <label className="form-check-label" htmlFor="inlineRadio4">Bedroom</label>
                                            </div>
                                        </div>
                                    </div>  */}

                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                        <div className="form-outline flex-fill mb-0">
                                            <label className="form-label" htmlFor="productdescription">Product Description</label>
                                            <textarea type="text" id="productdescription" rows={3} className="form-control" placeholder="Product Description"
                                              defaultValue={product.product_description}  
                                              onChange={(e) => setProductDescription(e.target.value)} required />

                                        </div>
                                    </div>

                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                        <div className="form-outline flex-fill mb-0">
                                            <label className="form-label" htmlFor="productprice" >Product Price</label>
                                            <input type="number" id="productprice" className="form-control" placeholder="Product Price"
                                              defaultValue={product.product_price}  
                                              onChange={(e) => setProductPrice(Number(e.target.value))} required />

                                        </div>
                                    </div>

                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                        <div className="form-outline flex-fill mb-0">
                                            <label className="form-label" htmlFor="productdiscount" >Product Discount</label>
                                            <input type="number" id="productdiscount" className="form-control" placeholder="Product Discount"
                                              defaultValue={product.product_discount} 
                                              onChange={(e) => setProductDiscount(Number(e.target.value))} required />

                                        </div>
                                    </div>

                                    {/* <div className="d-flex flex-row align-items-center mb-4">
                                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                        <div className="form-outline flex-fill mb-0">
                                            <label className="form-label" htmlFor="productimage" >Product Image</label>
                                            <input type="file" id="product image" className="form-control" placeholder="Product Image"
                                              defaultValue={product_photo}  onChange={(e) => setProductDiscount((e.target.value))} required />

                                        </div>
                                    </div> */}

                                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                        <button type='button' className="btn btn-primary btn-lg" 
                                        onClick={() => onSubmit(product_id)} >Update Product</button>

                                    </div>

                                </form>
                            </div>
                            <footer className="footer">
                                <div className="d-sm-flex justify-content-center justify-content-sm-between">
                                    <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">Copyright © <a href="https://www.bootstrapdash.com/" target="_blank">bootstrapdash.com </a>2021</span>
                                    <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Only the best <a href="https://www.bootstrapdash.com/" target="_blank"> Bootstrap dashboard  </a> templates</span>
                                </div>
                            </footer>

                        </div>
      </>
  )
}
export default UpdateProduct
// import React, { useState, useEffect } from 'react'
// //import { Link } from 'react-router-dom'
// import {  useParams } from "react-router-dom";
// import axios from 'axios';

// function UpdateProduct() {
//     //const navigate = useNavigate();
//     const { id } = useParams()
//     //alert(id)
//     const [data, setData] = useState([])
//     const [product_name, setProductName] = useState("");
//         //product_category: "",
//         //product_description: "",
//         //product_price: "",
//         //product_discount: ""
//         //product_photo: ""
    

//     //const { product_name } = product
//     useEffect(async() => {
       
//           let result = await axios.get(`http://localhost:3015/viewproduct/${id}`);
//           console.log(result)
//           //result = await result.json()
//           //setProduct(result.data)
//           setData(result)
//           setProductName(data.product_name)
//   }, [])
  
//   //   const onInputChange = e =>{
//   //   setProduct({ ...product, [e.target.product_name]: e.target.value })
//   // }
  
//   function onSubmit  (id){
//     // e.preventDefault();
//     // await axios.put(`http://localhost:3015/updateProduct/${id}`,product)
//     // navigate.push("/viewproduct")
//     alert(id)
// }
 
//     return (
//     <>
//             <div className="container">
//       <div className="w-75 mx-auto shadow p-5">
//         <h2 className="text-center mb-4">Edit Product</h2>
//         <form onSubmit={e => onSubmit(id)}>
//           <div className="form-group">
//             <input
//               type="text"
//               className="form-control form-control-lg"
//               placeholder="product name"
//               name="product name"
//               //value={product_name}
//               defaultValue={data.product_name}
//               onChange={(e) => { setProductName(e.target.value) }}
//             />
//           </div>
          
          
//           <button className="btn btn-warning btn-block">Update Product</button>
//         </form>
//       </div>
//     </div>
//     </>
//   )
// }
// export default UpdateProduct



