import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios';
import CardProducts from './CardProducts'
import { useNavigate } from 'react-router-dom'

const ViewProduct = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate()

  if (!localStorage.getItem('token')) {
    window.alert("You're not logged in!, Login first")
    useEffect(() => {
      navigate('/')
    }, [])
  }

  /* useEffect(() => {
    async function getProductsData() {
      const { data } = await axios.get('http://localhost:3009/viewProduct')
      setProducts(data.products)
  }
 
  console.log("products:", products)
  }, []) */ 


  else {

    const getProductsData = async () => {
      // API Call 
      const response = await fetch(`http://localhost:3009/viewProduct`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          "x-access-token": localStorage.getItem("token")
        }
      });
      const json = await response.json()
      console.log(json)
      setProducts(json) 
  
    useEffect(() => {
      getProductsData()
    }, [])
     }
  }



  const sortData = async (sort) => {
    const res = await axios.get(`http://localhost:3009/sort/${sort}`)
    setProducts(res.data)
  }
  const sortHandle = (e) => {
    const sort = e.target.value
    if (sort === 'all') {
      getProductsData()
    }
    else {
      sortData(sort)
    }

  }

  return (
    <>
      <div className="products">
        <div className="container">
          <h2 className="text-center font-weight-bold mb-5">Furniture</h2>
          <div className="inp ">
            <p></p>
            <div className="form-group">

              <select className="form-control" id="" onChange={sortHandle} >
                {/* <option value="" selected disabled hidden>Choose By Price</option> */}
                <option value="all">All</option>
                <option value="1000">less then 1000</option>
                <option value="1000_5000">1000-5000</option>
                <option value="5000">5000</option>

              </select>
            </div>
          </div>
          <div className="row">
            {
              products.map((val, ind) => {
                return (
                  <>
                    <CardProducts
                      key={ind}
                      product_id={val.product_id}
                      product_name={val.product_name}
                      product_price={val.product_price}
                      product_photo={val.product_photo}
                    />
                  </>
                )
              })
            }



          </div>
        </div>
      </div>


    </>

  )


}

export default ViewProduct
