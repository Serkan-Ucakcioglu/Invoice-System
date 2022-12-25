import React from "react";
import { useSelector } from "react-redux";
import { selectedProductList } from "../../invoiceSlice";
import ProductList from "./ProductList";

function Product({ id }) {
  const productList = useSelector(selectedProductList);
  return (
    <>
      <ProductList id={id} />
    </>
  );
}

export default Product;
