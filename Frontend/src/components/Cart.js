import React, { useContext, useRef } from 'react'
import CartP from './CartP'
import { DataContext } from '../context/DataContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Cart = () => {
    const nevigate = useNavigate()
    const { cart } = useContext(DataContext)
    console.log(cart)
    return (
        <>
            <div className="cart">
                {
                    !cart.length ? (
                        <>
                            <div className="container">
                                <h2>There is No Items In the Cart</h2>
                                <button className="btn btn-info" onClick={() => nevigate('/viewproduct')}>Continue Shopping</button>
                            </div>

                        </>
                    ) : (
                        <>
                            <div className="container">
                                <h2>Your Cart Items</h2>
                                <br />
                                <div className="row">
                                    {
                                        cart.map((val, ind) => {
                                            return (
                                                <>
                                                    <CartP

                                                        key={ind}
                                                        product_id={val.product_id}
                                                        product_name={val.product_name}
                                                        product_price={val.product_price}
                                                        product_photo={val.product_photo}
                                                        qty={val.qty}
                                                    />

                                                </>
                                            )
                                        })
                                    }



                                </div>
                                <div className="row m-5">
                                    <div className="col-12">
                                        <div className="text-right">
                                            <button className="btn btn-info" onClick={() => nevigate('/payment')}>Check Out</button>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </>
                    )
                }


            </div>

        </>
    )
}

export default Cart
