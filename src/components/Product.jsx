import React from "react";
import ProductCart from "./ProductCart";

const Product = ({ product }) => {
  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10">
          {product &&
            product.map((product) => {
              return <ProductCart key={product.id} product={product} />;
            })}
        </div>
      </div>
    </>
  );
};

export default Product;
