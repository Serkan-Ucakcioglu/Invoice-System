import React from "react";
import { useSelector } from "react-redux";
import { selectedProductList } from "../../invoiceSlice";
import ProductList from "./ProductList";

function Product() {
  const productList = useSelector(selectedProductList);

  return (
    <>
      {" "}
      {productList?.map((input) => {
        return <ProductList key={input?.id} id={input?.id} />;
      })}
    </>
  );
}

export default Product;
