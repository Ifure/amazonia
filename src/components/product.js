import { StarIcon } from '@heroicons/react/solid'
import React, { useState } from 'react'
import Image from 'next/image'

export const Product = ({id, description, category, title, image}) => {
  const MIN_RATING = 1
  const MAX_RATING = 5
  const[rating] = useState(
    Math.floor(Math.random() * (MAX_RATING  - MIN_RATING + 1) )+ MIN_RATING  //to generate random number
  )

  return (
    <div>
      <p>{category}</p>
      <Image  src={image} height={700} width={200} className="object-contain"   alt=''/>
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
