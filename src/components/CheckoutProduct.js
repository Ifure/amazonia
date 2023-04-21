import { StarIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import React from 'react'

const CheckoutProduct = ({ id, category, title, image, price, hasPrime, description, rating}) => {
    console.log({price})
  return (
    <div className='grid grid-cols-5'>
        <Image src={image} alt='' width={200} height={200} />
        <div className='col-span-3 mx-5'>
            <p>{title}</p>
            <div className='flex'>
                {Array(rating)
                .fill
                .map((_, i) => (
                    <StarIcon key={i} className='h-5 text-yellow-500'/>

                ))}
            </div>

            <p className='text-xs line-clamp-3 my-2'>{description}</p>
            <p className=''>{price}</p>

            {hasPrime && (
                <div className='flex items-center space-x-2'>
                    <img
                loading='lazy'
                className='w-12'
                src=' https://www.papareact.com/fdw'
                alt=''
                />
                <p className='text-xs  text-gray-500'> Free Next Day Delivery</p>
                </div>
            )}


        </div>
    </div>
  )
}

export default CheckoutProduct