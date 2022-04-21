import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios';
import CardProducts from './CardProducts'
import { useNavigate } from 'react-router-dom'

const ViewProduct = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate()
  const token = window.localStorage.getItem('token')

  if (!localStorage.getItem('token')) {
    useEffect(() => {
      window.alert("You're not logged in!, Login first")
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
<<<<<<< HEAD
    useEffect(() => {
      axios.get("http://localhost:3009/viewProduct", {
        headers: {
          'token': `${token}`
        }
      }
      ).then((response) => {
        setProducts(response.data);
      })
    }, [])
    console.log(token);
  }
  console.log(products)
=======
   useEffect(()=>{
     axios.get("http://localhost:3009/viewProduct").then((response) => {
       setProducts(response.data);
     })
   }, [])
  }
console.log(products)
>>>>>>> 35635fe00eb529b481392dd10a4e964444f30249


  const sortData = async (sort) => {
    const res = await axios.get(`http://localhost:3009/sort/${sort}`)
    setProducts(res.data)
  }
  const sortHandle = (e) => {
    const sort = e.target.value
<<<<<<< HEAD
    if (sort === 'all') {
        axios.get("http://localhost:3009/viewProduct").then((response) => {
          setProducts(response.data);
        })
    }
    else {
      sortData(sort)
    }
=======
      sortData(sort)
>>>>>>> 35635fe00eb529b481392dd10a4e964444f30249
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
<<<<<<< HEAD
                <option value="all">ALL</option>
=======
>>>>>>> 35635fe00eb529b481392dd10a4e964444f30249
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

<<<<<<< HEAD
export default ViewProduct
=======
export default ViewProduct



>>>>>>> 35635fe00eb529b481392dd10a4e964444f30249
