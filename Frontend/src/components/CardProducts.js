import React from 'react'
import { useNavigate } from 'react-router-dom'

const CardProducts = ({product_id,product_name,product_price,product_photo}) => {
   const nevigate= useNavigate()
    return (
        <>
        <div className="col-lg-4 col-md-6 col-12  mb-3 products-p">
            <div className="card p-2">
                {/* <img src="assets/images/b1.jpg" alt="tree" className="img-fluid p-img" /> */}
                 <img src={'http://localhost:3009/' + product_photo} className="img-fluid p-img"/> 
                <div className="overlay">
                    <div className="price">
                        <p>{product_name} </p>
                        <p>{product_price}.00</p>
                    </div>
                    <div className="text-center">
                        {/* <button className="btn btn-info ml-1 mr-1">Add To Cart</button> */}
                        <button className="btn btn-info ml-1 mr-1" onClick={()=>nevigate(`/details/${product_id}`)}>View Details</button>
                    </div>

                </div>
            </div>
        </div>
            
        </>
    )
}

export default CardProducts
