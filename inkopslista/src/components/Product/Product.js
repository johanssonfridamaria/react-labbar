import React from 'react'
import ProductName from './ProductName'
import ProductEdit from './ProductEdit'

const Product = ({ product }) => {
  return (
    <div className="product">
      <button><i class="fas fa-check"></i></button>
      <ProductName product={product} />
      <ProductEdit product={product} />
      <div>
        <button>edit</button>
        <button>delete</button>
      </div>
    </div>
  )
}

export default Product
