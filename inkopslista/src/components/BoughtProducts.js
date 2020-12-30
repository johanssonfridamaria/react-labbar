import React from 'react'
import Product from './Product/Product'

const BoughtProducts = ({products}) => {
  return (
    <div className="list">
      <h2>I varukorgen</h2>
      {
        products.map(product => <Product product={product} key={product.id} /> )
      }
    </div>
  )
}

export default BoughtProducts
