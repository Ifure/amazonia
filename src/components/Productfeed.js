import React from "react";
// import Product  from "./Product";
import Products from "./Products";

export const Productfeed = ({ products }) => {
  // console.log({products})
  return (
    <>
      <h1>Products here ...</h1>
      <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 m d:-mt-52 mx-auto">
        {products
        .slice(0, 4)
        .map(({ title, id, description, category, image, price }) => (
          <Products
            key={id}
            id={id}
            title={title}
            description={description}
            image={image}
            category={category}
            price={price}
          />
        ))}
        <img src="https://links.papareact.com/dyz" alt="" className="md:col-span-full" />
        <div className="md:col-span-2">
        {products
        .slice(4, 5)
        .map(({ title, id, description, category, image, price }) => (
          <Products
            key={id}
            id={id}
            title={title}
            description={description}
            image={image}
            category={category}
            price={price}
          />
        ))}
        </div>
        {products
        .slice(5, products.length)
        .map(({ title, id, description, category, image, price }) => (
          <Products
            key={id}
            id={id}
            title={title}
            description={description}
            image={image}
            category={category}
            price={price}
          />
        ))}
      </div>
    </>
  );
};
