import React from "react";
import { Link } from "react-router-dom";
import { TbCurrencyTaka } from "react-icons/tb";

const ProductCart = ({ product }) => {
  return (
    <>
      <figure>
        <div className="aspect-w-4 aspect-h-5">
          <img src={product.imageUrl[0]} alt="" className="object-cover" />
        </div>
        <div className="px-3">
          <span className="font-semibold uppercase text-gray-300 text-sm">
            {product.category}
          </span>
          <h3 className="font-bold text-xl py-1 capitalize">{product.title}</h3>
          <div className="flex">
            <p className="flex items-center text-sm font-bold text-gray-500">
              <TbCurrencyTaka className="text-lg" />
              {product.price}.00
            </p>
            <span className="font-bold text-lg text-gray-400 ml-1"> -</span>
            <p className="flex items-center text-sm font-bold text-gray-500 line-through">
              <TbCurrencyTaka className="text-lg" />
              {Number(product.price) + 100}.00
            </p>
          </div>
          <Link to={`/shop/details/${product.id}`}>
            <button className="bg-gray-950 px-4 py-1 text-white text-sm font-semibold my-3 capitalize">
              veiw details
            </button>
          </Link>
        </div>
      </figure>
    </>
  );
};

export default ProductCart;
