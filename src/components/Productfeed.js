import React from 'react'
import { Product } from './Product'

export const Productfeed = ({products}) => {
  // console.log({products})
  return (
    <div>
      <h1>Products here ...</h1>
      {products.map(({title, id,  description, category, image}) => (
        <Product
        key={id}
        id={id}
        tiitle={title}
        description={description}
        image={image}
        category={category}
        />
      )) }
    </div>
  )
}
