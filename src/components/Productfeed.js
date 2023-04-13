import React from 'react'

export const Productfeed = ({products}) => {
  // console.log({products})
  return (
    <div>
      <h1>Products here ...</h1>
      {products.map(product => (
        <p>{ product.title}</p>
      )) }
    </div>
  )
}
