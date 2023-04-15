import { StarIcon } from '@heroicons/react/solid'
import React, { useState } from 'react'
import Image from 'next/image'

export const Product = ({id, description, category, title, image}) => {
  const[rating] = useState(1)
  return (
    <div>
      <p>{category}</p>
      <Image  src={image} height={200} width={200} classname="object-contain"/>
      <h4>{title}</h4>

      <div>
        {Array(rating)
        .fill()
        .map((_, i) => (
          <StarIcon key={i} className='h-5' />
          ))}
      </div>
    </div>
  )
}
