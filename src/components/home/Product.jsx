import React from "react";
import { productList } from "../../data";
import Heading from "../common/Heading";
import ProductCard from "./cards/ProductCard";

const Product = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
      <div className="m-5" id="Products">
        <Heading Heading={"OUR  PRODUCTS"} />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {productList.map((item) => (
          <ProductCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Product;
