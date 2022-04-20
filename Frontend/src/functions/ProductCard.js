import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard=({ product })=>{
    return(
       
    <section className="furniture_section layout_padding">
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="box">
            <div className="img-box">
            <img src={'http://localhost:3009/' + product.product_photo} />
            </div>
            <div className="detail-box">
              <h5>
              {product.product_name}
              </h5>
              <div className="price_box">
                <h6 className="price_heading">
                  <span>Rs.</span> {product.product_price}
                </h6>
                <Link to={`${product.product_id}`}>
                  View Product
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    )
}

export default ProductCard;