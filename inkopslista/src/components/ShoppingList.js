import React from 'react'
import Product from './Product/Product'

const ShoppingList = ({products}) => {
  return (
    <div className="list">
      <h2>Att köpa:</h2>
      {
        products.map(product => <Product product={product} key={product.id} /> )
      }
    </div>
  )
}

export default ShoppingList
