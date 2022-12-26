import React from "react";
import ProductList from "./ProductList";

function Product({ id }) {
  return (
    <>
      <ProductList id={id} />
    </>
  );
}

export default Product;
