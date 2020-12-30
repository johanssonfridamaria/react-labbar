import React from 'react'
import ProductName from './ProductName'
import ProductEdit from './ProductEdit'

const Product = ({ product }) => {
  return (
    <div className="product">
      <button>Done</button>
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
