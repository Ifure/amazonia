import { StarIcon } from '@heroicons/react/solid'
import React, { useState } from 'react'

export const product = ({id, description, category, title, image}) => {
  const[rating] = useState(1)
  return (
    <div>
      <p>{category}</p>
      <Image  src={image} height={200} width={200} classname="object-contain"/>
      <h4>{title}</h4>

      <div>
        {Array(rating)
        .fill()
        .map((_, 1) => (
          <StarIcon />
        ))}
      </div>
    </div>
  )
}
