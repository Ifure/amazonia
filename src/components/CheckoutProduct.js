import Image from 'next/image'
import React from 'react'

const CheckoutProduct = ({ id, category, title, image, price, hasPrime, description, rating}) => {
    console.log({price})
  return (
    <div className='grid grid-cols-5'>
        <Image src={image} alt='' width={200} height={200} />
    </div>
  )
}

export default CheckoutProduct