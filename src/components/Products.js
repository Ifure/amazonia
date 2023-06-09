import React from "react";
import { useState } from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import { useDispatch } from "react-redux";
import { addToBasket } from "../sllices/basketSlice";

const Products = ({ id, description, category, title, image, price }) => {
  const MIN_RATING = 1;
  const MAX_RATING = 5;
  const  dispatch  = useDispatch()

  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING //to generate random number
  );

  const [hasPrime] = useState(Math.random() < 0.5); //randomize boolean value

  const addItemToBasket = () => {
    const product = {
      id,
      description,
      category,
      title,
      image,
      price,
      hasPrime,
      rating
    };

  dispatch(addToBasket(product))
  };
  return (
    <div className="relative m-5 bg-white flex flex-col p-10 z-30">
      <p className="absolute top-2 right-2 text-xs italic  text-gray-400">
        {category}
      </p>
      <Image
        src={image}
        height={200}
        width={200}
        // className="object-contain "
        alt=""
      />
      <h4 className="my-3">{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon key={i} className="h-5  text-yellow-500" />
          ))}
      </div>
      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <div className="mb-5">
        <p> ${price}</p>
      </div>
      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <img src="https://links.papareact.com/fdw" className="w-12 " alt="" />
          <p className="text-xs text-gray-500">FREE next-day delivery </p>
        </div>
      )}
     <div>

     <button onClick={addItemToBasket} className=" button">
        Add to Basket
      </button>
      <button className=" button">
        Remove from basket
      </button>
     </div>
    </div>
  );
};

export default Products;
