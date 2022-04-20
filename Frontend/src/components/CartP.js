import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext'
const CartP = ({ product_name,product_id,product_price,product_photo,qty}) => {
    const {cart,setCart}= useContext(DataContext)
    const deleteProduct=(product_id)=>{
        const exist=cart.find((x)=>x.product_id===product_id)
        if(exist)
        {
           setCart(
               cart.filter((x)=>x.product_id !==product_id)
           )
            // console.log(`pre ${id}`)
        }
        
    }
    return (
        <>
         <div className="col-lg-4 col-md-6 col-12  mb-3">
                        <div className="card">
                        <img src={'http://localhost:3009/' + product_photo} className="img-fluid cart-img" />
                            <div className="p-3">
                                <div className="cartbox">
                                    <div>
                                        <p>{product_name}</p>
                                        <p>({product_price}.00) * ({qty})</p>
                                       
                                             
                                    </div>
                                    <div>
                                        <br />
                                        <p> {product_price*qty}.00</p>
                                    </div>

                                </div>
                                <div className="text-right">
                                <button className="btn btn-info" onClick={()=>deleteProduct(product_id)}>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
            
        </>
    )
}

export default CartP
