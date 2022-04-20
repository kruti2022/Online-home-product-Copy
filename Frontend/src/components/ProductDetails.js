import React, { useContext, useEffect, useState, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { DataContext } from '../context/DataContext'

const ProductDetails = () => {
    const { product_id } = useParams()
    const nevigate = useNavigate()

    const { cart, setCart } = useContext(DataContext)
    const [detdata, setDetdata] = useState([])
    const [pdetails, setPdetails] = useState("1")


    const onSub = (e) => {
        e.preventDefault()
        // console.log(pdetails)
        const data = {
            product_id: detdata[0].product_id,
            product_name: detdata[0].product_name,
            product_price: detdata[0].product_price,
            product_description: detdata[0].product_description,
            product_photo: detdata[0].product_photo,
            qty: pdetails
        }


        localStorage.setItem("productId", detdata[0].product_id);
        localStorage.setItem("product", detdata[0].product_name);
        localStorage.setItem("qty", pdetails);
        // console.log(data)

        // setCart([...cart,data])
        const exist = cart.find((x) => x.product_id === data.product_id)
        if (exist) {
            setCart(
                cart.map((x) => x.product_id === data.product_id ? data : x)
            )
        }
        else {
            setCart([...cart, data])
        }
    }

    if (!localStorage.getItem('token')) {
        window.alert("You're not logged in!, Login first")
        useEffect(() => {
            navigate('/')
        }, [])
    }
    else {

        const getData = async () => {
            // API Call 
            const response = await fetch(`http://localhost:3009/viewProduct/${product_id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "x-access-token": localStorage.getItem("token")
                }
            });
            const json = await response.json()
            setDetdata(json)
        }
        useEffect(() => {
            getData()
        }, [])

    }

    if (!detdata.length) {
        return <h1>Loading..</h1>
    }
    /* const getData = async () => {

        const res = await axios.post(`http://localhost:3009/viewProduct/${product_id}`)
        
    } */




    return (
        <>
            <div className="details">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-12 mx-auto mb-3">
                            <img src={'http://localhost:3009/' + detdata[0].product_photo} alt="" className="img-fluid p-im" />
                        </div>
                        <div className="col-md-6 col-12 mx-auto mb-3 d-flex  flex-column mt-5">
                            <h2>{detdata[0].product_name}</h2>
                            <h4>Price : <strong>{detdata[0].product_price}.00</strong> </h4>
                            <p>Description : {detdata[0].product_description}</p>
                            <form onSubmit={onSub}>
                                <input type="hidden" value={detdata[0].product_id} />
                                <div class="form-group w-50">
                                    <label for="sel1">Choose Qty:</label>
                                    <select class="form-control" id="" onChange={(e) => setPdetails(e.target.value)} required>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                </div>
                                <div className="text-left">
                                    <button type="submit" className="btn btn-info" to='/viewproduct'>Add To Cart</button>
                                </div>
                                {/* <input type="submit" className="btn btn-info" value="Add To Cart" /> */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ProductDetails
