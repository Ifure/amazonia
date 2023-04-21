import Image from 'next/image'
import Header from '../components/Header'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectItems } from '../sllices/basketSlice'
import CheckoutProduct from '../components/CheckoutProduct'

const Checkout = () => {
	const items  = useSelector(selectItems)
  return (
    <div>
        <Header/>
        <main className='lg:flex max-w-screen-2xl mx-auto'>
            <div className='flex-grow m-5 shadow-sm'>
                <Image
                src='https://links.papareact.com/ikj'
                width={1020}
                height={250}
								alt=''
                />
                <div  className='flex flex-col p-5   space-y-10 bg-white '>
									<h1 className='text-3xl   border-b  pb-4'>
										{items.lenght === 0 ? 'Your Basket Is Empty' : "Shopping basket"}
									</h1>

									{items.map((item, i) => (
										<CheckoutProduct 
										key={i}
										id={item.id}
										product={item.product}
										price={item.price}
										title={item.title}
										rating={item.rating}
										description={item.description}
										hasPrime={item.hasPrime}
										image={item.image}
										/>
									))}
								</div>
            </div>
        </main>
    </div>
  )
}

export default Checkout;