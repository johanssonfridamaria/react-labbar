import React from 'react'
import ProductName from './ProductName'
import ProductEdit from './ProductEdit'

const Product = ({ product }) => {
  return (
    <div className="product">
      <div className="product-name">
        <button className="btn-product"><i class="fas fa-check"></i></button>
        <ProductName product={product} />
        {/* <ProductEdit product={product} /> */}
      </div>
      <div>
        <button className="btn-product btn-edit"><i class="fas fa-pen"></i></button>
        <button className="btn-product btn-delete"><i class="fas fa-minus"></i></button>
      </div>
    </div>
  )
}

export default Product
